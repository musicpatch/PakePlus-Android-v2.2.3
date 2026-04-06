// 本章专用：仅随机正确答案位置，不打乱错误选项
function randomCorrectOption(correctText, correctTarget, correctTip, wrongOptions) {
  const options = [...wrongOptions];
  const randomPos = Math.floor(Math.random() * 4);
  options.splice(randomPos, 0, { text: correctText, target: correctTarget, feedback: correctTip });
  return options;
}

export const chapter_10 = {
  id: "chapter_10",
  title: "第十章 · 鼓上蚤时迁",
  startNodeId: "m1",

  nodes: {
    m1: {
      id: "m1",
      text: "时迁的绰号是什么？",
      options: randomCorrectOption("鼓上蚤", "m2", "✅", [
        { text: "白日鼠", target: "s1", feedback: "❌" },
        { text: "金毛犬", target: "s1", feedback: "❌" },
        { text: "通臂猿", target: "s1", feedback: "❌" }
      ])
    },
    m2: {
      id: "m2",
      text: "时迁在梁山排第几位？",
      options: randomCorrectOption("107", "m3", "✅", [
        { text: "108", target: "s2", feedback: "❌" },
        { text: "106", target: "s2", feedback: "❌" },
        { text: "105", target: "s2", feedback: "❌" }
      ])
    },
    m3: {
      id: "m3",
      text: "时迁的星号是什么？",
      options: randomCorrectOption("地贼星", "m4", "✅", [
        { text: "地狗星", target: "s3", feedback: "❌" },
        { text: "地耗星", target: "s3", feedback: "❌" },
        { text: "地伏星", target: "s3", feedback: "❌" }
      ])
    },
    m4: {
      id: "m4",
      text: "时迁最擅长什么？",
      options: randomCorrectOption("轻功偷盗", "m5", "✅", [
        { text: "相扑", target: "s4", feedback: "❌" },
        { text: "使枪", target: "s4", feedback: "❌" },
        { text: "水性", target: "s4", feedback: "❌" }
      ])
    },
    m5: {
      id: "m5",
      text: "时迁最初在哪里落草？",
      options: randomCorrectOption("翠屏山", "m6", "✅", [
        { text: "二龙山", target: "s5", feedback: "❌" },
        { text: "桃花山", target: "s5", feedback: "❌" },
        { text: "少华山", target: "s5", feedback: "❌" }
      ])
    },
    m6: {
      id: "m6",
      text: "时迁和谁一起投奔梁山？",
      options: randomCorrectOption("杨雄、石秀", "m7", "✅", [
        { text: "宋江、李逵", target: "s6", feedback: "❌" },
        { text: "鲁智深、武松", target: "s6", feedback: "❌" },
        { text: "林冲、花荣", target: "s6", feedback: "❌" }
      ])
    },
    m7: {
      id: "m7",
      text: "时迁在祝家庄偷了什么？",
      options: randomCorrectOption("报晓鸡", "m8", "✅", [
        { text: "金铃吊挂", target: "s7", feedback: "❌" },
        { text: "玉带", target: "s7", feedback: "❌" },
        { text: "宝刀", target: "s7", feedback: "❌" }
      ])
    },
    m8: {
      id: "m8",
      text: "时迁偷鸡引发了梁山哪场战役？",
      options: randomCorrectOption("三打祝家庄", "m9", "✅", [
        { text: "攻打大名府", target: "s8", feedback: "❌" },
        { text: "大闹东京", target: "s8", feedback: "❌" },
        { text: "血洗曾头市", target: "s8", feedback: "❌" }
      ])
    },
    m9: {
      id: "m9",
      text: "时迁在攻打大名府时，做了什么关键事？",
      options: randomCorrectOption("火烧翠云楼", "m10", "✅", [
        { text: "劫法场", target: "s9", feedback: "❌" },
        { text: "偷军粮", target: "s9", feedback: "❌" },
        { text: "杀守将", target: "s9", feedback: "❌" }
      ])
    },
    m10: {
      id: "m10",
      text: "时迁在曾头市曾做了什么？",
      options: randomCorrectOption("探路放火", "m11", "✅", [
        { text: "刺杀曾涂", target: "s10", feedback: "❌" },
        { text: "盗马", target: "s10", feedback: "❌" },
        { text: "搬救兵", target: "s10", feedback: "❌" }
      ])
    },
    m11: {
      id: "m11",
      text: "时迁在征讨方腊时，曾潜入哪里放火？",
      options: randomCorrectOption("昱岭关", "m12", "✅", [
        { text: "杭州", target: "s11", feedback: "❌" },
        { text: "苏州", target: "s11", feedback: "❌" },
        { text: "润州", target: "s11", feedback: "❌" }
      ])
    },
    m12: {
      id: "m12",
      text: "时迁最后是怎么死的？",
      options: randomCorrectOption("肚痛而死", "m13", "✅", [
        { text: "战死", target: "s12", feedback: "❌" },
        { text: "被毒死", target: "s12", feedback: "❌" },
        { text: "病逝", target: "s12", feedback: "❌" }
      ])
    },
    m13: {
      id: "m13",
      text: "时迁死后被封为什么神？",
      options: randomCorrectOption("义节郎", "m14", "✅", [
        { text: "忠武郎", target: "s13", feedback: "❌" },
        { text: "武节将军", target: "s13", feedback: "❌" },
        { text: "都统制", target: "s13", feedback: "❌" }
      ])
    },
    m14: {
      id: "m14",
      text: "时迁的兵器主要是什么？",
      options: randomCorrectOption("短刀", "m15", "✅", [
        { text: "板斧", target: "s14", feedback: "❌" },
        { text: "长枪", target: "s14", feedback: "❌" },
        { text: "双鞭", target: "s14", feedback: "❌" }
      ])
    },
    m15: {
      id: "m15",
      text: "时迁在梁山担任什么职务？",
      options: randomCorrectOption("走报机密步军头领", "m16", "✅", [
        { text: "马军头领", target: "s15", feedback: "❌" },
        { text: "水军头领", target: "s15", feedback: "❌" },
        { text: "步兵头领", target: "s15", feedback: "❌" }
      ])
    },
    m16: {
      id: "m16",
      text: "时迁和段景住、白胜等属于哪一类好汉？",
      options: randomCorrectOption("地煞星", "m17", "✅", [
        { text: "天罡星", target: "s16", feedback: "❌" },
        { text: "七十二地煞", target: "s16", feedback: "✅" },
        { text: "三十六天罡", target: "s16", feedback: "❌" }
      ])
    },
    m17: {
      id: "m17",
      text: "时迁在梁山好汉中，以什么著称？",
      options: randomCorrectOption("轻功第一", "m18", "✅", [
        { text: "力气最大", target: "s17", feedback: "❌" },
        { text: "水性最好", target: "s17", feedback: "❌" },
        { text: "箭法最准", target: "s17", feedback: "❌" }
      ])
    },
    m18: {
      id: "m18",
      text: "时迁在东京盗取过什么东西？",
      options: randomCorrectOption("金铃吊挂", "m19", "✅", [
        { text: "玉玺", target: "s18", feedback: "❌" },
        { text: "宝刀", target: "s18", feedback: "❌" },
        { text: "御酒", target: "s18", feedback: "❌" }
      ])
    },
    m19: {
      id: "m19",
      text: "时迁曾在哪座寺里盗甲？",
      options: randomCorrectOption("宝光寺", "m20", "✅", [
        { text: "相国寺", target: "s19", feedback: "❌" },
        { text: "少林寺", target: "s19", feedback: "❌" },
        { text: "金山寺", target: "s19", feedback: "❌" }
      ])
    },
    m20: {
      id: "m20",
      text: "时迁的轻功本领，在梁山无人能及，他被称为？",
      options: randomCorrectOption("神偷", "complete", "✅", [
        { text: "飞贼", target: "s20", feedback: "❌" },
        { text: "妙手", target: "s20", feedback: "❌" },
        { text: "空空儿", target: "s20", feedback: "❌" }
      ])
    },

    // ==================== 通关 → 跳 chapter_11 ====================
    complete: {
      id: "complete",
      text: "🎉 恭喜通关第十章！全部主线剧情已完成！即将进入大结局！",
      options: [
        { text: "🔄 重玩本章", target: "m1", feedback: "" },
        { text: "📖 进入最终章 · 大结局", target: "chapter_11", feedback: "" },
        { text: "🏠 回主菜单", target: "RESTART_GAME", feedback: "" }
      ]
    },

    // ==================== 支线 S 题 完全不变 ====================
    s1: { id: "s1", text: "🦗 时迁：我外号鼓上蚤，你说是白日鼠？白胜是偷鸡的？", options: [{ text: "😵 我错了", target: "s2", feedback: "继续迷糊" }, { text: "鼓上蚤", target: "BACK", feedback: "✔" }, { text: "🍺 喝杯酒压惊", target: "s3", feedback: "喝懵了" }, { text: "🏃 逃跑", target: "s4", feedback: "怂了" }] },
    s2: { id: "s2", text: "🔢 时迁：我排107，你说是108？段景住才是最后一个！", options: [{ text: "📚 我记错了", target: "s3", feedback: "甩锅" }, { text: "107", target: "BACK", feedback: "✔" }, { text: "108", target: "s4", feedback: "❌" }, { text: "106", target: "s5", feedback: "❌" }] },
    s3: { id: "s3", text: "⭐ 时迁：我是地贼星，你说是地狗星？那是段景住！", options: [{ text: "🍺 我再去喝", target: "s4", feedback: "醉倒" }, { text: "地贼星", target: "BACK", feedback: "✔" }, { text: "地狗星", target: "s5", feedback: "错了" }, { text: "地耗星", target: "s6", feedback: "不对" }] },
    s4: { id: "s4", text: "🏃 时迁：我轻功偷盗第一，你说是相扑？那是燕青！", options: [{ text: "🗡️ 我闯进去", target: "s5", feedback: "被抓" }, { text: "轻功偷盗", target: "BACK", feedback: "✔" }, { text: "相扑", target: "s6", feedback: "错" }, { text: "使枪", target: "s7", feedback: "搞笑" }] },
    s5: { id: "s5", text: "⛰️ 时迁：我在翠屏山落草，你说是二龙山？那是鲁智深武松！", options: [{ text: "🔥 我不服", target: "s6", feedback: "反抗" }, { text: "翠屏山", target: "BACK", feedback: "✔" }, { text: "二龙山", target: "s7", feedback: "错" }, { text: "桃花山", target: "s8", feedback: "太远" }] },
    s6: { id: "s6", text: "🤝 时迁：我和杨雄、石秀一起投梁山，你说是宋江李逵？", options: [{ text: "💸 我收钱", target: "s7", feedback: "贪" }, { text: "杨雄、石秀", target: "BACK", feedback: "✔" }, { text: "宋江、李逵", target: "s8", feedback: "错" }, { text: "鲁智深、武松", target: "s9", feedback: "也错了" }] },
    s7: { id: "s7", text: "🐔 时迁：我在祝家庄偷了报晓鸡，你说是金铃吊挂？那是东京的！", options: [{ text: "💪 我也要救", target: "s8", feedback: "没能力" }, { text: "报晓鸡", target: "BACK", feedback: "✔" }, { text: "金铃吊挂", target: "s9", feedback: "错" }, { text: "玉带", target: "s10", feedback: "错" }] },
    s8: { id: "s8", text: "🏠 时迁：偷鸡引发三打祝家庄，你说是大名府？", options: [{ text: "🚶 我自己走", target: "s9", feedback: "危险" }, { text: "三打祝家庄", target: "BACK", feedback: "✔" }, { text: "攻打大名府", target: "s10", feedback: "错" }, { text: "大闹东京", target: "s11", feedback: "错" }] },
    s9: { id: "s9", text: "🔥 时迁：我火烧翠云楼，你说是劫法场？那是李逵！", options: [{ text: "🌾 我放火", target: "s10", feedback: "犯罪" }, { text: "火烧翠云楼", target: "BACK", feedback: "✔" }, { text: "劫法场", target: "s11", feedback: "错" }, { text: "偷军粮", target: "s12", feedback: "错" }] },
    s10: { id: "s10", text: "🔥 时迁：我在曾头市探路放火，你说是刺杀曾涂？", options: [{ text: "🍺 我也去打酒", target: "s11", feedback: "喝醉" }, { text: "探路放火", target: "BACK", feedback: "✔" }, { text: "刺杀曾涂", target: "s12", feedback: "错" }, { text: "盗马", target: "s13", feedback: "错" }] },
    s11: { id: "s11", text: "🔥 时迁：我在昱岭关放火，你说是杭州？", options: [{ text: "🔪 我帮你杀", target: "s12", feedback: "暴力" }, { text: "昱岭关", target: "BACK", feedback: "✔" }, { text: "杭州", target: "s13", feedback: "错" }, { text: "苏州", target: "s14", feedback: "错" }] },
    s12: { id: "s12", text: "💀 时迁：我肚痛而死，你说是战死？我可不是武将！", options: [{ text: "🏔️ 我上山", target: "s13", feedback: "落草" }, { text: "肚痛而死", target: "BACK", feedback: "✔" }, { text: "战死", target: "s14", feedback: "错" }, { text: "被毒死", target: "s15", feedback: "错" }] },
    s13: { id: "s13", text: "🏅 时迁：我封义节郎，你说是忠武郎？那是卢俊义！", options: [{ text: "🤴 我当寨主", target: "s14", feedback: "想得美" }, { text: "义节郎", target: "BACK", feedback: "✔" }, { text: "忠武郎", target: "s15", feedback: "错" }, { text: "武节将军", target: "s16", feedback: "错" }] },
    s14: { id: "s14", text: "🔪 时迁：我用短刀，你说是板斧？那是李逵！", options: [{ text: "🗡️ 我杀人", target: "s15", feedback: "狠" }, { text: "短刀", target: "BACK", feedback: "✔" }, { text: "板斧", target: "s16", feedback: "错" }, { text: "长枪", target: "s17", feedback: "错" }] },
    s15: { id: "s15", text: "📜 时迁：我当走报机密步军头领，你说是马军头领？我骑马？", options: [{ text: "🤺 我也要打", target: "s16", feedback: "找打" }, { text: "走报机密步军头领", target: "BACK", feedback: "✔" }, { text: "马军头领", target: "s17", feedback: "错" }, { text: "水军头领", target: "s18", feedback: "错" }] },
    s16: { id: "s16", text: "✨ 时迁：我是地煞星，你说是天罡星？我哪有那本事！", options: [{ text: "🔪 我火并", target: "s17", feedback: "狠人" }, { text: "地煞星", target: "BACK", feedback: "✔" }, { text: "天罡星", target: "s18", feedback: "错" }, { text: "七十二地煞", target: "s19", feedback: "也对" }] },
    s17: { id: "s17", text: "🏃 时迁：我轻功第一，你说是力气最大？那是鲁智深！", options: [{ text: "👑 我当老大", target: "s18", feedback: "野心" }, { text: "轻功第一", target: "BACK", feedback: "✔" }, { text: "力气最大", target: "s19", feedback: "错" }, { text: "水性最好", target: "s20", feedback: "错" }] },
    s18: { id: "s18", text: "🔔 时迁：我在东京盗金铃吊挂，你说是玉玺？", options: [{ text: "📈 排名", target: "s19", feedback: "关心" }, { text: "金铃吊挂", target: "BACK", feedback: "✔" }, { text: "玉玺", target: "s20", feedback: "错" }, { text: "宝刀", target: "s1", feedback: "错" }] },
    s19: { id: "s19", text: "🏯 时迁：我在宝光寺盗甲，你说是相国寺？那是鲁智深！", options: [{ text: "✨ 星星", target: "s20", feedback: "漂亮" }, { text: "宝光寺", target: "BACK", feedback: "✔" }, { text: "相国寺", target: "s1", feedback: "错" }, { text: "少林寺", target: "s2", feedback: "错" }] },
    s20: { id: "s20", text: "🦗 时迁：我被称为神偷，你说是飞贼？太难听了！", options: [{ text: "🏹 弓箭", target: "s1", feedback: "不是" }, { text: "神偷", target: "BACK", feedback: "✔" }, { text: "飞贼", target: "s2", feedback: "错" }, { text: "妙手", target: "s3", feedback: "错" }] },

    death_entry: {
      id: "death_entry",
      text: "⚠️ 你已经错太多题，触发【终极死亡题】！答错直接重置！",
      options: [
        { text: "⚡ 挑战死亡题", target: "death_question", feedback: "开始" },
        { text: "🏠 我怂了，回菜单", target: "RESTART_GAME", feedback: "逃跑" }
      ]
    },
    death_question: {
      id: "death_question",
      text: "💀 时迁最后是怎么死的？",
      options: [
        { text: "战死沙场", target: "death_end", feedback: "❌ 错！" },
        { text: "肚痛而死", target: "death_end", feedback: "✅ 对，但触发结局" },
        { text: "被毒酒毒死", target: "death_end", feedback: "❌ 错！" },
        { text: "病逝于杭州", target: "death_end", feedback: "❌ 错！" }
      ]
    },
    death_end: {
      id: "death_end",
      text: "🎬 游戏结束！错题太多，时迁不想带你玩了！",
      options: [{ text: "🔄 重新开始", target: "RESTART_GAME", feedback: "" }]
    }
  }
};