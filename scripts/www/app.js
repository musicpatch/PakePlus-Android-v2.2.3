// app.js - 完整学习模块（词库持久化 + 权重 + 错题本 + 每日计划 + 删除词库）
(function(){
    // ---------- DOM 元素 ----------
    const bankSelect = document.getElementById('bankSelect');
    const importBankBtn = document.getElementById('importBankBtn');
    const deleteBankBtn = document.getElementById('deleteBankBtn');
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
    
    // ----- 词库持久化 -----
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
        } else {
            const existingWords = bankMap.get(DEFAULT_BANK.name);
            if (existingWords.length < 500) {
                bankMap.set(DEFAULT_BANK.name, DEFAULT_BANK.words);
                saveAllBanks();
            }
        }
        
        const oldBuiltinName = '🌟 内置基础词库';
        if (bankMap.has(oldBuiltinName)) {
            const oldWords = bankMap.get(oldBuiltinName);
            if (oldWords.length < 20) {
                bankMap.delete(oldBuiltinName);
                saveAllBanks();
            }
        }
    }
    
    // ----- 删除当前词库（仅限非内置词库）-----
    function deleteCurrentBank() {
        if (!currentBankName) return;
        const builtinNames = [
            "📚 小学必背单词500", "🍎 幼儿初级词库", "📖 湘鲁版小学词库", "🐘 动物词库",
            "🍅 水果蔬菜植物词库", "⏰ 时间词库", "🏠 日常生活词库", "⚖️ 形容词反义词库",
            "🌍 国家国籍词库", "💼 职业词库", "🏃 动词词库", "📍 方位介词词库",
            "🎨 颜色词库", "👨‍👩‍👧 家庭成员词库", "☁️ 天气词库"
        ];
        if (builtinNames.includes(currentBankName)) {
            alert("内置词库不可删除！");
            return;
        }
        if (confirm(`确定要删除词库“${currentBankName}”吗？此操作不可恢复。`)) {
            bankMap.delete(currentBankName);
            saveAllBanks();
            if (currentBankName === bankSelect.value) {
                switchBank(DEFAULT_BANK.name);
            } else {
                refreshBankSelect();
            }
            alert(`词库“${currentBankName}”已删除。`);
        }
    }
    
    // ----- 权重和正确次数持久化 -----
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
        if (isCorrect) {
            current = Math.max(0, current - 3);
        } else {
            current = Math.min(50, current + 5);
        }
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
    
    // ----- 错题本 -----
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
    
    // ----- 每日计划 -----
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
    
    // ----- 点选面板 -----
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
    
    // 发音
    function speakWord(word) {
        const audioPath = `audio/${word}.mp3`;
        const audio = new Audio(audioPath);
        audio.onerror = () => {
            if ('speechSynthesis' in window) {
                const utterance = new SpeechSynthesisUtterance(word);
                utterance.lang = (currentMode === 'zh2en') ? 'en-US' : 'zh-CN';
                window.speechSynthesis.cancel();
                window.speechSynthesis.speak(utterance);
            }
        };
        audio.play().catch(() => {
            if ('speechSynthesis' in window) {
                const utterance = new SpeechSynthesisUtterance(word);
                window.speechSynthesis.speak(utterance);
            }
        });
    }
    
    // 抽取题目
    function pickRandomQuestion() {
        if (!currentBankWords.length) { questionText.innerText = "请导入词库"; return false; }
        const selected = pickQuestionByWeight();
        if (!selected) return false;
        currentQuestionItem = selected;
        if (currentMode === "en2zh") {
            questionText.innerText = selected.en;
            currentCorrectAnswer = selected.zh;
        } else {
            questionText.innerText = selected.zh;
            currentCorrectAnswer = selected.en;
        }
        clearAnswerBuilder();
        generateSelectionButtons(currentCorrectAnswer, currentMode);
        return true;
    }
    
    // 提交答案
    function checkAnswer() {
        const userAnswer = currentAnswerChars.join('').trim().toLowerCase();
        if (!userAnswer) { feedbackMsg.innerText = "请点选答案"; playBeep('wrong'); return; }
        let normalizedCorrect = currentCorrectAnswer.toLowerCase();
        let isCorrect = false;
        if (currentMode === "en2zh") {
            isCorrect = (userAnswer === normalizedCorrect);
        } else {
            const cleanUser = userAnswer.replace(/[^a-z]/g, '');
            const cleanCorrect = normalizedCorrect.replace(/[^a-z]/g, '');
            isCorrect = (cleanUser === cleanCorrect);
        }
        
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
    
    // 词库切换
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
            if (lastBank === '🌟 内置基础词库' && bankMap.get(lastBank).length < 20) {
                switchBank(DEFAULT_BANK.name);
            } else {
                switchBank(lastBank);
            }
        } else {
            switchBank(DEFAULT_BANK.name);
        }
    }
    function importTxtFile(file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const lines = e.target.result.split(/\r?\n/);
            const words = [];
            for (let line of lines) {
                line = line.trim();
                if (!line) continue;
                let [en, zh] = line.includes('=') ? line.split('=') : line.split(/\s+/);
                if (en && zh) words.push({ en: en.trim(), zh: zh.trim() });
            }
            if (!words.length) { alert("格式错误，使用 英文=中文 每行"); return; }
            let bankName = file.name.replace(/\.txt$/i, '');
            if (bankMap.has(bankName)) {
                if (!confirm(`词库“${bankName}”已存在，是否覆盖？`)) return;
            }
            bankMap.set(bankName, words);
            saveAllBanks();
            switchBank(bankName);
            alert(`导入成功: ${bankName} (${words.length}词)`);
        };
        reader.readAsText(file, "UTF-8");
    }
    
    // 错题本UI
    function renderWrongList() {
        if (!currentWrongList.length) { wrongListContainer.innerHTML = '<p class="empty-tip">暂无错题</p>'; return; }
        wrongListContainer.innerHTML = currentWrongList.map((item, idx) => `
            <div class="wrong-item" data-idx="${idx}">
                <div><strong>${item.en}</strong> → ${item.zh}<br><small>你的答案: ${item.wrongAnswer}</small></div>
                <div><button class="edit-wrong" data-idx="${idx}">修改</button><button class="delete-wrong" data-idx="${idx}">删除</button></div>
            </div>
        `).join('');
        document.querySelectorAll('.edit-wrong').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const idx = btn.dataset.idx;
                const item = currentWrongList[idx];
                const newEn = prompt("修改英文:", item.en);
                const newZh = prompt("修改中文:", item.zh);
                if (newEn && newZh) { item.en = newEn.trim(); item.zh = newZh.trim(); saveWrongListToLocal(); renderWrongList(); }
            });
        });
        document.querySelectorAll('.delete-wrong').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const idx = btn.dataset.idx;
                currentWrongList.splice(idx, 1);
                saveWrongListToLocal();
                renderWrongList();
            });
        });
    }
    function openWrongModal() { currentWrongBankNameSpan.innerText = currentBankName; renderWrongList(); wrongModal.style.display = 'flex'; }
    function exportWrongTxt() {
        if (!currentWrongList.length) { alert("无错题"); return; }
        let content = `# 错题本 - ${currentBankName}\n`;
        currentWrongList.forEach(w => { content += `${w.en}=${w.zh}  (错误答案:${w.wrongAnswer})\n`; });
        const blob = new Blob([content], {type:"text/plain"});
        const a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download = `wrong_${currentBankName}.txt`;
        a.click();
        URL.revokeObjectURL(blob);
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
    
    // 每日目标
    function setDailyGoal() { let g = parseInt(dailyGoalInput.value); if (isNaN(g) || g<1) g=1; dailyGoal = g; saveDailyPlan(); updateDailyUI(); playBeep('click'); }
    function resetDaily() { todayCompleted = 0; saveDailyPlan(); updateDailyUI(); feedbackMsg.innerHTML = "今日进度已重置"; }
    
    // 模式切换
    function setMode(mode) {
        currentMode = mode;
        modeBtns.forEach(btn => {
            if (btn.dataset.mode === mode) btn.classList.add('active');
            else btn.classList.remove('active');
        });
        pickRandomQuestion();
        clearAnswerBuilder();
        feedbackMsg.innerHTML = "";
    }
    
    // 事件绑定
    function bindEvents() {
        submitBtn.addEventListener('click', checkAnswer);
        nextBtn.addEventListener('click', () => nextQuestion(false));
        speakBtn.addEventListener('click', () => { if (currentQuestionItem) speakWord(currentQuestionItem.en); });
        hintBtn.addEventListener('click', () => {
            const examModal = document.getElementById('examModal');
            if (examModal && examModal.style.display === 'flex') {
                feedbackMsg.innerHTML = "⚠️ 考试模式下不可使用提示";
                playBeep('wrong');
                return;
            }
            feedbackMsg.innerHTML = `💡 提示: ${currentCorrectAnswer}`;
            playBeep('click');
        });
        backspaceBtn.addEventListener('click', backspaceChar);
        clearAllBtn.addEventListener('click', clearAnswerBuilder);
        importBankBtn.addEventListener('click', () => { const inp = document.createElement('input'); inp.type='file'; inp.accept='.txt'; inp.onchange=e=>{if(e.target.files[0]) importTxtFile(e.target.files[0]);}; inp.click(); });
        if (deleteBankBtn) deleteBankBtn.addEventListener('click', deleteCurrentBank);
        bankSelect.addEventListener('change', (e) => switchBank(e.target.value));
        wrongBookBtn.addEventListener('click', openWrongModal);
        exportWrongBtn.addEventListener('click', exportWrongTxt);
        closeModalBtn.addEventListener('click', () => wrongModal.style.display = 'none');
        clearWrongBtn.addEventListener('click', clearWrong);
        practiceWrongBtn.addEventListener('click', practiceWrong);
        window.addEventListener('click', (e) => { if (e.target === wrongModal) wrongModal.style.display = 'none'; });
        
        modeBtns.forEach(btn => {
            if (btn.dataset.mode) {
                btn.addEventListener('click', () => setMode(btn.dataset.mode));
            }
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
        document.body.addEventListener('click', () => { if (audioCtx.state === 'suspended') audioCtx.resume(); }, { once: true });
    }
    init();
    
    window.getCurrentBankWords = () => currentBankWords;
})();