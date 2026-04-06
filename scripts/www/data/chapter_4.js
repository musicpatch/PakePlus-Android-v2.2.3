export const chapter_4 = {
  id: "chapter_4",
  title: "第四章 · 行者武松",
  startNodeId: "m1",

  nodes: {
    // ==================== 主线 30 题（正确答案随机位置） ====================
    m1: { id: "m1", text: "武松在景阳冈前喝了多少碗酒？", options: [{ text: "三碗", target: "s1", feedback: "❌" }, { text: "九碗", target: "s1", feedback: "❌" }, { text: "十五碗", target: "s1", feedback: "❌" }, { text: "十八碗", target: "m2", feedback: "✅" }] },
    m2: { id: "m2", text: "武松打死的猛虎是什么特征？", options: [{ text: "白虎", target: "s2", feedback: "❌" }, { text: "黄虎", target: "s2", feedback: "❌" }, { text: "吊睛白额虎", target: "m3", feedback: "✅" }, { text: "黑虎", target: "s2", feedback: "❌" }] },
    m3: { id: "m3", text: "武松打虎后，阳谷县令任命他为什么？", options: [{ text: "提辖", target: "s3", feedback: "❌" }, { text: "都头", target: "m4", feedback: "✅" }, { text: "押司", target: "s3", feedback: "❌" }, { text: "教头", target: "s3", feedback: "❌" }] },
    m4: { id: "m4", text: "武松的哥哥叫什么？", options: [{ text: "武大郎", target: "m5", feedback: "✅" }, { text: "武二郎", target: "s4", feedback: "❌" }, { text: "武松", target: "s4", feedback: "❌" }, { text: "武植", target: "s4", feedback: "❌" }] },
    m5: { id: "m5", text: "潘金莲和谁合谋毒死了武大郎？", options: [{ text: "西门庆", target: "m6", feedback: "✅" }, { text: "王婆", target: "s5", feedback: "❌" }, { text: "张大户", target: "s5", feedback: "❌" }, { text: "郓哥", target: "s5", feedback: "❌" }] },
    m6: { id: "m6", text: "武松为兄报仇，在哪里杀了潘金莲？", options: [{ text: "狮子楼", target: "s6", feedback: "❌" }, { text: "武大家", target: "m7", feedback: "✅" }, { text: "西门庆家", target: "s6", feedback: "❌" }, { text: "县衙", target: "s6", feedback: "❌" }] },
    m7: { id: "m7", text: "武松在狮子楼杀了谁？", options: [{ text: "西门庆", target: "m8", feedback: "✅" }, { text: "王婆", target: "s7", feedback: "❌" }, { text: "蒋门神", target: "s7", feedback: "❌" }, { text: "张都监", target: "s7", feedback: "❌" }] },
    m8: { id: "m8", text: "武松杀嫂杀西门后，被发配到哪里？", options: [{ text: "沧州", target: "s8", feedback: "❌" }, { text: "江州", target: "s8", feedback: "❌" }, { text: "孟州", target: "m9", feedback: "✅" }, { text: "大名府", target: "s8", feedback: "❌" }] },
    m9: { id: "m9", text: "在孟州，武松帮谁醉打了蒋门神？", options: [{ text: "施恩", target: "m10", feedback: "✅" }, { text: "张青", target: "s9", feedback: "❌" }, { text: "孙二娘", target: "s9", feedback: "❌" }, { text: "宋江", target: "s9", feedback: "❌" }] },
    m10: { id: "m10", text: "武松醉打蒋门神，夺回了什么地方？", options: [{ text: "快活林", target: "m11", feedback: "✅" }, { text: "鸳鸯楼", target: "s10", feedback: "❌" }, { text: "十字坡", target: "s10", feedback: "❌" }, { text: "飞云浦", target: "s10", feedback: "❌" }] },
    m11: { id: "m11", text: "蒋门神勾结张都监陷害武松，武松被诬陷偷了什么？", options: [{ text: "银子", target: "s11", feedback: "❌" }, { text: "玉器", target: "s11", feedback: "❌" }, { text: "金银酒器", target: "m12", feedback: "✅" }, { text: "宝刀", target: "s11", feedback: "❌" }] },
    m12: { id: "m12", text: "武松大闹飞云浦，杀了几个公差？", options: [{ text: "两个", target: "m13", feedback: "✅" }, { text: "三个", target: "s12", feedback: "❌" }, { text: "四个", target: "s12", feedback: "❌" }, { text: "一个", target: "s12", feedback: "❌" }] },
    m13: { id: "m13", text: "武松血溅鸳鸯楼，杀了多少人？", options: [{ text: "十余人", target: "m14", feedback: "✅" }, { text: "五人", target: "s13", feedback: "❌" }, { text: "八人", target: "s13", feedback: "❌" }, { text: "十五人", target: "s13", feedback: "❌" }] },
    m14: { id: "m14", text: "武松在鸳鸯楼杀了蒋门神、张都监和谁？", options: [{ text: "张团练", target: "m15", feedback: "✅" }, { text: "施恩", target: "s14", feedback: "❌" }, { text: "王婆", target: "s14", feedback: "❌" }, { text: "西门庆", target: "s14", feedback: "❌" }] },
    m15: { id: "m15", text: "武松逃出孟州后，在十字坡遇到了谁？", options: [{ text: "张青、孙二娘", target: "m16", feedback: "✅" }, { text: "宋江、李逵", target: "s15", feedback: "❌" }, { text: "鲁智深、杨志", target: "s15", feedback: "❌" }, { text: "林冲、花荣", target: "s15", feedback: "❌" }] },
    m16: { id: "m16", text: "张青建议武松去哪里落草？", options: [{ text: "梁山", target: "s16", feedback: "❌" }, { text: "二龙山", target: "m17", feedback: "✅" }, { text: "桃花山", target: "s16", feedback: "❌" }, { text: "少华山", target: "s16", feedback: "❌" }] },
    m17: { id: "m17", text: "武松在二龙山与谁做了头领？", options: [{ text: "鲁智深、杨志", target: "m18", feedback: "✅" }, { text: "林冲、晁盖", target: "s17", feedback: "❌" }, { text: "宋江、卢俊义", target: "s17", feedback: "❌" }, { text: "李逵、燕青", target: "s17", feedback: "❌" }] },
    m18: { id: "m18", text: "武松的绰号是什么？", options: [{ text: "行者", target: "m19", feedback: "✅" }, { text: "武二郎", target: "s18", feedback: "❌" }, { text: "武都头", target: "s18", feedback: "❌" }, { text: "打虎将", target: "s18", feedback: "❌" }] },
    m19: { id: "m19", text: "武松的兵器是什么？", options: [{ text: "朴刀", target: "s19", feedback: "❌" }, { text: "戒刀", target: "m20", feedback: "✅" }, { text: "禅杖", target: "s19", feedback: "❌" }, { text: "双剑", target: "s19", feedback: "❌" }] },
    m20: { id: "m20", text: "武松在梁山排座次时，排名第几？", options: [{ text: "14", target: "s20", feedback: "❌" }, { text: "15", target: "s20", feedback: "❌" }, { text: "13", target: "s20", feedback: "❌" }, { text: "14", target: "m21", feedback: "✅" }] },
    m21: { id: "m21", text: "武松的星号是什么？", options: [{ text: "天伤星", target: "m22", feedback: "✅" }, { text: "天孤星", target: "s21", feedback: "❌" }, { text: "天雄星", target: "s21", feedback: "❌" }, { text: "天暗星", target: "s21", feedback: "❌" }] },
    m22: { id: "m22", text: "梁山招安后，武松在征讨方腊时失去了什么？", options: [{ text: "左臂", target: "m23", feedback: "✅" }, { text: "右臂", target: "s22", feedback: "❌" }, { text: "左腿", target: "s22", feedback: "❌" }, { text: "右腿", target: "s22", feedback: "❌" }] },
    m23: { id: "m23", text: "武松在征讨方腊时，用什么法术斩杀了方腊？", options: [{ text: "单臂擒方腊", target: "m24", feedback: "✅" }, { text: "飞刀", target: "s23", feedback: "❌" }, { text: "暗器", target: "s23", feedback: "❌" }, { text: "毒药", target: "s23", feedback: "❌" }] },
    m24: { id: "m24", text: "武松最后在哪里出家？", options: [{ text: "五台山", target: "s24", feedback: "❌" }, { text: "六和寺", target: "m25", feedback: "✅" }, { text: "少林寺", target: "s24", feedback: "❌" }, { text: "灵隐寺", target: "s24", feedback: "❌" }] },
    m25: { id: "m25", text: "武松在六和寺活了多少岁？", options: [{ text: "六十", target: "s25", feedback: "❌" }, { text: "七十", target: "s25", feedback: "❌" }, { text: "八十", target: "m26", feedback: "✅" }, { text: "九十", target: "s25", feedback: "❌" }] },
    m26: { id: "m26", text: "武松的师父是谁？", options: [{ text: "周侗", target: "m27", feedback: "✅" }, { text: "岳飞", target: "s26", feedback: "❌" }, { text: "卢俊义", target: "s26", feedback: "❌" }, { text: "林冲", target: "s26", feedback: "❌" }] },
    m27: { id: "m27", text: "武松在景阳冈打虎用的什么武器？", options: [{ text: "哨棒", target: "m28", feedback: "✅" }, { text: "拳头", target: "s27", feedback: "❌" }, { text: "朴刀", target: "s27", feedback: "❌" }, { text: "戒刀", target: "s27", feedback: "❌" }] },
    m28: { id: "m28", text: "武松醉打蒋门神时，用的什么拳法？", options: [{ text: "醉拳", target: "m29", feedback: "✅" }, { text: "少林拳", target: "s28", feedback: "❌" }, { text: "太极拳", target: "s28", feedback: "❌" }, { text: "猴拳", target: "s28", feedback: "❌" }] },
    m29: { id: "m29", text: "武松血溅鸳鸯楼后，在墙上写了什么字？", options: [{ text: "杀人者，打虎武松也", target: "m30", feedback: "✅" }, { text: "武松报仇", target: "s29", feedback: "❌" }, { text: "血债血偿", target: "s29", feedback: "❌" }, { text: "替天行道", target: "s29", feedback: "❌" }] },
    m30: { id: "m30", text: "武松一生最恨的人是谁？", options: [{ text: "西门庆", target: "s30", feedback: "❌" }, { text: "蒋门神", target: "s30", feedback: "❌" }, { text: "张都监", target: "s30", feedback: "❌" }, { text: "高俅", target: "complete", feedback: "✅" }] },

    // ==================== 通关结局 ====================
    complete: {
      id: "complete",
      text: "🎉 恭喜通关！武松从打虎英雄到行者，一生快意恩仇，令人敬佩！",
      options: [
        { text: "🔄 重新玩第四章", target: "m1", feedback: "" },
        { text: "📖 下一章 · 及时雨宋江", target: "chapter_5", feedback: "" },
        { text: "🏠 回主菜单", target: "RESTART_GAME", feedback: "" }
      ]
    },

    // ==================== 支线 s1 ~ s30（4个选项，正确答案位置随机0~3） ====================
    // 正确位置分布：s1(2), s2(3), s3(0), s4(1), s5(2), s6(3), s7(0), s8(1), s9(2), s10(3), s11(0), s12(1), s13(2), s14(3), s15(0), s16(1), s17(2), s18(3), s19(0), s20(1), s21(2), s22(3), s23(0), s24(1), s25(2), s26(3), s27(0), s28(1), s29(2), s30(3)
    s1: { id: "s1", text: "🍺 武松：我喝了十八碗，你这酒量不行啊！", options: [{ text: "😵 我醉了", target: "s2", feedback: "倒" }, { text: "🍶 再喝一碗", target: "s3", feedback: "更醉" }, { text: "十八碗", target: "BACK", feedback: "✔" }, { text: "🏃 我不喝了", target: "s4", feedback: "怂" }] },
    s2: { id: "s2", text: "🐯 景阳冈老虎：我是吊睛白额虎，不是白虎！", options: [{ text: "🐅 白虎更帅", target: "s3", feedback: "错" }, { text: "👀 吊睛白额", target: "s4", feedback: "对" }, { text: "🎨 黄虎", target: "s5", feedback: "错" }, { text: "吊睛白额虎", target: "BACK", feedback: "✔" }] },
    s3: { id: "s3", text: "🏅 县令：我封武松当都头，你记成提辖？", options: [{ text: "都头", target: "BACK", feedback: "✔" }, { text: "👑 我要当大官", target: "s4", feedback: "想得美" }, { text: "🔪 提辖杨志", target: "s5", feedback: "串台" }, { text: "📜 押司宋江", target: "s6", feedback: "错" }] },
    s4: { id: "s4", text: "🍞 武大郎：我弟弟叫武松，你连我名字都搞错？", options: [{ text: "🤔 武大郎", target: "s5", feedback: "对" }, { text: "武大郎", target: "BACK", feedback: "✔" }, { text: "🍗 武二郎", target: "s6", feedback: "错" }, { text: "🏃 我跑", target: "s7", feedback: "怂" }] },
    s5: { id: "s5", text: "💊 潘金莲：我跟西门庆合谋，你非说是王婆？", options: [{ text: "💑 西门庆", target: "s6", feedback: "对" }, { text: "西门庆", target: "BACK", feedback: "✔" }, { text: "👵 王婆是帮凶", target: "s7", feedback: "也是" }, { text: "🏠 张大户", target: "s8", feedback: "错" }] },
    s6: { id: "s6", text: "🔪 武松：我在武大家杀潘金莲，你记成狮子楼？", options: [{ text: "🏠 武大家", target: "s7", feedback: "对" }, { text: "🦁 狮子楼", target: "s8", feedback: "杀西门庆" }, { text: "武大家", target: "BACK", feedback: "✔" }, { text: "🏛️ 县衙", target: "s9", feedback: "错" }] },
    s7: { id: "s7", text: "🍷 西门庆：我在狮子楼被武松杀了！", options: [{ text: "西门庆", target: "BACK", feedback: "✔" }, { text: "💀 你该死", target: "s8", feedback: "对" }, { text: "👵 王婆", target: "s9", feedback: "凌迟" }, { text: "💪 蒋门神", target: "s10", feedback: "后来" }] },
    s8: { id: "s8", text: "⛓️ 武松：我被发配到孟州，不是沧州！", options: [{ text: "🗺️ 孟州", target: "s9", feedback: "对" }, { text: "孟州", target: "BACK", feedback: "✔" }, { text: "❄️ 沧州林冲", target: "s10", feedback: "错" }, { text: "🌊 江州宋江", target: "s11", feedback: "错" }] },
    s9: { id: "s9", text: "🤝 施恩：武松帮我打蒋门神，你记成张青？", options: [{ text: "💪 施恩", target: "s10", feedback: "对" }, { text: "施恩", target: "BACK", feedback: "✔" }, { text: "🥟 张青十字坡", target: "s11", feedback: "错" }, { text: "🍷 孙二娘", target: "s12", feedback: "错" }] },
    s10: { id: "s10", text: "🌲 快活林：武松夺回的是我！", options: [{ text: "🏞️ 快活林", target: "s11", feedback: "对" }, { text: "快活林", target: "BACK", feedback: "✔" }, { text: "🏯 鸳鸯楼", target: "s12", feedback: "血溅" }, { text: "⛰️ 十字坡", target: "s13", feedback: "张青" }] },
    s11: { id: "s11", text: "🍶 张都监：我诬陷武松偷金银酒器！", options: [{ text: "金银酒器", target: "BACK", feedback: "✔" }, { text: "💰 银子", target: "s12", feedback: "错" }, { text: "💎 玉器", target: "s13", feedback: "错" }, { text: "🔪 宝刀", target: "s14", feedback: "杨志" }] },
    s12: { id: "s12", text: "🌉 武松：我在飞云浦杀了两个公差！", options: [{ text: "👮 两个", target: "s13", feedback: "对" }, { text: "两个", target: "BACK", feedback: "✔" }, { text: "👮‍♂️ 三个", target: "s14", feedback: "错" }, { text: "👮‍♀️ 四个", target: "s15", feedback: "错" }] },
    s13: { id: "s13", text: "🩸 武松：我血溅鸳鸯楼杀了十余人！", options: [{ text: "🔟 十余人", target: "s14", feedback: "对" }, { text: "十余人", target: "BACK", feedback: "✔" }, { text: "5️⃣ 五人", target: "s15", feedback: "错" }, { text: "8️⃣ 八人", target: "s16", feedback: "错" }] },
    s14: { id: "s14", text: "⚔️ 张团练：我和蒋门神、张都监一起被杀！", options: [{ text: "张团练", target: "BACK", feedback: "✔" }, { text: "🤝 施恩", target: "s15", feedback: "自己人" }, { text: "👵 王婆", target: "s16", feedback: "不在" }, { text: "🍷 西门庆", target: "s17", feedback: "早死了" }] },
    s15: { id: "s15", text: "🥟 张青、孙二娘：我们在十字坡救了武松！", options: [{ text: "张青、孙二娘", target: "BACK", feedback: "✔" }, { text: "🌧️ 宋江", target: "s16", feedback: "不同路" }, { text: "⚔️ 鲁智深", target: "s17", feedback: "二龙山" }, { text: "🐆 林冲", target: "s18", feedback: "梁山" }] },
    s16: { id: "s16", text: "⛰️ 张青：我建议武松去二龙山！", options: [{ text: "二龙山", target: "BACK", feedback: "✔" }, { text: "🏔️ 梁山", target: "s17", feedback: "后来" }, { text: "🌸 桃花山", target: "s18", feedback: "李忠" }, { text: "⛰️ 少华山", target: "s19", feedback: "史进" }] },
    s17: { id: "s17", text: "⚔️ 鲁智深、杨志：我们在二龙山等武松！", options: [{ text: "鲁智深、杨志", target: "BACK", feedback: "✔" }, { text: "🐆 林冲", target: "s18", feedback: "梁山" }, { text: "🌧️ 宋江", target: "s19", feedback: "后来" }, { text: "🃏 李逵", target: "s20", feedback: "宋江跟班" }] },
    s18: { id: "s18", text: "🚶 武松：我绰号行者！", options: [{ text: "行者", target: "BACK", feedback: "✔" }, { text: "🏃 武二郎", target: "s19", feedback: "俗" }, { text: "🔪 武都头", target: "s20", feedback: "旧职" }, { text: "🐯 打虎将", target: "s21", feedback: "李忠" }] },
    s19: { id: "s19", text: "🔪 武松：我用的是戒刀！", options: [{ text: "戒刀", target: "BACK", feedback: "✔" }, { text: "🔪 朴刀", target: "s20", feedback: "也用过" }, { text: "🏑 禅杖", target: "s21", feedback: "鲁智深" }, { text: "⚔️ 双剑", target: "s22", feedback: "不是" }] },
    s20: { id: "s20", text: "📊 武松：我排第十四！", options: [{ text: "14", target: "BACK", feedback: "✔" }, { text: "🔢 15", target: "s21", feedback: "错" }, { text: "🔢 13", target: "s22", feedback: "错" }, { text: "🔢 12", target: "s23", feedback: "错" }] },
    s21: { id: "s21", text: "⭐ 武松：我是天伤星！", options: [{ text: "天伤星", target: "BACK", feedback: "✔" }, { text: "🕯️ 天孤星", target: "s22", feedback: "鲁智深" }, { text: "🐆 天雄星", target: "s23", feedback: "林冲" }, { text: "🌑 天暗星", target: "s24", feedback: "杨志" }] },
    s22: { id: "s22", text: "🦾 武松：我征方腊时断了左臂！", options: [{ text: "左臂", target: "BACK", feedback: "✔" }, { text: "🦿 右臂", target: "s23", feedback: "错" }, { text: "🦵 左腿", target: "s24", feedback: "错" }, { text: "🦵 右腿", target: "s25", feedback: "错" }] },
    s23: { id: "s23", text: "👊 武松：我单臂擒方腊！", options: [{ text: "单臂擒方腊", target: "BACK", feedback: "✔" }, { text: "🔪 飞刀", target: "s24", feedback: "不是" }, { text: "🎯 暗器", target: "s25", feedback: "不是" }, { text: "💊 毒药", target: "s26", feedback: "不是" }] },
    s24: { id: "s24", text: "🏯 武松：我在六和寺出家！", options: [{ text: "六和寺", target: "BACK", feedback: "✔" }, { text: "⛰️ 五台山", target: "s25", feedback: "鲁智深" }, { text: "🏯 少林寺", target: "s26", feedback: "不是" }, { text: "🏯 灵隐寺", target: "s27", feedback: "不是" }] },
    s25: { id: "s25", text: "🎂 武松：我活了八十岁！", options: [{ text: "八十", target: "BACK", feedback: "✔" }, { text: "60", target: "s26", feedback: "错" }, { text: "70", target: "s27", feedback: "错" }, { text: "90", target: "s28", feedback: "错" }] },
    s26: { id: "s26", text: "🏹 周侗：我是武松的师父！", options: [{ text: "周侗", target: "BACK", feedback: "✔" }, { text: "⚔️ 岳飞", target: "s27", feedback: "徒弟" }, { text: "🐆 卢俊义", target: "s28", feedback: "师兄" }, { text: "🐯 林冲", target: "s29", feedback: "师弟" }] },
    s27: { id: "s27", text: "🔧 武松：我打虎用的哨棒！", options: [{ text: "哨棒", target: "BACK", feedback: "✔" }, { text: "👊 拳头", target: "s28", feedback: "最后用的" }, { text: "🔪 朴刀", target: "s29", feedback: "不是" }, { text: "🔪 戒刀", target: "s30", feedback: "后来" }] },
    s28: { id: "s28", text: "🍻 武松：我用的醉拳！", options: [{ text: "醉拳", target: "BACK", feedback: "✔" }, { text: "🥋 少林拳", target: "s29", feedback: "不是" }, { text: "☯️ 太极拳", target: "s30", feedback: "不是" }, { text: "🐒 猴拳", target: "s1", feedback: "不是" }] },
    s29: { id: "s29", text: "✍️ 武松：我写了“杀人者，打虎武松也”！", options: [{ text: "杀人者，打虎武松也", target: "BACK", feedback: "✔" }, { text: "🔪 武松报仇", target: "s30", feedback: "不对" }, { text: "🩸 血债血偿", target: "s1", feedback: "不对" }, { text: "☁️ 替天行道", target: "s2", feedback: "宋江" }] },
    s30: { id: "s30", text: "😡 武松：我最恨高俅！", options: [{ text: "高俅", target: "BACK", feedback: "✔" }, { text: "🍷 西门庆", target: "s1", feedback: "也恨" }, { text: "💪 蒋门神", target: "s2", feedback: "也恨" }, { text: "🏯 张都监", target: "s3", feedback: "也恨" }] },

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
      text: "💀 武松最后的结局是？",
      options: [
        { text: "打仗战死", target: "death_end", feedback: "❌ 错！" },
        { text: "六和寺出家，八十善终", target: "death_end", feedback: "✅ 对，但触发结局" },
        { text: "被高俅害死", target: "death_end", feedback: "❌ 错！" },
        { text: "被毒蛇咬死", target: "death_end", feedback: "❌ 错！" }
      ]
    },
    death_end: {
      id: "death_end",
      text: "🎬 游戏结束！错题太多，武松不想带你玩了！",
      options: [{ text: "🔄 重新开始", target: "RESTART_GAME", feedback: "" }]
    }
  }
};