// data/chapters.js
// 自动探测 chapter_1, chapter_2, ... 直到找不到为止
const chapters = {};
const chapterList = [];

async function loadAllChapters() {
    let i = 1;
    while (true) {
        try {
            // 动态导入 `./chapter_${i}.js`
            const module = await import(`./chapter_${i}.js`);
            // 期望导出的变量名是 chapter_1, chapter_2, ...
            const chapterData = module[`chapter_${i}`];
            if (chapterData) {
                chapters[`chapter_${i}`] = chapterData;
                chapterList.push({ id: `chapter_${i}`, name: chapterData.title });
                i++;
            } else {
                break;
            }
        } catch (e) {
            // 文件不存在或导入失败，停止探测
            break;
        }
    }
    // 可选：按 id 排序
    chapterList.sort((a,b) => a.id.localeCompare(b.id));
}

export { chapters, chapterList, loadAllChapters };

export function getChapterData(chapterId) {
    return chapters[chapterId] || null;
}