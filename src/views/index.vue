<script lang="ts" setup>
import Start from "../components/Start.vue";
import Introduce from "../components/Introduce.vue";
import History from "../components/History.vue";
import Timeline from "../components/Timeline.vue";
import { usePageStore } from "../stores/pages";
import JHCard from "../components/JHCard.vue";
import { useRouter } from "vue-router";
import JHButton from "../components/JHButton.vue";
import Footer from "../components/Footer.vue";
import Contact from "../components/Contact.vue";
import JHVideo from "../components/Video.vue";
const pageStore = usePageStore();
const router = useRouter();

function toStory() {
  router.push("/story");
}
var loaded = false;
</script>
<style scoped>
.story img {
  width: 60%;
  height: 60%;
  border-radius: 15px;
}

.story-content {
  margin-top: 10px;
  font-size: large;
}
</style>
<template>
  <start />
  <introduce />
  <!-- 21届部长团没有拍客服视频 故取消 -->
   <!-- <JHVideo /> -->
  <history v-if="pageStore.pageType == 'normal'" />
  <timeline
    v-if="pageStore.pageType == 'mini' || pageStore.pageType == 'middle'"
  />
  <JHCard
    title="我们的故事"
    :is-title="true"
    type="large"
    class="story"
    v-if="pageStore.pageType == 'mini' || pageStore.pageType == 'middle'"
  >
    <img src="https://img.lonesome.cn/jhwl/home/photo/index/story.webp" />
    <JHButton type="middle" @click="toStory">
      我们的故事
      <img
        src="https://img.lonesome.cn/jhwl/home/photo/svg/rightArrow.svg"
        style="width: 20px; margin-left: 20px"
      />
    </JHButton>
    <div class="story-content">
      因梦想，我们齐聚一堂；因使命，我们同舟共济。
    </div>
  </JHCard>
  <Contact />
  <Footer />
</template>
