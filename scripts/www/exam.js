// exam.js - 独立考试模块（完成所有题目后判分）
const Exam = (function() {
    let currentBankWords = [];
    let examQuestions = [];
    let currentIndex = 0;
    let score = 0;
    let targetCount = (APP_CONFIG && APP_CONFIG.examTargetQuestions) ? APP_CONFIG.examTargetQuestions : 10;
    let currentAnswerChars = [];
    let currentCorrectAnswer = "";
    let currentQuestionItem = null;
    
    // DOM 元素
    const examModal = document.getElementById('examModal');
    const closeExamBtn = document.getElementById('closeExamBtn');
    const examQuestionText = document.getElementById('examQuestionText');
    const examCurrentAnswer = document.getElementById('examCurrentAnswer');
    const examSelectionPanel = document.getElementById('examSelectionPanel');
    const examBackspaceBtn = document.getElementById('examBackspaceBtn');
    const examClearBtn = document.getElementById('examClearBtn');
    const examProgress = document.getElementById('examProgress');
    const examFeedback = document.getElementById('examFeedback');
    const examSubmitBtn = document.getElementById('examSubmitBtn');
    
    // 音效
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    function playBeep(type = 'click') {
        try {
            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();
            osc.connect(gain);
            gain.connect(audioCtx.destination);
            osc.type = 'sine';
            let freq = 800, dur = 0.1;
            if (type === 'correct') { freq = 1200; dur = 0.15; }
            else if (type === 'wrong') { freq = 400; dur = 0.2; }
            osc.frequency.value = freq;
            gain.gain.value = 0.2;
            osc.start();
            gain.gain.exponentialRampToValueAtTime(0.00001, audioCtx.currentTime + dur);
            osc.stop(audioCtx.currentTime + dur);
        } catch(e) {}
    }
    
    // 生成点选面板
    function generateSelectionButtons(correctAnswerStr) {
        const isChinese = /[\u4e00-\u9fa5]/.test(correctAnswerStr);
        let requiredChars = [];
        if (isChinese) {
            requiredChars = [...new Set(correctAnswerStr.split(''))];
        } else {
            requiredChars = [...new Set(correctAnswerStr.toLowerCase().replace(/[^a-z]/g, '').split(''))];
        }
        let candidateChars = [...requiredChars];
        const neededCount = 10;
        const extraNeeded = neededCount - candidateChars.length;
        if (extraNeeded > 0) {
            const commonHan = "的一是不了人我在有他这中大来上国个到说们为子和你地出也时年得就那要下以";
            const alphabet = 'abcdefghijklmnopqrstuvwxyz';
            const pool = isChinese ? commonHan.split('') : alphabet.split('');
            while (candidateChars.length < neededCount && pool.length > 0) {
                const randChar = pool[Math.floor(Math.random() * pool.length)];
                if (!candidateChars.includes(randChar)) {
                    candidateChars.push(randChar);
                }
            }
        }
        candidateChars = candidateChars.sort(() => 0.5 - Math.random());
        examSelectionPanel.innerHTML = '';
        candidateChars.forEach(ch => {
            const btn = document.createElement('button');
            btn.textContent = ch;
            btn.className = 'choice-btn';
            btn.addEventListener('click', () => {
                playBeep('click');
                currentAnswerChars.push(ch);
                examCurrentAnswer.textContent = currentAnswerChars.join('');
            });
            examSelectionPanel.appendChild(btn);
        });
    }
    
    function clearAnswerBuilder() {
        currentAnswerChars = [];
        examCurrentAnswer.textContent = '';
    }
    function backspaceChar() {
        currentAnswerChars.pop();
        examCurrentAnswer.textContent = currentAnswerChars.join('');
    }
    
    // 禁用主界面按钮
    function disableMainButtons() {
        const hintBtn = document.getElementById('hintBtn');
        const nextBtn = document.getElementById('nextBtn');
        const submitBtn = document.getElementById('submitBtn');
        if (hintBtn) { hintBtn.disabled = true; hintBtn.style.opacity = '0.5'; }
        if (nextBtn) { nextBtn.disabled = true; nextBtn.style.opacity = '0.5'; }
        if (submitBtn) { submitBtn.disabled = true; submitBtn.style.opacity = '0.5'; }
    }
    function enableMainButtons() {
        const hintBtn = document.getElementById('hintBtn');
        const nextBtn = document.getElementById('nextBtn');
        const submitBtn = document.getElementById('submitBtn');
        if (hintBtn) { hintBtn.disabled = false; hintBtn.style.opacity = '1'; }
        if (nextBtn) { nextBtn.disabled = false; nextBtn.style.opacity = '1'; }
        if (submitBtn) { submitBtn.disabled = false; submitBtn.style.opacity = '1'; }
    }
    
    // 从 localStorage 加载当前词库的单词列表
    function loadCurrentBankWords() {
        const lastBankName = localStorage.getItem('last_bank_name');
        if (!lastBankName) return [];
        const allBanksStr = localStorage.getItem('all_banks');
        if (!allBanksStr) return [];
        try {
            const allBanks = JSON.parse(allBanksStr);
            const words = allBanks[lastBankName];
            return words || [];
        } catch(e) {
            return [];
        }
    }
    
    // 关闭考试
    function closeExam() {
        if (examModal) examModal.style.display = 'none';
        enableMainButtons();
        // 重置考试内部状态
        currentIndex = 0;
        score = 0;
        examQuestions = [];
        clearAnswerBuilder();
        examFeedback.innerHTML = "";
    }
    
    // 结束考试并显示结果
    function finishExam() {
        const percent = (score / targetCount * 100).toFixed(0);
        const passScore = Math.ceil(targetCount * 0.6); // 60% 及格线
        if (score >= passScore) {
            alert(`🎉 考试通过！得分: ${score}/${targetCount} (${percent}%)\n及格线: ${passScore}/${targetCount}`);
        } else {
            alert(`❌ 考试未通过！得分: ${score}/${targetCount} (${percent}%)\n及格线: ${passScore}/${targetCount}，继续加油！`);
        }
        closeExam();
    }
    
    // 加载下一题
    function loadQuestion() {
        if (currentIndex >= examQuestions.length) {
            finishExam();
            return;
        }
        const q = examQuestions[currentIndex];
        currentQuestionItem = q.wordObj;
        const isEn2Zh = Math.random() < 0.5;
        if (isEn2Zh) {
            examQuestionText.innerText = q.wordObj.en;
            currentCorrectAnswer = q.wordObj.zh;
        } else {
            examQuestionText.innerText = q.wordObj.zh;
            currentCorrectAnswer = q.wordObj.en;
        }
        clearAnswerBuilder();
        generateSelectionButtons(currentCorrectAnswer);
        examFeedback.innerHTML = "";
        examProgress.innerText = `进度: ${currentIndex+1} / ${targetCount}`;
        disableMainButtons();
    }
    
    // 提交答案
    function submitAnswer() {
        if (examSubmitBtn.disabled) return;
        examSubmitBtn.disabled = true;
        setTimeout(() => { examSubmitBtn.disabled = false; }, 500);
        
        const userAnswer = currentAnswerChars.join('').trim().toLowerCase();
        if (!userAnswer) {
            examFeedback.innerHTML = "请点选答案";
            playBeep('wrong');
            examSubmitBtn.disabled = false;
            return;
        }
        let normalizedCorrect = currentCorrectAnswer.toLowerCase();
        let isCorrect = false;
        if (/[\u4e00-\u9fa5]/.test(currentCorrectAnswer)) {
            isCorrect = (userAnswer === normalizedCorrect);
        } else {
            const cleanUser = userAnswer.replace(/[^a-z]/g, '');
            const cleanCorrect = normalizedCorrect.replace(/[^a-z]/g, '');
            isCorrect = (cleanUser === cleanCorrect);
        }
        
        if (isCorrect) {
            score++;
            examFeedback.innerHTML = "✅ 正确！";
            playBeep('correct');
        } else {
            examFeedback.innerHTML = `❌ 错误！ 正确答案: ${currentCorrectAnswer}`;
            playBeep('wrong');
        }
        
        // 移动到下一题
        currentIndex++;
        if (currentIndex < examQuestions.length) {
            loadQuestion();
        } else {
            finishExam();
        }
        examSubmitBtn.disabled = false;
    }
    
    // 开始考试
    function start() {
        currentBankWords = loadCurrentBankWords();
        if (!currentBankWords.length) {
            alert("当前词库为空，请先导入单词");
            return;
        }
        // 随机抽取 targetCount 个单词（不重复）
        const shuffled = [...currentBankWords];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        examQuestions = shuffled.slice(0, targetCount).map(wordObj => ({ wordObj }));
        currentIndex = 0;
        score = 0;
        loadQuestion();
        if (examModal) examModal.style.display = 'flex';
        if (audioCtx.state === 'suspended') audioCtx.resume();
    }
    
    function bindEvents() {
        const examBtn = document.getElementById('examBtn');
        if (examBtn) examBtn.addEventListener('click', start);
        if (closeExamBtn) closeExamBtn.addEventListener('click', closeExam);
        if (examBackspaceBtn) examBackspaceBtn.addEventListener('click', backspaceChar);
        if (examClearBtn) examClearBtn.addEventListener('click', clearAnswerBuilder);
        if (examSubmitBtn) examSubmitBtn.addEventListener('click', submitAnswer);
        window.addEventListener('click', (e) => { if (e.target === examModal) closeExam(); });
    }
    
    function init() {
        bindEvents();
        console.log("考试模块已初始化（完整考试模式）");
    }
    
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
    
    return { init, start };
})();