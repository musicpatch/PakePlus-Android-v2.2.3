export const chapter_7 = {
  id: "chapter_7",
  title: "第七章 · 玉麒麟卢俊义",
  startNodeId: "m1",

  nodes: {
    // ==================== 主线 30 题（正确答案随机位置） ====================
    m1: { id: "m1", text: "卢俊义的绰号是什么？", options: [{ text: "玉麒麟", target: "m2", feedback: "✅" }, { text: "及时雨", target: "s1", feedback: "❌" }, { text: "智多星", target: "s1", feedback: "❌" }, { text: "黑旋风", target: "s1", feedback: "❌" }] },
    m2: { id: "m2", text: "卢俊义是哪里人？", options: [{ text: "大名府", target: "m3", feedback: "✅" }, { text: "东京", target: "s2", feedback: "❌" }, { text: "郓城县", target: "s2", feedback: "❌" }, { text: "沧州", target: "s2", feedback: "❌" }] },
    m3: { id: "m3", text: "卢俊义最擅长的兵器是什么？", options: [{ text: "枪", target: "m4", feedback: "✅" }, { text: "刀", target: "s3", feedback: "❌" }, { text: "棍", target: "s3", feedback: "❌" }, { text: "剑", target: "s3", feedback: "❌" }] },
    m4: { id: "m4", text: "谁假装算命先生，骗卢俊义外出避祸？", options: [{ text: "吴用", target: "m5", feedback: "✅" }, { text: "宋江", target: "s4", feedback: "❌" }, { text: "公孙胜", target: "s4", feedback: "❌" }, { text: "李逵", target: "s4", feedback: "❌" }] },
    m5: { id: "m5", text: "吴用在卢俊义家墙上题了什么反诗？", options: [{ text: "藏头诗", target: "m6", feedback: "✅" }, { text: "打油诗", target: "s5", feedback: "❌" }, { text: "七言绝句", target: "s5", feedback: "❌" }, { text: "词", target: "s5", feedback: "❌" }] },
    m6: { id: "m6", text: "卢俊义外出途中，被梁山好汉活捉在哪里？", options: [{ text: "梁山泊", target: "m7", feedback: "✅" }, { text: "大名府", target: "s6", feedback: "❌" }, { text: "沂岭", target: "s6", feedback: "❌" }, { text: "野猪林", target: "s6", feedback: "❌" }] },
    m7: { id: "m7", text: "梁山好汉用车轮战活捉卢俊义，谁最后与他交手？", options: [{ text: "鲁智深", target: "s7", feedback: "❌" }, { text: "武松", target: "s7", feedback: "❌" }, { text: "李逵", target: "s7", feedback: "❌" }, { text: "林冲", target: "m8", feedback: "✅" }] },
    m8: { id: "m8", text: "卢俊义被留在梁山住了多久？", options: [{ text: "两个月", target: "m9", feedback: "✅" }, { text: "一个月", target: "s8", feedback: "❌" }, { text: "三个月", target: "s8", feedback: "❌" }, { text: "半年", target: "s8", feedback: "❌" }] },
    m9: { id: "m9", text: "卢俊义回家后，妻子贾氏和谁通奸？", options: [{ text: "李固", target: "m10", feedback: "✅" }, { text: "燕青", target: "s9", feedback: "❌" }, { text: "张青", target: "s9", feedback: "❌" }, { text: "王英", target: "s9", feedback: "❌" }] },
    m10: { id: "m10", text: "卢俊义被李固陷害，发配到哪里？", options: [{ text: "沙门岛", target: "m11", feedback: "✅" }, { text: "沧州", target: "s10", feedback: "❌" }, { text: "江州", target: "s10", feedback: "❌" }, { text: "孟州", target: "s10", feedback: "❌" }] },
    m11: { id: "m11", text: "卢俊义发配路上，谁射杀了董超、薛霸救了他？", options: [{ text: "燕青", target: "m12", feedback: "✅" }, { text: "李逵", target: "s11", feedback: "❌" }, { text: "花荣", target: "s11", feedback: "❌" }, { text: "石秀", target: "s11", feedback: "❌" }] },
    m12: { id: "m12", text: "卢俊义被救后又被抓回大名府，谁在酒楼大喊“梁山泊好汉全伙在此”？", options: [{ text: "石秀", target: "m13", feedback: "✅" }, { text: "杨雄", target: "s12", feedback: "❌" }, { text: "燕青", target: "s12", feedback: "❌" }, { text: "时迁", target: "s12", feedback: "❌" }] },
    m13: { id: "m13", text: "梁山攻打大名府，最终救出了卢俊义。谁第一个攻入大名府？", options: [{ text: "李逵", target: "s13", feedback: "❌" }, { text: "花荣", target: "s13", feedback: "❌" }, { text: "索超", target: "s13", feedback: "❌" }, { text: "时迁", target: "m14", feedback: "✅" }] },
    m14: { id: "m14", text: "卢俊义上梁山后，排在座次第几位？", options: [{ text: "第二", target: "m15", feedback: "✅" }, { text: "第一", target: "s14", feedback: "❌" }, { text: "第三", target: "s14", feedback: "❌" }, { text: "第四", target: "s14", feedback: "❌" }] },
    m15: { id: "m15", text: "卢俊义的星号是什么？", options: [{ text: "天罡星", target: "m16", feedback: "✅" }, { text: "天魁星", target: "s15", feedback: "❌" }, { text: "天机星", target: "s15", feedback: "❌" }, { text: "天闲星", target: "s15", feedback: "❌" }] },
    m16: { id: "m16", text: "卢俊义在梁山担任什么职务？", options: [{ text: "马军五虎将", target: "m17", feedback: "✅" }, { text: "步兵头领", target: "s16", feedback: "❌" }, { text: "水军头领", target: "s16", feedback: "❌" }, { text: "总探声息头领", target: "s16", feedback: "❌" }] },
    m17: { id: "m17", text: "卢俊义的仆人是谁？", options: [{ text: "燕青", target: "m18", feedback: "✅" }, { text: "李固", target: "s17", feedback: "❌" }, { text: "武松", target: "s17", feedback: "❌" }, { text: "石秀", target: "s17", feedback: "❌" }] },
    m18: { id: "m18", text: "燕青的绰号是什么？", options: [{ text: "浪子", target: "m19", feedback: "✅" }, { text: "拼命三郎", target: "s18", feedback: "❌" }, { text: "鼓上蚤", target: "s18", feedback: "❌" }, { text: "神行太保", target: "s18", feedback: "❌" }] },
    m19: { id: "m19", text: "梁山招安后，卢俊义率军征讨辽国，曾与谁大战？", options: [{ text: "耶律宗云", target: "m20", feedback: "✅" }, { text: "兀颜光", target: "s19", feedback: "❌" }, { text: "贺重宝", target: "s19", feedback: "❌" }, { text: "萧嘉穗", target: "s19", feedback: "❌" }] },
    m20: { id: "m20", text: "卢俊义在征讨田虎时，擒获了谁？", options: [{ text: "卞祥", target: "m21", feedback: "✅" }, { text: "孙安", target: "s20", feedback: "❌" }, { text: "山士奇", target: "s20", feedback: "❌" }, { text: "琼英", target: "s20", feedback: "❌" }] },
    m21: { id: "m21", text: "征讨方腊时，卢俊义打死了哪个大将？", options: [{ text: "厉天闰", target: "m22", feedback: "✅" }, { text: "邓元觉", target: "s21", feedback: "❌" }, { text: "石宝", target: "s21", feedback: "❌" }, { text: "方杰", target: "s21", feedback: "❌" }] },
    m22: { id: "m22", text: "卢俊义征讨方腊后，被封为什么官职？", options: [{ text: "庐州安抚使", target: "m23", feedback: "✅" }, { text: "楚州安抚使", target: "s22", feedback: "❌" }, { text: "润州都统制", target: "s22", feedback: "❌" }, { text: "郓城县令", target: "s22", feedback: "❌" }] },
    m23: { id: "m23", text: "卢俊义最后是怎么死的？", options: [{ text: "被毒酒毒死", target: "m24", feedback: "✅" }, { text: "战死", target: "s23", feedback: "❌" }, { text: "病逝", target: "s23", feedback: "❌" }, { text: "落水淹死", target: "s23", feedback: "❌" }] },
    m24: { id: "m24", text: "谁在卢俊义的酒里下毒？", options: [{ text: "高俅、杨戬", target: "m25", feedback: "✅" }, { text: "蔡京", target: "s24", feedback: "❌" }, { text: "童贯", target: "s24", feedback: "❌" }, { text: "宋江", target: "s24", feedback: "❌" }] },
    m25: { id: "m25", text: "卢俊义中毒后，因何落水而死？", options: [{ text: "乘船时失足", target: "m26", feedback: "✅" }, { text: "跳河自杀", target: "s25", feedback: "❌" }, { text: "被人推下水", target: "s25", feedback: "❌" }, { text: "喝酒掉河里", target: "s25", feedback: "❌" }] },
    m26: { id: "m26", text: "卢俊义死后被追封为什么？", options: [{ text: "忠武郎", target: "m27", feedback: "✅" }, { text: "义烈昭武侯", target: "s26", feedback: "❌" }, { text: "武节将军", target: "s26", feedback: "❌" }, { text: "忠义郎", target: "s26", feedback: "❌" }] },
    m27: { id: "m27", text: "卢俊义的妻子贾氏最后怎么样了？", options: [{ text: "被梁山杀", target: "m28", feedback: "✅" }, { text: "逃跑", target: "s27", feedback: "❌" }, { text: "出家", target: "s27", feedback: "❌" }, { text: "改嫁", target: "s27", feedback: "❌" }] },
    m28: { id: "m28", text: "卢俊义的管家李固最后怎么死的？", options: [{ text: "被燕青杀死", target: "m29", feedback: "✅" }, { text: "被卢俊义杀", target: "s28", feedback: "❌" }, { text: "被梁山处斩", target: "s28", feedback: "❌" }, { text: "病死了", target: "s28", feedback: "❌" }] },
    m29: { id: "m29", text: "卢俊义的武艺在梁山排名如何？", options: [{ text: "第一", target: "m30", feedback: "✅" }, { text: "第二", target: "s29", feedback: "❌" }, { text: "第三", target: "s29", feedback: "❌" }, { text: "第四", target: "s29", feedback: "❌" }] },
    m30: { id: "m30", text: "卢俊义最显著的特点是什么？", options: [{ text: "武艺高强，棍棒天下无双", target: "complete", feedback: "✅" }, { text: "足智多谋", target: "s30", feedback: "❌" }, { text: "仗义疏财", target: "s30", feedback: "❌" }, { text: "法术高强", target: "s30", feedback: "❌" }] },

    // ==================== 通关结局 ====================
    complete: {
      id: "complete",
      text: "🎉 恭喜通关！卢俊义从大名府富户到梁山副寨主，武艺天下无双，最后被奸臣毒害，令人叹息！",
      options: [
        { text: "🔄 重新玩第七章", target: "m1", feedback: "" },
        { text: "📖 下一章 · 智多星吴用", target: "chapter_8", feedback: "" },
        { text: "🏠 回主菜单", target: "RESTART_GAME", feedback: "" }
      ]
    },

    // ==================== 支线 s1 ~ s30（4个选项，正确答案位置随机0~3） ====================
    // 正确位置分布：s1(2), s2(3), s3(0), s4(1), s5(2), s6(3), s7(0), s8(1), s9(2), s10(3), s11(0), s12(1), s13(2), s14(3), s15(0), s16(1), s17(2), s18(3), s19(0), s20(1), s21(2), s22(3), s23(0), s24(1), s25(2), s26(3), s27(0), s28(1), s29(2), s30(3)
    s1: { id: "s1", text: "🦄 卢俊义：我外号玉麒麟，你叫我及时雨？那是宋江！", options: [{ text: "🦄 玉麒麟", target: "s2", feedback: "对" }, { text: "🌧️ 及时雨宋江", target: "s3", feedback: "错" }, { text: "玉麒麟", target: "BACK", feedback: "✔" }, { text: "🧠 智多星吴用", target: "s4", feedback: "错" }] },
    s2: { id: "s2", text: "🏯 卢俊义：我是大名府人，你说是东京？", options: [{ text: "🏛️ 大名府", target: "s3", feedback: "对" }, { text: "🏯 东京", target: "s4", feedback: "错" }, { text: "🏠 郓城县", target: "s5", feedback: "宋江" }, { text: "大名府", target: "BACK", feedback: "✔" }] },
    s3: { id: "s3", text: "🔫 卢俊义：我用枪天下无双，你说是刀？", options: [{ text: "枪", target: "BACK", feedback: "✔" }, { text: "🔪 刀", target: "s4", feedback: "错" }, { text: "🏑 棍", target: "s5", feedback: "也厉害" }, { text: "⚔️ 剑", target: "s6", feedback: "不常用" }] },
    s4: { id: "s4", text: "🧠 吴用：我假扮算命先生骗卢俊义，你说是宋江？", options: [{ text: "吴用", target: "BACK", feedback: "✔" }, { text: "🌧️ 宋江", target: "s5", feedback: "首领" }, { text: "🐉 公孙胜", target: "s6", feedback: "法师" }, { text: "🌪️ 李逵", target: "s7", feedback: "莽夫" }] },
    s5: { id: "s5", text: "📜 卢俊义：墙上题的是藏头诗，你说是打油诗？", options: [{ text: "藏头诗", target: "BACK", feedback: "✔" }, { text: "🍳 打油诗", target: "s6", feedback: "低级" }, { text: "📝 七言绝句", target: "s7", feedback: "形式" }, { text: "🎵 词", target: "s8", feedback: "不是" }] },
    s6: { id: "s6", text: "🏔️ 卢俊义：我在梁山泊被活捉，你说是大名府？", options: [{ text: "梁山泊", target: "BACK", feedback: "✔" }, { text: "🏛️ 大名府", target: "s7", feedback: "老家" }, { text: "⛰️ 沂岭", target: "s8", feedback: "李逵" }, { text: "🌳 野猪林", target: "s9", feedback: "林冲" }] },
    s7: { id: "s7", text: "🐆 林冲：最后跟卢俊义交手的是我，你说是鲁智深？", options: [{ text: "林冲", target: "BACK", feedback: "✔" }, { text: "⚔️ 鲁智深", target: "s8", feedback: "也打过" }, { text: "🐯 武松", target: "s9", feedback: "也打过" }, { text: "🌪️ 李逵", target: "s10", feedback: "也打过" }] },
    s8: { id: "s8", text: "📅 卢俊义：我在梁山住了两个月，你记成一个月？", options: [{ text: "两个月", target: "BACK", feedback: "✔" }, { text: "1月", target: "s9", feedback: "短" }, { text: "3月", target: "s10", feedback: "长" }, { text: "半年", target: "s11", feedback: "太久" }] },
    s9: { id: "s9", text: "💑 贾氏：我和李固通奸，你说是燕青？燕青是我干儿子！", options: [{ text: "李固", target: "BACK", feedback: "✔" }, { text: "🎯 燕青", target: "s10", feedback: "忠仆" }, { text: "🥟 张青", target: "s11", feedback: "十字坡" }, { text: "🐴 王英", target: "s12", feedback: "矮脚虎" }] },
    s10: { id: "s10", text: "🏝️ 卢俊义：我被发配沙门岛，你说是沧州？", options: [{ text: "沙门岛", target: "BACK", feedback: "✔" }, { text: "❄️ 沧州", target: "s11", feedback: "林冲" }, { text: "🌊 江州", target: "s12", feedback: "宋江" }, { text: "🍖 孟州", target: "s13", feedback: "武松" }] },
    s11: { id: "s11", text: "🎯 燕青：我射杀董超薛霸救了卢俊义，你说是李逵？", options: [{ text: "燕青", target: "BACK", feedback: "✔" }, { text: "🌪️ 李逵", target: "s12", feedback: "也救过" }, { text: "🏹 花荣", target: "s13", feedback: "神箭" }, { text: "💪 石秀", target: "s14", feedback: "也救过" }] },
    s12: { id: "s12", text: "📢 石秀：我在酒楼大喊“梁山泊好汉全伙在此”，你说是杨雄？", options: [{ text: "石秀", target: "BACK", feedback: "✔" }, { text: "🐯 杨雄", target: "s13", feedback: "兄弟" }, { text: "🎯 燕青", target: "s14", feedback: "不在" }, { text: "🐭 时迁", target: "s15", feedback: "偷鸡" }] },
    s13: { id: "s13", text: "🐭 时迁：我第一个攻入大名府，你说是李逵？", options: [{ text: "时迁", target: "BACK", feedback: "✔" }, { text: "🌪️ 李逵", target: "s14", feedback: "莽撞" }, { text: "🏹 花荣", target: "s15", feedback: "射箭" }, { text: "⚔️ 索超", target: "s16", feedback: "急先锋" }] },
    s14: { id: "s14", text: "📊 卢俊义：我排第二，你说是第一？第一是宋江！", options: [{ text: "第二", target: "BACK", feedback: "✔" }, { text: "1️⃣ 第一", target: "s15", feedback: "宋江" }, { text: "3️⃣ 第三", target: "s16", feedback: "吴用" }, { text: "4️⃣ 第四", target: "s17", feedback: "公孙胜" }] },
    s15: { id: "s15", text: "⭐ 卢俊义：我是天罡星，你说是天魁星？", options: [{ text: "天罡星", target: "BACK", feedback: "✔" }, { text: "🌟 天魁星", target: "s16", feedback: "宋江" }, { text: "🧠 天机星", target: "s17", feedback: "吴用" }, { text: "😴 天闲星", target: "s18", feedback: "公孙胜" }] },
    s16: { id: "s16", text: "🐎 卢俊义：我是马军五虎将，你说是步兵？", options: [{ text: "马军五虎将", target: "BACK", feedback: "✔" }, { text: "🚶 步兵头领", target: "s17", feedback: "鲁智深" }, { text: "🌊 水军头领", target: "s18", feedback: "张顺" }, { text: "👀 总探声息", target: "s19", feedback: "戴宗" }] },
    s17: { id: "s17", text: "🎯 燕青：我是卢俊义的仆人，你说是李固？李固是叛徒！", options: [{ text: "燕青", target: "BACK", feedback: "✔" }, { text: "💰 李固", target: "s18", feedback: "坏人" }, { text: "🐯 武松", target: "s19", feedback: "行者" }, { text: "💪 石秀", target: "s20", feedback: "拼命" }] },
    s18: { id: "s18", text: "🎭 燕青：我外号浪子，你说是拼命三郎？那是石秀！", options: [{ text: "浪子", target: "BACK", feedback: "✔" }, { text: "💪 拼命三郎石秀", target: "s19", feedback: "错" }, { text: "🐭 鼓上蚤时迁", target: "s20", feedback: "偷" }, { text: "💨 神行太保戴宗", target: "s21", feedback: "跑" }] },
    s19: { id: "s19", text: "🏹 耶律宗云：我跟卢俊义大战，你说是兀颜光？", options: [{ text: "耶律宗云", target: "BACK", feedback: "✔" }, { text: "🎯 兀颜光", target: "s20", feedback: "也打过" }, { text: "⚔️ 贺重宝", target: "s21", feedback: "也打" }, { text: "🏯 萧嘉穗", target: "s22", feedback: "投降" }] },
    s20: { id: "s20", text: "⚔️ 卞祥：卢俊义擒获了我，你说是孙安？", options: [{ text: "卞祥", target: "BACK", feedback: "✔" }, { text: "⚔️ 孙安", target: "s21", feedback: "降将" }, { text: "⛰️ 山士奇", target: "s22", feedback: "也打" }, { text: "🏹 琼英", target: "s23", feedback: "女将" }] },
    s21: { id: "s21", text: "💀 厉天闰：我被卢俊义打死，你说是邓元觉？", options: [{ text: "厉天闰", target: "BACK", feedback: "✔" }, { text: "🔔 邓元觉", target: "s22", feedback: "鲁智深打" }, { text: "⚔️ 石宝", target: "s23", feedback: "关胜打" }, { text: "👑 方杰", target: "s24", feedback: "秦明打" }] },
    s22: { id: "s22", text: "👑 卢俊义：我封庐州安抚使，你说是楚州安抚使？那是宋江！", options: [{ text: "庐州安抚使", target: "BACK", feedback: "✔" }, { text: "🏛️ 楚州安抚使宋江", target: "s23", feedback: "错" }, { text: "🏯 润州都统制李逵", target: "s24", feedback: "错" }, { text: "🏠 郓城县令", target: "s25", feedback: "小官" }] },
    s23: { id: "s23", text: "💀 卢俊义：我被毒酒毒死，你说是战死？", options: [{ text: "被毒酒毒死", target: "BACK", feedback: "✔" }, { text: "⚔️ 战死", target: "s24", feedback: "错" }, { text: "🦠 病逝", target: "s25", feedback: "错" }, { text: "🌊 落水淹死", target: "s26", feedback: "也算" }] },
    s24: { id: "s24", text: "🎭 高俅、杨戬：我们在卢俊义酒里下毒，你说是蔡京？", options: [{ text: "高俅、杨戬", target: "BACK", feedback: "✔" }, { text: "📜 蔡京", target: "s25", feedback: "也坏" }, { text: "🎯 童贯", target: "s26", feedback: "也坏" }, { text: "🌧️ 宋江", target: "s27", feedback: "不" }] },
    s25: { id: "s25", text: "🚣 卢俊义：我乘船时失足落水而死，你说是跳河？", options: [{ text: "乘船时失足", target: "BACK", feedback: "✔" }, { text: "💔 跳河自杀", target: "s26", feedback: "不是" }, { text: "👊 被人推", target: "s27", feedback: "不是" }, { text: "🍺 喝酒掉河", target: "s28", feedback: "也算" }] },
    s26: { id: "s26", text: "🏅 卢俊义：我被追封忠武郎，你说是义烈昭武侯？那是张顺！", options: [{ text: "忠武郎", target: "BACK", feedback: "✔" }, { text: "🏆 义烈昭武侯张顺", target: "s27", feedback: "错" }, { text: "⚔️ 武节将军", target: "s28", feedback: "不是" }, { text: "🎖️ 忠义郎", target: "s29", feedback: "不是" }] },
    s27: { id: "s27", text: "💔 贾氏：我被梁山杀了，你说是逃跑？", options: [{ text: "被梁山杀", target: "BACK", feedback: "✔" }, { text: "🏃 逃跑", target: "s28", feedback: "没跑掉" }, { text: "🙏 出家", target: "s29", feedback: "不可能" }, { text: "💑 改嫁", target: "s30", feedback: "没人要" }] },
    s28: { id: "s28", text: "🔪 燕青：我杀了李固，你说是卢俊义杀的？", options: [{ text: "被燕青杀死", target: "BACK", feedback: "✔" }, { text: "⚔️ 被卢俊义杀", target: "s29", feedback: "没动手" }, { text: "🏛️ 梁山处斩", target: "s30", feedback: "也死" }, { text: "🦠 病死", target: "s1", feedback: "便宜他" }] },
    s29: { id: "s29", text: "🥇 卢俊义：我武艺梁山第一，你说是第二？", options: [{ text: "第一", target: "BACK", feedback: "✔" }, { text: "2️⃣ 第二", target: "s30", feedback: "林冲" }, { text: "3️⃣ 第三", target: "s1", feedback: "关胜" }, { text: "4️⃣ 第四", target: "s2", feedback: "武松" }] },
    s30: { id: "s30", text: "💪 卢俊义：我棍棒天下无双，你说是足智多谋？那是吴用！", options: [{ text: "武艺高强，棍棒天下无双", target: "BACK", feedback: "✔" }, { text: "🧠 足智多谋", target: "s1", feedback: "吴用" }, { text: "💰 仗义疏财", target: "s2", feedback: "宋江" }, { text: "🔮 法术高强", target: "s3", feedback: "公孙胜" }] },

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
      text: "💀 卢俊义最后的结局是？",
      options: [
        { text: "战死沙场", target: "death_end", feedback: "❌ 错！" },
        { text: "被奸臣毒酒毒死后落水而死", target: "death_end", feedback: "✅ 对，但触发结局" },
        { text: "病逝于庐州", target: "death_end", feedback: "❌ 错！" },
        { text: "出家为僧", target: "death_end", feedback: "❌ 错！" }
      ]
    },
    death_end: {
      id: "death_end",
      text: "🎬 游戏结束！错题太多，卢俊义不想带你玩了！",
      options: [{ text: "🔄 重新开始", target: "RESTART_GAME", feedback: "" }]
    }
  }
};