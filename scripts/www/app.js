// app.js 最终版：保留旧词库+自动加载banks文件夹TXT+语音秒响+无导入删除按钮
(function(){
    // ---------- DOM 元素 ----------
    const bankSelect = document.getElementById('bankSelect');
    const questionText = document.getElementById('questionText');
    const submitBtn = document.getElementById('submitBtn');
    const nextBtn = document.getElementById('nextBtn');
    const speakBtn = document.getElementById('speakBtn');
    const hintBtn = document.getElementById('hintBtn');
    const feedbackMsg = document.getElementById('feedbackMsg');
    const scoreCountSpan = document.getElementById('scoreCount');
    const totalCountSpan = document.getElementById('totalCount');
    const wrongBookBtn = document.getElementById('wrongBookBtn');
    const exportWrongBtn = document.getElementById('exportWrongBtn');
    const wrongModal = document.getElementById('wrongModal');
    const closeModalBtn = document.getElementById('closeModalBtn');
    const wrongListContainer = document.getElementById('wrongListContainer');
    const clearWrongBtn = document.getElementById('clearWrongBtn');
    const practiceWrongBtn = document.getElementById('practiceWrongBtn');
    const currentWrongBankNameSpan = document.getElementById('currentWrongBankName');
    const dailyGoalInput = document.getElementById('dailyGoalInput');
    const setGoalBtn = document.getElementById('setGoalBtn');
    const todayDoneSpan = document.getElementById('todayDone');
    const dailyGoalDisplaySpan = document.getElementById('dailyGoalDisplay');
    const resetDailyBtn = document.getElementById('resetDailyBtn');
    const currentAnswerDisplay = document.getElementById('currentAnswerDisplay');
    const selectionPanel = document.getElementById('selectionPanel');
    const backspaceBtn = document.getElementById('backspaceBtn');
    const clearAllBtn = document.getElementById('clearAllBtn');
    const modeBtns = document.querySelectorAll('.mode-btn');

    // ---------- 全局语音锁（防延迟卡顿） ----------
    let isSpeaking = false;

    // ---------- 数据 ----------
    let currentBankWords = [];
    let currentBankName = "默认词库";
    let currentMode = "en2zh";
    let currentQuestionItem = null;
    let currentCorrectAnswer = "";
    let currentAnswerChars = [];
    let sessionScore = 0, sessionTotal = 0;
    let bankMap = new Map();
    let currentWrongList = [];
    let dailyGoal = 10, todayCompleted = 0, todayDateStr = new Date().toDateString();
    let wordStats = {};
    let wordWeights = {};

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

    // ========== 语音核心：优先本地秒响，不依赖MP3 ==========
    function speakOnline(word) {
        const ttsUrl = `https://translate.google.com/translate_tts?ie=UTF-8&tl=en-US&q=${encodeURIComponent(word)}`;
        const audio = new Audio(ttsUrl);
        audio.crossOrigin = 'anonymous';
        audio.oncanplaythrough = () => {
            audio.play().catch(()=>{});
            setTimeout(() => { isSpeaking = false; }, 300);
        };
        audio.onerror = () => { isSpeaking = false; };
        audio.load();
    }

    function speakWord(word) {
        if(!word || isSpeaking) return;
        isSpeaking = true;
        if ('speechSynthesis' in window) {
            const utter = new SpeechSynthesisUtterance(word);
            utter.lang = "en-US";
            utter.rate = 0.9;
            utter.volume = 1;
            utter.onend = () => { isSpeaking = false; };
            utter.onerror = () => { speakOnline(word); };
            window.speechSynthesis.cancel();
            window.speechSynthesis.speak(utter);
            return;
        }
        speakOnline(word);
    }

    // ========== 自动加载banks文件夹内置TXT词库（追加不覆盖旧数据） ==========
    async function loadInnerBanksFromFolder() {
        try {
            const banksPath = './banks/';
            const response = await fetch(banksPath);
            const text = await response.text();
            const parser = new DOMParser();
            const doc = parser.parseFromString(text, 'text/html');
            const links = doc.querySelectorAll('a');
            const txtFiles = Array.from(links)
                .map(a => a.href)
                .filter(href => href.endsWith('.txt') && !href.includes('?'));

            for (const fileUrl of txtFiles) {
                try {
                    const res = await fetch(fileUrl);
                    const txt = await res.text();
                    const lines = txt.split(/\n/).map(line => line.trim()).filter(line => line);
                    const words = [];
                    for (const line of lines) {
                        const parts = line.split('=').map(p => p.trim());
                        if (parts.length >= 2 && parts[0] && parts[1]) {
                            words.push({ en: parts[0], zh: parts[1] });
                        }
                    }
                    if (words.length > 0) {
                        const fileName = fileUrl.split('/').pop().replace('.txt', '');
                        const bankName = `📁 ${fileName}`;
                        bankMap.set(bankName, words);
                    }
                } catch (e) {
                    console.warn('加载banks文件失败', fileUrl, e);
                }
            }
            saveAllBanks();
            refreshBankSelect();
        } catch (e) {
            console.log('APP环境或无banks文件夹', e);
        }
    }

    function prewarmSpeech() {
        if ('speechSynthesis' in window) {
            const dummy = new SpeechSynthesisUtterance("");
            dummy.volume = 0;
            window.speechSynthesis.speak(dummy);
        }
    }

    // ----- 词库持久化（旧数据完整保留） -----
    function saveAllBanks() {
        const banksObj = {};
        for (let [name, words] of bankMap.entries()) {
            banksObj[name] = words;
        }
        localStorage.setItem('all_banks', JSON.stringify(banksObj));
    }

    function loadAllBanks() {
        const stored = localStorage.getItem('all_banks');
        if (stored) {
            const banksObj = JSON.parse(stored);
            for (let name in banksObj) {
                bankMap.set(name, banksObj[name]);
            }
        }
        if (!bankMap.has(DEFAULT_BANK.name)) {
            bankMap.set(DEFAULT_BANK.name, DEFAULT_BANK.words);
            saveAllBanks();
        }
        loadInnerBanksFromFolder();
    }

    // ----- 权重/错题/每日计划 全部保留原版逻辑 -----
    function saveWordWeights() { localStorage.setItem(`weights_${currentBankName}`, JSON.stringify(wordWeights)); }
    function loadWordWeights() {
        const stored = localStorage.getItem(`weights_${currentBankName}`);
        wordWeights = stored ? JSON.parse(stored) : {};
    }
    function saveWordStats() { localStorage.setItem(`wordStats_${currentBankName}`, JSON.stringify(wordStats)); }
    function loadWordStats() {
        const stored = localStorage.getItem(`wordStats_${currentBankName}`);
        wordStats = stored ? JSON.parse(stored) : {};
    }

    function updateWordCorrectCount(wordEn, isCorrect) {
        const key = `${currentBankName}|${wordEn}`;
        if (!wordStats[key]) wordStats[key] = { correctCount: 0, totalCount: 0 };
        wordStats[key].totalCount++;
        if (isCorrect) {
            wordStats[key].correctCount++;
            if (wordStats[key].correctCount >= APP_CONFIG.masteredCorrectCount) {
                wordWeights[key] = 0;
                saveWordWeights();
            }
        }
        saveWordStats();
    }

    function updateWordWeight(wordEn, isCorrect) {
        const key = `${currentBankName}|${wordEn}`;
        let current = wordWeights[key] !== undefined ? wordWeights[key] : 10;
        const mastered = (wordStats[key] && wordStats[key].correctCount >= APP_CONFIG.masteredCorrectCount);
        if (mastered) {
            wordWeights[key] = 0;
            saveWordWeights();
            return;
        }
        current = isCorrect ? Math.max(0, current - 3) : Math.min(50, current + 5);
        wordWeights[key] = current;
        saveWordWeights();
    }

    function pickQuestionByWeight() {
        if (!currentBankWords.length) return null;
        let availableWords = currentBankWords.filter(word => {
            const key = `${currentBankName}|${word.en}`;
            const weight = wordWeights[key] !== undefined ? wordWeights[key] : 10;
            return weight > 0;
        });
        if (availableWords.length === 0) {
            feedbackMsg.innerText = "🎉 恭喜！您已掌握所有单词！";
            return currentBankWords[0];
        }
        let total = 0, list = [];
        for (let word of availableWords) {
            const w = wordWeights[`${currentBankName}|${word.en}`] || 10;
            total += w;
            list.push({word, weight: w});
        }
        let rand = Math.random() * total;
        let acc = 0;
        for (let item of list) {
            acc += item.weight;
            if (rand <= acc) return item.word;
        }
        return availableWords[0];
    }

    function saveWrongListToLocal() { localStorage.setItem(`wrong_bank_${currentBankName}`, JSON.stringify(currentWrongList)); }
    function loadWrongListFromLocal() {
        const stored = localStorage.getItem(`wrong_bank_${currentBankName}`);
        currentWrongList = stored ? JSON.parse(stored) : [];
    }
    function addToWrongList(wordObj, userAnswer) {
        const exists = currentWrongList.some(item => item.en === wordObj.en);
        if (!exists) {
            currentWrongList.push({
                en: wordObj.en,
                zh: wordObj.zh,
                wrongAnswer: userAnswer,
                modeWhenWrong: currentMode,
                timestamp: Date.now()
            });
            saveWrongListToLocal();
        }
    }

    function loadDailyPlan() {
        const stored = localStorage.getItem('dailyPlan');
        if (stored) {
            const data = JSON.parse(stored);
            if (data.date === todayDateStr) { dailyGoal = data.goal; todayCompleted = data.completed; }
            else { todayCompleted = 0; dailyGoal = parseInt(dailyGoalInput.value) || 10; }
        } else { todayCompleted = 0; dailyGoal = 10; }
        dailyGoalInput.value = dailyGoal;
        updateDailyUI();
    }
    function saveDailyPlan() { localStorage.setItem('dailyPlan', JSON.stringify({ date: todayDateStr, goal: dailyGoal, completed: todayCompleted })); }
    function updateDailyUI() {
        todayDoneSpan.innerText = todayCompleted;
        dailyGoalDisplaySpan.innerText = dailyGoal;
        if (todayCompleted >= dailyGoal) feedbackMsg.innerHTML = "🎉 恭喜完成今日目标！";
    }
    function addDailyProgress() { todayCompleted++; saveDailyPlan(); updateDailyUI(); }

    function generateSelectionButtons(correctAnswerStr, mode) {
        const isChinese = (mode === 'en2zh');
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
        selectionPanel.innerHTML = '';
        candidateChars.forEach(ch => {
            const btn = document.createElement('button');
            btn.textContent = ch;
            btn.className = 'choice-btn';
            btn.addEventListener('click', () => {
                playBeep('click');
                currentAnswerChars.push(ch);
                currentAnswerDisplay.textContent = currentAnswerChars.join('');
            });
            selectionPanel.appendChild(btn);
        });
    }
    function clearAnswerBuilder() { currentAnswerChars = []; currentAnswerDisplay.textContent = ''; }
    function backspaceChar() { currentAnswerChars.pop(); currentAnswerDisplay.textContent = currentAnswerChars.join(''); }

    function pickRandomQuestion() {
        if (!currentBankWords.length) { questionText.innerText = "等待加载词库"; return false; }
        const selected = pickQuestionByWeight();
        if (!selected) return false;
        currentQuestionItem = selected;
        currentCorrectAnswer = currentMode === "en2zh" ? selected.zh : selected.en;
        questionText.innerText = currentMode === "en2zh" ? selected.en : selected.zh;
        clearAnswerBuilder();
        generateSelectionButtons(currentCorrectAnswer, currentMode);
        return true;
    }

    function checkAnswer() {
        const userAnswer = currentAnswerChars.join('').trim().toLowerCase();
        if (!userAnswer) { feedbackMsg.innerText = "请点选答案"; playBeep('wrong'); return; }
        let normalizedCorrect = currentCorrectAnswer.toLowerCase();
        let isCorrect = currentMode === "en2zh" 
            ? (userAnswer === normalizedCorrect)
            : (userAnswer.replace(/[^a-z]/g, '') === normalizedCorrect.replace(/[^a-z]/g, ''));

        if (isCorrect) {
            sessionScore++;
            feedbackMsg.innerHTML = "✅ 正确！ +1分";
            playBeep('correct');
            updateWordWeight(currentQuestionItem.en, true);
            updateWordCorrectCount(currentQuestionItem.en, true);
            addDailyProgress();
            sessionTotal++;
            updateScoreUI();
            saveStats();
            nextQuestion(true);
        } else {
            feedbackMsg.innerHTML = `❌ 错误！ 正确答案: ${currentCorrectAnswer}`;
            playBeep('wrong');
            updateWordWeight(currentQuestionItem.en, false);
            updateWordCorrectCount(currentQuestionItem.en, false);
            addToWrongList(currentQuestionItem, userAnswer);
        }
    }

    function nextQuestion(isAuto = false) {
        if (!isAuto) playBeep('click');
        pickRandomQuestion();
        feedbackMsg.innerHTML = "";
    }

    function updateScoreUI() { scoreCountSpan.innerText = sessionScore; totalCountSpan.innerText = sessionTotal; }
    function saveStats() { localStorage.setItem(`stats_${currentBankName}`, JSON.stringify({ score: sessionScore, total: sessionTotal })); }
    function loadStats() {
        const saved = localStorage.getItem(`stats_${currentBankName}`);
        if (saved) { const data = JSON.parse(saved); sessionScore = data.score || 0; sessionTotal = data.total || 0; }
        else { sessionScore = 0; sessionTotal = 0; }
        updateScoreUI();
    }

    function switchBank(bankName) {
        if (bankMap.has(bankName)) {
            currentBankName = bankName;
            currentBankWords = bankMap.get(bankName);
            loadWordWeights();
            loadWordStats();
            currentBankWords.forEach(word => {
                const key = `${currentBankName}|${word.en}`;
                if (wordWeights[key] === undefined) {
                    const mastered = (wordStats[key] && wordStats[key].correctCount >= APP_CONFIG.masteredCorrectCount);
                    wordWeights[key] = mastered ? 0 : 10;
                }
            });
            saveWordWeights();
            loadStats();
            loadWrongListFromLocal();
            pickRandomQuestion();
            refreshBankSelect();
            localStorage.setItem('last_bank_name', bankName);
        }
    }
    function refreshBankSelect() {
        bankSelect.innerHTML = '';
        Array.from(bankMap.keys()).forEach(name => {
            const opt = document.createElement('option');
            opt.value = name;
            opt.textContent = name;
            if (name === currentBankName) opt.selected = true;
            bankSelect.appendChild(opt);
        });
        if (bankMap.size === 0) loadLastOrDefaultBank();
    }
    function loadLastOrDefaultBank() {
        const lastBank = localStorage.getItem('last_bank_name');
        if (lastBank && bankMap.has(lastBank)) {
            switchBank(lastBank);
        } else {
            switchBank(DEFAULT_BANK.name);
        }
    }

    // 以下UI逻辑全部保留
    function renderWrongList() {
        if (!currentWrongList.length) { wrongListContainer.innerHTML = '<p class="empty-tip">暂无错题</p>'; return; }
        wrongListContainer.innerHTML = currentWrongList.map((item, idx) => `
            <div class="wrong-item" data-idx="${idx}">
                <div><strong>${item.en}</strong> → ${item.zh}</div>
            </div>
        `).join('');
    }
    function openWrongModal() { currentWrongBankNameSpan.innerText = currentBankName; renderWrongList(); wrongModal.style.display = 'flex'; }
    function exportWrongTxt() {
        if (!currentWrongList.length) { alert("无错题"); return; }
        let content = `# 错题本 - ${currentBankName}\n`;
        currentWrongList.forEach(w => { content += `${w.en}=${w.zh}\n`; });
        const blob = new Blob([content], {type:"text/plain"});
        const a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download = `wrong_${currentBankName}.txt`;
        a.click();
    }
    function clearWrong() { if (confirm("清空所有错题？")) { currentWrongList = []; saveWrongListToLocal(); renderWrongList(); } }
    function practiceWrong() {
        if (!currentWrongList.length) { alert("没有错题"); return; }
        const tempBank = currentWrongList.map(w => ({ en: w.en, zh: w.zh }));
        const tempName = `📛 错题复习-${currentBankName}`;
        bankMap.set(tempName, tempBank);
        saveAllBanks();
        switchBank(tempName);
        wrongModal.style.display = 'none';
    }

    function setDailyGoal() { let g = parseInt(dailyGoalInput.value); if (isNaN(g) || g<1) g=1; dailyGoal = g; saveDailyPlan(); updateDailyUI(); playBeep('click'); }
    function resetDaily() { todayCompleted = 0; saveDailyPlan(); updateDailyUI(); feedbackMsg.innerHTML = "今日进度已重置"; }

    function setMode(mode) {
        currentMode = mode;
        modeBtns.forEach(btn => btn.classList.toggle('active', btn.dataset.mode === mode));
        pickRandomQuestion();
        clearAnswerBuilder();
        feedbackMsg.innerHTML = "";
    }

    function bindEvents() {
        submitBtn.addEventListener('click', checkAnswer);
        nextBtn.addEventListener('click', () => nextQuestion(false));
        speakBtn.addEventListener('click', () => { if (currentQuestionItem) speakWord(currentQuestionItem.en); });
        hintBtn.addEventListener('click', () => feedbackMsg.innerHTML = `💡 提示: ${currentCorrectAnswer}`);
        backspaceBtn.addEventListener('click', backspaceChar);
        clearAllBtn.addEventListener('click', clearAnswerBuilder);
        bankSelect.addEventListener('change', (e) => switchBank(e.target.value));
        wrongBookBtn.addEventListener('click', openWrongModal);
        exportWrongBtn.addEventListener('click', exportWrongTxt);
        closeModalBtn.addEventListener('click', () => wrongModal.style.display = 'none');
        clearWrongBtn.addEventListener('click', clearWrong);
        practiceWrongBtn.addEventListener('click', practiceWrong);
        window.addEventListener('click', (e) => { if (e.target === wrongModal) wrongModal.style.display = 'none'; });
        modeBtns.forEach(btn => {
            if (btn.dataset.mode) btn.addEventListener('click', () => setMode(btn.dataset.mode));
        });
        setGoalBtn.addEventListener('click', setDailyGoal);
        resetDailyBtn.addEventListener('click', resetDaily);
    }

    function init() {
        loadAllBanks();
        bindEvents();
        loadDailyPlan();
        loadLastOrDefaultBank();
        setMode('en2zh');
        prewarmSpeech();
        document.body.addEventListener('click', () => { if (audioCtx.state === 'suspended') audioCtx.resume(); }, { once: true });
    }
    init();

    window.getCurrentBankWords = () => currentBankWords;
})();