export const chapter_1 = {
  id: "chapter_1",
  title: "第一章 · 花和尚鲁智深",
  startNodeId: "m1",

  nodes: {
    // ==================== 主线 30 题（正确答案随机位置） ====================
    m1: { id: "m1", text: "鲁达在渭州酒楼，听到谁在哭？", options: [{ text: "店小二", target: "s1", feedback: "❌" }, { text: "金翠莲父女", target: "m2", feedback: "✅" }, { text: "李忠", target: "s1", feedback: "❌" }, { text: "郑屠", target: "s1", feedback: "❌" }] },
    m2: { id: "m2", text: "欺负金翠莲的恶霸外号是？", options: [{ text: "镇关西", target: "m3", feedback: "✅" }, { text: "蒋门神", target: "s2", feedback: "❌" }, { text: "西门庆", target: "s2", feedback: "❌" }, { text: "牛二", target: "s2", feedback: "❌" }] },
    m3: { id: "m3", text: "鲁达给了金氏父女多少两银子？", options: [{ text: "五两", target: "s3", feedback: "❌" }, { text: "十两", target: "s3", feedback: "❌" }, { text: "十五两", target: "m4", feedback: "✅" }, { text: "二十两", target: "s3", feedback: "❌" }] },
    m4: { id: "m4", text: "鲁达怕郑屠追赶，他怎么做？", options: [{ text: "直接开打", target: "s4", feedback: "❌" }, { text: "坐门口守着", target: "m5", feedback: "✅" }, { text: "报官", target: "s4", feedback: "❌" }, { text: "不管", target: "s4", feedback: "❌" }] },
    m5: { id: "m5", text: "鲁达先让郑屠切什么？", options: [{ text: "十斤精肉臊子", target: "m6", feedback: "✅" }, { text: "十斤肥肉", target: "s5", feedback: "❌" }, { text: "十斤软骨", target: "s5", feedback: "❌" }, { text: "十斤排骨", target: "s5", feedback: "❌" }] },
    m6: { id: "m6", text: "接着鲁达让切什么？", options: [{ text: "十斤瘦肉", target: "s6", feedback: "❌" }, { text: "十斤肥肉臊子", target: "m7", feedback: "✅" }, { text: "十斤骨头", target: "s6", feedback: "❌" }, { text: "十斤猪肝", target: "s6", feedback: "❌" }] },
    m7: { id: "m7", text: "最后让切什么？", options: [{ text: "十斤猪血", target: "s7", feedback: "❌" }, { text: "十斤猪蹄", target: "s7", feedback: "❌" }, { text: "十斤软骨", target: "m8", feedback: "✅" }, { text: "十斤猪头肉", target: "s7", feedback: "❌" }] },
    m8: { id: "m8", text: "郑屠拿什么武器要杀鲁达？", options: [{ text: "菜刀", target: "s8", feedback: "❌" }, { text: "铁棍", target: "s8", feedback: "❌" }, { text: "板凳", target: "s8", feedback: "❌" }, { text: "剔骨尖刀", target: "m9", feedback: "✅" }] },
    m9: { id: "m9", text: "第一拳打郑屠哪里？", options: [{ text: "眼睛", target: "s9", feedback: "❌" }, { text: "鼻子", target: "m10", feedback: "✅" }, { text: "太阳穴", target: "s9", feedback: "❌" }, { text: "胸口", target: "s9", feedback: "❌" }] },
    m10: { id: "m10", text: "第二拳打哪里？", options: [{ text: "嘴巴", target: "s10", feedback: "❌" }, { text: "后脑", target: "s10", feedback: "❌" }, { text: "眼眶眉梢", target: "m11", feedback: "✅" }, { text: "肚子", target: "s10", feedback: "❌" }] },
    m11: { id: "m11", text: "第三拳打哪里，郑屠毙命？", options: [{ text: "太阳穴", target: "m12", feedback: "✅" }, { text: "头顶", target: "s11", feedback: "❌" }, { text: "喉咙", target: "s11", feedback: "❌" }, { text: "后背", target: "s11", feedback: "❌" }] },
    m12: { id: "m12", text: "打死郑屠后，鲁达先逃到哪里？", options: [{ text: "东京", target: "s12", feedback: "❌" }, { text: "代州雁门县", target: "m13", feedback: "✅" }, { text: "二龙山", target: "s12", feedback: "❌" }, { text: "梁山", target: "s12", feedback: "❌" }] },
    m13: { id: "m13", text: "谁推荐鲁达去五台山出家？", options: [{ text: "金老", target: "s13", feedback: "❌" }, { text: "李忠", target: "s13", feedback: "❌" }, { text: "赵员外", target: "m14", feedback: "✅" }, { text: "史进", target: "s13", feedback: "❌" }] },
    m14: { id: "m14", text: "长老给鲁达取法名叫？", options: [{ text: "智真", target: "s14", feedback: "❌" }, { text: "智深", target: "m15", feedback: "✅" }, { text: "智清", target: "s14", feedback: "❌" }, { text: "智远", target: "s14", feedback: "❌" }] },
    m15: { id: "m15", text: "鲁智深大闹五台山，是因为喝多了什么？", options: [{ text: "茶", target: "s15", feedback: "❌" }, { text: "水", target: "s15", feedback: "❌" }, { text: "酒", target: "m16", feedback: "✅" }, { text: "醋", target: "s15", feedback: "❌" }] },
    m16: { id: "m16", text: "鲁智深打坏了五台山的什么？", options: [{ text: "金刚像", target: "m17", feedback: "✅" }, { text: "钟楼", target: "s16", feedback: "❌" }, { text: "经堂", target: "s16", feedback: "❌" }, { text: "山门", target: "s16", feedback: "❌" }] },
    m17: { id: "m17", text: "长老把鲁智深推荐去了哪里？", options: [{ text: "少林寺", target: "s17", feedback: "❌" }, { text: "东京大相国寺", target: "m18", feedback: "✅" }, { text: "灵隐寺", target: "s17", feedback: "❌" }, { text: "二龙山", target: "s17", feedback: "❌" }] },
    m18: { id: "m18", text: "鲁智深在桃花山遇到谁？", options: [{ text: "杨志", target: "s18", feedback: "❌" }, { text: "武松", target: "s18", feedback: "❌" }, { text: "林冲", target: "s18", feedback: "❌" }, { text: "李忠", target: "m19", feedback: "✅" }] },
    m19: { id: "m19", text: "鲁智深在桃花山教训了谁？", options: [{ text: "李忠", target: "s19", feedback: "❌" }, { text: "小霸王周通", target: "m20", feedback: "✅" }, { text: "刘太公", target: "s19", feedback: "❌" }, { text: "山贼", target: "s19", feedback: "❌" }] },
    m20: { id: "m20", text: "瓦罐寺的两个恶人是？", options: [{ text: "邓龙、周通", target: "s20", feedback: "❌" }, { text: "蒋门神、张都监", target: "s20", feedback: "❌" }, { text: "崔道成、丘小乙", target: "m21", feedback: "✅" }, { text: "生铁佛、飞天夜叉", target: "s20", feedback: "❌" }] },
    m21: { id: "m21", text: "谁帮鲁智深一起灭了恶僧？", options: [{ text: "杨志", target: "s21", feedback: "❌" }, { text: "武松", target: "s21", feedback: "❌" }, { text: "林冲", target: "s21", feedback: "❌" }, { text: "九纹龙史进", target: "m22", feedback: "✅" }] },
    m22: { id: "m22", text: "鲁智深到相国寺被安排管什么？", options: [{ text: "藏经阁", target: "s22", feedback: "❌" }, { text: "菜园子", target: "m23", feedback: "✅" }, { text: "厨房", target: "s22", feedback: "❌" }, { text: "山门", target: "s22", feedback: "❌" }] },
    m23: { id: "m23", text: "鲁智深倒拔垂杨柳，镇住了谁？", options: [{ text: "和尚", target: "s23", feedback: "❌" }, { text: "泼皮无赖", target: "m24", feedback: "✅" }, { text: "官兵", target: "s23", feedback: "❌" }, { text: "林冲", target: "s23", feedback: "❌" }] },
    m24: { id: "m24", text: "鲁智深和谁结拜兄弟？", options: [{ text: "武松", target: "s24", feedback: "❌" }, { text: "宋江", target: "s24", feedback: "❌" }, { text: "林冲", target: "m25", feedback: "✅" }, { text: "杨志", target: "s24", feedback: "❌" }] },
    m25: { id: "m25", text: "林冲被高俅发配到哪？", options: [{ text: "孟州", target: "s25", feedback: "❌" }, { text: "江州", target: "s25", feedback: "❌" }, { text: "大名府", target: "s25", feedback: "❌" }, { text: "沧州", target: "m26", feedback: "✅" }] },
    m26: { id: "m26", text: "鲁智深在哪里救下林冲？", options: [{ text: "飞云浦", target: "s26", feedback: "❌" }, { text: "快活林", target: "s26", feedback: "❌" }, { text: "野猪林", target: "m27", feedback: "✅" }, { text: "山神庙", target: "s26", feedback: "❌" }] },
    m27: { id: "m27", text: "救了林冲后，鲁智深去哪里落草？", options: [{ text: "梁山", target: "s27", feedback: "❌" }, { text: "二龙山", target: "m28", feedback: "✅" }, { text: "桃花山", target: "s27", feedback: "❌" }, { text: "少华山", target: "s27", feedback: "❌" }] },
    m28: { id: "m28", text: "二龙山和鲁智深一起的是？", options: [{ text: "武松", target: "s28", feedback: "❌" }, { text: "李逵", target: "s28", feedback: "❌" }, { text: "杨志", target: "m29", feedback: "✅" }, { text: "花荣", target: "s28", feedback: "❌" }] },
    m29: { id: "m29", text: "鲁智深的星号是？", options: [{ text: "天伤星", target: "s29", feedback: "❌" }, { text: "天孤星", target: "m30", feedback: "✅" }, { text: "天雄星", target: "s29", feedback: "❌" }, { text: "天暗星", target: "s29", feedback: "❌" }] },
    m30: { id: "m30", text: "鲁智深最后在哪里圆寂？", options: [{ text: "五台山", target: "s30", feedback: "❌" }, { text: "大相国寺", target: "s30", feedback: "❌" }, { text: "灵隐寺", target: "s30", feedback: "❌" }, { text: "杭州六和寺", target: "complete", feedback: "✅" }] },

    // ==================== 通关结局 ====================
    complete: {
      id: "complete",
      text: "🎉 恭喜通关！鲁智深从拳打镇关西到六和寺圆寂，传奇一生走完了！",
      options: [
        { text: "🔄 重新玩第一章", target: "m1", feedback: "" },
        { text: "📖 下一章（林冲篇）", target: "chapter_2", feedback: "" },
        { text: "🏠 回主菜单", target: "RESTART_GAME", feedback: "" }
      ]
    },

    // ==================== 支线 s1 ~ s30（正确选项 BACK 在第2或第3位） ====================
    s1: { id: "s1", text: "😂 鲁智深：哭的不是店小二！你是不是酒喝多了？", options: [{ text: "😵 我就是喝多了，继续迷糊", target: "s2", feedback: "更迷糊" }, { text: "我认错人了，回去好好答", target: "BACK", feedback: "回去答题" }, { text: "🍶 走，跟洒家喝酒去", target: "s3", feedback: "喝懵了" }, { text: "🌳 我去倒拔垂杨柳醒醒酒", target: "s4", feedback: "树好惨" }] },
    s2: { id: "s2", text: "🤪 蒋门神是武松打的！你这历史是体育老师教的？", options: [{ text: "📚 体育老师冤枉啊", target: "s3", feedback: "甩锅成功" }, { text: "我错了，回去好好答", target: "BACK", feedback: "回去" }, { text: "🥋 那我去打武松", target: "s4", feedback: "你打不过" }, { text: "🙈 我假装没看见", target: "s5", feedback: "自欺欺人" }] },
    s3: { id: "s3", text: "😝 银子数都数不对，你怕不是被郑屠坑了？", options: [{ text: "💰 郑屠坑我，我坑他", target: "s4", feedback: "互相伤害" }, { text: "🍖 用银子买肉吃", target: "s5", feedback: "吃货无疑" }, { text: "我回去重算", target: "BACK", feedback: "回主线" }, { text: "🪙 银子扔了不要了", target: "s6", feedback: "土豪行为" }] },
    s4: { id: "s4", text: "😤 直接开打就放跑郑屠了！你比鲁智深还冲动！", options: [{ text: "🔥 我就爱冲动", target: "s5", feedback: "年轻气盛" }, { text: "我冷静了，回去好好答", target: "BACK", feedback: "冷静" }, { text: "⚔️ 我要单挑全镇关西", target: "s6", feedback: "勇气可嘉" }, { text: "🛑 冲动是魔鬼，我信了", target: "s7", feedback: "顿悟了" }] },
    s5: { id: "s5", text: "🤣 顺序都错啦！先精肉再肥肉，你是来捣乱的？", options: [{ text: "🥩 我就要乱切", target: "s6", feedback: "叛逆" }, { text: "我按顺序来", target: "BACK", feedback: "回主线" }, { text: "🔪 我把肉铺掀了", target: "s7", feedback: "暴力解决" }, { text: "😋 切完自己吃", target: "s8", feedback: "吃货实锤" }] },
    s6: { id: "s6", text: "😜 肥肉是第二步！你这是要把郑屠CPU干烧？", options: [{ text: "🤯 我就要烧他CPU", target: "s7", feedback: "电子斗法" }, { text: "我正常点，回去好好答", target: "BACK", feedback: "回主线" }, { text: "🍻 切完喝酒去", target: "s8", feedback: "就知道喝" }, { text: "🙄 我不玩了", target: "s9", feedback: "摆烂了" }] },
    s7: { id: "s7", text: "😎 最后是软骨！你这是想给郑屠加餐？", options: [{ text: "🍲 我就要加餐", target: "s8", feedback: "大方" }, { text: "🥢 我喂他吃", target: "s9", feedback: "服务到位" }, { text: "回去好好答", target: "BACK", feedback: "回主线" }, { text: "💥 我直接掀摊子", target: "s10", feedback: "简单粗暴" }] },
    s8: { id: "s8", text: "⚔️ 是剔骨尖刀！你拿个菜刀也太不专业了！", options: [{ text: "🔪 菜刀更顺手", target: "s9", feedback: "居家好男人" }, { text: "我记住了，回去好好答", target: "BACK", feedback: "回主线" }, { text: "🗡️ 我要宝剑", target: "s10", feedback: "想多了" }, { text: "🛡️ 我拿盾牌", target: "s11", feedback: "防御拉满" }] },
    s9: { id: "s9", text: "👃 第一拳鼻子！你打眼睛是想让他看不清？", options: [{ text: "😎 我就要打眼睛", target: "s10", feedback: "战术迷惑" }, { text: "我打鼻子，回去好好答", target: "BACK", feedback: "回主线" }, { text: "🤛 我用巴掌扇", target: "s11", feedback: "侮辱性极强" }, { text: "🚶 我不打了", target: "s12", feedback: "认怂" }] },
    s10: { id: "s10", text: "😵 第二拳眼眶眉梢！你这拳打偏到姥姥家了！", options: [{ text: "🤪 偏就偏了", target: "s11", feedback: "无所谓" }, { text: "纠正姿势，回去好好答", target: "BACK", feedback: "回主线" }, { text: "🦵 我用脚踹", target: "s12", feedback: "不讲武德" }, { text: "👏 我鼓掌叫好", target: "s13", feedback: "迷惑行为" }] },
    s11: { id: "s11", text: "💀 第三拳太阳穴直接带走！你这是刮痧？", options: [{ text: "😴 我就刮痧", target: "s12", feedback: "温柔打法" }, { text: "我重拳出击，回去好好答", target: "BACK", feedback: "回主线" }, { text: "🥊 我要打拳击", target: "s13", feedback: "专业" }, { text: "🏃 我打不过跑了", target: "s14", feedback: "跑路" }] },
    s12: { id: "s12", text: "🏃 先逃雁门县！你直接去梁山也太着急了！", options: [{ text: "🚀 我要坐飞机", target: "s13", feedback: "现代装备" }, { text: "一步一步来，回去好好答", target: "BACK", feedback: "回主线" }, { text: "🐎 我骑快马", target: "s14", feedback: "正常点" }, { text: "🗺️ 我迷路了", target: "s15", feedback: "路痴" }] },
    s13: { id: "s13", text: "🙏 赵员外推荐的！金老只是带路而已！", options: [{ text: "👥 我脸盲", target: "s14", feedback: "正常" }, { text: "分清人物，回去好好答", target: "BACK", feedback: "回主线" }, { text: "🆔 我要看身份证", target: "s15", feedback: "严谨" }, { text: "🔄 我全都记一遍", target: "s16", feedback: "努力" }] },
    s14: { id: "s14", text: "🧓 智深！智真是长老！你连法号都搞混？", options: [{ text: "📛 名字太多记不住", target: "s15", feedback: "真实" }, { text: "我分清了，回去好好答", target: "BACK", feedback: "回主线" }, { text: "🧾 我拿小本本记", target: "s16", feedback: "好学生" }, { text: "🤐 我不问了", target: "s17", feedback: "沉默" }] },
    s15: { id: "s15", text: "🍶 酒！花和尚不喝酒那还叫花和尚？", options: [{ text: "🥤 我喝奶茶", target: "s16", feedback: "现代和尚" }, { text: "懂了，回去好好答", target: "BACK", feedback: "回主线" }, { text: "🍺 我喝啤酒", target: "s17", feedback: "更猛" }, { text: "🍷 我喝红酒", target: "s18", feedback: "讲究" }] },
    s16: { id: "s16", text: "🗿 打坏金刚像！你以为拆家呢？", options: [{ text: "🐶 我就是拆家", target: "s17", feedback: "二哈行为" }, { text: "我不拆了，回去好好答", target: "BACK", feedback: "回主线" }, { text: "🏗️ 我再盖回去", target: "s18", feedback: "良心发现" }, { text: "🙇 我认错", target: "s19", feedback: "乖巧" }] },
    s17: { id: "s17", text: "🏯 大相国寺！少林寺不收爱喝酒的！", options: [{ text: "🍶 我就爱喝酒", target: "s18", feedback: "真实" }, { text: "我去对地方，回去好好答", target: "BACK", feedback: "回主线" }, { text: "🥗 我吃素", target: "s19", feedback: "假装乖巧" }, { text: "🧎 我出家", target: "s20", feedback: "太突然" }] },
    s18: { id: "s18", text: "🤝 李忠！你这是提前偶遇杨志了？", options: [{ text: "🎬 我要改剧情", target: "s19", feedback: "导演附体" }, { text: "按剧情来，回去好好答", target: "BACK", feedback: "回主线" }, { text: "🗣️ 我要加戏", target: "s20", feedback: "戏精" }, { text: "🤫 我低调路过", target: "s21", feedback: "隐身" }] },
    s19: { id: "s19", text: "😈 周通！李忠是自己人，别打错了！", options: [{ text: "⚔️ 我全都打", target: "s20", feedback: "敌我不分" }, { text: "分清敌我，回去好好答", target: "BACK", feedback: "回主线" }, { text: "🤝 我全都交", target: "s21", feedback: "老好人" }, { text: "🛑 我不打了", target: "s22", feedback: "佛系" }] },
    s20: { id: "s20", text: "👹 崔道成丘小乙！你这反派名字记串了！", options: [{ text: "📝 我写下来", target: "s21", feedback: "认真" }, { text: "重新记，回去好好答", target: "BACK", feedback: "回主线" }, { text: "🤯 太多记不住", target: "s22", feedback: "真实" }, { text: "🔄 我再看一遍", target: "s23", feedback: "努力" }] },
    s21: { id: "s21", text: "🐉 史进！九纹龙来帮忙，你忘了？", options: [{ text: "🐲 纹龙很酷", target: "s22", feedback: "关注点偏" }, { text: "想起来了，回去好好答", target: "BACK", feedback: "回主线" }, { text: "🗡️ 我也要纹身", target: "s23", feedback: "潮流" }, { text: "🙅 我不认识", target: "s24", feedback: "冷漠" }] },
    s22: { id: "s22", text: "🥬 看菜园子！你以为去当方丈？", options: [{ text: "👑 我要当方丈", target: "s23", feedback: "野心大" }, { text: "认清身份，回去好好答", target: "BACK", feedback: "回主线" }, { text: "🍅 我要偷菜", target: "s24", feedback: "真实" }, { text: "🚫 我不想看", target: "s25", feedback: "叛逆" }] },
    s23: { id: "s23", text: "🥸 泼皮！你把和尚吓得不敢出门？", options: [{ text: "👻 我装鬼吓他们", target: "s24", feedback: "调皮" }, { text: "回去答题", target: "BACK", feedback: "回主线" }, { text: "💪 我比他们凶", target: "s25", feedback: "霸气" }, { text: "🏃 我跑", target: "s26", feedback: "胆小" }] },
    s24: { id: "s24", text: "🤝 林冲！豹子头跟你结拜！", options: [{ text: "🐆 豹子头真帅", target: "s25", feedback: "花痴" }, { text: "记住了，回去好好答", target: "BACK", feedback: "回主线" }, { text: "🤝 我也要结拜", target: "s26", feedback: "社交牛人" }, { text: "👋 我拒绝结拜", target: "s27", feedback: "高冷" }] },
    s25: { id: "s25", text: "❄️ 沧州！发配苦寒之地！", options: [{ text: "🌨️ 那边好冷", target: "s26", feedback: "关心天气" }, { text: "我记住地名，回去好好答", target: "BACK", feedback: "回主线" }, { text: "🔥 我带火炉", target: "s27", feedback: "贴心" }, { text: "🗺️ 我开导航", target: "s28", feedback: "现代装备" }] },
    s26: { id: "s26", text: "🌳 野猪林救林冲！你这地点都能错？", options: [{ text: "🦁 森林里有狮子", target: "s27", feedback: "脑洞大" }, { text: "去对地方救人，回去好好答", target: "BACK", feedback: "回主线" }, { text: "🐗 有野猪", target: "s28", feedback: "实话" }, { text: "🏹 我打猎", target: "s29", feedback: "跑偏" }] },
    s27: { id: "s27", text: "⛰️ 二龙山落草！梁山还早呢！", options: [{ text: "🚀 我直接飞梁山", target: "s28", feedback: "着急" }, { text: "一步一步上梁山，回去好好答", target: "BACK", feedback: "回主线" }, { text: "🐎 我骑马去", target: "s29", feedback: "正常" }, { text: "🗻 我就在山上", target: "s30", feedback: "躺平" }] },
    s28: { id: "s28", text: "⚔️ 杨志！青面兽跟你一起占山！", options: [{ text: "😈 青面兽好凶", target: "s29", feedback: "害怕" }, { text: "认识队友，回去好好答", target: "BACK", feedback: "回主线" }, { text: "🤝 我跟他组队", target: "s30", feedback: "会来事" }, { text: "👋 我单干", target: "s1", feedback: "独行侠" }] },
    s29: { id: "s29", text: "🌙 天孤星！花和尚一生孤独！", options: [{ text: "😔 好可怜", target: "s30", feedback: "感性" }, { text: "懂了，回去好好答", target: "BACK", feedback: "回主线" }, { text: "🍻 我陪他喝酒", target: "s1", feedback: "暖心" }, { text: "🙏 我给他上香", target: "s2", feedback: "太隆重" }] },
    s30: { id: "s30", text: "🌊 六和寺听潮圆寂！这都能错？", options: [{ text: "🌊 潮信好有意境", target: "s1", feedback: "文艺" }, { text: "最后一题认真答", target: "BACK", feedback: "回主线" }, { text: "🕯️ 我要祭奠他", target: "s2", feedback: "重感情" }, { text: "💀 死亡彩蛋", target: "death_entry", feedback: "😱" }] },

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
      text: "💀 鲁智深最终结局是？",
      options: [
        { text: "打仗战死", target: "death_end", feedback: "❌ 错！" },
        { text: "六和寺圆寂", target: "death_end", feedback: "✅ 对，但触发结局" },
        { text: "喝酒喝死", target: "death_end", feedback: "❌ 错！" },
        { text: "被奸臣害死", target: "death_end", feedback: "❌ 错！" }
      ]
    },
    death_end: {
      id: "death_end",
      text: "🎬 游戏结束！错题太多，鲁智深不想带你玩了！",
      options: [{ text: "🔄 重新开始", target: "RESTART_GAME", feedback: "" }]
    }
  }
};