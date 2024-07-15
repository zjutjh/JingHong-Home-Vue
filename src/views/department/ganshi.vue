<script setup lang="ts">
import { onMounted } from "vue";
import JHLabel from "../../components/JHLabel.vue";
import JHCard from "../../components/JHCard.vue";
import Footer from "../../components/Footer.vue";
import { useRouter } from "vue-router";
import CarouselPicturesBig from "../../components/CarouselPicturesBig.vue";
const router = useRouter();
onMounted(() => {
  document.title = "干事培训中心";
});
const img1 = [
    "https://img.lonesome.cn/jhwl/home/photo/department/ganshi/changwu/1.webp",
    "https://img.lonesome.cn/jhwl/home/photo/department/ganshi/changwu/2.webp",
    "https://img.lonesome.cn/jhwl/home/photo/department/ganshi/changwu/3.webp",
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
  <JHLabel type="big">干事培训中心</JHLabel>
  <JHCard type="large" title="常务处" :isTitle="true">
    <CarouselPicturesBig :imgs="img1"></CarouselPicturesBig>
    <JHLabel type="small">部门介绍</JHLabel>
    <div class="content">
      Hello大家好！！！这里是精弘网络常务处，是精弘的交通枢纽，是组织运行的润滑油！我们无处不在，我们不可或缺。我们的工作主要分为日常类和活动类。在日常工作中，我们将迎来会议旁听和记录，部门对接及任务整合，委托书撰写等任务。而当活动来临，我们将围绕精弘网络各类活动进行策划，奖品物资挑选及管理，当然还有后勤工作。同时，常务处还负责对接各种外联。这需要用聪明的脑袋来想出各种活动，还要有三寸不烂之舌与商家交流。在这里，你不仅可以锻炼到个人能力，也能结识到各种各样的小伙伴！在工作之余，常务处也是一个快乐的部门，有着丰富多彩的团建活动：海底捞，看日出，生日会，以及团建必备的桌游……常务处的目标就是——工作和吃喝玩乐都不落下的六边形战士！</div>
    <JHLabel type="small">招新宣言</JHLabel>
    <div class="content">
      亲爱的学弟学妹们～欢迎来到常务处大家庭！我们是一个相亲相爱的集体，也是精弘网络的小金库！在这里，你会拥有每周一次的例会party！在这里，每一个小朋友都会有属于自己的生日蛋糕和祝福！在这里，学长学姐们会耐心为初来工大的你们解决一系列难题！在接下来的一年里，我们会一起见证日出的磅礴大气，一起欣赏日落的血色夕阳，一起度过在工大的四季！我们将共同工作，共同学习，共同成长。请期待在常务处的每一个明天！</div>
  </JHCard>
  <img
    src="https://img.lonesome.cn/jhwl/home/photo/department/fork.webp"
    style="width: 80px; height: 80px; margin-top: 50px; cursor: pointer"
    @click="router.push('/department')"
  />
  <Footer />
</template>
