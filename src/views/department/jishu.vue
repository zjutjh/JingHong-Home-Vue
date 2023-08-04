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
  "https://download.tooc.xlj0.com/uploads/22/jhhome/public/photo/department/jishu/kaifabu/1.jpg",
  "https://download.tooc.xlj0.com/uploads/22/jhhome/public/photo/department/jishu/kaifabu/2.jpg",
  "https://download.tooc.xlj0.com/uploads/22/jhhome/public/photo/department/jishu/kaifabu/3.jpg",
];
const imgs2 = [
  "https://download.tooc.xlj0.com/uploads/22/jhhome/public/photo/department/jishu/chanpinbu/1.jpg",
  "https://download.tooc.xlj0.com/uploads/22/jhhome/public/photo/department/jishu/chanpinbu/2.jpg",
  "https://download.tooc.xlj0.com/uploads/22/jhhome/public/photo/department/jishu/chanpinbu/3.jpg",
  "https://download.tooc.xlj0.com/uploads/22/jhhome/public/photo/department/jishu/chanpinbu/4.jpg",
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
  <JHCard type="large" title="开发部" :isTitle="true">
    <div class="imgs">
      <!-- <img src="https://download.tooc.xlj0.com/uploads/22/jhhome/public/photo/department/jishu/kaifabu/1.jpg" />
      <img src="https://download.tooc.xlj0.com/uploads/22/jhhome/public/photo/department/jishu/kaifabu/2.jpg" />
      <img src="https://download.tooc.xlj0.com/uploads/22/jhhome/public/photo/department/jishu/kaifabu/3.jpg" /> -->
      <CarouselPicturesBig :imgs="imgs" />
    </div>
    <JHLabel type="small">部门介绍</JHLabel>
    <div class="content">
      我们是微精弘和各精弘应用平台的开发者和维护者，更是现在校级组织数字化转型解决方案的提供者！作为全工大唯一一个学生技术部门，成员自然也是身怀绝技。除此之外，吃锅团建也是我们精弘技术部的老传统（划掉）。
    </div>
    <div class="content">
      现在主要开发技术栈： Go, HTML, CSS, JavaScript, Vue.js, Vuex, TypeScript
    </div>
    <div class="content">
      如果想让自己在工大一展身手，那么就务必来技术部康康。我们部门会在暑假放入网络开发相关学习课程，欢迎大家来观看！
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
    <!-- <img src="https://download.tooc.xlj0.com/uploads/22/jhhome/public/photo/department/jishu/chanpinbu/1.jpg" />
    <img src="https://download.tooc.xlj0.com/uploads/22/jhhome/public/photo/department/jishu/chanpinbu/2.jpg" />
    <img src="https://download.tooc.xlj0.com/uploads/22/jhhome/public/photo/department/jishu/chanpinbu/3.jpg" />
    <img src="https://download.tooc.xlj0.com/uploads/22/jhhome/public/photo/department/jishu/chanpinbu/4.jpg" /> -->
    <CarouselPicturesBig :imgs="imgs2" />
    <JHLabel type="small">部门介绍</JHLabel>
    <div class="content">
      哈喽你好哇！这里是听起来或许有些陌生的产品部，我们既不是敲代码的也不是做实体产品的，而是扮演产品经理的角色，探讨工大师生们的需求，和精弘的各位小伙伴一起合作，更新迭代实用的原有产品以及开发出好看又好用的新产品。不管是服务了广大学生的微精弘小程序，还是你现在看到的精弘首页，都是我们的产品。我们的目标是用产品改变世界！
    </div>
    <JHLabel type="small">招新宣言</JHLabel>
    <div class="content">
      如果你渴望提前在校园里亲身体验互联网企业中重要的产品经理岗位，那么加入产品部将是一个不容错过的机会喔！在这里你可以亲手设计各种有趣的产品，为微精弘小程序等校园产品构想更多有用的功能，还能与技术和设计人员紧密合作，将你的创意变成现实。不必担心目前对产品知识的了解甚少，因为我们将从零开始教学！让我们一同成长，开启这段激动人心的旅程吧！
    </div>
  </JHCard>
  <img
    src="https://download.tooc.xlj0.com/uploads/22/jhhome/public/photo/department/fork.png"
    style="width: 80px; height: 80px; margin-top: 50px; cursor: pointer"
    @click="router.push('/department')"
  />
  <Footer />
</template>
