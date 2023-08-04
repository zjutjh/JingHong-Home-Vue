<script setup lang="ts">
import { onMounted } from "vue";
import JHLabel from "../../components/JHLabel.vue";
import JHCard from "../../components/JHCard.vue";
import Footer from "../../components/Footer.vue";
import { useRouter } from "vue-router";
import CarouselPicturesBig from "../../components/CarouselPicturesBig.vue";
const router = useRouter();
onMounted(() => {
  document.title = "常务模块";
});
const imgs1 = [
  "https://download.tooc.xlj0.com/uploads/22/jhhome/public/photo/department/changwu/mishuchu/1.jpg",
  "https://download.tooc.xlj0.com/uploads/22/jhhome/public/photo/department/changwu/mishuchu/2.jpg",
  "https://download.tooc.xlj0.com/uploads/22/jhhome/public/photo/department/changwu/mishuchu/3.jpg",
];
const imgs2 = [
  "https://download.tooc.xlj0.com/uploads/22/jhhome/public/photo/department/changwu/bangongshi/1.jpg",
  "https://download.tooc.xlj0.com/uploads/22/jhhome/public/photo/department/changwu/bangongshi/2.jpg",
  "https://download.tooc.xlj0.com/uploads/22/jhhome/public/photo/department/changwu/bangongshi/3.jpg",
];
const imgs3 = [
  "https://download.tooc.xlj0.com/uploads/22/jhhome/public/photo/department/changwu/huodongbu/1.jpg",
  "https://download.tooc.xlj0.com/uploads/22/jhhome/public/photo/department/changwu/huodongbu/2.jpg",
  "https://download.tooc.xlj0.com/uploads/22/jhhome/public/photo/department/changwu/huodongbu/3.jpg",
];
</script>
<style scoped>
img {
  width: 40%;
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
  <JHLabel type="big">常务模块</JHLabel>
  <JHCard type="large" title="秘书处" :isTitle="true">
    <CarouselPicturesBig :imgs="imgs1"></CarouselPicturesBig>
    <JHLabel type="small">部门介绍</JHLabel>
    <div class="content">
      Hello大家好！！这里是精弘网络秘书处，主要负责浙江工业大学莫干山校区相关事务，兼备常务办公室与活动部的职能，协助另外两校区活动部和办公室的工作，并且在一年一度的精弘毅行中的莫干山毅行有着中流砥柱的作用，同时秘书处还协助管理“浙江工业大学学生邮箱”的相关事宜。麻雀虽小，五脏俱全。虽然秘书处人手不多，但是我们能够参与精弘网络各大板块的日常工作，并给予一定的协调帮助，是精弘网络中必不可少的一部分。
    </div>
  </JHCard>
  <JHCard type="large" title="办公室" :isTitle="true">
    <CarouselPicturesBig :imgs="imgs2"></CarouselPicturesBig>
    <JHLabel type="small">部门介绍</JHLabel>
    <div class="content">
      当当当！请看这里！这是什么？这是办公室！
    </div>
    <div class="content">
      什么是办公室？办公室是精弘的交通枢纽，是组织运行的润滑油！我们无处不在，我们不可或缺。那么办公室要做什么呢？活动策划书？yes！委托书？yes！会议旁听？yes！与各个部门对接及任务整合？yes！奖品物资挑选及管理？yes！我们也是精弘所有活动的后勤小组，是大家的坚强后盾。
    </div>
    <div class="content">
      在这里，你不仅可以锻炼到个人能力，也能结识到各种各样的小伙伴！从办公室到常务板块，再到整个精弘。此外，办公室的团建活动样样不少，海底捞，看日出，生日会……办公室的目标就是——工作和吃喝玩乐都不落下的六边形战士！
    </div>
    <JHLabel type="small">招新宣言</JHLabel>
    <div class="content">
      办公室欢迎每一个可爱的小朋友！
    </div>
    <div class="content">
      办公室的大家将会像一家人一样，在接下来的一年里会一起过每一个小朋友的生日，值得纪念的节日。我们会一起看日出，一起看日落，一起度过炎炎夏日，一起见证杭州的初雪，并且…说不定会是不是会到一些小惊喜…？
    </div>
    <div class="content">
      请期待在办公室的每一个明天！
    </div>
  </JHCard>
  <JHCard type="large" title="活动部" :isTitle="true">
    <CarouselPicturesBig :imgs="imgs3"></CarouselPicturesBig>
    <JHLabel type="small">部门介绍</JHLabel>
    <div class="content">
      Hey！这里是活动部。我们的的工作是围绕精弘网络各类活动进行策划以及负责各种外联。需要用聪明的脑袋来想出各种活动，还要有三寸不烂之舌与商家交流。除了工作，我们也是一个快乐的部门，既然都叫活动部了，当然会有很多属于我们部门的团建活动啦！从狼人杀到血染钟楼，只有你想不到没有我们玩不到。这里就是精弘活动部，工作娱乐两不误。
    </div>
    <JHLabel type="small">招新宣言</JHLabel>
    <div class="content">
      亲爱的学弟学妹们～欢迎来到活动部大家庭！我们是一个相亲相爱的集体，也是精弘网络的小金库！在这里，你会拥有每周一次的例会party！在这里，每一个小朋友都会有属于自己的生日蛋糕和祝福，在这里，我们可以在和商家沟通中获得外联资金并提升自己的能力！在这里，学姐们会耐心为初来工大的你们解决一系列难题！所以，如果你有一颗上进勇敢的心，那就快来加入我们吧！！
    </div>
  </JHCard>
  <img
    src="https://download.tooc.xlj0.com/uploads/22/jhhome/public/photo/department/fork.png"
    style="width: 80px; height: 80px; margin-top: 50px; cursor: pointer"
    @click="router.push('/department')"
  />
  <Footer />
</template>
