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
    "https://img.lonesome.cn/jhwl/home/photo/department/jishu/chanyan/chanpin/1.webp",
    "https://img.lonesome.cn/jhwl/home/photo/department/jishu/chanyan/chanpin/2.webp",
    "https://img.lonesome.cn/jhwl/home/photo/department/jishu/chanyan/chanpin/3.webp",
    "https://img.lonesome.cn/jhwl/home/photo/department/jishu/chanyan/chanpin/4.webp",
];
const img2 = [
    "https://img.lonesome.cn/jhwl/home/photo/department/jishu/chanyan/jishu/1.webp",
    "https://img.lonesome.cn/jhwl/home/photo/department/jishu/chanyan/jishu/2.webp",
    "https://img.lonesome.cn/jhwl/home/photo/department/jishu/chanyan/jishu/3.webp",
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
      产研部的“产”是产品的含义，我们既不敲代码也不制作实体产品，而是在精弘网络这样一个微型的互联网产品组织中扮演产品经理的角色，调研收集工大师生们的需求，设计产品的功能架构与交互，和精弘的各部门小伙伴一起合作，对现有的精弘产品进行更新迭代并开发出更多紧跟当下互联网节奏、满足更多师生需求的新产品。不论是从学习、生活方面服务了广大学生的微精弘小程序，还是你现在所在浏览的精弘首页，亦或是即将到来的精弘论坛，都是我们的产品。我们的目标是用产品改变世界！
    </div>
    <JHLabel type="small">招新宣言</JHLabel>
    <div class="content">
      如果你对产品经理这一角色心怀好奇，或是希望参与一个互联网产品的设计，或是渴望在校园中就亲身体验互联网企业中重要的产品经理岗位，那么加入产品部将是绝佳的机会！在这里，你可以参与有趣的产品设计，为我们的产品构想更多实用的功能，还能与精弘网络的技术和设计小伙伴交流合作，将你想象的创意落地成为被广大师生使用的现实。当然，看到这里你可能会想“我完全不了解产品经理的具体工作也能进这个部门吗”。我们想说的是当然可以！我们会从零开始教学，并带你参与真实的产品工作。快来加入我们，一起开启这段丰富有趣的旅程！
    </div>
    <JHLabel type="big" style="margin-top: 5%">技术</JHLabel>
    <CarouselPicturesBig :imgs="img2"></CarouselPicturesBig>
    <JHLabel type="small">部门介绍</JHLabel>
    <div class="content">
      我们是微精弘和各精弘应用平台的开发者和维护者,什么是微精弘?这个小程序承载了精弘几代人的心血,是全体工大学生的的校园生活助手与管家.作为全工大唯一一个学生技术部门,成员们各怀绝技.在交流技术的同时,我们也是一个温暖有爱的大家庭,在学习与生活中互帮互助.我们是一群志同道合的人,因为热爱技术而聚在一起;我们是一群心怀梦想的人，因为追求创新而共同前行。我们是一群不懈努力的人，因为坚持信念而不断进步；
    </div>
    <div class="content">
      现在主要开发技术栈： Go, HTML, CSS, JavaScript, Vue.js, Vuex, TypeScript
    </div>
    <div class="content">
      如果想让自己在工大一展身手,精弘技术部将是一个不错的选择.我们部门会在暑假放入网络开发相关学习课程，欢迎大家来观看！
    </div>
    <JHLabel type="small">招新宣言</JHLabel>
    <div class="content">
      无论你是否就读于计算机专业,无论你之前是否接触过计算机技术,只要你对开发和运维感兴趣,有一颗热爱技术的心,想要知道一个项目是如何从一个idea一步步变成成熟的产品,请戳爆精弘技术部的招新群,这里绝对是适合你的温暖大家庭.当你看到精弘先辈传下来的代码,你可能会对这诗一样的代码赞叹,也可能会对这shi一样的代码而发愁.但这些代码都在精弘历史的长河中屹立不倒,真正做到了“一码传三代,人走码还在”.因为这些代码已经不仅仅是代码,最为宝贵的是代码背后精弘人的魂.而你,我的朋友,我相信你能将这份魂,传承下去.
    </div>
  </JHCard>
  <img
    src="https://img.lonesome.cn/jhwl/home/photo/department/fork.webp"
    style="width: 80px; height: 80px; margin-top: 50px; cursor: pointer"
    @click="router.push('/department')"
  />
  <Footer />
</template>
