// scripts/ui/render.js
import { goToNode, resetChapter, getCurrentNode, subscribe } from '../engine/core.js';
import { getChapterData } from '../../data/chapters.js';

let currentChapter = null;

export function renderGame(chapterData) {
    currentChapter = chapterData;
    const app = document.getElementById('app');
    const node = getCurrentNode();
    if (!node) return;
    
    const html = `
        <div class="game-container">
            <div class="game-header">
                <h2>${chapterData.title}</h2>
                <div class="chapter-title">问题节点：${node.id}</div>
            </div>
            <div class="question-area">
                <div class="question-text">${node.text}</div>
                <div class="options" id="optionsContainer"></div>
            </div>
            <div class="game-footer">
                <button id="resetChapterBtn">🔄 重置本章</button>
                <button id="backMenuBtn">🏠 返回菜单</button>
            </div>
        </div>
    `;
    app.innerHTML = html;
    
    // 渲染选项按钮
    const container = document.getElementById('optionsContainer');
    node.options.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.textContent = opt.text;
        btn.onclick = () => {
            goToNode(opt.target, opt.feedback);
        };
        container.appendChild(btn);
    });
    
    // 绑定底部按钮
    document.getElementById('resetChapterBtn').onclick = () => {
        resetChapter();
        renderGame(currentChapter); // 重新渲染
    };
    // 修改：返回菜单直接跳转到选章页面（quiz_home.html）
    document.getElementById('backMenuBtn').onclick = () => {
        window.location.href = 'quiz_home.html';
    };
}

// 监听节点变化，重新渲染
export function startRenderSubscription() {
    subscribe(() => {
        if (currentChapter) {
            renderGame(currentChapter);
        }
    });
}