export const chapter_5 = {
  id: "chapter_5",
  title: "第五章 · 及时雨宋江",
  startNodeId: "m1",

  nodes: {
    // ==================== 主线 30 题（正确答案随机位置） ====================
    m1: { id: "m1", text: "宋江的绰号是什么？", options: [{ text: "及时雨", target: "m2", feedback: "✅" }, { text: "呼保义", target: "s1", feedback: "❌" }, { text: "黑旋风", target: "s1", feedback: "❌" }, { text: "智多星", target: "s1", feedback: "❌" }] },
    m2: { id: "m2", text: "宋江在哪个县做押司？", options: [{ text: "阳谷县", target: "s2", feedback: "❌" }, { text: "郓城县", target: "m3", feedback: "✅" }, { text: "清河县", target: "s2", feedback: "❌" }, { text: "大名府", target: "s2", feedback: "❌" }] },
    m3: { id: "m3", text: "宋江因何事杀死阎婆惜？", options: [{ text: "通奸", target: "s3", feedback: "❌" }, { text: "偷了晁盖的书信", target: "m4", feedback: "✅" }, { text: "骂他", target: "s3", feedback: "❌" }, { text: "骗钱", target: "s3", feedback: "❌" }] },
    m4: { id: "m4", text: "宋江在柴进庄上遇到了谁？", options: [{ text: "武松", target: "m5", feedback: "✅" }, { text: "林冲", target: "s4", feedback: "❌" }, { text: "鲁智深", target: "s4", feedback: "❌" }, { text: "杨志", target: "s4", feedback: "❌" }] },
    m5: { id: "m5", text: "宋江在清风寨被谁抓住？", options: [{ text: "刘高", target: "m6", feedback: "✅" }, { text: "花荣", target: "s5", feedback: "❌" }, { text: "秦明", target: "s5", feedback: "❌" }, { text: "黄信", target: "s5", feedback: "❌" }] },
    m6: { id: "m6", text: "宋江在江州结识了谁？", options: [{ text: "戴宗、李逵", target: "m7", feedback: "✅" }, { text: "张顺、张横", target: "s6", feedback: "❌" }, { text: "阮氏三雄", target: "s6", feedback: "❌" }, { text: "卢俊义", target: "s6", feedback: "❌" }] },
    m7: { id: "m7", text: "李逵的外号是什么？", options: [{ text: "黑旋风", target: "m8", feedback: "✅" }, { text: "浪里白条", target: "s7", feedback: "❌" }, { text: "拼命三郎", target: "s7", feedback: "❌" }, { text: "鼓上蚤", target: "s7", feedback: "❌" }] },
    m8: { id: "m8", text: "宋江在浔阳楼题了什么诗？", options: [{ text: "反诗", target: "m9", feedback: "✅" }, { text: "藏头诗", target: "s8", feedback: "❌" }, { text: "情诗", target: "s8", feedback: "❌" }, { text: "打油诗", target: "s8", feedback: "❌" }] },
    m9: { id: "m9", text: "宋江在江州被判处什么刑罚？", options: [{ text: "斩首", target: "m10", feedback: "✅" }, { text: "刺配", target: "s9", feedback: "❌" }, { text: "充军", target: "s9", feedback: "❌" }, { text: "杖刑", target: "s9", feedback: "❌" }] },
    m10: { id: "m10", text: "谁在江州劫法场救了宋江？", options: [{ text: "晁盖、李逵等梁山好汉", target: "m11", feedback: "✅" }, { text: "武松", target: "s10", feedback: "❌" }, { text: "鲁智深", target: "s10", feedback: "❌" }, { text: "林冲", target: "s10", feedback: "❌" }] },
    m11: { id: "m11", text: "宋江上梁山后，排在第几位？", options: [{ text: "第二位", target: "s11", feedback: "❌" }, { text: "第三位", target: "m12", feedback: "✅" }, { text: "第一位", target: "s11", feedback: "❌" }, { text: "第四位", target: "s11", feedback: "❌" }] },
    m12: { id: "m12", text: "晁盖死后，宋江成为梁山第几任寨主？", options: [{ text: "第三任", target: "m13", feedback: "✅" }, { text: "第二任", target: "s12", feedback: "❌" }, { text: "第四任", target: "s12", feedback: "❌" }, { text: "第一任", target: "s12", feedback: "❌" }] },
    m13: { id: "m13", text: "宋江将梁山聚义厅改为什么？", options: [{ text: "忠义堂", target: "m14", feedback: "✅" }, { text: "聚义厅", target: "s13", feedback: "❌" }, { text: "议事厅", target: "s13", feedback: "❌" }, { text: "白虎堂", target: "s13", feedback: "❌" }] },
    m14: { id: "m14", text: "宋江在梁山排座次时，位列第几？", options: [{ text: "第一", target: "m15", feedback: "✅" }, { text: "第二", target: "s14", feedback: "❌" }, { text: "第三", target: "s14", feedback: "❌" }, { text: "第四", target: "s14", feedback: "❌" }] },
    m15: { id: "m15", text: "宋江的星号是什么？", options: [{ text: "天魁星", target: "m16", feedback: "✅" }, { text: "天罡星", target: "s15", feedback: "❌" }, { text: "天机星", target: "s15", feedback: "❌" }, { text: "天闲星", target: "s15", feedback: "❌" }] },
    m16: { id: "m16", text: "宋江在梁山的主要武器是什么？", options: [{ text: "朴刀", target: "s16", feedback: "❌" }, { text: "枪", target: "s16", feedback: "❌" }, { text: "剑", target: "s16", feedback: "❌" }, { text: "混元剑", target: "m17", feedback: "✅" }] },
    m17: { id: "m17", text: "宋江收服了哪个猛将，让他归顺梁山？", options: [{ text: "关胜", target: "s17", feedback: "❌" }, { text: "呼延灼", target: "s17", feedback: "❌" }, { text: "卢俊义", target: "m18", feedback: "✅" }, { text: "秦明", target: "s17", feedback: "❌" }] },
    m18: { id: "m18", text: "宋江率军攻打大名府，是为了救谁？", options: [{ text: "卢俊义", target: "m19", feedback: "✅" }, { text: "石秀", target: "s18", feedback: "❌" }, { text: "杨雄", target: "s18", feedback: "❌" }, { text: "燕青", target: "s18", feedback: "❌" }] },
    m19: { id: "m19", text: "梁山招安后，宋江率军征讨了哪个势力？", options: [{ text: "辽国", target: "m20", feedback: "✅" }, { text: "西夏", target: "s19", feedback: "❌" }, { text: "金国", target: "s19", feedback: "❌" }, { text: "吐蕃", target: "s19", feedback: "❌" }] },
    m20: { id: "m20", text: "征讨方腊后，宋江被封为什么官职？", options: [{ text: "楚州安抚使", target: "m21", feedback: "✅" }, { text: "郓城县令", target: "s20", feedback: "❌" }, { text: "兵马都监", target: "s20", feedback: "❌" }, { text: "提辖", target: "s20", feedback: "❌" }] },
    m21: { id: "m21", text: "宋江最后是被谁毒死的？", options: [{ text: "高俅", target: "s21", feedback: "❌" }, { text: "蔡京", target: "s21", feedback: "❌" }, { text: "童贯", target: "s21", feedback: "❌" }, { text: "高俅、杨戬等奸臣", target: "m22", feedback: "✅" }] },
    m22: { id: "m22", text: "宋江临死前，担心谁造反，骗他一起喝毒酒？", options: [{ text: "李逵", target: "m23", feedback: "✅" }, { text: "花荣", target: "s22", feedback: "❌" }, { text: "吴用", target: "s22", feedback: "❌" }, { text: "卢俊义", target: "s22", feedback: "❌" }] },
    m23: { id: "m23", text: "宋江死后，谁在宋江墓前自缢？", options: [{ text: "吴用、花荣", target: "m24", feedback: "✅" }, { text: "李逵", target: "s23", feedback: "❌" }, { text: "卢俊义", target: "s23", feedback: "❌" }, { text: "燕青", target: "s23", feedback: "❌" }] },
    m24: { id: "m24", text: "宋江的弟弟是谁？", options: [{ text: "宋清", target: "m25", feedback: "✅" }, { text: "宋万", target: "s24", feedback: "❌" }, { text: "宋勇", target: "s24", feedback: "❌" }, { text: "宋仁", target: "s24", feedback: "❌" }] },
    m25: { id: "m25", text: "宋江的父亲叫什么？", options: [{ text: "宋太公", target: "m26", feedback: "✅" }, { text: "宋公明", target: "s25", feedback: "❌" }, { text: "宋押司", target: "s25", feedback: "❌" }, { text: "宋员外", target: "s25", feedback: "❌" }] },
    m26: { id: "m26", text: "宋江曾题反诗于浔阳楼，诗句中“他时若遂凌云志”的下一句是什么？", options: [{ text: "敢笑黄巢不丈夫", target: "m27", feedback: "✅" }, { text: "敢笑宋江不丈夫", target: "s26", feedback: "❌" }, { text: "敢笑高俅不丈夫", target: "s26", feedback: "❌" }, { text: "敢笑黄巢大丈夫", target: "s26", feedback: "❌" }] },
    m27: { id: "m27", text: "宋江的三打祝家庄中，谁献策里应外合？", options: [{ text: "孙立", target: "m28", feedback: "✅" }, { text: "吴用", target: "s27", feedback: "❌" }, { text: "石秀", target: "s27", feedback: "❌" }, { text: "杨雄", target: "s27", feedback: "❌" }] },
    m28: { id: "m28", text: "宋江在梁山好汉中，以什么著称？", options: [{ text: "仗义疏财", target: "m29", feedback: "✅" }, { text: "武艺高强", target: "s28", feedback: "❌" }, { text: "足智多谋", target: "s28", feedback: "❌" }, { text: "法术高强", target: "s28", feedback: "❌" }] },
    m29: { id: "m29", text: "宋江的外号“及时雨”是什么意思？", options: [{ text: "乐于助人，如雨及时", target: "m30", feedback: "✅" }, { text: "下雨及时", target: "s29", feedback: "❌" }, { text: "长得像雨", target: "s29", feedback: "❌" }, { text: "喜欢下雨", target: "s29", feedback: "❌" }] },
    m30: { id: "m30", text: "宋江一生最核心的信念是什么？", options: [{ text: "忠君报国，接受招安", target: "complete", feedback: "✅" }, { text: "反抗朝廷，自立为王", target: "s30", feedback: "❌" }, { text: "劫富济贫，快意恩仇", target: "s30", feedback: "❌" }, { text: "称帝建国", target: "s30", feedback: "❌" }] },

    // ==================== 通关结局 ====================
    complete: {
      id: "complete",
      text: "🎉 恭喜通关！宋江从郓城押司到梁山寨主，一生忠义却以悲剧收场，令人感慨！",
      options: [
        { text: "🔄 重新玩第五章", target: "m1", feedback: "" },
        { text: "📖 下一章 · 黑旋风李逵", target: "chapter_6", feedback: "" },
        { text: "🏠 回主菜单", target: "RESTART_GAME", feedback: "" }
      ]
    },

    // ==================== 支线 s1 ~ s30（4个选项，正确答案位置随机0~3） ====================
    // 正确位置分布：s1(2), s2(3), s3(0), s4(1), s5(2), s6(3), s7(0), s8(1), s9(2), s10(3), s11(0), s12(1), s13(2), s14(3), s15(0), s16(1), s17(2), s18(3), s19(0), s20(1), s21(2), s22(3), s23(0), s24(1), s25(2), s26(3), s27(0), s28(1), s29(2), s30(3)
    s1: { id: "s1", text: "🌧️ 宋江：我外号及时雨，你叫我黑旋风？李逵会不高兴的！", options: [{ text: "🌧️ 及时雨", target: "s2", feedback: "对" }, { text: "🔄 呼保义也是我", target: "s3", feedback: "也对" }, { text: "及时雨", target: "BACK", feedback: "✔" }, { text: "🌪️ 黑旋风是李逵", target: "s4", feedback: "对" }] },
    s2: { id: "s2", text: "🏛️ 宋江：我在郓城县当押司，你记成阳谷县？那是武松的地盘！", options: [{ text: "🗺️ 郓城县", target: "s3", feedback: "对" }, { text: "🏠 阳谷县武松", target: "s4", feedback: "错" }, { text: "📜 清河县", target: "s5", feedback: "错" }, { text: "郓城县", target: "BACK", feedback: "✔" }] },
    s3: { id: "s3", text: "💔 阎婆惜：宋江杀我是因为晁盖的书信，你说是通奸？", options: [{ text: "杀死阎婆惜", target: "BACK", feedback: "✔" }, { text: "💌 晁盖书信", target: "s4", feedback: "对" }, { text: "💑 通奸", target: "s5", feedback: "错" }, { text: "😡 骂他", target: "s6", feedback: "错" }] },
    s4: { id: "s4", text: "🤝 武松：我在柴进庄上遇到宋江，你记成林冲？", options: [{ text: "武松", target: "BACK", feedback: "✔" }, { text: "🐆 林冲", target: "s5", feedback: "梁山" }, { text: "⚔️ 鲁智深", target: "s6", feedback: "二龙山" }, { text: "🎭 杨志", target: "s7", feedback: "也二龙" }] },
    s5: { id: "s5", text: "👮 刘高：我在清风寨抓住宋江，你说是花荣？花荣是我同事！", options: [{ text: "刘高", target: "BACK", feedback: "✔" }, { text: "🏹 花荣", target: "s6", feedback: "是兄弟" }, { text: "🔥 秦明", target: "s7", feedback: "后来" }, { text: "🐎 黄信", target: "s8", feedback: "镇三山" }] },
    s6: { id: "s6", text: "📨 戴宗、李逵：宋江在江州认识我们！", options: [{ text: "戴宗、李逵", target: "BACK", feedback: "✔" }, { text: "🌊 张顺张横", target: "s7", feedback: "也认识" }, { text: "🐟 阮氏三雄", target: "s8", feedback: "梁山" }, { text: "🏯 卢俊义", target: "s9", feedback: "后来" }] },
    s7: { id: "s7", text: "🌪️ 李逵：我外号黑旋风，你记成浪里白条？张顺会游泳，我不会！", options: [{ text: "黑旋风", target: "BACK", feedback: "✔" }, { text: "🌊 浪里白条张顺", target: "s8", feedback: "错" }, { text: "💪 拼命三郎石秀", target: "s9", feedback: "错" }, { text: "🐭 鼓上蚤时迁", target: "s10", feedback: "错" }] },
    s8: { id: "s8", text: "✍️ 宋江：我在浔阳楼题反诗，你说是藏头诗？", options: [{ text: "反诗", target: "BACK", feedback: "✔" }, { text: "🔠 藏头诗", target: "s9", feedback: "错" }, { text: "💖 情诗", target: "s10", feedback: "给谁" }, { text: "🍳 打油诗", target: "s11", feedback: "水平低" }] },
    s9: { id: "s9", text: "⚔️ 宋江：我被判斩首，你说是刺配？", options: [{ text: "斩首", target: "BACK", feedback: "✔" }, { text: "⛓️ 刺配", target: "s10", feedback: "林冲" }, { text: "🚶 充军", target: "s11", feedback: "也是" }, { text: "🪵 杖刑", target: "s12", feedback: "轻了" }] },
    s10: { id: "s10", text: "🪓 晁盖、李逵：我们在江州劫法场救了宋江！", options: [{ text: "晁盖、李逵等梁山好汉", target: "BACK", feedback: "✔" }, { text: "🐯 武松", target: "s11", feedback: "不在" }, { text: "⚔️ 鲁智深", target: "s12", feedback: "二龙山" }, { text: "🐆 林冲", target: "s13", feedback: "梁山" }] },
    s11: { id: "s11", text: "📊 宋江：我上梁山后排第三位（晁盖、吴用之后）！", options: [{ text: "第三位", target: "BACK", feedback: "✔" }, { text: "2️⃣ 第二位", target: "s12", feedback: "晁盖死后" }, { text: "1️⃣ 第一位", target: "s13", feedback: "后来" }, { text: "4️⃣ 第四位", target: "s14", feedback: "错" }] },
    s12: { id: "s12", text: "👑 宋江：晁盖死后我当第三任寨主（王伦、晁盖之后）！", options: [{ text: "第三任", target: "BACK", feedback: "✔" }, { text: "2️⃣ 第二任", target: "s13", feedback: "晁盖" }, { text: "4️⃣ 第四任", target: "s14", feedback: "没有" }, { text: "1️⃣ 第一任", target: "s15", feedback: "王伦" }] },
    s13: { id: "s13", text: "🏛️ 宋江：我把聚义厅改成忠义堂！", options: [{ text: "忠义堂", target: "BACK", feedback: "✔" }, { text: "🏠 聚义厅", target: "s14", feedback: "旧名" }, { text: "🗣️ 议事厅", target: "s15", feedback: "普通" }, { text: "🐯 白虎堂", target: "s16", feedback: "林冲" }] },
    s14: { id: "s14", text: "📊 宋江：我排第一，天魁星！", options: [{ text: "第一", target: "BACK", feedback: "✔" }, { text: "2️⃣ 第二", target: "s15", feedback: "卢俊义" }, { text: "3️⃣ 第三", target: "s16", feedback: "吴用" }, { text: "4️⃣ 第四", target: "s17", feedback: "公孙胜" }] },
    s15: { id: "s15", text: "⭐ 宋江：我是天魁星，你记成天罡星？", options: [{ text: "天魁星", target: "BACK", feedback: "✔" }, { text: "✨ 天罡星", target: "s16", feedback: "总称" }, { text: "🧠 天机星", target: "s17", feedback: "吴用" }, { text: "😴 天闲星", target: "s18", feedback: "公孙胜" }] },
    s16: { id: "s16", text: "🗡️ 宋江：我用混元剑，你非说朴刀？", options: [{ text: "混元剑", target: "BACK", feedback: "✔" }, { text: "🔪 朴刀", target: "s17", feedback: "也用过" }, { text: "🏹 枪", target: "s18", feedback: "不是" }, { text: "⚔️ 剑", target: "s19", feedback: "太笼统" }] },
    s17: { id: "s17", text: "🏯 卢俊义：宋江收服了我，你说是关胜？", options: [{ text: "卢俊义", target: "BACK", feedback: "✔" }, { text: "⚔️ 关胜", target: "s18", feedback: "也收服" }, { text: "🔥 呼延灼", target: "s19", feedback: "也收服" }, { text: "🔥 秦明", target: "s20", feedback: "也收服" }] },
    s18: { id: "s18", text: "🏯 宋江：打大名府救卢俊义！", options: [{ text: "卢俊义", target: "BACK", feedback: "✔" }, { text: "💪 石秀", target: "s19", feedback: "也救" }, { text: "🐯 杨雄", target: "s20", feedback: "也救" }, { text: "🎯 燕青", target: "s21", feedback: "仆人" }] },
    s19: { id: "s19", text: "🏹 宋江：我们征讨辽国！", options: [{ text: "辽国", target: "BACK", feedback: "✔" }, { text: "🏯 西夏", target: "s20", feedback: "没打" }, { text: "🏯 金国", target: "s21", feedback: "没打" }, { text: "🏔️ 吐蕃", target: "s22", feedback: "没打" }] },
    s20: { id: "s20", text: "👑 宋江：我封楚州安抚使！", options: [{ text: "楚州安抚使", target: "BACK", feedback: "✔" }, { text: "🏛️ 郓城县令", target: "s21", feedback: "以前" }, { text: "⚔️ 兵马都监", target: "s22", feedback: "不是" }, { text: "🔪 提辖", target: "s23", feedback: "鲁智深" }] },
    s21: { id: "s21", text: "💀 宋江：我是被高俅、杨戬等奸臣毒死的！", options: [{ text: "高俅、杨戬等奸臣", target: "BACK", feedback: "✔" }, { text: "🎭 高俅一人", target: "s22", feedback: "也有" }, { text: "📜 蔡京", target: "s23", feedback: "也有" }, { text: "🎯 童贯", target: "s24", feedback: "也有" }] },
    s22: { id: "s22", text: "🪓 李逵：宋江临死前骗我喝毒酒，怕我造反！", options: [{ text: "李逵", target: "BACK", feedback: "✔" }, { text: "🏹 花荣", target: "s23", feedback: "自缢" }, { text: "🧠 吴用", target: "s24", feedback: "自缢" }, { text: "🏯 卢俊义", target: "s25", feedback: "被害" }] },
    s23: { id: "s23", text: "😭 吴用、花荣：我们在宋江墓前自缢！", options: [{ text: "吴用、花荣", target: "BACK", feedback: "✔" }, { text: "🪓 李逵", target: "s24", feedback: "先死了" }, { text: "🏯 卢俊义", target: "s25", feedback: "也死了" }, { text: "🎯 燕青", target: "s26", feedback: "归隐" }] },
    s24: { id: "s24", text: "🍚 宋清：我是宋江的弟弟！", options: [{ text: "宋清", target: "BACK", feedback: "✔" }, { text: "🏔️ 宋万", target: "s25", feedback: "梁山" }, { text: "💪 宋勇", target: "s26", feedback: "无" }, { text: "📜 宋仁", target: "s27", feedback: "无" }] },
    s25: { id: "s25", text: "👴 宋太公：我是宋江的父亲！", options: [{ text: "宋太公", target: "BACK", feedback: "✔" }, { text: "🌧️ 宋公明", target: "s26", feedback: "宋江字" }, { text: "📜 宋押司", target: "s27", feedback: "官职" }, { text: "💰 宋员外", target: "s28", feedback: "不是" }] },
    s26: { id: "s26", text: "✍️ 宋江：反诗下一句是“敢笑黄巢不丈夫”！", options: [{ text: "敢笑黄巢不丈夫", target: "BACK", feedback: "✔" }, { text: "😆 敢笑宋江不丈夫", target: "s27", feedback: "自嘲" }, { text: "😤 敢笑高俅不丈夫", target: "s28", feedback: "不对" }, { text: "👑 敢笑黄巢大丈夫", target: "s29", feedback: "不对" }] },
    s27: { id: "s27", text: "🐎 孙立：我献计里应外合打祝家庄！", options: [{ text: "孙立", target: "BACK", feedback: "✔" }, { text: "🧠 吴用", target: "s28", feedback: "也出计" }, { text: "💪 石秀", target: "s29", feedback: "探路" }, { text: "🐯 杨雄", target: "s30", feedback: "也去" }] },
    s28: { id: "s28", text: "💰 宋江：我仗义疏财，人称及时雨！", options: [{ text: "仗义疏财", target: "BACK", feedback: "✔" }, { text: "⚔️ 武艺高强", target: "s29", feedback: "不是" }, { text: "🧠 足智多谋", target: "s30", feedback: "吴用" }, { text: "🔮 法术高强", target: "s1", feedback: "公孙胜" }] },
    s29: { id: "s29", text: "🌧️ 宋江：及时雨就是乐于助人，如雨及时！", options: [{ text: "乐于助人，如雨及时", target: "BACK", feedback: "✔" }, { text: "🌧️ 下雨及时", target: "s30", feedback: "字面" }, { text: "👤 长得像雨", target: "s1", feedback: "不像" }, { text: "☔ 喜欢下雨", target: "s2", feedback: "不是" }] },
    s30: { id: "s30", text: "👑 宋江：我一生忠君报国，接受招安！", options: [{ text: "忠君报国，接受招安", target: "BACK", feedback: "✔" }, { text: "⚔️ 反抗朝廷", target: "s1", feedback: "不是" }, { text: "💰 劫富济贫", target: "s2", feedback: "也做" }, { text: "🏯 称帝", target: "s3", feedback: "没有" }] },

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
      text: "💀 宋江最后的结局是？",
      options: [
        { text: "打仗战死", target: "death_end", feedback: "❌ 错！" },
        { text: "被奸臣毒酒毒死", target: "death_end", feedback: "✅ 对，但触发结局" },
        { text: "出家为僧", target: "death_end", feedback: "❌ 错！" },
        { text: "归隐山林", target: "death_end", feedback: "❌ 错！" }
      ]
    },
    death_end: {
      id: "death_end",
      text: "🎬 游戏结束！错题太多，宋江不想带你玩了！",
      options: [{ text: "🔄 重新开始", target: "RESTART_GAME", feedback: "" }]
    }
  }
};