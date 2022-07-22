<script setup lang="ts">
import { onMounted } from "vue";
import JHLabel from "../../components/JHLabel.vue";
import JHCard from "../../components/JHCard.vue";
import Footer from "../../components/Footer.vue";
import { useRouter } from "vue-router";
import CarouselPicturesBig from "../../components/CarouselPicturesBig.vue";
const router = useRouter();
onMounted(() => {
  document.title = "技术版块";
});
const imgs = [
  "/photo/department/jishu/kaifabu/1.jpg",
  "/photo/department/jishu/kaifabu/2.jpg",
  "/photo/department/jishu/kaifabu/3.jpg",
];
const imgs2 = [
  "/photo/department/jishu/chanpinbu/1.jpg",
  "/photo/department/jishu/chanpinbu/2.jpg",
  "/photo/department/jishu/chanpinbu/3.jpg",
  "/photo/department/jishu/chanpinbu/4.jpg",
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
  <JHLabel type="big">技术版块</JHLabel>
  <JHCard type="large" title="技术部" :isTitle="true">
    <div class="imgs">
      <!-- <img src="/photo/department/jishu/kaifabu/1.jpg" />
      <img src="/photo/department/jishu/kaifabu/2.jpg" />
      <img src="/photo/department/jishu/kaifabu/3.jpg" /> -->
      <CarouselPicturesBig :imgs="imgs" />
    </div>
    <JHLabel type="small">部门介绍</JHLabel>
    <div class="content">
      精弘开发部是由一群热爱技术的开源主义者组成的，工作内容包括开发并维护微精弘、毅行报名程序、招新qq群机器人、精弘首页、新生宿舍查询程序等等。作为developer我们也热衷于分享技术知识，讨论技术难点，交流前言技术。我们还拥有自己的GitHub组织，将我们开发的产品进行无私的开源分享。一句话概括：只要是有技术的地方就肯定有精弘的developer！
    </div>

    <JHLabel type="small">招新宣言</JHLabel>
    <div class="content">
      你对开发、运维有兴趣吗？你对计算机有兴趣吗？你对一个项目是如何从一个idea一步步变成成熟的产品有兴趣吗？如果有的话，请不要错过精弘技术部！我们需要你这样热爱开发的人！
    </div>
  </JHCard>
  <JHCard type="large" title="运维部" :isTitle="true">
    <JHLabel type="small">部门介绍</JHLabel>

    <div class="content">
      精弘运维部是浙江工业大学精弘网络的重要组成部分，与开发部紧密相连，主要负责的是技术运维工作，主业务是先开发之忧而忧，后产品之乐而乐，副业务是和开发部门一起团建，吃锅。我们的准则是“稳定是基础，安全是保障，高效是王道，调优就是价值的直观体现”。
    </div>
  </JHCard>
  <JHCard type="large" title="产品部" :isTitle="true">
    <!-- <img src="/photo/department/jishu/chanpinbu/1.jpg" />
    <img src="/photo/department/jishu/chanpinbu/2.jpg" />
    <img src="/photo/department/jishu/chanpinbu/3.jpg" />
    <img src="/photo/department/jishu/chanpinbu/4.jpg" /> -->
    <CarouselPicturesBig :imgs="imgs2" />
    <JHLabel type="small">部门介绍</JHLabel>
    <div class="content">
      哈喽你好哇！这里是听起来或许有些陌生的产品部，我们不是敲代码的也不是做实体产品哒，而是扮演产品经理的角色，探讨工大师生们的需求，和精弘的各位小伙伴一起合作，更新迭代实用的原有产品以及开发出好看又好用的新产品。不管是服务了广大学生的微精弘小程序，还是你现在看到的精弘首页，都是我们的产品噢。
    </div>
    <div class="content">
      产品部有独特的部门文化，有非常有趣的总监（单身帅哥）和部长团，还有许多好玩的部门活动嘿嘿。来找我们玩鸭~
    </div>
    <JHLabel type="small">招新宣言</JHLabel>
    <div class="content">
      如果你想提前在校园里，体验互联网企业重要的产品经理岗位，那么产品部是你不能错过的宝地噢！在这里你可以亲手设计小程序等各种产品，可以与技术和设计人员协同合作，一起将想法落地成现实！
    </div>
    <div class="content">
      不用担心你现在不懂产品知识，我们都是从小白开始教学哒~
    </div>
  </JHCard>
  <img
    src="/photo/department/fork.png"
    style="width: 80px; height: 80px; margin-top: 50px; cursor: pointer"
    @click="router.push('/department')"
  />
  <Footer />
</template>
