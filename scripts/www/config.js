// config.js - 全局配置 + 内置所有分类词库
const APP_CONFIG = {
    audioBasePath: './audio/',
    wrongStoragePrefix: 'wrong_bank_',
    scoreStatsPrefix: 'stats_',
    dailyPlanKey: 'daily_plan_',
    weakWordThreshold: 0.6,
    dailyDefaultGoal: 10,
    examTargetQuestions: 10,
    masteredCorrectCount: 3
};

// ==================== 1. 小学必背单词500（默认主词库） ====================
const PRIMARY_SCHOOL_WORDS = [
    { en: "apple", zh: "苹果" }, { en: "pear", zh: "梨" }, { en: "banana", zh: "香蕉" }, { en: "orange", zh: "橙子" }, { en: "grape", zh: "葡萄" },
    { en: "watermelon", zh: "西瓜" }, { en: "strawberry", zh: "草莓" }, { en: "mango", zh: "芒果" }, { en: "lemon", zh: "柠檬" }, { en: "kiwi", zh: "猕猴桃" },
    { en: "cat", zh: "猫" }, { en: "dog", zh: "狗" }, { en: "bird", zh: "鸟" }, { en: "fish", zh: "鱼" }, { en: "rabbit", zh: "兔子" },
    { en: "tiger", zh: "老虎" }, { en: "lion", zh: "狮子" }, { en: "elephant", zh: "大象" }, { en: "monkey", zh: "猴子" }, { en: "panda", zh: "熊猫" },
    { en: "red", zh: "红色" }, { en: "blue", zh: "蓝色" }, { en: "yellow", zh: "黄色" }, { en: "green", zh: "绿色" }, { en: "black", zh: "黑色" },
    { en: "white", zh: "白色" }, { en: "pink", zh: "粉色" }, { en: "purple", zh: "紫色" }, { en: "brown", zh: "棕色" }, { en: "orange", zh: "橙色" },
    { en: "one", zh: "一" }, { en: "two", zh: "二" }, { en: "three", zh: "三" }, { en: "four", zh: "四" }, { en: "five", zh: "五" },
    { en: "six", zh: "六" }, { en: "seven", zh: "七" }, { en: "eight", zh: "八" }, { en: "nine", zh: "九" }, { en: "ten", zh: "十" },
    { en: "big", zh: "大" }, { en: "small", zh: "小" }, { en: "tall", zh: "高" }, { en: "short", zh: "矮" }, { en: "long", zh: "长" },
    { en: "hot", zh: "热" }, { en: "cold", zh: "冷" }, { en: "happy", zh: "快乐" }, { en: "sad", zh: "悲伤" }, { en: "good", zh: "好" },
    { en: "bad", zh: "坏" }, { en: "fast", zh: "快速" }, { en: "slow", zh: "缓慢" }, { en: "new", zh: "新" }, { en: "old", zh: "旧" },
    { en: "young", zh: "年轻" }, { en: "beautiful", zh: "美丽" }, { en: "ugly", zh: "丑陋" }, { en: "clean", zh: "干净" }, { en: "dirty", zh: "脏" },
    { en: "easy", zh: "容易" }, { en: "hard", zh: "困难" }, { en: "early", zh: "早" }, { en: "late", zh: "晚" }, { en: "right", zh: "正确" },
    { en: "wrong", zh: "错误" }, { en: "rich", zh: "富有" }, { en: "poor", zh: "贫穷" }, { en: "strong", zh: "强壮" }, { en: "weak", zh: "虚弱" },
    { en: "father", zh: "父亲" }, { en: "mother", zh: "母亲" }, { en: "brother", zh: "兄弟" }, { en: "sister", zh: "姐妹" }, { en: "grandpa", zh: "爷爷" },
    { en: "grandma", zh: "奶奶" }, { en: "uncle", zh: "叔叔" }, { en: "aunt", zh: "阿姨" }, { en: "cousin", zh: "表兄妹" }, { en: "teacher", zh: "老师" },
    { en: "student", zh: "学生" }, { en: "doctor", zh: "医生" }, { en: "nurse", zh: "护士" }, { en: "driver", zh: "司机" }, { en: "cook", zh: "厨师" },
    { en: "policeman", zh: "警察" }, { en: "fireman", zh: "消防员" }, { en: "postman", zh: "邮递员" }, { en: "farmer", zh: "农民" }, { en: "school", zh: "学校" },
    { en: "classroom", zh: "教室" }, { en: "desk", zh: "书桌" }, { en: "chair", zh: "椅子" }, { en: "book", zh: "书" }, { en: "pen", zh: "钢笔" },
    { en: "pencil", zh: "铅笔" }, { en: "eraser", zh: "橡皮" }, { en: "ruler", zh: "尺子" }, { en: "bag", zh: "书包" }, { en: "home", zh: "家" },
    { en: "room", zh: "房间" }, { en: "bed", zh: "床" }, { en: "table", zh: "桌子" }, { en: "door", zh: "门" }, { en: "window", zh: "窗户" },
    { en: "wall", zh: "墙" }, { en: "floor", zh: "地板" }, { en: "light", zh: "灯" }, { en: "clock", zh: "钟" }, { en: "car", zh: "汽车" },
    { en: "bus", zh: "公交车" }, { en: "train", zh: "火车" }, { en: "plane", zh: "飞机" }, { en: "ship", zh: "船" }, { en: "bike", zh: "自行车" },
    { en: "taxi", zh: "出租车" }, { en: "subway", zh: "地铁" }, { en: "motorcycle", zh: "摩托车" }, { en: "truck", zh: "卡车" }, { en: "sun", zh: "太阳" },
    { en: "moon", zh: "月亮" }, { en: "star", zh: "星星" }, { en: "cloud", zh: "云" }, { en: "rain", zh: "雨" }, { en: "snow", zh: "雪" },
    { en: "wind", zh: "风" }, { en: "sky", zh: "天空" }, { en: "river", zh: "河流" }, { en: "lake", zh: "湖" }, { en: "mountain", zh: "山" },
    { en: "forest", zh: "森林" }, { en: "flower", zh: "花" }, { en: "grass", zh: "草" }, { en: "tree", zh: "树" }, { en: "run", zh: "跑" },
    { en: "walk", zh: "走" }, { en: "jump", zh: "跳" }, { en: "swim", zh: "游泳" }, { en: "fly", zh: "飞" }, { en: "eat", zh: "吃" },
    { en: "drink", zh: "喝" }, { en: "sleep", zh: "睡觉" }, { en: "wake", zh: "醒来" }, { en: "play", zh: "玩" }, { en: "read", zh: "读" },
    { en: "write", zh: "写" }, { en: "draw", zh: "画" }, { en: "sing", zh: "唱" }, { en: "dance", zh: "跳舞" }, { en: "study", zh: "学习" },
    { en: "work", zh: "工作" }, { en: "help", zh: "帮助" }, { en: "love", zh: "爱" }, { en: "like", zh: "喜欢" }, { en: "hate", zh: "讨厌" },
    { en: "want", zh: "想要" }, { en: "need", zh: "需要" }, { en: "have", zh: "有" }, { en: "give", zh: "给" }, { en: "take", zh: "拿" },
    { en: "bring", zh: "带来" }, { en: "buy", zh: "买" }, { en: "sell", zh: "卖" }, { en: "make", zh: "制作" }, { en: "do", zh: "做" },
    { en: "go", zh: "去" }, { en: "come", zh: "来" }, { en: "see", zh: "看见" }, { en: "look", zh: "看" }, { en: "watch", zh: "观看" },
    { en: "listen", zh: "听" }, { en: "hear", zh: "听到" }, { en: "speak", zh: "说" }, { en: "talk", zh: "谈话" }, { en: "tell", zh: "告诉" },
    { en: "ask", zh: "问" }, { en: "answer", zh: "回答" }, { en: "open", zh: "打开" }, { en: "close", zh: "关闭" }, { en: "start", zh: "开始" },
    { en: "finish", zh: "完成" }, { en: "stop", zh: "停止" }, { en: "wait", zh: "等待" }, { en: "leave", zh: "离开" }, { en: "arrive", zh: "到达" },
    { en: "enter", zh: "进入" }, { en: "exit", zh: "退出" }, { en: "push", zh: "推" }, { en: "pull", zh: "拉" }, { en: "lift", zh: "举起" },
    { en: "drop", zh: "掉落" }, { en: "break", zh: "打破" }, { en: "fix", zh: "修理" }, { en: "clean", zh: "清洁" }, { en: "wash", zh: "洗" },
    { en: "dry", zh: "弄干" }, { en: "put", zh: "放" }, { en: "place", zh: "放置" }, { en: "move", zh: "移动" }, { en: "change", zh: "改变" },
    { en: "become", zh: "变成" }, { en: "grow", zh: "生长" }, { en: "die", zh: "死亡" }, { en: "live", zh: "生活" }, { en: "smile", zh: "微笑" },
    { en: "cry", zh: "哭" }, { en: "laugh", zh: "笑" }, { en: "shout", zh: "喊叫" }, { en: "whisper", zh: "低语" }, { en: "think", zh: "思考" },
    { en: "know", zh: "知道" }, { en: "believe", zh: "相信" }, { en: "forget", zh: "忘记" }, { en: "remember", zh: "记住" }, { en: "hope", zh: "希望" },
    { en: "wish", zh: "愿望" }, { en: "dream", zh: "梦想" }, { en: "plan", zh: "计划" }, { en: "decide", zh: "决定" }, { en: "try", zh: "尝试" },
    { en: "fail", zh: "失败" }, { en: "succeed", zh: "成功" }, { en: "learn", zh: "学习" }, { en: "teach", zh: "教" }, { en: "understand", zh: "理解" },
    { en: "explain", zh: "解释" }, { en: "show", zh: "展示" }, { en: "hide", zh: "隐藏" }, { en: "find", zh: "找到" }, { en: "lose", zh: "丢失" },
    { en: "win", zh: "赢" }, { en: "beat", zh: "打败" }, { en: "fight", zh: "打架" }, { en: "protect", zh: "保护" }, { en: "save", zh: "拯救" },
    { en: "kill", zh: "杀" }, { en: "hurt", zh: "伤害" }, { en: "serve", zh: "服务" }, { en: "cook", zh: "烹饪" }, { en: "bake", zh: "烘焙" },
    { en: "fry", zh: "油炸" }, { en: "boil", zh: "煮沸" }, { en: "steam", zh: "蒸" }, { en: "cut", zh: "切" }, { en: "chop", zh: "剁" },
    { en: "mix", zh: "混合" }, { en: "stir", zh: "搅拌" }, { en: "pour", zh: "倒" }, { en: "sip", zh: "小口喝" }, { en: "gulp", zh: "大口喝" },
    { en: "taste", zh: "品尝" }, { en: "smell", zh: "闻" }, { en: "feel", zh: "感觉" }, { en: "touch", zh: "触摸" }, { en: "hold", zh: "握住" },
    { en: "carry", zh: "携带" }, { en: "wear", zh: "穿" }, { en: "put on", zh: "穿上" }, { en: "take off", zh: "脱下" }, { en: "dress", zh: "穿衣" },
    { en: "undress", zh: "脱衣" }, { en: "brush", zh: "刷" }, { en: "comb", zh: "梳" }, { en: "bathe", zh: "洗澡" }, { en: "shower", zh: "淋浴" },
    { en: "get up", zh: "起床" }, { en: "lie down", zh: "躺下" }, { en: "sit", zh: "坐" }, { en: "stand", zh: "站" }, { en: "bend", zh: "弯腰" },
    { en: "stretch", zh: "伸展" }, { en: "turn", zh: "转身" }, { en: "hop", zh: "单脚跳" }, { en: "skip", zh: "跳绳" }, { en: "crawl", zh: "爬" },
    { en: "roll", zh: "滚" }, { en: "climb", zh: "爬" }, { en: "slide", zh: "滑" }, { en: "swing", zh: "摇摆" }, { en: "kick", zh: "踢" },
    { en: "catch", zh: "接住" }, { en: "throw", zh: "扔" }, { en: "hit", zh: "打" }, { en: "punch", zh: "拳打" }, { en: "stomp", zh: "跺脚" },
    { en: "clap", zh: "拍手" }, { en: "snap", zh: "打响指" }, { en: "wave", zh: "挥手" }, { en: "point", zh: "指" }, { en: "tap", zh: "轻拍" },
    { en: "rub", zh: "摩擦" }, { en: "squeeze", zh: "挤压" }, { en: "shake", zh: "摇晃" }, { en: "nod", zh: "点头" }, { en: "shrug", zh: "耸肩" },
    { en: "bow", zh: "鞠躬" }, { en: "kneel", zh: "跪下" }, { en: "march", zh: "行军" }, { en: "hum", zh: "哼唱" }, { en: "whistle", zh: "吹口哨" },
    { en: "cough", zh: "咳嗽" }, { en: "sneeze", zh: "打喷嚏" }, { en: "yawn", zh: "打哈欠" }, { en: "blink", zh: "眨眼" }, { en: "wink", zh: "眨眼示意" },
    { en: "stare", zh: "凝视" }, { en: "glance", zh: "瞥一眼" }, { en: "peek", zh: "偷看" }, { en: "sigh", zh: "叹息" }, { en: "giggle", zh: "咯咯笑" },
    { en: "chuckle", zh: "轻笑" }, { en: "roar", zh: "吼叫" }, { en: "scream", zh: "尖叫" }, { en: "whine", zh: "哀鸣" }, { en: "mumble", zh: "咕哝" },
    { en: "stutter", zh: "结巴" }, { en: "argue", zh: "争论" }, { en: "agree", zh: "同意" }
];

// 去重
const uniqueMap = new Map();
for (let w of PRIMARY_SCHOOL_WORDS) {
    if (!uniqueMap.has(w.en)) uniqueMap.set(w.en, w);
}
const FINAL_WORD_LIST = Array.from(uniqueMap.values());

// ==================== 2. 幼儿初级词库 ====================
const KIDS_BEGINNER_WORDS = [
    { en: "apple", zh: "苹果" }, { en: "pear", zh: "梨" }, { en: "banana", zh: "香蕉" }, { en: "orange", zh: "橙子" }, { en: "grape", zh: "葡萄" },
    { en: "cat", zh: "猫" }, { en: "dog", zh: "狗" }, { en: "bird", zh: "鸟" }, { en: "fish", zh: "鱼" }, { en: "rabbit", zh: "兔子" },
    { en: "sun", zh: "太阳" }, { en: "moon", zh: "月亮" }, { en: "star", zh: "星星" }, { en: "big", zh: "大" }, { en: "small", zh: "小" },
    { en: "red", zh: "红色" }, { en: "blue", zh: "蓝色" }, { en: "yellow", zh: "黄色" }, { en: "green", zh: "绿色" }, { en: "one", zh: "一" },
    { en: "two", zh: "二" }, { en: "three", zh: "三" }, { en: "four", zh: "四" }, { en: "five", zh: "五" }, { en: "happy", zh: "快乐" },
    { en: "sad", zh: "悲伤" }, { en: "run", zh: "跑" }, { en: "jump", zh: "跳" }, { en: "eat", zh: "吃" }, { en: "drink", zh: "喝" }
];

// ==================== 3. 湘鲁版小学词库 ====================
const XIANGLU_PRIMARY_WORDS = [
    { en: "hello", zh: "你好" }, { en: "good", zh: "好" }, { en: "morning", zh: "早晨" }, { en: "afternoon", zh: "下午" }, { en: "evening", zh: "傍晚" },
    { en: "night", zh: "夜晚" }, { en: "name", zh: "名字" }, { en: "teacher", zh: "老师" }, { en: "student", zh: "学生" }, { en: "school", zh: "学校" },
    { en: "book", zh: "书" }, { en: "pen", zh: "钢笔" }, { en: "pencil", zh: "铅笔" }, { en: "bag", zh: "书包" }, { en: "father", zh: "父亲" },
    { en: "mother", zh: "母亲" }, { en: "brother", zh: "兄弟" }, { en: "sister", zh: "姐妹" }, { en: "friend", zh: "朋友" }, { en: "family", zh: "家庭" },
    { en: "home", zh: "家" }, { en: "apple", zh: "苹果" }, { en: "banana", zh: "香蕉" }, { en: "orange", zh: "橙子" }, { en: "rice", zh: "米饭" },
    { en: "milk", zh: "牛奶" }, { en: "water", zh: "水" }, { en: "cat", zh: "猫" }, { en: "dog", zh: "狗" }, { en: "bird", zh: "鸟" },
    { en: "red", zh: "红色" }, { en: "blue", zh: "蓝色" }, { en: "yellow", zh: "黄色" }, { en: "green", zh: "绿色" }, { en: "big", zh: "大" },
    { en: "small", zh: "小" }, { en: "tall", zh: "高" }, { en: "short", zh: "矮" }, { en: "happy", zh: "快乐" }, { en: "sad", zh: "悲伤" },
    { en: "run", zh: "跑" }, { en: "walk", zh: "走" }, { en: "jump", zh: "跳" }, { en: "swim", zh: "游泳" }, { en: "fly", zh: "飞" },
    { en: "eat", zh: "吃" }, { en: "drink", zh: "喝" }, { en: "sleep", zh: "睡觉" }, { en: "play", zh: "玩" }, { en: "read", zh: "读" },
    { en: "write", zh: "写" }, { en: "draw", zh: "画" }, { en: "sing", zh: "唱" }, { en: "dance", zh: "跳舞" }, { en: "one", zh: "一" },
    { en: "two", zh: "二" }, { en: "three", zh: "三" }, { en: "four", zh: "四" }, { en: "five", zh: "五" }, { en: "today", zh: "今天" },
    { en: "tomorrow", zh: "明天" }, { en: "yesterday", zh: "昨天" }, { en: "time", zh: "时间" }, { en: "day", zh: "天" }, { en: "week", zh: "周" },
    { en: "month", zh: "月" }, { en: "year", zh: "年" }, { en: "spring", zh: "春天" }, { en: "summer", zh: "夏天" }, { en: "autumn", zh: "秋天" },
    { en: "winter", zh: "冬天" }, { en: "hot", zh: "热" }, { en: "cold", zh: "冷" }
];

// ==================== 4. 动物词库 ====================
const ANIMAL_WORDS = [
    { en: "cat", zh: "猫" }, { en: "dog", zh: "狗" }, { en: "bird", zh: "鸟" }, { en: "fish", zh: "鱼" }, { en: "rabbit", zh: "兔子" },
    { en: "tiger", zh: "老虎" }, { en: "lion", zh: "狮子" }, { en: "elephant", zh: "大象" }, { en: "monkey", zh: "猴子" }, { en: "panda", zh: "熊猫" },
    { en: "giraffe", zh: "长颈鹿" }, { en: "zebra", zh: "斑马" }, { en: "bear", zh: "熊" }, { en: "frog", zh: "青蛙" }, { en: "duck", zh: "鸭子" },
    { en: "chicken", zh: "鸡" }, { en: "cow", zh: "牛" }, { en: "pig", zh: "猪" }, { en: "horse", zh: "马" }, { en: "sheep", zh: "羊" }
];

// ==================== 5. 水果蔬菜植物词库 ====================
const PLANT_WORDS = [
    { en: "apple", zh: "苹果" }, { en: "pear", zh: "梨" }, { en: "banana", zh: "香蕉" }, { en: "orange", zh: "橙子" }, { en: "grape", zh: "葡萄" },
    { en: "watermelon", zh: "西瓜" }, { en: "strawberry", zh: "草莓" }, { en: "mango", zh: "芒果" }, { en: "tomato", zh: "番茄" }, { en: "potato", zh: "土豆" },
    { en: "carrot", zh: "胡萝卜" }, { en: "cabbage", zh: "卷心菜" }, { en: "onion", zh: "洋葱" }, { en: "cucumber", zh: "黄瓜" }, { en: "bean", zh: "豆角" },
    { en: "corn", zh: "玉米" }, { en: "mushroom", zh: "蘑菇" }, { en: "flower", zh: "花" }, { en: "tree", zh: "树" }, { en: "grass", zh: "草" }
];

// ==================== 6. 时间词库 ====================
const TIME_WORDS = [
    { en: "Monday", zh: "星期一" }, { en: "Tuesday", zh: "星期二" }, { en: "Wednesday", zh: "星期三" }, { en: "Thursday", zh: "星期四" },
    { en: "Friday", zh: "星期五" }, { en: "Saturday", zh: "星期六" }, { en: "Sunday", zh: "星期日" }, { en: "January", zh: "一月" },
    { en: "February", zh: "二月" }, { en: "March", zh: "三月" }, { en: "April", zh: "四月" }, { en: "May", zh: "五月" }, { en: "June", zh: "六月" },
    { en: "July", zh: "七月" }, { en: "August", zh: "八月" }, { en: "September", zh: "九月" }, { en: "October", zh: "十月" }, { en: "November", zh: "十一月" },
    { en: "December", zh: "十二月" }, { en: "spring", zh: "春天" }, { en: "summer", zh: "夏天" }, { en: "autumn", zh: "秋天" }, { en: "winter", zh: "冬天" },
    { en: "morning", zh: "早晨" }, { en: "noon", zh: "中午" }, { en: "afternoon", zh: "下午" }, { en: "evening", zh: "傍晚" }, { en: "night", zh: "夜晚" },
    { en: "today", zh: "今天" }, { en: "tomorrow", zh: "明天" }, { en: "yesterday", zh: "昨天" }, { en: "now", zh: "现在" }, { en: "time", zh: "时间" },
    { en: "hour", zh: "小时" }, { en: "minute", zh: "分钟" }, { en: "second", zh: "秒" }
];

// ==================== 7. 日常生活词库 ====================
const DAILY_LIFE_WORDS = [
    { en: "bed", zh: "床" }, { en: "table", zh: "桌子" }, { en: "chair", zh: "椅子" }, { en: "desk", zh: "书桌" }, { en: "door", zh: "门" },
    { en: "window", zh: "窗户" }, { en: "light", zh: "灯" }, { en: "clock", zh: "钟" }, { en: "cup", zh: "杯子" }, { en: "glass", zh: "玻璃杯" },
    { en: "plate", zh: "盘子" }, { en: "bowl", zh: "碗" }, { en: "chopsticks", zh: "筷子" }, { en: "spoon", zh: "勺子" }, { en: "fork", zh: "叉子" },
    { en: "knife", zh: "刀" }, { en: "shirt", zh: "衬衫" }, { en: "T-shirt", zh: "T恤" }, { en: "jacket", zh: "夹克" }, { en: "pants", zh: "裤子" },
    { en: "shoes", zh: "鞋子" }, { en: "hat", zh: "帽子" }, { en: "car", zh: "汽车" }, { en: "bus", zh: "公交车" }, { en: "bike", zh: "自行车" }
];

// ==================== 8. 形容词反义词词库 ====================
const ADJECTIVE_WORDS = [
    { en: "big", zh: "大" }, { en: "small", zh: "小" }, { en: "tall", zh: "高" }, { en: "short", zh: "矮" }, { en: "long", zh: "长" },
    { en: "short", zh: "短" }, { en: "fat", zh: "胖" }, { en: "thin", zh: "瘦" }, { en: "fast", zh: "快" }, { en: "slow", zh: "慢" },
    { en: "new", zh: "新" }, { en: "old", zh: "旧" }, { en: "hot", zh: "热" }, { en: "cold", zh: "冷" }, { en: "happy", zh: "快乐" },
    { en: "sad", zh: "悲伤" }, { en: "good", zh: "好" }, { en: "bad", zh: "坏" }, { en: "right", zh: "正确" }, { en: "wrong", zh: "错误" },
    { en: "rich", zh: "富有" }, { en: "poor", zh: "贫穷" }, { en: "clean", zh: "干净" }, { en: "dirty", zh: "脏" }, { en: "easy", zh: "容易" },
    { en: "hard", zh: "困难" }, { en: "early", zh: "早" }, { en: "late", zh: "晚" }, { en: "high", zh: "高" }, { en: "low", zh: "低" },
    { en: "wet", zh: "湿" }, { en: "dry", zh: "干" }, { en: "bright", zh: "明亮" }, { en: "dark", zh: "黑暗" }, { en: "soft", zh: "软" },
    { en: "hard", zh: "硬" }, { en: "sweet", zh: "甜" }, { en: "sour", zh: "酸" }, { en: "beautiful", zh: "美丽" }, { en: "ugly", zh: "丑陋" }
];

// ==================== 9. 国家国籍词库 ====================
const COUNTRY_WORDS = [
    { en: "China", zh: "中国" }, { en: "Chinese", zh: "中国人/中国的" }, { en: "USA", zh: "美国" }, { en: "American", zh: "美国人/美国的" },
    { en: "UK", zh: "英国" }, { en: "British", zh: "英国人/英国的" }, { en: "Canada", zh: "加拿大" }, { en: "Canadian", zh: "加拿大人/加拿大的" },
    { en: "Australia", zh: "澳大利亚" }, { en: "Australian", zh: "澳大利亚人/澳大利亚的" }, { en: "Japan", zh: "日本" }, { en: "Japanese", zh: "日本人/日本的" },
    { en: "Korea", zh: "韩国" }, { en: "Korean", zh: "韩国人/韩国的" }, { en: "France", zh: "法国" }, { en: "French", zh: "法国人/法国的" },
    { en: "Germany", zh: "德国" }, { en: "German", zh: "德国人/德国的" }, { en: "Italy", zh: "意大利" }, { en: "Italian", zh: "意大利人/意大利的" },
    { en: "Russia", zh: "俄罗斯" }, { en: "Russian", zh: "俄罗斯人/俄罗斯的" }
];

// ==================== 10. 职业词库 ====================
const JOB_WORDS = [
    { en: "teacher", zh: "老师" }, { en: "student", zh: "学生" }, { en: "doctor", zh: "医生" }, { en: "nurse", zh: "护士" }, { en: "driver", zh: "司机" },
    { en: "cook", zh: "厨师" }, { en: "farmer", zh: "农民" }, { en: "worker", zh: "工人" }, { en: "policeman", zh: "警察" }, { en: "singer", zh: "歌手" },
    { en: "dancer", zh: "舞蹈家" }, { en: "actor", zh: "演员" }, { en: "artist", zh: "画家" }, { en: "writer", zh: "作家" }, { en: "reporter", zh: "记者" }
];

// ==================== 11. 动词词库 ====================
const VERB_WORDS = [
    { en: "run", zh: "跑" }, { en: "walk", zh: "走" }, { en: "jump", zh: "跳" }, { en: "swim", zh: "游泳" }, { en: "fly", zh: "飞" },
    { en: "eat", zh: "吃" }, { en: "drink", zh: "喝" }, { en: "sleep", zh: "睡觉" }, { en: "wake", zh: "醒来" }, { en: "play", zh: "玩" },
    { en: "read", zh: "读" }, { en: "write", zh: "写" }, { en: "draw", zh: "画" }, { en: "sing", zh: "唱" }, { en: "dance", zh: "跳舞" },
    { en: "study", zh: "学习" }, { en: "work", zh: "工作" }, { en: "help", zh: "帮助" }, { en: "love", zh: "爱" }, { en: "like", zh: "喜欢" },
    { en: "want", zh: "想要" }, { en: "need", zh: "需要" }, { en: "have", zh: "有" }, { en: "give", zh: "给" }, { en: "take", zh: "拿" },
    { en: "open", zh: "打开" }, { en: "close", zh: "关闭" }, { en: "come", zh: "来" }, { en: "go", zh: "去" }, { en: "see", zh: "看见" }
];

// ==================== 12. 方位介词词库 ====================
const PREPOSITION_WORDS = [
    { en: "in", zh: "在...里面" }, { en: "on", zh: "在...上面" }, { en: "under", zh: "在...下面" }, { en: "above", zh: "在...上方" },
    { en: "below", zh: "在...下方" }, { en: "beside", zh: "在...旁边" }, { en: "behind", zh: "在...后面" }, { en: "in front of", zh: "在...前面" },
    { en: "between", zh: "在...之间" }, { en: "near", zh: "在...附近" }, { en: "through", zh: "穿过" }, { en: "across", zh: "横过" }
];

// ==================== 13. 颜色词库 ====================
const COLOR_WORDS = [
    { en: "red", zh: "红色" }, { en: "orange", zh: "橙色" }, { en: "yellow", zh: "黄色" }, { en: "green", zh: "绿色" }, { en: "blue", zh: "蓝色" },
    { en: "purple", zh: "紫色" }, { en: "pink", zh: "粉色" }, { en: "brown", zh: "棕色" }, { en: "black", zh: "黑色" }, { en: "white", zh: "白色" },
    { en: "gray", zh: "灰色" }, { en: "gold", zh: "金色" }
];

// ==================== 14. 家庭成员词库 ====================
const FAMILY_WORDS = [
    { en: "father", zh: "父亲" }, { en: "mother", zh: "母亲" }, { en: "brother", zh: "兄弟" }, { en: "sister", zh: "姐妹" },
    { en: "grandfather", zh: "祖父" }, { en: "grandmother", zh: "祖母" }, { en: "uncle", zh: "叔叔" }, { en: "aunt", zh: "阿姨" },
    { en: "cousin", zh: "表兄妹" }, { en: "husband", zh: "丈夫" }, { en: "wife", zh: "妻子" }, { en: "child", zh: "孩子" }
];

// ==================== 15. 天气词库 ====================
const WEATHER_WORDS = [
    { en: "sunny", zh: "晴朗的" }, { en: "cloudy", zh: "多云的" }, { en: "rainy", zh: "下雨的" }, { en: "snowy", zh: "下雪的" },
    { en: "windy", zh: "有风的" }, { en: "foggy", zh: "有雾的" }, { en: "hot", zh: "热" }, { en: "cold", zh: "冷" },
    { en: "warm", zh: "温暖" }, { en: "cool", zh: "凉爽" }, { en: "storm", zh: "暴风雨" }, { en: "rainbow", zh: "彩虹" }
];

// ==================== 16. 统编版核心词库（小学至初中） ====================
// 此处省略详细列表，可参考之前生成的统编版词库，为避免重复，这里仅添加一个占位
// 实际使用时可以取消注释并填充
const UNIFIED_CORE_WORDS = [
    // 已包含在上述各类中，故不再重复添加，保持简洁
];

// ==================== 所有内置词库集合 ====================
const BUILTIN_BANKS = {
    "📚 小学必背单词500": FINAL_WORD_LIST,
    "🍎 幼儿初级词库": KIDS_BEGINNER_WORDS,
    "📖 湘鲁版小学词库": XIANGLU_PRIMARY_WORDS,
    "🐘 动物词库": ANIMAL_WORDS,
    "🍅 水果蔬菜植物词库": PLANT_WORDS,
    "⏰ 时间词库": TIME_WORDS,
    "🏠 日常生活词库": DAILY_LIFE_WORDS,
    "⚖️ 形容词反义词库": ADJECTIVE_WORDS,
    "🌍 国家国籍词库": COUNTRY_WORDS,
    "💼 职业词库": JOB_WORDS,
    "🏃 动词词库": VERB_WORDS,
    "📍 方位介词词库": PREPOSITION_WORDS,
    "🎨 颜色词库": COLOR_WORDS,
    "👨‍👩‍👧 家庭成员词库": FAMILY_WORDS,
    "☁️ 天气词库": WEATHER_WORDS
};

// 默认词库名称
const DEFAULT_BANK_NAME = "📚 小学必背单词500";
const DEFAULT_BANK = {
    name: DEFAULT_BANK_NAME,
    words: FINAL_WORD_LIST
};

// ========== 自动将所有内置词库写入 localStorage ==========
(function ensureAllBanks() {
    try {
        let stored = localStorage.getItem('all_banks');
        let banks = stored ? JSON.parse(stored) : {};
        let updated = false;
        
        for (const [name, words] of Object.entries(BUILTIN_BANKS)) {
            if (!banks[name] || banks[name].length !== words.length) {
                banks[name] = words;
                updated = true;
            }
        }
        
        // 删除旧的7词内置词库（如果存在）
        const oldBuiltin = "🌟 内置基础词库";
        if (banks[oldBuiltin]) {
            delete banks[oldBuiltin];
            updated = true;
        }
        
        if (updated) {
            localStorage.setItem('all_banks', JSON.stringify(banks));
        }
        
        // 确保最后使用的词库存在
        let lastBank = localStorage.getItem('last_bank_name');
        if (!lastBank || !banks[lastBank]) {
            localStorage.setItem('last_bank_name', DEFAULT_BANK_NAME);
        }
    } catch(e) {
        console.warn("自动写入词库失败", e);
    }
})();