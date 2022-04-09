<script setup lang="ts">
import { onMounted } from 'vue';
import JHLabel from '../../components/JHLabel.vue';
import JHCard from '../../components/JHCard.vue';
import Footer from '../../components/Footer.vue';
import { useRouter } from 'vue-router';
const router = useRouter();
onMounted(() => {
  document.title = "常务模块";
})
</script>
<style scoped>
img {
  width: 80%;
  height: 300px;
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
  <div style="height:100px"></div>
  <JHLabel type="big">常务模块</JHLabel>
  <JHCard type="large" title="秘书处" :isTitle="true">
    <img src="/photo/department/1.jpg" />
    <img src="/photo/department/2.jpg" />
    <JHLabel type="middle">部门介绍</JHLabel>
    <div
      class="content"
    >Hello，这里是秘书处，位于莫干山校区（对！就是那个设施完备、远离世俗（地理位置略偏僻so显得有些荒无人烟）的新校区。莫干山下好读书⸺这里是莫干山打工二人组，我们掌管着小金库、管理安排精弘的资金和物资，管理学生邮箱，我们也负责策划实施莫干山校区相关活动、安排事宜，同时协助朝晖、屏峰两校区办公室开展相关工作。来精弘，有底气！！秘书处欢迎你的到来！！</div>
  </JHCard>
  <JHCard type="large" title="办公室" :isTitle="true">
    <img src="/photo/department/3.jpg" />
    <img src="/photo/department/4.jpg" />
    <img src="/photo/department/5.jpg" />
    <JHLabel type="middle">部门介绍</JHLabel>
    <div class="content">办公室⸺精弘的小管家！精弘的小金库！精弘名副其实的“小老板”！</div>
    <div class="content">作为作为常务板块的重要部门，办公室的日常任务包括但不限于：收集各部门工作任务；负责精弘日常事务；撰写各项委托书；掌管精弘物资及账单报销事项.....</div>
    <div class="content">在精弘的各项大型活动中，毅行、网文、网安......你都可以见到办公室忙碌的身影。</div>
    <div
      class="content"
    >在认真工作之余，团建，我们也是认真的！桌游、轰趴、聚餐，办公室带你玩，带给你最酣畅淋漓的笑声。办公室有最最亲切可爱的部长们，Mary姐姐和他两个的“姐妹”、“管家”、“司机”，组合成了超有爱的大家庭。</div>
    <div class="content">一句话，办公室⸺精弘最闪耀的星！</div>
    <JHLabel type="middle">部长有话说</JHLabel>
    <div class="content">欢迎各位小朋友加入精弘最闪耀的星⸺办公室！</div>
    <div
      class="content"
    >我们认真地工作：年会、毅行、网文、网安......各项大型活动中办公室都起着至关重要的作用；日常精弘事务的负责，联结沟通各部门，精弘小金库的掌管，办公室也没在怕的！</div>
    <div
      class="content"
    >我们认真地玩：桌游、轰趴、聚餐。这里有Mary公主和他两个的“姐妹”、“管家”、“司机”最最有趣的五个灵魂，相互碰撞必会迸发精彩的⽕花！只要你敢想，我们陪你一起嗨！</div>
    <div class="content">在办公室这个大家庭我们学在一起，玩在一起。工作上也会悉心指导大家，生活上带你吃带你玩，遇到的任何疑难，每个办公室的家人都会为你答疑解惑（笔芯）</div>
    <div
      class="content"
    >如果既想要锻炼工作能力，又或是想在部门里结交新朋友，办公室会是你的不二之选。我们是一个充满爱的大家庭，改变自己，从加入办公室开始！我们在办公室等待可爱的你们的到来！</div>
  </JHCard>
  <JHCard type="large" title="活动部" :isTitle="true">
    <img src="/photo/department/6.jpg" />
    <img src="/photo/department/7.jpg" style="object-position: bottom;" />
    <JHLabel type="middle">部门介绍</JHLabel>
    <div class="content">hello，看我！这里是精弘网络常务板块活动部！办公室和秘书处管理着小金库，⽽小金库里面的资金和我们息息相关。</div>
    <div
      class="content"
    >活动部的主要工作之一便是拉取外联，你可以和很多曾经很遥远的商家沟通交流拉取赞助，可以锻炼自己的沟通协调能力。另一个主要工作就是策划各种各样的活动游戏啦，有没有在综艺中觉得很有趣的游戏呢，在这里你便有机会把它们细细策划并实施。</div>
  </JHCard>
  <img
    src="/photo/department/fork.png"
    style="width:80px; height:80px; margin-top: 50px; cursor:pointer;"
    @click="router.push('/department')"
  />
  <Footer />
</template>