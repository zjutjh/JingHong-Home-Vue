<script setup lang="ts">
import { onMounted } from 'vue';
import JHLabel from '../../components/JHLabel.vue';
import JHCard from '../../components/JHCard.vue';
import Footer from '../../components/Footer.vue';
import { useRouter } from 'vue-router';
const router = useRouter();
onMounted(() => {
  document.title = "新媒体模块";
})
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
  <div style="height:100px"></div>
  <JHLabel type="big">新媒体模块</JHLabel>
  <JHCard type="large" title="视觉影像部" :isTitle="true">
    <img src="/photo/department/14.jpg" />
    <JHLabel type="middle">部门介绍</JHLabel>
    <div
      class="content"
    >视觉影像视觉影像是校园学习生活、以及学校各类大型活动的记录团队，我们专注于摄影与视频前期拍摄和后期剪辑，致力于用最优秀的制作呈现最美的工大人、工大景。视觉影像期待用最用心的摄制给你带来最高级的视听盛宴！欢迎关注b站：485566103、微信视频号：精小弘在线。隶属于新媒体的视觉影音也有脱单魔法，想要脱单并喜欢摄影的小朋友们，走过路过不要过哦</div>
  </JHCard>
  <JHCard type="large" title="编辑工作室" :isTitle="true">
    <JHLabel type="middle">部门介绍</JHLabel>
    <div
      class="content"
    >负责公众号“精小弘在线”与“浙江工业大学精弘网络“的主要运营和知乎账号”浙江工业大学“、贴吧”浙江工业大学吧“、微博”浙江工业大学精弘网络“的幕后管理。主要工作是微信公众号推文的撰写和排版，致力于用图片和文字以及亿点点的细节来讲述工大故事，分享校园生活。</div>

    <div
      class="content"
    >如果你略懂排版、PS，那就太好了！我们工作室就需要你这样的人才！加入我们，你会拥有N个平台去展示提升你自己。如果你完全不会以上这些，那也没关系，我们会给你提供专业的教学，包教包会！加入我们，可以一起吃香喝辣、快乐生活！</div>
    <div class="content">所以，来吧来吧！加入我们新媒体编辑工作室！</div>
  </JHCard>
  <img
    src="/photo/department/fork.png"
    style="width:80px; height:80px; margin-top: 50px; cursor:pointer;"
    @click="router.push('/department')"
  />
  <Footer />
</template>