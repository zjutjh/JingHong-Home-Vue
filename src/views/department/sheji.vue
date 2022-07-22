<script setup lang="ts">
import { onMounted } from "vue";
import JHLabel from "../../components/JHLabel.vue";
import JHCard from "../../components/JHCard.vue";
import Footer from "../../components/Footer.vue";
import { useRouter } from "vue-router";
import CarouselPicturesBig from "../../components/CarouselPicturesBig.vue";
import Carousel from "../../components/Carousel.vue";
const router = useRouter();
onMounted(() => {
  document.title = "设计模块";
});
const imgs = [
  "/photo/department/sheji/xiaohong/1.jpg",
  "/photo/department/sheji/xiaohong/2.jpg",
  "/photo/department/sheji/xiaohong/3.jpg",
];
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
  <div style="height: 100px"></div>
  <JHLabel type="big">设计模块</JHLabel>
  <JHCard type="large" title="小弘工作室" :isTitle="true">
    <CarouselPicturesBig :imgs="imgs"></CarouselPicturesBig>
    <!-- <Carousel :imgs="imgs"></Carousel> -->
    <JHLabel type="small">部门介绍</JHLabel>
    <div class="content">
      小弘工作室是属于精弘网络的一个创意创新服务部门，针对学校活动的宣传方案进行设计。在工作中，部门成员之间会一起协作，为活动的宣传拿出一套完整有创意的设计。其中设计的主要内容包括：海报设计、喷绘设计、UI界面设计、精弘网络周边文创类产品设计以及各类视觉方案设计。
    </div>
    <JHLabel type="small">招新宣言</JHLabel>
    <div class="content">
      如果你对设计怀着一份好奇向往的憧憬，那么小弘工作室便是一个可以让你很好地接触了解设计的地方。在这，你不仅能遇见兴趣爱好相似的小伙伴，还能学会并掌握一些设计技能与设计知识。只要你怀有一颗喜爱设计的心，我们都欢迎你的加入~
    </div>
  </JHCard>
  <img
    src="/photo/department/fork.png"
    style="width: 80px; height: 80px; margin-top: 50px; cursor: pointer"
    @click="router.push('/department')"
  />
  <Footer />
</template>
