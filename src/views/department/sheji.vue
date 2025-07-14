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
  document.title = "设计服务中心";
});
const imgs = [
  "https://qiuniu.phlin.cn/bucket/20250714233605144.webp",
  "https://qiuniu.phlin.cn/bucket/20250714233605145.webp",
  "https://qiuniu.phlin.cn/bucket/20250714233605146.webp"
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
  <JHLabel type="big">设计服务中心</JHLabel>
  <JHCard type="large" title="小弘工作室" :isTitle="true">
    <CarouselPicturesBig :imgs="imgs"></CarouselPicturesBig>
    <JHLabel type="small">部门介绍</JHLabel>
    <div class="content">
      小弘工作室是精弘网络的一个创新创意服务部门，针对学校活动的宣传方案进行设计。部门成员之间会进行协作，为活动的宣传制作一套完整的设计方案。
    </div>
    <div class="content">
      主要活动:精弘毅行、网络安全宣传月、网络文化节等。
    </div>
    <div class="content">
      主要事物:海报设计、喷绘设计、UI界面设计、精弘网络周边文创类产品设计以及各类视觉方案设计。
    </div>
    <div class="content">
      在小弘工作室，你不仅能够交到兴趣相似的伙伴，还能够丰富课余生活，提升专业技能。除了基本的聚餐、轰趴、给小部员过生日等福利以外，部门还开设了ps、ai等设计软件的课程以及设计方面的各种技巧教学，我们注重对部门成员综合设计技能的培养与提升。  
    </div>
    <div class="content">
      在大学里加入很多部门之后，你可能会发现繁冗的零碎事情太多，占用了太多的课余时间，但小弘工作室不会。你一定能得到你想要的进步。全方位包装，pick的就是你啦~
    </div>
    <JHLabel type="small">招新宣言</JHLabel>
    <div class="content">
      如果你对设计怀着一份好奇向往的憧憬，那么小弘工作室便是一个可以让你很好地接触了解设计的地方。在这，你不仅能遇见兴趣爱好相似的小伙伴，还能学会并掌握一些设计技能与设计知识。只要你怀有一颗喜爱设计的心，我们都欢迎你的加入~
    </div>
  </JHCard>
  <img
    src="https://img.lonesome.cn/jhwl/home/photo/department/fork.webp"
    style="width: 80px; height: 80px; margin-top: 50px; cursor: pointer"
    @click="router.push('/department')"
  />
  <Footer />
</template>
