export var ENV = 'dev';
// export const BASE_URL = 'http://localhost:8888/'
// export const BASE_URL = 'http://101.34.27.200:8888/'
export const BASE_URL = 'http://www.jh.zjut.edu.cn/'
export const ACM_BASE_URL = 'http://zhangjinhong.top:8081'
export const regions = ['未选择', "朝晖", "屏峰", "莫干山"];
export const choices = [
  ["办公室", "活动部",
    "Touch产品部", "编辑工作室",
    "视觉影像部", "技术部",
    "易班文化工作站", "小弘工作室",],
  ["办公室", "活动部",
    "Touch产品部", "小弘工作室",
    "编辑工作室", "视觉影像部",
    "技术部", "易班文化工作站"],
  ["秘书处", "小弘工作室", "编辑工作室", "视觉影像部", "技术部",],
]
export const departments = [
  '未选择',
  '办公室',
  '活动部',
  '秘书处',
  'Touch产品部',
  '小弘工作室',
  '编辑工作室',
  '视觉影像部',
  '技术部',
  '易班文化工作站',
]

export const products = [
  {
    wh: ["1/2", "1/2"], img: [["https://download.tooc.xlj0.com/uploads/22/jhhome/public/photo/product/10.png", "浙江工业大学精弘网络"],
    ["https://download.tooc.xlj0.com/uploads/22/jhhome/public/photo/product/11.png", "精小弘在线"]],
    title: "/微信公众号/",
    introduce: "浙江工业大学精弘网络微信公众号,提供结合精弘网络产品的实用功能,推出微精弘板块等系列服务,是工大学子学习生活的好帮手。", n: 0
  },
  { wh: ["2/3", "1/3"], img: [["https://download.tooc.xlj0.com/uploads/22/jhhome/public/photo/product/1.png", "微精弘小程序"]], title: "/微精弘/", introduce: "微精弘是专属于zjuter的微信小程序,集课表、成绩查询、考试安排、空教室查询、一卡通、借阅等功能于一身，是工大学子必不可少的一体化校园移动门户。", n: 1 },
  { wh: ["1/2", "2/4"], img: [["https://download.tooc.xlj0.com/uploads/22/jhhome/public/photo/product/13.png", ""]], title: "/视觉影像/", introduce: "校园学习生活、学校各类大型活动的记录团队，专注于摄影、视频前期拍摄和后期剪辑,致力于用最优秀的制作呈现最美的工大人、工大景。视觉影像像期待用最用心的摄制给你带来最高级的视听盛宴!\n欢迎关注 b站:浙江工业大学精弘网络\n微信视频号:精小弘在线。", n: 2 },
  { wh: ["2/3", "3/4"], img: [["https://download.tooc.xlj0.com/uploads/22/jhhome/public/photo/product/4.png", "邮箱网址：mail.zjut.edu.cn"]], title: "/学生邮箱/", introduce: "学校为每一位学生提供邮箱,由精弘网络提供运营服务,是你参与学校工作、学习、生活等各类活动的官方邮箱,伴随你的大学四年乃至一生,毕业后仍可享受校方的服务。", n: 3 },
];
export const productsMobile = [
  { img: "https://download.tooc.xlj0.com/uploads/22/jhhome/public/photo/product/1.png", title: "微信小程序", n: 0 },
  { img: "https://download.tooc.xlj0.com/uploads/22/jhhome/public/photo/product/2.png", title: "微信服务号", n: 1 },
  { img: "https://download.tooc.xlj0.com/uploads/22/jhhome/public/photo/product/3.jpg", title: "视觉影像", n: 2 },
  { img: "https://download.tooc.xlj0.com/uploads/22/jhhome/public/photo/product/4.png", title: "学生邮箱", n: 3 },
];
export const product_details = [
  { title: "微精弘", img: "https://download.tooc.xlj0.com/uploads/22/jhhome/public/photo/product/1.png", content: "微精弘是专属于zjuter的微信小程序，集课表、成绩查询、考试安排、空教室查询、一卡通、借阅等功能于一身，是工大学子必不可少的一体化校园移动门户。" },
  { title: "微信服务号", img: "https://download.tooc.xlj0.com/uploads/22/jhhome/public/photo/product/2.png", content: "浙江工业大学精弘网络微信公众号，提供结合精弘网络产品的实用功能，推出微精弘板块等系列服务，是工大学子学习生活的好帮手。" },
  { title: "视觉影像", img: "https://download.tooc.xlj0.com/uploads/22/jhhome/public/photo/product/3.jpg", content: "校园学习生活、学校各类大型活动的记录团队，专注于摄影、视频前期拍摄和后期剪辑，致力于用最优秀的制作呈现最美的工大人、工大景。视觉影像像期待用最用心的摄制给你带来最高级的视听盛宴!" },  //欢迎关注 b站:浙江工业大学精弘网络微信视频号:精小弘在线。
  { title: "学术邮箱", img: "https://download.tooc.xlj0.com/uploads/22/jhhome/public/photo/product/4.png", content: "学校为每一位学生提供邮箱，由精弘网络提供运营服务，是你参与学校工作、学习、生活等各类活动的官方邮箱，伴随你的大学四年乃至一生，毕业后仍可享受校方的服务。" },
];