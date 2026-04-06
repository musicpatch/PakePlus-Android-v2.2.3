export const chapter_2 = {
  id: "chapter_2",
  title: "第二章 · 豹子头林冲",
  startNodeId: "m1",

  nodes: {
    // ==================== 主线 30 题（正确答案随机位置） ====================
    m1: { id: "m1", text: "林冲的妻子叫林娘子，她被谁调戏？", options: [{ text: "西门庆", target: "s1", feedback: "❌" }, { text: "高衙内", target: "m2", feedback: "✅" }, { text: "蒋门神", target: "s1", feedback: "❌" }, { text: "牛二", target: "s1", feedback: "❌" }] },
    m2: { id: "m2", text: "高衙内是高俅的什么人？", options: [{ text: "干儿子", target: "m3", feedback: "✅" }, { text: "亲儿子", target: "s2", feedback: "❌" }, { text: "侄子", target: "s2", feedback: "❌" }, { text: "外甥", target: "s2", feedback: "❌" }] },
    m3: { id: "m3", text: "林冲的好友陆谦为了讨好高衙内，把林冲骗到哪里喝酒？", options: [{ text: "快活林", target: "s3", feedback: "❌" }, { text: "樊楼", target: "m4", feedback: "✅" }, { text: "狮子楼", target: "s3", feedback: "❌" }, { text: "鸳鸯楼", target: "s3", feedback: "❌" }] },
    m4: { id: "m4", text: "林冲买了一把宝刀，却被高俅设计骗入哪里？", options: [{ text: "白虎堂", target: "m5", feedback: "✅" }, { text: "军机处", target: "s4", feedback: "❌" }, { text: "演武厅", target: "s4", feedback: "❌" }, { text: "太尉府", target: "s4", feedback: "❌" }] },
    m5: { id: "m5", text: "林冲因误入白虎堂被判什么刑罚？", options: [{ text: "斩首", target: "s5", feedback: "❌" }, { text: "发配江州", target: "s5", feedback: "❌" }, { text: "刺配沧州", target: "m6", feedback: "✅" }, { text: "打一百棍", target: "s5", feedback: "❌" }] },
    m6: { id: "m6", text: "林冲发配路上，两个押解公人是谁？", options: [{ text: "董超、薛霸", target: "m7", feedback: "✅" }, { text: "张千、李万", target: "s6", feedback: "❌" }, { text: "王庆、赵能", target: "s6", feedback: "❌" }, { text: "富安、陆谦", target: "s6", feedback: "❌" }] },
    m7: { id: "m7", text: "董超、薛霸在野猪林要杀林冲，被谁救下？", options: [{ text: "武松", target: "s7", feedback: "❌" }, { text: "史进", target: "s7", feedback: "❌" }, { text: "李逵", target: "s7", feedback: "❌" }, { text: "鲁智深", target: "m8", feedback: "✅" }] },
    m8: { id: "m8", text: "鲁智深救了林冲后，一路护送他到哪里？", options: [{ text: "沧州附近", target: "m9", feedback: "✅" }, { text: "梁山", target: "s8", feedback: "❌" }, { text: "东京", target: "s8", feedback: "❌" }, { text: "二龙山", target: "s8", feedback: "❌" }] },
    m9: { id: "m9", text: "林冲到沧州后，被分配看管什么？", options: [{ text: "牢城", target: "s9", feedback: "❌" }, { text: "马厩", target: "s9", feedback: "❌" }, { text: "军营", target: "s9", feedback: "❌" }, { text: "草料场", target: "m10", feedback: "✅" }] },
    m10: { id: "m10", text: "陆谦和富安火烧草料场，林冲因何躲过一劫？", options: [{ text: "外出打酒，睡在山神庙", target: "m11", feedback: "✅" }, { text: "提前逃走", target: "s10", feedback: "❌" }, { text: "被鲁智深带走", target: "s10", feedback: "❌" }, { text: "下雨浇灭火", target: "s10", feedback: "❌" }] },
    m11: { id: "m11", text: "林冲在山神庙听到陆谦等人的对话，得知真相后杀了哪三个人？", options: [{ text: "高俅、高衙内、陆谦", target: "s11", feedback: "❌" }, { text: "董超、薛霸、富安", target: "s11", feedback: "❌" }, { text: "差拨、富安、高衙内", target: "s11", feedback: "❌" }, { text: "陆谦、富安、差拨", target: "m12", feedback: "✅" }] },
    m12: { id: "m12", text: "林冲杀人后，被柴进推荐到哪里？", options: [{ text: "二龙山", target: "s12", feedback: "❌" }, { text: "梁山", target: "m13", feedback: "✅" }, { text: "少华山", target: "s12", feedback: "❌" }, { text: "桃花山", target: "s12", feedback: "❌" }] },
    m13: { id: "m13", text: "林冲上梁山后，当时的梁山首领是谁？", options: [{ text: "王伦", target: "m14", feedback: "✅" }, { text: "晁盖", target: "s13", feedback: "❌" }, { text: "宋江", target: "s13", feedback: "❌" }, { text: "卢俊义", target: "s13", feedback: "❌" }] },
    m14: { id: "m14", text: "王伦刁难林冲，让他做什么？", options: [{ text: "交一百两银子", target: "s14", feedback: "❌" }, { text: "下山杀一个人", target: "m15", feedback: "✅" }, { text: "比武打败杨志", target: "s14", feedback: "❌" }, { text: "下山抢粮", target: "s14", feedback: "❌" }] },
    m15: { id: "m15", text: "林冲下山遇到谁，两人大战不分胜负？", options: [{ text: "武松", target: "s15", feedback: "❌" }, { text: "鲁智深", target: "s15", feedback: "❌" }, { text: "索超", target: "s15", feedback: "❌" }, { text: "杨志", target: "m16", feedback: "✅" }] },
    m16: { id: "m16", text: "晁盖、吴用等人智取生辰纲后上梁山，王伦不肯收留，林冲如何？", options: [{ text: "火并王伦", target: "m17", feedback: "✅" }, { text: "离开梁山", target: "s16", feedback: "❌" }, { text: "劝说王伦", target: "s16", feedback: "❌" }, { text: "告密", target: "s16", feedback: "❌" }] },
    m17: { id: "m17", text: "火并王伦后，林冲推举谁做梁山首领？", options: [{ text: "吴用", target: "s17", feedback: "❌" }, { text: "公孙胜", target: "s17", feedback: "❌" }, { text: "晁盖", target: "m18", feedback: "✅" }, { text: "自己", target: "s17", feedback: "❌" }] },
    m18: { id: "m18", text: "林冲在梁山排座次时，排名第几？", options: [{ text: "5", target: "s18", feedback: "❌" }, { text: "7", target: "s18", feedback: "❌" }, { text: "8", target: "s18", feedback: "❌" }, { text: "6", target: "m19", feedback: "✅" }] },
    m19: { id: "m19", text: "林冲的星号是什么？", options: [{ text: "天孤星", target: "s19", feedback: "❌" }, { text: "天伤星", target: "s19", feedback: "❌" }, { text: "天暗星", target: "s19", feedback: "❌" }, { text: "天雄星", target: "m20", feedback: "✅" }] },
    m20: { id: "m20", text: "林冲的兵器是什么？", options: [{ text: "青龙偃月刀", target: "s20", feedback: "❌" }, { text: "丈八蛇矛", target: "m21", feedback: "✅" }, { text: "水磨禅杖", target: "s20", feedback: "❌" }, { text: "朴刀", target: "s20", feedback: "❌" }] },
    m21: { id: "m21", text: "林冲的绰号是什么？", options: [{ text: "青面兽", target: "s21", feedback: "❌" }, { text: "花和尚", target: "s21", feedback: "❌" }, { text: "行者", target: "s21", feedback: "❌" }, { text: "豹子头", target: "m22", feedback: "✅" }] },
    m22: { id: "m22", text: "林冲的妻子最终结局如何？", options: [{ text: "被林冲救走", target: "s22", feedback: "❌" }, { text: "出家为尼", target: "s22", feedback: "❌" }, { text: "改嫁", target: "s22", feedback: "❌" }, { text: "被高衙内逼死", target: "m23", feedback: "✅" }] },
    m23: { id: "m23", text: "林冲在梁山的主要职务是？", options: [{ text: "步军头领", target: "s23", feedback: "❌" }, { text: "水军头领", target: "s23", feedback: "❌" }, { text: "探子", target: "s23", feedback: "❌" }, { text: "马军五虎将", target: "m24", feedback: "✅" }] },
    m24: { id: "m24", text: "梁山招安后，林冲参与了征讨谁？", options: [{ text: "方腊", target: "m25", feedback: "✅" }, { text: "辽国", target: "m25", feedback: "✅" }, { text: "田虎", target: "m25", feedback: "✅" }, { text: "王庆", target: "m25", feedback: "✅" }] },
    m25: { id: "m25", text: "征讨方腊时，林冲打死了哪个大将？", options: [{ text: "石宝", target: "s24", feedback: "❌" }, { text: "邓元觉", target: "s24", feedback: "❌" }, { text: "方杰", target: "s24", feedback: "❌" }, { text: "王寅", target: "m26", feedback: "✅" }] },
    m26: { id: "m26", text: "林冲在征讨方腊后得了什么病？", options: [{ text: "伤寒", target: "s25", feedback: "❌" }, { text: "疟疾", target: "s25", feedback: "❌" }, { text: "眼疾", target: "s25", feedback: "❌" }, { text: "风瘫", target: "m27", feedback: "✅" }] },
    m27: { id: "m27", text: "林冲最后在哪里病逝？", options: [{ text: "东京", target: "s26", feedback: "❌" }, { text: "沧州", target: "s26", feedback: "❌" }, { text: "梁山", target: "s26", feedback: "❌" }, { text: "杭州六和寺", target: "m28", feedback: "✅" }] },
    m28: { id: "m28", text: "林冲病逝时，是谁在身边照顾？", options: [{ text: "鲁智深", target: "s27", feedback: "❌" }, { text: "杨志", target: "s27", feedback: "❌" }, { text: "宋江", target: "s27", feedback: "❌" }, { text: "武松", target: "m29", feedback: "✅" }] },
    m29: { id: "m29", text: "林冲的师父是谁？", options: [{ text: "岳飞", target: "s28", feedback: "❌" }, { text: "卢俊义", target: "s28", feedback: "❌" }, { text: "史文恭", target: "s28", feedback: "❌" }, { text: "周侗", target: "m30", feedback: "✅" }] },
    m30: { id: "m30", text: "林冲一生最恨的人是谁？", options: [{ text: "陆谦", target: "s29", feedback: "❌" }, { text: "高衙内", target: "s29", feedback: "❌" }, { text: "王伦", target: "s29", feedback: "❌" }, { text: "高俅", target: "complete", feedback: "✅" }] },

    // ==================== 通关结局 ====================
    complete: {
      id: "complete",
      text: "🎉 恭喜通关！林冲从八十万禁军教头到梁山好汉，一生悲壮，令人唏嘘！",
      options: [
        { text: "🔄 重新玩第二章", target: "m1", feedback: "" },
        { text: "📖 下一章 · 青面兽杨志", target: "chapter_3", feedback: "" },
        { text: "🏠 回主菜单", target: "RESTART_GAME", feedback: "" }
      ]
    },

    // ==================== 支线 s1 ~ s30（正确选项 BACK 在第2或第3位，幽默风格） ====================
    s1: { id: "s1", text: "😱 西门庆：我还没出场！你认错人了。回去好好答！", options: [{ text: "😵 我错了", target: "s2", feedback: "继续迷糊" }, { text: "高衙内", target: "BACK", feedback: "✔" }, { text: "🍺 喝杯酒压惊", target: "s3", feedback: "喝懵了" }, { text: "🏃 逃跑", target: "s4", feedback: "怂了" }] },
    s2: { id: "s2", text: "🤔 高俅：我干儿子高衙内，你连这都不知道？", options: [{ text: "📚 我记错了", target: "s3", feedback: "甩锅" }, { text: "干儿子", target: "BACK", feedback: "✔" }, { text: "亲儿子", target: "s4", feedback: "❌" }, { text: "侄子", target: "s5", feedback: "❌" }] },
    s3: { id: "s3", text: "🍶 陆谦：我骗林冲去樊楼喝酒，你咋记成快活林了？", options: [{ text: "🍺 我再去喝", target: "s4", feedback: "醉倒" }, { text: "樊楼", target: "BACK", feedback: "✔" }, { text: "🏮 灯笼楼", target: "s5", feedback: "错了" }, { text: "🎭 戏楼", target: "s6", feedback: "不对" }] },
    s4: { id: "s4", text: "⚔️ 高俅：白虎堂是军事重地，你以为是菜市场？", options: [{ text: "🗡️ 我闯进去", target: "s5", feedback: "被抓" }, { text: "白虎堂", target: "BACK", feedback: "✔" }, { text: "🐉 青龙堂", target: "s6", feedback: "错" }, { text: "🐢 乌龟堂", target: "s7", feedback: "搞笑" }] },
    s5: { id: "s5", text: "⛓️ 林冲：刺配沧州脸上刺字，你想让我斩首？太狠了吧！", options: [{ text: "🔥 我不服", target: "s6", feedback: "反抗" }, { text: "刺配沧州", target: "BACK", feedback: "✔" }, { text: "斩首", target: "s7", feedback: "死" }, { text: "流放海南", target: "s8", feedback: "太远" }] },
    s6: { id: "s6", text: "👮 董超：我和薛霸是金牌公差，你把名字都记错了！", options: [{ text: "💸 我收钱", target: "s7", feedback: "贪" }, { text: "董超、薛霸", target: "BACK", feedback: "✔" }, { text: "张龙、赵虎", target: "s8", feedback: "包青天" }, { text: "王朝、马汉", target: "s9", feedback: "也错了" }] },
    s7: { id: "s7", text: "🪓 鲁智深：洒家野猪林救林冲，你认成武松？瞎了！", options: [{ text: "💪 我也要救", target: "s8", feedback: "没能力" }, { text: "鲁智深", target: "BACK", feedback: "✔" }, { text: "武松", target: "s9", feedback: "错" }, { text: "李逵", target: "s10", feedback: "错" }] },
    s8: { id: "s8", text: "🏃 鲁智深：我送到沧州附近，你让我直接送上梁山？", options: [{ text: "🚶 我自己走", target: "s9", feedback: "危险" }, { text: "沧州附近", target: "BACK", feedback: "✔" }, { text: "梁山", target: "s10", feedback: "太早" }, { text: "东京", target: "s11", feedback: "回去送死" }] },
    s9: { id: "s9", text: "🔥 草料场：我是林冲看管的地方，不是马厩！", options: [{ text: "🌾 我放火", target: "s10", feedback: "犯罪" }, { text: "草料场", target: "BACK", feedback: "✔" }, { text: "军营", target: "s11", feedback: "错" }, { text: "马厩", target: "s12", feedback: "错" }] },
    s10: { id: "s10", text: "🍶 林冲：我外出打酒睡山神庙，你让我提前逃跑？太怂了！", options: [{ text: "🍺 我也去打酒", target: "s11", feedback: "喝醉" }, { text: "外出打酒睡山神庙", target: "BACK", feedback: "✔" }, { text: "提前逃跑", target: "s12", feedback: "怂" }, { text: "被鲁智深救", target: "s13", feedback: "不对" }] },
    s11: { id: "s11", text: "💀 陆谦：我、富安、差拨三个被林冲杀了，你把我跟高俅搞混？", options: [{ text: "🔪 我帮你杀", target: "s12", feedback: "暴力" }, { text: "陆谦、富安、差拨", target: "BACK", feedback: "✔" }, { text: "高俅、高衙内", target: "s13", feedback: "没杀到" }, { text: "董超、薛霸", target: "s14", feedback: "已经跑了" }] },
    s12: { id: "s12", text: "⛰️ 柴进：我推荐林冲上梁山，你让他去二龙山？", options: [{ text: "🏔️ 我上山", target: "s13", feedback: "落草" }, { text: "梁山", target: "BACK", feedback: "✔" }, { text: "二龙山", target: "s14", feedback: "错" }, { text: "少华山", target: "s15", feedback: "错" }] },
    s13: { id: "s13", text: "👑 王伦：我是梁山第一任寨主，你把我当成晁盖？", options: [{ text: "🤴 我当寨主", target: "s14", feedback: "想得美" }, { text: "王伦", target: "BACK", feedback: "✔" }, { text: "晁盖", target: "s15", feedback: "后来" }, { text: "宋江", target: "s16", feedback: "更后" }] },
    s14: { id: "s14", text: "🔪 王伦：我让林冲下山杀个人，你让他交钱？我缺钱吗？", options: [{ text: "🗡️ 我杀人", target: "s15", feedback: "狠" }, { text: "下山杀一个人", target: "BACK", feedback: "✔" }, { text: "交钱", target: "s16", feedback: "穷" }, { text: "比武", target: "s17", feedback: "也行" }] },
    s15: { id: "s15", text: "⚔️ 杨志：我和林冲大战不分胜负，你以为是武松？", options: [{ text: "🤺 我也要打", target: "s16", feedback: "找打" }, { text: "杨志", target: "BACK", feedback: "✔" }, { text: "武松", target: "s17", feedback: "错" }, { text: "鲁智深", target: "s18", feedback: "错" }] },
    s16: { id: "s16", text: "🔥 林冲：我火并王伦，你让我离开梁山？开玩笑！", options: [{ text: "🔪 我火并", target: "s17", feedback: "狠人" }, { text: "火并王伦", target: "BACK", feedback: "✔" }, { text: "离开梁山", target: "s18", feedback: "懦弱" }, { text: "告密", target: "s19", feedback: "小人" }] },
    s17: { id: "s17", text: "👑 晁盖：林冲推举我当梁山首领，你以为是吴用？", options: [{ text: "👑 我当老大", target: "s18", feedback: "野心" }, { text: "晁盖", target: "BACK", feedback: "✔" }, { text: "吴用", target: "s19", feedback: "军师" }, { text: "自己", target: "s20", feedback: "不行" }] },
    s18: { id: "s18", text: "📊 林冲：我排第六，你连数字都数不清？", options: [{ text: "📈 排名", target: "s19", feedback: "关心" }, { text: "6", target: "BACK", feedback: "✔" }, { text: "5", target: "s20", feedback: "错" }, { text: "7", target: "s21", feedback: "错" }] },
    s19: { id: "s19", text: "⭐ 林冲：我是天雄星，你把我当成鲁智深的天孤星？", options: [{ text: "✨ 星星", target: "s20", feedback: "漂亮" }, { text: "天雄星", target: "BACK", feedback: "✔" }, { text: "天孤星", target: "s21", feedback: "鲁智深" }, { text: "天伤星", target: "s22", feedback: "武松" }] },
    s20: { id: "s20", text: "🔱 林冲：我的丈八蛇矛，你非给我青龙刀？", options: [{ text: "🏹 弓箭", target: "s21", feedback: "不是" }, { text: "丈八蛇矛", target: "BACK", feedback: "✔" }, { text: "青龙刀", target: "s22", feedback: "关胜" }, { text: "禅杖", target: "s23", feedback: "鲁智深" }] },
    s21: { id: "s21", text: "🐆 林冲：绰号豹子头，你把我叫青面兽？杨志会哭的！", options: [{ text: "🐯 老虎", target: "s22", feedback: "武松" }, { text: "豹子头", target: "BACK", feedback: "✔" }, { text: "青面兽", target: "s23", feedback: "杨志" }, { text: "行者", target: "s24", feedback: "武松" }] },
    s22: { id: "s22", text: "💔 林娘子：我被高衙内逼死，你居然以为我被救走了？", options: [{ text: "😭 太惨了", target: "s23", feedback: "哭" }, { text: "被高衙内逼死", target: "BACK", feedback: "✔" }, { text: "被救走", target: "s24", feedback: "假" }, { text: "出家", target: "s25", feedback: "不对" }] },
    s23: { id: "s23", text: "🐎 林冲：我是马军五虎将，你让我去当步军？", options: [{ text: "🐴 骑马", target: "s24", feedback: "帅" }, { text: "马军五虎将", target: "BACK", feedback: "✔" }, { text: "步军头领", target: "s25", feedback: "错" }, { text: "水军", target: "s26", feedback: "不会水" }] },
    s24: { id: "s24", text: "⚔️ 林冲：方腊、辽国、田虎、王庆我都打了，你随便选一个都对！", options: [{ text: "🏆 立功", target: "s25", feedback: "好" }, { text: "方腊", target: "BACK", feedback: "✔" }, { text: "辽国", target: "s26", feedback: "也打了" }, { text: "田虎", target: "s27", feedback: "也打了" }] },
    s25: { id: "s25", text: "💪 王寅：我是被林冲打死的，你非说是石宝？", options: [{ text: "👊 好拳", target: "s26", feedback: "厉害" }, { text: "王寅", target: "BACK", feedback: "✔" }, { text: "石宝", target: "s27", feedback: "关胜杀" }, { text: "邓元觉", target: "s28", feedback: "鲁智深杀" }] },
    s26: { id: "s26", text: "🦵 林冲：我得了风瘫半身不遂，你让我得伤寒？", options: [{ text: "🩼 可怜", target: "s27", feedback: "叹气" }, { text: "风瘫", target: "BACK", feedback: "✔" }, { text: "伤寒", target: "s28", feedback: "不对" }, { text: "瘟疫", target: "s29", feedback: "错" }] },
    s27: { id: "s27", text: "🏯 林冲：我在杭州六和寺病逝，你让我回东京？", options: [{ text: "😢 泪目", target: "s28", feedback: "伤心" }, { text: "杭州六和寺", target: "BACK", feedback: "✔" }, { text: "东京", target: "s29", feedback: "错" }, { text: "沧州", target: "s30", feedback: "错" }] },
    s28: { id: "s28", text: "🤝 武松：我在六和寺照顾林冲，你以为是鲁智深？他早圆寂了！", options: [{ text: "🍻 兄弟情", target: "s29", feedback: "感动" }, { text: "武松", target: "BACK", feedback: "✔" }, { text: "鲁智深", target: "s30", feedback: "已圆寂" }, { text: "宋江", target: "s1", feedback: "不在" }] },
    s29: { id: "s29", text: "🏹 周侗：我是林冲的师父，你把我当成岳飞？我是他师父！", options: [{ text: "📖 学艺", target: "s30", feedback: "厉害" }, { text: "周侗", target: "BACK", feedback: "✔" }, { text: "岳飞", target: "s1", feedback: "徒弟" }, { text: "卢俊义", target: "s2", feedback: "师兄" }] },
    s30: { id: "s30", text: "😡 林冲：我一生最恨高俅！你选陆谦？他不过是个走狗！", options: [{ text: "💢 我也恨", target: "s1", feedback: "同感" }, { text: "高俅", target: "BACK", feedback: "✔" }, { text: "陆谦", target: "s2", feedback: "帮凶" }, { text: "高衙内", target: "s3", feedback: "直接" }] },

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
      text: "💀 林冲最终结局是？",
      options: [
        { text: "打仗战死", target: "death_end", feedback: "❌ 错！" },
        { text: "六和寺病逝", target: "death_end", feedback: "✅ 对，但触发结局" },
        { text: "被高俅害死", target: "death_end", feedback: "❌ 错！" },
        { text: "出家为僧", target: "death_end", feedback: "❌ 错！" }
      ]
    },
    death_end: {
      id: "death_end",
      text: "🎬 游戏结束！错题太多，林冲不想带你玩了！",
      options: [{ text: "🔄 重新开始", target: "RESTART_GAME", feedback: "" }]
    }
  }
};