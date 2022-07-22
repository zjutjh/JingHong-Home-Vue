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
const imgs = [
  "/photo/department/changwu/bangongshi/1.jpg",
  "/photo/department/changwu/bangongshi/2.jpg",
  "/photo/department/changwu/bangongshi/3.jpg",
  "/photo/department/changwu/bangongshi/4.jpg",
];
const imgs2 = [
  "/photo/department/changwu/huodongbu/1.jpg",
  "/photo/department/changwu/huodongbu/2.jpg",
  "/photo/department/changwu/huodongbu/3.jpg",
  "/photo/department/changwu/huodongbu/4.jpg",
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
    <img src="/photo/department/changwu/mishuchu/1.jpg" />
    <img src="/photo/department/changwu/mishuchu/2.jpg" />
    <JHLabel type="small">部门介绍</JHLabel>
    <div class="content">
      精弘网络秘书处主管浙江工业大学莫干山校区，兼备常务办公室与活动部的职能，协助另外两校区活动部和办公室的工作，并且在一年一度的精弘毅行中的莫干山毅行有着中流砥柱的作用。同时秘书处还协助管理“浙江工业大学学生邮箱”的相关事宜，并且参与微信公众号“精小弘离线”策划制作管理。能够参与精弘网络各大板块的日常工作，并给予一定的协调帮助，是精弘网络秘书处最大的特点。
    </div>
  </JHCard>
  <JHCard type="large" title="办公室" :isTitle="true">
    <CarouselPicturesBig :imgs="imgs"></CarouselPicturesBig>
    <JHLabel type="small">部门介绍</JHLabel>
    <div class="content">Q：在哪里可以找到办公室的身影？</div>
    <div class="content">A：办公室无处不在！</div>
    <div class="content">
      作为精弘网络常务板块的重要部门，你可以在精弘各个地方看到办公室的身影。各部门的工作计划和任务交给谁？给我们！精弘日常事务谁来负责？义不容辞！撰写委托书？我们在行！管理精弘物资？我们手到擒来！最重要的账单报销事项捉摸不清？没关系，整个流程我们倒背如流！毅行、网文、网安……精弘的所有大型活动，都有我们在背后支持维系。
    </div>
    <div class="content">
      在办公室，除了工作、提升自己的能力以外，你会在这里遇见一群可爱的小伙伴，例会、团建、过生日、吃夜宵……办公室能给你带来无穷的乐趣，甚至可以成为你一周枯燥学习当中不可替代的调味剂。
    </div>
    <div class="content">加入我们，成为精弘办公室的故事续写者！</div>
    <JHLabel type="small">招新宣言</JHLabel>
    <div class="content">
      Halo宝贝们，有没有兴趣成为办公室备受宠爱的小朋友呢！
    </div>
    <div class="content">
      办公室认可你们的所有努力，见证你们的所有成长。会记得每一个小朋友的生日，也会为你们准备节日礼物，更有部长团的悉心爱护（点头）。
    </div>
    <div class="content">期待办公室能成为你的首选！</div>
  </JHCard>
  <JHCard type="large" title="活动部" :isTitle="true">
    <!-- <img src="/photo/department/changwu/huodongbu/1.jpg" />
    <img src="/photo/department/changwu/huodongbu/2.jpg" />
    <img src="/photo/department/changwu/huodongbu/3.jpg" />
    <img src="/photo/department/changwu/huodongbu/4.jpg" /> -->
    <CarouselPicturesBig :imgs="imgs2"></CarouselPicturesBig>
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
    src="/photo/department/fork.png"
    style="width: 80px; height: 80px; margin-top: 50px; cursor: pointer"
    @click="router.push('/department')"
  />
  <Footer />
</template>
