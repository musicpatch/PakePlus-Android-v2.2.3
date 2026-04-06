export const chapter_6 = {
  id: "chapter_6",
  title: "第六章 · 黑旋风李逵",
  startNodeId: "m1",

  nodes: {
    // ==================== 主线 30 题（正确答案随机位置） ====================
    m1: { id: "m1", text: "李逵的外号是什么？", options: [{ text: "黑旋风", target: "m2", feedback: "✅" }, { text: "浪里白条", target: "s1", feedback: "❌" }, { text: "拼命三郎", target: "s1", feedback: "❌" }, { text: "鼓上蚤", target: "s1", feedback: "❌" }] },
    m2: { id: "m2", text: "李逵在江州监狱当什么？", options: [{ text: "狱卒", target: "s2", feedback: "❌" }, { text: "牢头", target: "m3", feedback: "✅" }, { text: "押司", target: "s2", feedback: "❌" }, { text: "都头", target: "s2", feedback: "❌" }] },
    m3: { id: "m3", text: "李逵第一次见到宋江，宋江给了他多少两银子？", options: [{ text: "五两", target: "s3", feedback: "❌" }, { text: "十两", target: "m4", feedback: "✅" }, { text: "十五两", target: "s3", feedback: "❌" }, { text: "二十两", target: "s3", feedback: "❌" }] },
    m4: { id: "m4", text: "李逵为了给宋江买鱼，和谁打了起来？", options: [{ text: "张顺", target: "m5", feedback: "✅" }, { text: "张横", target: "s4", feedback: "❌" }, { text: "阮小七", target: "s4", feedback: "❌" }, { text: "戴宗", target: "s4", feedback: "❌" }] },
    m5: { id: "m5", text: "李逵在水中被张顺灌了个饱，谁劝开了他们？", options: [{ text: "宋江", target: "m6", feedback: "✅" }, { text: "戴宗", target: "s5", feedback: "❌" }, { text: "晁盖", target: "s5", feedback: "❌" }, { text: "吴用", target: "s5", feedback: "❌" }] },
    m6: { id: "m6", text: "李逵在江州劫法场时，用什么武器杀人？", options: [{ text: "板斧", target: "m7", feedback: "✅" }, { text: "朴刀", target: "s6", feedback: "❌" }, { text: "禅杖", target: "s6", feedback: "❌" }, { text: "戒刀", target: "s6", feedback: "❌" }] },
    m7: { id: "m7", text: "李逵沂岭杀四虎，是为了给谁报仇？", options: [{ text: "他母亲", target: "m8", feedback: "✅" }, { text: "他哥哥", target: "s7", feedback: "❌" }, { text: "宋江", target: "s7", feedback: "❌" }, { text: "朱富", target: "s7", feedback: "❌" }] },
    m8: { id: "m8", text: "李逵的母亲是怎么死的？", options: [{ text: "被老虎吃了", target: "m9", feedback: "✅" }, { text: "病死的", target: "s8", feedback: "❌" }, { text: "摔死的", target: "s8", feedback: "❌" }, { text: "被李逵误杀", target: "s8", feedback: "❌" }] },
    m9: { id: "m9", text: "李逵在沂岭杀了哪四只虎？", options: [{ text: "两只大虎两只小虎", target: "m10", feedback: "✅" }, { text: "三只大虎一只小虎", target: "s9", feedback: "❌" }, { text: "一只大虎三只小虎", target: "s9", feedback: "❌" }, { text: "四只大虎", target: "s9", feedback: "❌" }] },
    m10: { id: "m10", text: "李逵在打死殷天锡后，和谁一起上梁山？", options: [{ text: "柴进", target: "m11", feedback: "✅" }, { text: "朱仝", target: "s10", feedback: "❌" }, { text: "雷横", target: "s10", feedback: "❌" }, { text: "燕青", target: "s10", feedback: "❌" }] },
    m11: { id: "m11", text: "李逵在梁山排座次时，排名第几？", options: [{ text: "22", target: "s11", feedback: "❌" }, { text: "23", target: "s11", feedback: "❌" }, { text: "21", target: "s11", feedback: "❌" }, { text: "22", target: "m12", feedback: "✅" }] },
    m12: { id: "m12", text: "李逵的星号是什么？", options: [{ text: "天杀星", target: "m13", feedback: "✅" }, { text: "天孤星", target: "s12", feedback: "❌" }, { text: "天伤星", target: "s12", feedback: "❌" }, { text: "天暗星", target: "s12", feedback: "❌" }] },
    m13: { id: "m13", text: "李逵的兵器是什么？", options: [{ text: "双板斧", target: "m14", feedback: "✅" }, { text: "单板斧", target: "s13", feedback: "❌" }, { text: "铁锤", target: "s13", feedback: "❌" }, { text: "大刀", target: "s13", feedback: "❌" }] },
    m14: { id: "m14", text: "李逵的性格最突出的特点是什么？", options: [{ text: "鲁莽直率", target: "m15", feedback: "✅" }, { text: "机智狡猾", target: "s14", feedback: "❌" }, { text: "胆小怕事", target: "s14", feedback: "❌" }, { text: "阴险毒辣", target: "s14", feedback: "❌" }] },
    m15: { id: "m15", text: "李逵在梁山主要负责什么？", options: [{ text: "步兵头领", target: "m16", feedback: "✅" }, { text: "骑兵头领", target: "s15", feedback: "❌" }, { text: "水军头领", target: "s15", feedback: "❌" }, { text: "探子", target: "s15", feedback: "❌" }] },
    m16: { id: "m16", text: "李逵最听谁的话？", options: [{ text: "宋江", target: "m17", feedback: "✅" }, { text: "吴用", target: "s16", feedback: "❌" }, { text: "晁盖", target: "s16", feedback: "❌" }, { text: "戴宗", target: "s16", feedback: "❌" }] },
    m17: { id: "m17", text: "李逵曾砍倒梁山什么旗？", options: [{ text: "杏黄旗", target: "m18", feedback: "✅" }, { text: "帅旗", target: "s17", feedback: "❌" }, { text: "替天行道旗", target: "s17", feedback: "❌" }, { text: "聚义旗", target: "s17", feedback: "❌" }] },
    m18: { id: "m18", text: "李逵在东京元宵节大闹，是因为什么？", options: [{ text: "救宋江", target: "m19", feedback: "✅" }, { text: "看花灯", target: "s18", feedback: "❌" }, { text: "抢女人", target: "s18", feedback: "❌" }, { text: "喝酒", target: "s18", feedback: "❌" }] },
    m19: { id: "m19", text: "李逵曾斧劈谁家的儿子？", options: [{ text: "罗真人", target: "m20", feedback: "✅" }, { text: "公孙胜", target: "s19", feedback: "❌" }, { text: "樊瑞", target: "s19", feedback: "❌" }, { text: "高廉", target: "s19", feedback: "❌" }] },
    m20: { id: "m20", text: "罗真人惩罚李逵，让李逵喝下了什么？", options: [{ text: "毒酒", target: "s20", feedback: "❌" }, { text: "符水", target: "s20", feedback: "❌" }, { text: "粪水", target: "m21", feedback: "✅" }, { text: "清水", target: "s20", feedback: "❌" }] },
    m21: { id: "m21", text: "李逵在征讨方腊时，被谁砍了一刀？", options: [{ text: "石宝", target: "s21", feedback: "❌" }, { text: "方杰", target: "s21", feedback: "❌" }, { text: "王寅", target: "s21", feedback: "❌" }, { text: "石宝", target: "m22", feedback: "✅" }] },
    m22: { id: "m22", text: "李逵征讨方腊后，被封为什么？", options: [{ text: "润州都统制", target: "m23", feedback: "✅" }, { text: "楚州安抚使", target: "s22", feedback: "❌" }, { text: "郓城县令", target: "s22", feedback: "❌" }, { text: "兵马都监", target: "s22", feedback: "❌" }] },
    m23: { id: "m23", text: "李逵最后是怎么死的？", options: [{ text: "被宋江毒死", target: "m24", feedback: "✅" }, { text: "战死沙场", target: "s23", feedback: "❌" }, { text: "病逝", target: "s23", feedback: "❌" }, { text: "被高俅害死", target: "s23", feedback: "❌" }] },
    m24: { id: "m24", text: "宋江为什么毒死李逵？", options: [{ text: "怕他造反", target: "m25", feedback: "✅" }, { text: "怕他报仇", target: "s24", feedback: "❌" }, { text: "怕他泄密", target: "s24", feedback: "❌" }, { text: "怕他抢位", target: "s24", feedback: "❌" }] },
    m25: { id: "m25", text: "李逵死后和谁葬在一起？", options: [{ text: "宋江", target: "m26", feedback: "✅" }, { text: "吴用", target: "s25", feedback: "❌" }, { text: "花荣", target: "s25", feedback: "❌" }, { text: "卢俊义", target: "s25", feedback: "❌" }] },
    m26: { id: "m26", text: "李逵在梁山好汉中，以什么著称？", options: [{ text: "勇猛莽撞", target: "m27", feedback: "✅" }, { text: "足智多谋", target: "s26", feedback: "❌" }, { text: "武艺高强", target: "s26", feedback: "❌" }, { text: "轻功了得", target: "s26", feedback: "❌" }] },
    m27: { id: "m27", text: "李逵的哥哥叫什么？", options: [{ text: "李达", target: "m28", feedback: "✅" }, { text: "李通", target: "s27", feedback: "❌" }, { text: "李贵", target: "s27", feedback: "❌" }, { text: "李富", target: "s27", feedback: "❌" }] },
    m28: { id: "m28", text: "李逵曾冒充谁打劫？", options: [{ text: "宋江", target: "m29", feedback: "✅" }, { text: "晁盖", target: "s28", feedback: "❌" }, { text: "卢俊义", target: "s28", feedback: "❌" }, { text: "燕青", target: "s28", feedback: "❌" }] },
    m29: { id: "m29", text: "李逵和谁最要好？", options: [{ text: "燕青", target: "m30", feedback: "✅" }, { text: "花荣", target: "s29", feedback: "❌" }, { text: "戴宗", target: "s29", feedback: "❌" }, { text: "鲁智深", target: "s29", feedback: "❌" }] },
    m30: { id: "m30", text: "李逵一生最敬佩的人是谁？", options: [{ text: "宋江", target: "complete", feedback: "✅" }, { text: "晁盖", target: "s30", feedback: "❌" }, { text: "吴用", target: "s30", feedback: "❌" }, { text: "柴进", target: "s30", feedback: "❌" }] },

    // ==================== 通关结局 ====================
    complete: {
      id: "complete",
      text: "🎉 恭喜通关！李逵从江州牢头到梁山好汉，一生鲁莽忠义，最后被宋江毒死，令人唏嘘！",
      options: [
        { text: "🔄 重新玩第六章", target: "m1", feedback: "" },
        { text: "📖 下一章 · 玉麒麟卢俊义", target: "chapter_7", feedback: "" },
        { text: "🏠 回主菜单", target: "RESTART_GAME", feedback: "" }
      ]
    },

    // ==================== 支线 s1 ~ s30（4个选项，正确答案位置随机0~3） ====================
    // 正确位置分布：s1(2), s2(3), s3(0), s4(1), s5(2), s6(3), s7(0), s8(1), s9(2), s10(3), s11(0), s12(1), s13(2), s14(3), s15(0), s16(1), s17(2), s18(3), s19(0), s20(1), s21(2), s22(3), s23(0), s24(1), s25(2), s26(3), s27(0), s28(1), s29(2), s30(3)
    s1: { id: "s1", text: "🌪️ 李逵：我外号黑旋风，你叫我浪里白条？那是张顺！", options: [{ text: "🌪️ 黑旋风", target: "s2", feedback: "对" }, { text: "🌊 浪里白条张顺", target: "s3", feedback: "错" }, { text: "黑旋风", target: "BACK", feedback: "✔" }, { text: "💪 拼命三郎石秀", target: "s4", feedback: "错" }] },
    s2: { id: "s2", text: "⛓️ 李逵：我在江州当牢头，你说是狱卒？太小看我了！", options: [{ text: "🔗 牢头", target: "s3", feedback: "对" }, { text: "👮 狱卒", target: "s4", feedback: "低级" }, { text: "📜 押司宋江", target: "s5", feedback: "错" }, { text: "牢头", target: "BACK", feedback: "✔" }] },
    s3: { id: "s3", text: "💰 李逵：宋江给了我十两银子，你说是五两？太小气了吧！", options: [{ text: "十两", target: "BACK", feedback: "✔" }, { text: "💵 五两", target: "s4", feedback: "错" }, { text: "💶 十五两", target: "s5", feedback: "错" }, { text: "💷 二十两", target: "s6", feedback: "错" }] },
    s4: { id: "s4", text: "🐟 张顺：李逵跟我打架买鱼，你说是张横？那是我哥哥！", options: [{ text: "张顺", target: "BACK", feedback: "✔" }, { text: "🌊 张横", target: "s5", feedback: "哥哥" }, { text: "🐟 阮小七", target: "s6", feedback: "梁山" }, { text: "📨 戴宗", target: "s7", feedback: "朋友" }] },
    s5: { id: "s5", text: "🌧️ 宋江：我劝开了李逵和张顺，你说是戴宗？", options: [{ text: "宋江", target: "BACK", feedback: "✔" }, { text: "📨 戴宗", target: "s6", feedback: "也劝" }, { text: "👑 晁盖", target: "s7", feedback: "不在" }, { text: "🧠 吴用", target: "s8", feedback: "不在" }] },
    s6: { id: "s6", text: "🪓 李逵：我劫法场用板斧，你说是朴刀？那多没劲！", options: [{ text: "板斧", target: "BACK", feedback: "✔" }, { text: "🔪 朴刀", target: "s7", feedback: "普通" }, { text: "🏑 禅杖", target: "s8", feedback: "鲁智深" }, { text: "🔪 戒刀", target: "s9", feedback: "武松" }] },
    s7: { id: "s7", text: "👵 李逵：我杀四虎是为母亲报仇，你说是为宋江？", options: [{ text: "他母亲", target: "BACK", feedback: "✔" }, { text: "👩 母亲", target: "s8", feedback: "对" }, { text: "🌧️ 宋江", target: "s9", feedback: "错" }, { text: "🍚 朱富", target: "s10", feedback: "错" }] },
    s8: { id: "s8", text: "🐯 老虎：李逵母亲是被我吃了，你说是病死？", options: [{ text: "被老虎吃了", target: "BACK", feedback: "✔" }, { text: "🦠 病死", target: "s9", feedback: "错" }, { text: "💀 摔死", target: "s10", feedback: "错" }, { text: "🔪 误杀", target: "s11", feedback: "错" }] },
    s9: { id: "s9", text: "🐅 李逵：我杀了两个大虎两个小虎，你记错了！", options: [{ text: "两只大虎两只小虎", target: "BACK", feedback: "✔" }, { text: "3大1小", target: "s10", feedback: "错" }, { text: "1大3小", target: "s11", feedback: "错" }, { text: "4大", target: "s12", feedback: "错" }] },
    s10: { id: "s10", text: "👑 柴进：李逵打死殷天锡后跟我上梁山，你说是朱仝？", options: [{ text: "柴进", target: "BACK", feedback: "✔" }, { text: "🍡 朱仝", target: "s11", feedback: "后来" }, { text: "⚡ 雷横", target: "s12", feedback: "不同" }, { text: "🎯 燕青", target: "s13", feedback: "后来" }] },
    s11: { id: "s11", text: "📊 李逵：我排第二十二，你数不清？", options: [{ text: "22", target: "BACK", feedback: "✔" }, { text: "🔢 21", target: "s12", feedback: "错" }, { text: "🔢 23", target: "s13", feedback: "错" }, { text: "🔢 24", target: "s14", feedback: "错" }] },
    s12: { id: "s12", text: "⭐ 李逵：我是天杀星，专管杀人！", options: [{ text: "天杀星", target: "BACK", feedback: "✔" }, { text: "🕯️ 天孤星鲁智深", target: "s13", feedback: "错" }, { text: "💔 天伤星武松", target: "s14", feedback: "错" }, { text: "🌑 天暗星杨志", target: "s15", feedback: "错" }] },
    s13: { id: "s13", text: "🪓 李逵：我用双板斧，你说是单板斧？那还叫黑旋风？", options: [{ text: "双板斧", target: "BACK", feedback: "✔" }, { text: "🪓 单板斧", target: "s14", feedback: "错" }, { text: "🔨 铁锤", target: "s15", feedback: "错" }, { text: "🗡️ 大刀", target: "s16", feedback: "错" }] },
    s14: { id: "s14", text: "😡 李逵：我鲁莽直率，你居然说我机智狡猾？", options: [{ text: "鲁莽直率", target: "BACK", feedback: "✔" }, { text: "🦊 机智狡猾", target: "s15", feedback: "错" }, { text: "😨 胆小怕事", target: "s16", feedback: "错" }, { text: "🐍 阴险毒辣", target: "s17", feedback: "错" }] },
    s15: { id: "s15", text: "🚶 李逵：我是步兵头领，你让我当骑兵？骑马我摔死！", options: [{ text: "步兵头领", target: "BACK", feedback: "✔" }, { text: "🐎 骑兵头领", target: "s16", feedback: "错" }, { text: "🌊 水军头领", target: "s17", feedback: "错" }, { text: "👀 探子", target: "s18", feedback: "错" }] },
    s16: { id: "s16", text: "🌧️ 宋江：李逵最听我的话，你以为是吴用？", options: [{ text: "宋江", target: "BACK", feedback: "✔" }, { text: "🧠 吴用", target: "s17", feedback: "军师" }, { text: "👑 晁盖", target: "s18", feedback: "早期" }, { text: "📨 戴宗", target: "s19", feedback: "朋友" }] },
    s17: { id: "s17", text: "🏁 李逵：我砍倒杏黄旗，你说是替天行道旗？那是后来改的！", options: [{ text: "杏黄旗", target: "BACK", feedback: "✔" }, { text: "🚩 帅旗", target: "s18", feedback: "错" }, { text: "☁️ 替天行道旗", target: "s19", feedback: "后来" }, { text: "🏠 聚义旗", target: "s20", feedback: "错" }] },
    s18: { id: "s18", text: "🏮 李逵：我大闹东京是为了救宋江，你说是看花灯？", options: [{ text: "救宋江", target: "BACK", feedback: "✔" }, { text: "🏮 看花灯", target: "s19", feedback: "顺便" }, { text: "👩 抢女人", target: "s20", feedback: "不是" }, { text: "🍺 喝酒", target: "s21", feedback: "也喝" }] },
    s19: { id: "s19", text: "🔮 罗真人：李逵斧劈我儿子，你说是公孙胜？", options: [{ text: "罗真人", target: "BACK", feedback: "✔" }, { text: "🐉 公孙胜", target: "s20", feedback: "徒弟" }, { text: "⚡ 樊瑞", target: "s21", feedback: "后来" }, { text: "🔮 高廉", target: "s22", feedback: "仇人" }] },
    s20: { id: "s20", text: "💩 李逵：罗真人让我喝粪水，你说是毒酒？恶心！", options: [{ text: "粪水", target: "BACK", feedback: "✔" }, { text: "☠️ 毒酒", target: "s21", feedback: "最后" }, { text: "💧 符水", target: "s22", feedback: "不是" }, { text: "💦 清水", target: "s23", feedback: "太仁慈" }] },
    s21: { id: "s21", text: "⚔️ 石宝：我砍了李逵一刀，你说是方杰？", options: [{ text: "石宝", target: "BACK", feedback: "✔" }, { text: "👑 方杰", target: "s22", feedback: "杀秦明" }, { text: "🐯 王寅", target: "s23", feedback: "杀林冲？" }, { text: "💪 邓元觉", target: "s24", feedback: "鲁智深打" }] },
    s22: { id: "s22", text: "👑 李逵：我封润州都统制，你说是楚州安抚使？那是宋江的！", options: [{ text: "润州都统制", target: "BACK", feedback: "✔" }, { text: "🏛️ 楚州安抚使宋江", target: "s23", feedback: "错" }, { text: "🏠 郓城县令", target: "s24", feedback: "错" }, { text: "⚔️ 兵马都监", target: "s25", feedback: "错" }] },
    s23: { id: "s23", text: "💀 李逵：我被宋江毒死，你说是战死？", options: [{ text: "被宋江毒死", target: "BACK", feedback: "✔" }, { text: "⚔️ 战死", target: "s24", feedback: "错" }, { text: "🦠 病逝", target: "s25", feedback: "错" }, { text: "🎭 被高俅害", target: "s26", feedback: "错" }] },
    s24: { id: "s24", text: "😱 宋江：我毒死李逵是怕他造反，你说是怕报仇？", options: [{ text: "怕他造反", target: "BACK", feedback: "✔" }, { text: "🔪 怕报仇", target: "s25", feedback: "也怕" }, { text: "🤐 怕泄密", target: "s26", feedback: "不是" }, { text: "👑 怕抢位", target: "s27", feedback: "不会" }] },
    s25: { id: "s25", text: "⚰️ 李逵：我和宋江葬在一起，你说是吴用？", options: [{ text: "宋江", target: "BACK", feedback: "✔" }, { text: "🧠 吴用", target: "s26", feedback: "自缢" }, { text: "🏹 花荣", target: "s27", feedback: "也自缢" }, { text: "🏯 卢俊义", target: "s28", feedback: "被害" }] },
    s26: { id: "s26", text: "💪 李逵：我勇猛莽撞，你说是足智多谋？那是我哥哥？", options: [{ text: "勇猛莽撞", target: "BACK", feedback: "✔" }, { text: "🧠 足智多谋", target: "s27", feedback: "吴用" }, { text: "⚔️ 武艺高强", target: "s28", feedback: "也厉害" }, { text: "💨 轻功了得", target: "s29", feedback: "时迁" }] },
    s27: { id: "s27", text: "👨 李达：我是李逵的哥哥，你叫我李通？", options: [{ text: "李达", target: "BACK", feedback: "✔" }, { text: "🔗 李通", target: "s28", feedback: "错" }, { text: "💰 李贵", target: "s29", feedback: "错" }, { text: "🏠 李富", target: "s30", feedback: "错" }] },
    s28: { id: "s28", text: "🎭 李逵：我冒充宋江打劫，你说是晁盖？", options: [{ text: "宋江", target: "BACK", feedback: "✔" }, { text: "👑 晁盖", target: "s29", feedback: "也冒充过？" }, { text: "🏯 卢俊义", target: "s30", feedback: "错" }, { text: "🎯 燕青", target: "s1", feedback: "错" }] },
    s29: { id: "s29", text: "🎯 燕青：我和李逵最要好，你说是花荣？", options: [{ text: "燕青", target: "BACK", feedback: "✔" }, { text: "🏹 花荣", target: "s30", feedback: "不同" }, { text: "📨 戴宗", target: "s1", feedback: "领导" }, { text: "⚔️ 鲁智深", target: "s2", feedback: "不同山" }] },
    s30: { id: "s30", text: "🌧️ 宋江：李逵最敬佩我，你说是晁盖？", options: [{ text: "宋江", target: "BACK", feedback: "✔" }, { text: "👑 晁盖", target: "s1", feedback: "也敬" }, { text: "🧠 吴用", target: "s2", feedback: "不" }, { text: "👑 柴进", target: "s3", feedback: "不" }] },

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
      text: "💀 李逵最后的结局是？",
      options: [
        { text: "战死沙场", target: "death_end", feedback: "❌ 错！" },
        { text: "被宋江毒酒毒死", target: "death_end", feedback: "✅ 对，但触发结局" },
        { text: "病逝于六和寺", target: "death_end", feedback: "❌ 错！" },
        { text: "归隐山林", target: "death_end", feedback: "❌ 错！" }
      ]
    },
    death_end: {
      id: "death_end",
      text: "🎬 游戏结束！错题太多，李逵不想带你玩了！",
      options: [{ text: "🔄 重新开始", target: "RESTART_GAME", feedback: "" }]
    }
  }
};