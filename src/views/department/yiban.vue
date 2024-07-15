<script setup lang="ts">
import { onMounted } from "vue";
import JHLabel from "../../components/JHLabel.vue";
import JHCard from "../../components/JHCard.vue";
import Footer from "../../components/Footer.vue";
import { useRouter } from "vue-router";
import CarouselPicturesBig from "../../components/CarouselPicturesBig.vue";
const router = useRouter();
onMounted(() => {
  document.title = "易班文化工作站";
});
const imgs = [
  "https://img.lonesome.cn/jhwl/home/photo/department/yiban/1.webp",
  "https://img.lonesome.cn/jhwl/home/photo/department/yiban/2.webp",
  "https://img.lonesome.cn/jhwl/home/photo/department/yiban/3.webp",
  "https://img.lonesome.cn/jhwl/home/photo/department/yiban/4.webp",
];
</script>
<style scoped>
img {
  width: 80%;
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
  <JHLabel type="big">易班文化工作站</JHLabel>
  <JHCard type="large" title="易班文化工作站" :isTitle="true">
    <CarouselPicturesBig :imgs="imgs" />
    <JHLabel type="small">部门介绍</JHLabel>
    <div class="content">
      易班文化工作站以积极响应教育部日益增长的网络思政教育要求与易班建设任务为目标，主要负责易班软件信息的日常运营维护以及内容更新等工作。同时负责组织网络安全宣传月、网络文化节等相关主题活动。除此之外，易班也会与多部门展开合作，作为精弘网络里的部门润滑剂。
    </div>
    <JHLabel type="small">招新宣言</JHLabel>
    <div class="content">
      想参与学校易班推送更新吗？想主办网安月、网文节活动吗？想了解并协助精弘各类活动幕后吗？只要你有一颗勇于创新、敢想敢做、积极沟通的心，就可以来易班文化工作站与我们一起！易班文化工作站期待你的加入！
    </div>
    <div class="content">
      易班，非同一般。
    </div>
  </JHCard>
  <img
    src="https://img.lonesome.cn/jhwl/home/photo/department/fork.webp"
    style="width: 80px; height: 80px; margin-top: 50px; cursor: pointer"
    @click="router.push('/department')"
  />
  <Footer />
</template>
