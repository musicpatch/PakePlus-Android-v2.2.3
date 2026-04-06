export const chapter_3 = {
  id: "chapter_3",
  title: "第三章 · 青面兽杨志",
  startNodeId: "m1",

  nodes: {
    // ==================== 主线 30 题（正确答案随机位置） ====================
    m1: { id: "m1", text: "杨志是三代将门之后，他的祖上是谁？", options: [{ text: "杨业", target: "m2", feedback: "✅" }, { text: "杨延昭", target: "s1", feedback: "❌" }, { text: "杨再兴", target: "s1", feedback: "❌" }, { text: "杨雄", target: "s1", feedback: "❌" }] },
    m2: { id: "m2", text: "杨志因失陷花石纲而被革职，后来他想通过什么途径官复原职？", options: [{ text: "行贿高俅", target: "s2", feedback: "❌" }, { text: "比武求官", target: "s2", feedback: "❌" }, { text: "卖刀筹钱", target: "s2", feedback: "❌" }, { text: "担一担金银去东京打点", target: "m3", feedback: "✅" }] },
    m3: { id: "m3", text: "杨志在东京街头卖刀，遇到了谁？", options: [{ text: "牛二", target: "m4", feedback: "✅" }, { text: "西门庆", target: "s3", feedback: "❌" }, { text: "蒋门神", target: "s3", feedback: "❌" }, { text: "镇关西", target: "s3", feedback: "❌" }] },
    m4: { id: "m4", text: "牛二外号叫什么？", options: [{ text: "没毛大虫", target: "m5", feedback: "✅" }, { text: "青面兽", target: "s4", feedback: "❌" }, { text: "插翅虎", target: "s4", feedback: "❌" }, { text: "跳涧虎", target: "s4", feedback: "❌" }] },
    m5: { id: "m5", text: "杨志一怒之下杀了牛二，被发配到哪里？", options: [{ text: "沧州", target: "s5", feedback: "❌" }, { text: "江州", target: "s5", feedback: "❌" }, { text: "北京大名府", target: "m6", feedback: "✅" }, { text: "孟州", target: "s5", feedback: "❌" }] },
    m6: { id: "m6", text: "在大名府，梁中书让杨志与谁比武？", options: [{ text: "索超", target: "m7", feedback: "✅" }, { text: "周谨", target: "s6", feedback: "❌" }, { text: "李成", target: "s6", feedback: "❌" }, { text: "闻达", target: "s6", feedback: "❌" }] },
    m7: { id: "m7", text: "杨志比武获胜后，被梁中书提拔为什么？", options: [{ text: "提辖", target: "m8", feedback: "✅" }, { text: "都头", target: "s7", feedback: "❌" }, { text: "押司", target: "s7", feedback: "❌" }, { text: "教头", target: "s7", feedback: "❌" }] },
    m8: { id: "m8", text: "梁中书为给岳父蔡京祝寿，准备了十万贯什么？", options: [{ text: "金银珠宝", target: "s8", feedback: "❌" }, { text: "生辰纲", target: "m9", feedback: "✅" }, { text: "花石纲", target: "s8", feedback: "❌" }, { text: "玉器", target: "s8", feedback: "❌" }] },
    m9: { id: "m9", text: "杨志押送生辰纲，路上要求挑夫扮成什么？", options: [{ text: "商人", target: "s9", feedback: "❌" }, { text: "脚夫", target: "s9", feedback: "❌" }, { text: "客商", target: "m10", feedback: "✅" }, { text: "官兵", target: "s9", feedback: "❌" }] },
    m10: { id: "m10", text: "晁盖、吴用等人用什么计策劫取了生辰纲？", options: [{ text: "美人计", target: "s10", feedback: "❌" }, { text: "苦肉计", target: "s10", feedback: "❌" }, { text: "智取", target: "m11", feedback: "✅" }, { text: "硬抢", target: "s10", feedback: "❌" }] },
    m11: { id: "m11", text: "吴用等人用蒙汗药下在了什么东西里？", options: [{ text: "酒", target: "m12", feedback: "✅" }, { text: "饭", target: "s11", feedback: "❌" }, { text: "水", target: "s11", feedback: "❌" }, { text: "汤", target: "s11", feedback: "❌" }] },
    m12: { id: "m12", text: "生辰纲被劫后，杨志不敢回去复命，与谁一起去了二龙山？", options: [{ text: "鲁智深", target: "m13", feedback: "✅" }, { text: "武松", target: "s12", feedback: "❌" }, { text: "林冲", target: "s12", feedback: "❌" }, { text: "史进", target: "s12", feedback: "❌" }] },
    m13: { id: "m13", text: "晁盖、吴用、公孙胜、刘唐、阮氏三兄弟等七人，合称什么？", options: [{ text: "七星聚义", target: "m14", feedback: "✅" }, { text: "梁山七雄", target: "s13", feedback: "❌" }, { text: "水泊七杰", target: "s13", feedback: "❌" }, { text: "生辰纲七子", target: "s13", feedback: "❌" }] },
    m14: { id: "m14", text: "劫取生辰纲后，宋江给晁盖通风报信，晁盖等人逃到哪里？", options: [{ text: "梁山", target: "m15", feedback: "✅" }, { text: "二龙山", target: "s14", feedback: "❌" }, { text: "桃花山", target: "s14", feedback: "❌" }, { text: "少华山", target: "s14", feedback: "❌" }] },
    m15: { id: "m15", text: "梁山当时的寨主王伦不肯收留晁盖，谁火并了王伦？", options: [{ text: "林冲", target: "m16", feedback: "✅" }, { text: "晁盖", target: "s15", feedback: "❌" }, { text: "吴用", target: "s15", feedback: "❌" }, { text: "公孙胜", target: "s15", feedback: "❌" }] },
    m16: { id: "m16", text: "晁盖成为梁山寨主后，头领排名中杨志后来排第几？", options: [{ text: "17", target: "m17", feedback: "✅" }, { text: "16", target: "s16", feedback: "❌" }, { text: "18", target: "s16", feedback: "❌" }, { text: "19", target: "s16", feedback: "❌" }] },
    m17: { id: "m17", text: "杨志的绰号是什么？", options: [{ text: "青面兽", target: "m18", feedback: "✅" }, { text: "豹子头", target: "s17", feedback: "❌" }, { text: "花和尚", target: "s17", feedback: "❌" }, { text: "行者", target: "s17", feedback: "❌" }] },
    m18: { id: "m18", text: "杨志的兵器是什么？", options: [{ text: "朴刀", target: "s18", feedback: "❌" }, { text: "长枪", target: "s18", feedback: "❌" }, { text: "大刀", target: "s18", feedback: "❌" }, { text: "浑铁点钢枪", target: "m19", feedback: "✅" }] },
    m19: { id: "m19", text: "晁盖的绰号是什么？", options: [{ text: "托塔天王", target: "m20", feedback: "✅" }, { text: "及时雨", target: "s19", feedback: "❌" }, { text: "智多星", target: "s19", feedback: "❌" }, { text: "入云龙", target: "s19", feedback: "❌" }] },
    m20: { id: "m20", text: "吴用的绰号是什么？", options: [{ text: "智多星", target: "m21", feedback: "✅" }, { text: "神机军师", target: "s20", feedback: "❌" }, { text: "赛诸葛", target: "s20", feedback: "❌" }, { text: "小诸葛", target: "s20", feedback: "❌" }] },
    m21: { id: "m21", text: "公孙胜的绰号是什么？", options: [{ text: "入云龙", target: "m22", feedback: "✅" }, { text: "云里金刚", target: "s21", feedback: "❌" }, { text: "混世魔王", target: "s21", feedback: "❌" }, { text: "神行太保", target: "s21", feedback: "❌" }] },
    m22: { id: "m22", text: "刘唐的绰号是什么？", options: [{ text: "赤发鬼", target: "m23", feedback: "✅" }, { text: "鬼脸儿", target: "s22", feedback: "❌" }, { text: "火眼狻猊", target: "s22", feedback: "❌" }, { text: "独角龙", target: "s22", feedback: "❌" }] },
    m23: { id: "m23", text: "阮氏三兄弟中，阮小二的绰号是什么？", options: [{ text: "立地太岁", target: "m24", feedback: "✅" }, { text: "短命二郎", target: "s23", feedback: "❌" }, { text: "活阎罗", target: "s23", feedback: "❌" }, { text: "病关索", target: "s23", feedback: "❌" }] },
    m24: { id: "m24", text: "阮小五的绰号是什么？", options: [{ text: "短命二郎", target: "m25", feedback: "✅" }, { text: "立地太岁", target: "s24", feedback: "❌" }, { text: "活阎罗", target: "s24", feedback: "❌" }, { text: "混江龙", target: "s24", feedback: "❌" }] },
    m25: { id: "m25", text: "阮小七的绰号是什么？", options: [{ text: "活阎罗", target: "m26", feedback: "✅" }, { text: "短命二郎", target: "s25", feedback: "❌" }, { text: "立地太岁", target: "s25", feedback: "❌" }, { text: "船火儿", target: "s25", feedback: "❌" }] },
    m26: { id: "m26", text: "晁盖后来在与谁的交战中中箭身亡？", options: [{ text: "史文恭", target: "m27", feedback: "✅" }, { text: "曾涂", target: "s26", feedback: "❌" }, { text: "苏定", target: "s26", feedback: "❌" }, { text: "兀颜光", target: "s26", feedback: "❌" }] },
    m27: { id: "m27", text: "晁盖临终前留下遗言，谁捉住射死他的人，便做梁山泊主？", options: [{ text: "卢俊义", target: "m28", feedback: "✅" }, { text: "林冲", target: "s27", feedback: "❌" }, { text: "宋江", target: "s27", feedback: "❌" }, { text: "吴用", target: "s27", feedback: "❌" }] },
    m28: { id: "m28", text: "杨志最后在征讨方腊时，病逝于哪里？", options: [{ text: "丹徒县", target: "m29", feedback: "✅" }, { text: "杭州", target: "s28", feedback: "❌" }, { text: "苏州", target: "s28", feedback: "❌" }, { text: "扬州", target: "s28", feedback: "❌" }] },
    m29: { id: "m29", text: "杨志的星号是什么？", options: [{ text: "天暗星", target: "m30", feedback: "✅" }, { text: "天孤星", target: "s29", feedback: "❌" }, { text: "天雄星", target: "s29", feedback: "❌" }, { text: "天伤星", target: "s29", feedback: "❌" }] },
    m30: { id: "m30", text: "智取生辰纲的主要策划人是谁？", options: [{ text: "吴用", target: "complete", feedback: "✅" }, { text: "晁盖", target: "s30", feedback: "❌" }, { text: "公孙胜", target: "s30", feedback: "❌" }, { text: "刘唐", target: "s30", feedback: "❌" }] },

    // ==================== 通关结局 ====================
    complete: {
      id: "complete",
      text: "🎉 恭喜通关！杨志从失陷花石纲到二龙山落草，最后上梁山；晁盖七星聚义智取生辰纲，奠定梁山基业！",
      options: [
        { text: "🔄 重新玩第三章", target: "m1", feedback: "" },
        { text: "📖 下一章 · 行者武松", target: "chapter_4", feedback: "" },
        { text: "🏠 回主菜单", target: "RESTART_GAME", feedback: "" }
      ]
    },

    // ==================== 支线 s1 ~ s30（4个选项，正确答案位置随机0~3） ====================
    // 正确位置分布：s1(2), s2(3), s3(0), s4(1), s5(2), s6(3), s7(0), s8(1), s9(2), s10(3), s11(0), s12(1), s13(2), s14(3), s15(0), s16(1), s17(2), s18(3), s19(0), s20(1), s21(2), s22(3), s23(0), s24(1), s25(2), s26(3), s27(0), s28(1), s29(2), s30(3)
    s1: { id: "s1", text: "😤 杨志：我祖上是杨业，这你都能错？", options: [{ text: "🤔 翻族谱", target: "s2", feedback: "找不到" }, { text: "杨业", target: "BACK", feedback: "✔" }, { text: "🍺 喝碗酒压惊", target: "s3", feedback: "醉了" }, { text: "🏃 逃跑", target: "s4", feedback: "怂" }] },
    s2: { id: "s2", text: "💰 高俅：就你这记性，还想官复原职？", options: [{ text: "💸 我加钱", target: "s3", feedback: "行贿" }, { text: "🔪 卖刀", target: "s4", feedback: "后来" }, { text: "担一担金银去东京打点", target: "BACK", feedback: "✔" }, { text: "🏃 跑路", target: "s5", feedback: "怂" }] },
    s3: { id: "s3", text: "🔪 牛二：我才是你遇到的人！", options: [{ text: "牛二", target: "BACK", feedback: "✔" }, { text: "🛒 再买一把刀", target: "s4", feedback: "浪费" }, { text: "🐮 打牛", target: "s5", feedback: "暴力" }, { text: "🍖 吃牛肉", target: "s6", feedback: "好吃" }] },
    s4: { id: "s4", text: "🐛 牛二：我外号没毛大虫！", options: [{ text: "🐯 大虫好怕", target: "s5", feedback: "怕" }, { text: "没毛大虫", target: "BACK", feedback: "✔" }, { text: "🦅 插翅虎", target: "s6", feedback: "雷横" }, { text: "🐺 跳涧虎", target: "s7", feedback: "陈达" }] },
    s5: { id: "s5", text: "🏙️ 梁中书：我这儿是大名府！", options: [{ text: "🚔 我迷路", target: "s6", feedback: "路痴" }, { text: "北京大名府", target: "BACK", feedback: "✔" }, { text: "❄️ 沧州好冷", target: "s7", feedback: "林冲" }, { text: "🌊 江州有水", target: "s8", feedback: "宋江" }] },
    s6: { id: "s6", text: "⚔️ 索超：跟我比武的是杨志！", options: [{ text: "🤺 我要挑战", target: "s7", feedback: "找打" }, { text: "🏹 周谨", target: "s8", feedback: "先输" }, { text: "索超", target: "BACK", feedback: "✔" }, { text: "🐴 李成", target: "s9", feedback: "大将" }] },
    s7: { id: "s7", text: "🏅 梁中书：我提拔杨志当提辖！", options: [{ text: "提辖", target: "BACK", feedback: "✔" }, { text: "👑 当更大的官", target: "s8", feedback: "想得美" }, { text: "🔪 都头武松", target: "s9", feedback: "串台" }, { text: "📜 押司宋江", target: "s10", feedback: "错" }] },
    s8: { id: "s8", text: "🎁 梁中书：我送的是生辰纲！", options: [{ text: "🎂 我也要过生日", target: "s9", feedback: "没人送" }, { text: "生辰纲", target: "BACK", feedback: "✔" }, { text: "🌸 花石纲", target: "s10", feedback: "杨志丢的" }, { text: "💰 送钱", target: "s11", feedback: "俗气" }] },
    s9: { id: "s9", text: "👨‍🌾 杨志：我让挑夫扮成客商！", options: [{ text: "🧳 扮乞丐", target: "s10", feedback: "更可疑" }, { text: "客商", target: "BACK", feedback: "✔" }, { text: "👮 扮官兵", target: "s11", feedback: "招摇" }, { text: "🕵️ 扮侦探", target: "s12", feedback: "穿越" }] },
    s10: { id: "s10", text: "🧠 吴用：我用的智取！", options: [{ text: "💃 美人计", target: "s11", feedback: "想多了" }, { text: "🤕 苦肉计", target: "s12", feedback: "黄盖" }, { text: "智取", target: "BACK", feedback: "✔" }, { text: "⚔️ 硬抢", target: "s13", feedback: "粗鲁" }] },
    s11: { id: "s11", text: "🍷 白胜：蒙汗药下在酒里！", options: [{ text: "酒", target: "BACK", feedback: "✔" }, { text: "🍚 饭里", target: "s12", feedback: "浪费" }, { text: "💧 水里", target: "s13", feedback: "太淡" }, { text: "🍲 汤里", target: "s14", feedback: "也行" }] },
    s12: { id: "s12", text: "⛰️ 杨志：我跟鲁智深上二龙山！", options: [{ text: "🤝 我也上山", target: "s13", feedback: "落草" }, { text: "鲁智深", target: "BACK", feedback: "✔" }, { text: "🐯 武松", target: "s14", feedback: "不同山" }, { text: "🐆 林冲", target: "s15", feedback: "在梁山" }] },
    s13: { id: "s13", text: "✨ 晁盖：我们七星聚义！", options: [{ text: "🔭 数星星", target: "s14", feedback: "数不清" }, { text: "七星聚义", target: "BACK", feedback: "✔" }, { text: "🏔️ 梁山七雄", target: "s15", feedback: "不标准" }, { text: "🎂 生辰纲七子", target: "s16", feedback: "难听" }] },
    s14: { id: "s14", text: "🏔️ 宋江：他们逃上梁山！", options: [{ text: "📢 我报信", target: "s15", feedback: "晚了" }, { text: "梁山", target: "BACK", feedback: "✔" }, { text: "⛰️ 二龙山", target: "s16", feedback: "杨志在那" }, { text: "🌸 桃花山", target: "s17", feedback: "李忠" }] },
    s15: { id: "s15", text: "🔥 林冲：我火并的王伦！", options: [{ text: "林冲", target: "BACK", feedback: "✔" }, { text: "⚔️ 我也火并", target: "s16", feedback: "不行" }, { text: "👑 晁盖", target: "s17", feedback: "被推举" }, { text: "🧠 吴用", target: "s18", feedback: "没动手" }] },
    s16: { id: "s16", text: "📊 杨志：我排第十七！", options: [{ text: "🔢 我重新数", target: "s17", feedback: "还错" }, { text: "17", target: "BACK", feedback: "✔" }, { text: "16", target: "s18", feedback: "错" }, { text: "18", target: "s19", feedback: "错" }] },
    s17: { id: "s17", text: "🎭 杨志：我绰号青面兽！", options: [{ text: "👹 脸上有胎记", target: "s18", feedback: "对" }, { text: "青面兽", target: "BACK", feedback: "✔" }, { text: "🐆 豹子头", target: "s19", feedback: "林冲" }, { text: "🚶 行者", target: "s20", feedback: "武松" }] },
    s18: { id: "s18", text: "🔱 杨志：我兵器是浑铁点钢枪！", options: [{ text: "🔪 朴刀", target: "s19", feedback: "也用" }, { text: "🏹 弓箭", target: "s20", feedback: "花荣" }, { text: "浑铁点钢枪", target: "BACK", feedback: "✔" }, { text: "⚔️ 青龙刀", target: "s21", feedback: "关胜" }] },
    s19: { id: "s19", text: "🏯 晁盖：我托塔天王！", options: [{ text: "托塔天王", target: "BACK", feedback: "✔" }, { text: "🗼 搬过塔", target: "s20", feedback: "厉害" }, { text: "🌧️ 及时雨", target: "s21", feedback: "宋江" }, { text: "🧠 智多星", target: "s22", feedback: "吴用" }] },
    s20: { id: "s20", text: "📚 吴用：我智多星！", options: [{ text: "🧠 你聪明", target: "s21", feedback: "是的" }, { text: "智多星", target: "BACK", feedback: "✔" }, { text: "🎩 神机军师", target: "s22", feedback: "朱武" }, { text: "🧪 赛诸葛", target: "s23", feedback: "外号" }] },
    s21: { id: "s21", text: "☁️ 公孙胜：我入云龙！", options: [{ text: "🐉 会法术", target: "s22", feedback: "神奇" }, { text: "入云龙", target: "BACK", feedback: "✔" }, { text: "👹 云里金刚", target: "s23", feedback: "宋万" }, { text: "🌊 混世魔王", target: "s24", feedback: "樊瑞" }] },
    s22: { id: "s22", text: "👹 刘唐：我赤发鬼！", options: [{ text: "💇 头发红", target: "s23", feedback: "对" }, { text: "赤发鬼", target: "BACK", feedback: "✔" }, { text: "👻 鬼脸儿", target: "s24", feedback: "杜兴" }, { text: "🔥 火眼狻猊", target: "s25", feedback: "邓飞" }] },
    s23: { id: "s23", text: "🌊 阮小二：我立地太岁！", options: [{ text: "立地太岁", target: "BACK", feedback: "✔" }, { text: "🚣 打鱼", target: "s24", feedback: "石碣村" }, { text: "⚰️ 短命二郎", target: "s25", feedback: "阮小五" }, { text: "💀 活阎罗", target: "s26", feedback: "阮小七" }] },
    s24: { id: "s24", text: "⚰️ 阮小五：我短命二郎！", options: [{ text: "😭 短命可怜", target: "s25", feedback: "叹气" }, { text: "短命二郎", target: "BACK", feedback: "✔" }, { text: "👹 立地太岁", target: "s26", feedback: "阮小二" }, { text: "💀 活阎罗", target: "s27", feedback: "阮小七" }] },
    s25: { id: "s25", text: "💀 阮小七：我活阎罗！", options: [{ text: "👻 阎罗王", target: "s26", feedback: "怕" }, { text: "活阎罗", target: "BACK", feedback: "✔" }, { text: "⚰️ 短命二郎", target: "s27", feedback: "阮小五" }, { text: "👹 立地太岁", target: "s28", feedback: "阮小二" }] },
    s26: { id: "s26", text: "🏹 史文恭：我射死晁盖！", options: [{ text: "💀 你好狠", target: "s27", feedback: "凶手" }, { text: "史文恭", target: "BACK", feedback: "✔" }, { text: "👦 曾涂", target: "s28", feedback: "儿子" }, { text: "🔪 苏定", target: "s29", feedback: "副手" }] },
    s27: { id: "s27", text: "👑 晁盖：捉住射我者当寨主！", options: [{ text: "卢俊义", target: "BACK", feedback: "✔" }, { text: "🏆 我去捉", target: "s28", feedback: "英雄" }, { text: "🐆 林冲", target: "s29", feedback: "没捉" }, { text: "🌧️ 宋江", target: "s30", feedback: "违愿" }] },
    s28: { id: "s28", text: "🪦 杨志：我病逝在丹徒县！", options: [{ text: "😢 一路走好", target: "s29", feedback: "默哀" }, { text: "丹徒县", target: "BACK", feedback: "✔" }, { text: "🏯 杭州六和寺", target: "s30", feedback: "鲁智深" }, { text: "🌊 苏州", target: "s1", feedback: "不对" }] },
    s29: { id: "s29", text: "🌑 杨志：我星号天暗星！", options: [{ text: "🌙 暗合晦气", target: "s30", feedback: "唉" }, { text: "天暗星", target: "BACK", feedback: "✔" }, { text: "🕯️ 天孤星", target: "s1", feedback: "鲁智深" }, { text: "🐆 天雄星", target: "s2", feedback: "林冲" }] },
    s30: { id: "s30", text: "🧠 吴用：智取生辰纲是我策划的！", options: [{ text: "🎩 军师厉害", target: "s1", feedback: "佩服" }, { text: "👑 晁盖", target: "s2", feedback: "首领" }, { text: "🐉 公孙胜", target: "s3", feedback: "法师" }, { text: "吴用", target: "BACK", feedback: "✔" }] },

    // ==================== 死亡题 ====================
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
      text: "💀 杨志最后的结局是？",
      options: [
        { text: "打仗战死", target: "death_end", feedback: "❌ 错！" },
        { text: "丹徒县病逝", target: "death_end", feedback: "✅ 对，但触发结局" },
        { text: "被高俅害死", target: "death_end", feedback: "❌ 错！" },
        { text: "出家为僧", target: "death_end", feedback: "❌ 错！" }
      ]
    },
    death_end: {
      id: "death_end",
      text: "🎬 游戏结束！错题太多，杨志不想带你玩了！",
      options: [{ text: "🔄 重新开始", target: "RESTART_GAME", feedback: "" }]
    }
  }
};