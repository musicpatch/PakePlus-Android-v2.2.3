// scripts/engine/core.js
import { saveGame } from './storage.js';
import { showToast } from '../ui/dialog.js';

let currentChapter = null;      // 当前章节数据对象
let currentNodeId = null;       // 当前节点ID
let listeners = [];             // 监听器（用于UI更新）

// 初始化章节
export function loadChapter(chapterData, startNodeId = null) {
    if (!chapterData) {
        console.error('章节数据为空');
        return false;
    }
    currentChapter = chapterData;
    const startId = startNodeId || chapterData.startNodeId;
    if (!currentChapter.nodes[startId]) {
        console.error('起始节点不存在', startId);
        return false;
    }
    currentNodeId = startId;
    saveGame(currentChapter.id, currentNodeId);
    notifyListeners();
    return true;
}

// 获取当前节点对象
export function getCurrentNode() {
    if (!currentChapter || !currentNodeId) return null;
    return currentChapter.nodes[currentNodeId];
}

// 跳转到指定节点
export function goToNode(targetId, feedback = '') {
    if (!currentChapter) return false;
    // 处理跨章节跳转 (格式 "chapter_2:m1")
    if (targetId.includes(':')) {
        const [chapId, nodeId] = targetId.split(':');
        // 触发自定义事件，由main处理跨章加载
        window.dispatchEvent(new CustomEvent('crossChapter', { detail: { chapterId: chapId, nodeId } }));
        return false;
    }
    if (!currentChapter.nodes[targetId]) {
        console.error('目标节点不存在', targetId);
        showToast('节点不存在，请重置游戏');
        return false;
    }
    if (feedback) showToast(feedback, 1800);
    currentNodeId = targetId;
    saveGame(currentChapter.id, currentNodeId);
    notifyListeners();
    return true;
}

// 重置当前章节到起始节点
export function resetChapter() {
    if (!currentChapter) return;
    currentNodeId = currentChapter.startNodeId;
    saveGame(currentChapter.id, currentNodeId);
    notifyListeners();
    showToast('已重置到章节开头', 1500);
}

// 注册UI更新回调
export function subscribe(listener) {
    listeners.push(listener);
}
function notifyListeners() {
    listeners.forEach(fn => fn());
}