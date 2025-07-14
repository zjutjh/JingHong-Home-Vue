<script setup lang="ts">
import { onMounted } from "vue";
import JHLabel from "../../components/JHLabel.vue";
import JHCard from "../../components/JHCard.vue";
import Footer from "../../components/Footer.vue";
import { useRouter } from "vue-router";
import CarouselPicturesBig from "../../components/CarouselPicturesBig.vue";

const router = useRouter();
onMounted(() => {
  document.title = "技术研发中心";
});
const img1 = [
  "https://qiuniu.phlin.cn/bucket/20250714233532358.webp",
  "https://qiuniu.phlin.cn/bucket/20250714233532359.webp",
  "https://qiuniu.phlin.cn/bucket/20250714233532360.webp"
];
const img2 = [
  "https://qiuniu.phlin.cn/bucket/20250714233532361.webp",
  "https://qiuniu.phlin.cn/bucket/20250714233532362.webp",
  "https://qiuniu.phlin.cn/bucket/20250714233532363.webp"
]
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
  <JHLabel type="big">技术研发中心</JHLabel>
  <JHCard type="large" title="产研部" :isTitle="true">
    <JHLabel type="big">产品</JHLabel>
    <CarouselPicturesBig :imgs="img1"></CarouselPicturesBig>
    <JHLabel type="small">部门介绍</JHLabel>
    <div class="content">
      产研部的“产”是产品的意思，我们既不敲代码也不制作实体产品，而是在精弘网络这样一个微型的互联网产品组织中扮演产品经理的角色，我们调研用户需求，思考功能架构，设计页面交互，致力于做出能够满足用户需求，符合用户期待，带来更多方便的互联网产品。不论是从学习、生活方面服务了广大学生的微精弘小程序，还是你现在所在浏览的精弘首页，亦或是即将到来的精弘论坛，都是我们的产品。我们的目标是用产品改变世界！
    </div>
    <JHLabel type="small">招新宣言</JHLabel>
    <div class="content">
      产研部产品方向是包容万象的大家庭, 我们不限制专业, 不要求经验, 只需要你的热情、责任与一颗愿意学习的心,在这里,我们有部长团精心制作的课程, 为每一个对产品好奇的你提供学习的平台。如果你渴望参与一个互联网产品的设计，或是在校园里体验企业中产品经理这一职位,那产研部一定是你最好的选择！来到产品，你将收获到——欢快友爱的交流氛围，高效仔细的工作环境，志同道合的朋友伙伴,尽兴畅快的思维碰撞,或许还有命中注定的那个ta~心动不如行动,产品的大门向你敞开!
    </div>
    <JHLabel type="big" style="margin-top: 5%">技术</JHLabel>
    <CarouselPicturesBig :imgs="img2"></CarouselPicturesBig>
    <JHLabel type="small">部门介绍</JHLabel>
    <div class="content">
      我们是微精弘及各精弘应用平台的开发者和维护者。作为承载精弘团队几代人技术传承的小程序，微精弘是全体工大学子触手可及的校园生活管家，在学习、生活等多个场景中扮演着重要的角色。
    </div>
    <div class="content">
      作为全校唯一的学生技术团队，我们始终保持着对技术的敬畏与热忱，每行代码背后都有同学们的思维碰撞与深入探索，每次迭代更新都见证着团队的协作成长与技术进步。在技术交流之外，我们更是一个温暖有爱的大家庭，在学习与生活中互帮互助、携手前行，一起面对困难，也一起分享收获，为了精益求精的共同目标不断努力。
    </div>
    <div class="content">
      我们的主要开发技术栈: Go, Java, SpringBoot, HTML, CSS, Typescript, Vue.js, Pinia
    </div>
    <div class="content">
      如果你渴望用代码创造价值，期待在真实业务场景中提升能力，精弘产研部技术团队绝对是最适合你的选择！
    </div>
    <JHLabel type="small">招新宣言</JHLabel>
    <div class="content">
    无论你是不是计算机专业的学生，无论你是否有过前后端开发的经验，只要你对技术感兴趣，想了解一个产品是如何从一个想法逐渐落地生根，欢迎加入精弘产研部技术团队的招新群。我们在这里一起写代码、做项目，也一起学习、成长。你会参与到真实的校园业务中，用技术为师生解决实际问题，也会在一次次版本迭代中体会项目推进的成就感。
    </div>
    <div class="content">
    当你接触到前辈们留下的代码，可能会惊叹其中的巧思，也可能会被屎山折腾到红温。但它们之所以还能被使用，是因为它们承载的不仅仅是功能，更是一代代精弘人的经验与努力，是一代代技术人留下的印记。
    </div>
    <div class="content">
    而你，愿不愿意也在这份印记中，留下自己的注脚？
    </div>
  </JHCard>
  <img
    src="https://img.lonesome.cn/jhwl/home/photo/department/fork.webp"
    style="width: 80px; height: 80px; margin-top: 50px; cursor: pointer"
    @click="router.push('/department')"
  />
  <Footer />
</template>
