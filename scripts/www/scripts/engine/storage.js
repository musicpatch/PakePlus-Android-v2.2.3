// scripts/engine/storage.js
const STORAGE_KEY = 'shuihu_quiz_save';

// 保存存档：当前章节ID + 节点ID
export function saveGame(chapterId, nodeId) {
    const data = {
        chapterId: chapterId,
        nodeId: nodeId,
        timestamp: Date.now()
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

// 读取存档，返回对象或 null
export function loadGame() {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    try {
        return JSON.parse(raw);
    } catch(e) {
        return null;
    }
}

// 清除存档
export function clearSave() {
    localStorage.removeItem(STORAGE_KEY);
}