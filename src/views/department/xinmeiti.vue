<script setup lang="ts">
import { onMounted } from "vue";
import JHLabel from "../../components/JHLabel.vue";
import JHCard from "../../components/JHCard.vue";
import Footer from "../../components/Footer.vue";
import { useRouter } from "vue-router";
import CarouselPicturesBig from "../../components/CarouselPicturesBig.vue";
const router = useRouter();
onMounted(() => {
  document.title = "新媒体中心";
});
const imgs1 = [
  "https://qiuniu.phlin.cn/bucket/20250714233550410.webp",
  "https://qiuniu.phlin.cn/bucket/20250714233550409.webp",
  "https://qiuniu.phlin.cn/bucket/20250714233550411.webp"
];
const imgs2 = [
  "https://qiuniu.phlin.cn/bucket/20250714233458305.webp",
  "https://qiuniu.phlin.cn/bucket/20250714233458304.webp",
  "https://qiuniu.phlin.cn/bucket/20250714233458306.webp"
];
</script>
<style scoped>
img {
  width: 80%;
  object-fit: cover;
}
.content {
  font-size: 20px;
  width: 80%;
  margin: auto;
  text-align: start;
  text-indent: 2em;
}
</style>
<template>
  <div style="height: 100px"></div>
  <JHLabel type="big">新媒体中心</JHLabel>
  <JHCard type="large" title="视觉影像部" :isTitle="true">
    <CarouselPicturesBig :imgs="imgs1" />
    <JHLabel type="small">部门介绍</JHLabel>
    <div class="content">
      视觉影像隶属新媒体，是校园学习生活、学校各类大型活动的记录团队，(我们)专注于摄影与视频前期拍摄和后期剪辑，致力于用最优秀的制作，最独特的创意呈现最美的工大人、工大景，传播技术知识。视觉影像期待用最用心的摄制给你带来最高级的视觉盛宴！欢迎关注b站:485566103。（隶属于新媒体的视觉影像有着脱单魔法，想要脱单并喜欢拍摄与后期制作的小朋友们，走过路过不要错过哦）
    </div>
    <JHLabel type="small">招新宣言</JHLabel>
    <div class="content">
      如果你—— 
    </div>
    <div class="content">
      - 想把快门按成心跳的节奏,
    </div>
    <div class="content">
      - 想让每一帧画面都成为工大记忆的“高清壁纸”,
    </div>
    <div class="content">
      - 想亲手剪出下一个在 B 站刷屏的 10W+ 爆款， 
     </div>
    <div class="content">
      - 甚至想在取景器里顺便把恋爱也“对焦”成功——  
    </div>
    <div class="content">
      那就把姓名、年级、灵魂和储存卡一起交给我们！  
    </div>
    <div class="content">
      视觉影像部，新媒体中心最会“搞事情”的镜头天团，  
    </div>
    <div class="content">
      正在寻找：
    </div>
    <div class="content">
      ① 摄影机不离手的快门狂魔 
    </div>
    <div class="content">
      ② 三脚架扛得比胡辣汤稳的铁臂少年  
    </div>
    <div class="content">
      ③ 能把 PR 当 PS 耍的剪刀手后期怪  
    </div>
    <div class="content">
      ④ 满脑子 BUG 级创意的野生导演
    </div>
    <div class="content">
      我们给你：  
    </div>
    <div class="content">
      - 精弘相关活动的独家前排机位   
    </div>
    <div class="content">
      - 一群可以深夜修片到天亮、也能凌晨撸串到天亮的神仙队友  
    </div>
    <div class="content">
      - 以及——传说中成功率高达 99% 的脱单魔法（上届部长团已亲测有效）
    </div>
    <div class="content">
      别让工大的美只在回忆里， 
     </div>
    <div class="content">
      让它在你的镜头里封神。  
    </div>
    <div class="content">
        2025，我们在取景器里等你！
    </div>
  </JHCard>
  <JHCard type="large" title="编辑工作室" :isTitle="true">
    <CarouselPicturesBig :imgs="imgs2" />
    <JHLabel type="small">部门介绍</JHLabel>
    <div class="content">
      编辑工作室是精弘网络的“喉舌”部门，负责内容创作和相关运营工作。“精小弘在线”“浙江工业大学精弘网络”微信公众号是我们的工作重心。
    </div>
    <div class="content">
      我们的工作有极强的综合性：文稿撰写需要语言文学知识，创作和阅读积累对工作也有很大帮助；推送排版需要平面设计知识，HTML、SVG等数字技术知识同样用得上；运营分析、读者心理、互动技巧、文化建设等社科类技能，更是关键的助推器。我们常常需要与各部门的伙伴沟通协作，完成各类产品、服务、活动的宣传工作。
    </div>
    <div class="content">
      选题选材，撰文撰稿，图文排版，读者互动；奇思妙想、蛛丝马迹是我们的素材，咬文嚼字、精雕细琢是我们的技艺。手执工具，掌握信息，眼观风向，脚踏平台，肩负使命，心承热爱，让文字开花结果，让想法生根发芽，用创意和本领浇铸网络文化，用艺术和技术描摹校园天地，用图文和视效叙写工大故事。
    </div>
    <JHLabel type="small">招新宣言</JHLabel>
    <div class="content">
      |  ﾟᗜ ﾟ)ﾉﾞ走过路过不要错过，心动感动更须行动！编辑工作室，诚聘！速来！
    </div>
    <div class="content">
      有创意，有想法？来，舞台在这，闪耀你的灵性；懂文字，懂语言？来，笔墨在这，倾洒你的才华；会排版，会设计？来，画布在这，怒放你的技艺；知运营，知气候？来，风口在这，擘画你的蓝图！编辑工作室是最需要你的地方，而你，朋友，你是我们最最需要的人才♥
    </div>
    <div class="content">
      (´･ｪ･｀)不够自信？学问尚浅？(/≧∇≦)/没关系没关系~我们有热心和善、风趣可亲的学长，有蕙质兰心、锦心绣口的学姐，包学包趣，包教包会，包通包透。初入大学迷茫无措？别慌！编辑工作室的哥哥姐姐们，可以是你学业规划的“导航仪”、生活琐事的“百事通”、情感树洞的“解忧人”——从选课攻略到食堂测评，从期末复习到城市探索，我们陪你一起解锁大学生活的每个副本！
    </div>
    <div class="content">
      加入我们，即刻解锁：风采佳作的曝光窗口、浩瀚无垠的成长洞天、天马行空的集思树洞、硕果累累的成就星空……
    </div>
    <div class="content">
      平等包容、团结友爱、快乐真诚的部门文化，造就了暖意融融的编辑大家庭；代代编辑人留下的，不只是工作经验，更是生日时精心准备的惊喜祝福、例会后围桌畅谈的欢声笑语……妙趣横生的工作，充实开放的探讨，回味无穷的团建——这里是属于精弘编辑人的秘密花园，快来领取你的钥匙♥
    </div>
    <div class="content">
      ᕕ( ᐛ )ᕗ编辑工作室，犹豫无济，扬帆莫疑！期待与你，共鸣共享，共书未来~
    </div>
  </JHCard>
  <img
    src="https://img.lonesome.cn/jhwl/home/photo/department/fork.webp"
    style="width: 80px; height: 80px; margin-top: 50px; cursor: pointer"
    @click="router.push('/department')"
  />
  <Footer />
</template>
