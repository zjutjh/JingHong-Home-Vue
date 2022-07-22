<script setup lang="ts">
import { onMounted } from "vue";
import JHLabel from "../../components/JHLabel.vue";
import JHCard from "../../components/JHCard.vue";
import Footer from "../../components/Footer.vue";
import { useRouter } from "vue-router";
import CarouselPicturesBig from "../../components/CarouselPicturesBig.vue";
const router = useRouter();
onMounted(() => {
  document.title = "新媒体模块";
});
const imgs1 = [
  "/photo/department/xinmeiti/shijue/1.jpg",
  "/photo/department/xinmeiti/shijue/2.jpg",
  "/photo/department/xinmeiti/shijue/3.jpg",
];
const imgs2 = [
  "/photo/department/xinmeiti/bianji/1.jpg",
  "/photo/department/xinmeiti/bianji/2.jpg",
  "/photo/department/xinmeiti/bianji/3.jpg",
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
  <JHLabel type="big">新媒体模块</JHLabel>
  <JHCard type="large" title="视觉影像部" :isTitle="true">
    <!-- <img src="/photo/department/xinmeiti/shijue/1.jpg" />
    <img src="/photo/department/xinmeiti/shijue/2.jpg" />
    <img src="/photo/department/xinmeiti/shijue/3.jpg" /> -->
    <CarouselPicturesBig :imgs="imgs1" />
    <JHLabel type="small">部门介绍</JHLabel>
    <div class="content">
      视觉影像部门是校园学习生活、校园各类美景（人）以及学校大型活动的记录团队。我们专注于照片和视频的前期策划/拍摄和后期修图/剪辑，致力于用优秀的制作呈现美丽的工大人、工大景。视觉影像期待用最用心的摄制给你带来最高级的视听盛宴！同时欢迎关注b站：485566103、微信视频号：精小弘在线。
    </div>
    <JHLabel type="small">招新宣言</JHLabel>
    <div class="content">
      你喜欢摄影吗？你想让自己摄影作品登上学校公众号吗？那就加入视觉影像吧！在这里，不仅能认识到更多有趣的伙伴，而且还能学习到许多关于摄影与视频技能，从前期策划，到拍摄手法，再到后期修图/剪辑，甚至于视频媒体运营，我们将为你们提供全流程的学习和实践机会。有兴趣的小朋友们赶快加入我们呀！
    </div>
  </JHCard>
  <JHCard type="large" title="编辑工作室" :isTitle="true">
    <!-- <img src="/photo/department/xinmeiti/bianji/1.jpg" />
    <img src="/photo/department/xinmeiti/bianji/2.jpg" />
    <img src="/photo/department/xinmeiti/bianji/3.jpg" /> -->
    <CarouselPicturesBig :imgs="imgs2" />
    <JHLabel type="small">部门介绍</JHLabel>
    <div class="content">
      负责公众号“精小弘在线”与“浙江工业大学精弘网络“的主要运营和知乎账号”浙江工业大学“、贴吧”浙江工业大学吧“、微博”浙江工业大学精弘网络“的幕后管理。主要工作是微信公众号推文的撰写和排版，致力于用图片和文字以及亿点点的细节来讲述工大故事，分享校园生活。
    </div>
    <JHLabel type="small">招新宣言</JHLabel>
    <div class="content">
      加入我们可以获得：作品的最大曝光、有料的成长回报、包教包会的专业技巧、天马行空全部落地以及超高的成就感和归属感。如果你略懂排版和PS、擅长文字撰写，或者对公众号推文时有关注、有各种新奇的想法想去实现，编辑工作室都欢迎你的到来。别犹豫啦，快来我们一起碰撞灵魂、创造美好！
    </div>
  </JHCard>
  <img
    src="/photo/department/fork.png"
    style="width: 80px; height: 80px; margin-top: 50px; cursor: pointer"
    @click="router.push('/department')"
  />
  <Footer />
</template>
