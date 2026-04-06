// scripts/engine/audio.js
let bgmAudio = null;
let isAudioAllowed = false;

export function initAudio() {
    bgmAudio = new Audio();
    bgmAudio.loop = true;
    bgmAudio.volume = 0.5;
    // 预留路径
    bgmAudio.src = './audio/bgm/default.mp3';
    bgmAudio.load();
    
    // 首次触摸时启用音频
    const enableAudio = () => {
        if (!isAudioAllowed) {
            bgmAudio.play().catch(e => console.log('自动播放失败，需要用户交互'));
            isAudioAllowed = true;
        }
        document.body.removeEventListener('touchstart', enableAudio);
        document.body.removeEventListener('click', enableAudio);
    };
    document.body.addEventListener('touchstart', enableAudio);
    document.body.addEventListener('click', enableAudio);
}

export function playBGM() {
    if (bgmAudio && isAudioAllowed) {
        bgmAudio.play().catch(e => console.log);
    }
}

export function stopBGM() {
    if (bgmAudio) {
        bgmAudio.pause();
    }
}