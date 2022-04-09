<script lang="ts" setup>
import Start from '../components/Start.vue';
import Introduce from '../components/Introduce.vue';
import History from '../components/History.vue';
import Timeline from '../components/Timeline.vue';
import { usePageStore } from '../stores/pages';
import JHCard from '../components/JHCard.vue';
import { useRouter } from 'vue-router';
import JHButton from '../components/JHButton.vue';
import Footer from '../components/Footer.vue';
import { onMounted, ref } from 'vue';
const pageStore = usePageStore();
const router = useRouter();
const loadingBarTimer = ref(0);
const loadingWidth = ref(0);
function toStory() {
  router.push("/story");
}
function toGithub() {
  window.open('https://www.github.com', '_blank');
}
onMounted(() => {
  loadingBarTimer.value = window.setInterval(() => {
    if (loadingWidth.value >= 0) {
      loadingWidth.value = -100;
    } else {
      loadingWidth.value += 0.2;
    }
  }, 10);
})
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

.contact-base.normal {
  width: 85%;
  margin: auto;
  display: grid;
  grid-template-columns: 40% 10% 25% 25%;
  grid-column-gap: 20px;
}
.contact-base.middle,
.contact-base.mini {
  width: 80%;
  margin: auto;
  display: grid;
  grid-template-columns: 70% 30%;
  grid-template-rows: 1fr 1fr;
  grid-column-gap: 20px;
}
.contact-us {
  display: grid;
  grid-template-columns: 20% 60% 20%;
}
.contact-us.middle h1 {
  font-size: large;
}
.contact-us.mini h1 {
  font-size: 15px;
}
.contact-us.middle h4 {
  font-size: small;
}
.contact-us.mini h1 {
  font-size: 15px;
}
.contact-us.normal img {
  width: 80px;
  height: 80px;
  margin: auto;
}
.contact-us.middle img,
.contact-us.mini img {
  width: 40px;
  height: 40px;
  margin: auto;
  background-color: white;
}
.contact-base .jh {
  width: 100px;
  height: 100px;
  margin: auto;
  margin-top: 70px;
  border-radius: 50%;
  border-color: white;
  box-shadow: 0 1px 5px #999;
}
.join {
  font-size: x-large;
  border-bottom: 2px solid black;
  width: 60%;
  margin: auto;
  margin-bottom: 20px;
}
.loading {
  display: grid;
  grid-template-rows: repeat(3, 1fr);
}
.loading .loading-bar-border {
  width: 80%;
  height: 50%;
  border-radius: 100px;
  overflow: hidden;
  border: 5px solid #d20001;
  margin: auto;
}

.loading .loading-bar {
  position: relative;
  width: 100%;
  height: 100%;
  background-color: #d20001;
}
.loading img {
  border-radius: 0;
  width: 60%;
  margin: auto;
  /* height: 70%; */
}
</style>
<template>
  <start />
  <introduce />
  <history v-if="pageStore.pageType == 'normal'" />
  <timeline v-if="pageStore.pageType == 'mini' || pageStore.pageType == 'middle'" />
  <JHCard title="我们的故事" :is-title="true" type="large" class="story">
    <img src="/photo/index/startPc.jpg" />
    <JHButton type="middle" @click="toStory">
      我们的故事
      <img src="/photo/svg/rightArrow.svg" style="width:20px; margin-left:20px;" />
    </JHButton>
    <div class="story-content">因梦想，我们齐聚一堂；因使命，我们同舟共济。</div>
  </JHCard>
  <div class="contact-base" :class="pageStore.pageType">
    <JHCard type="small" :is-title="false" title="no">
      <div class="contact-us" :class="pageStore.pageType">
        <img src="/photo/svg/wechat.svg" />
        <div style="width:100%">
          <h1>联系我们 | 关注我们</h1>
          <h4>jhwl@zjut.edu.cn</h4>
        </div>
        <img src="/photo/svg/LogoGitHub.svg" @click="toGithub" />
      </div>
    </JHCard>
    <img class="jh" src="/photo/index/story1.png" border="5" />
    <JHCard type="small" :is-title="false" title="no">
      <div class="join">精弘诚聘</div>
      <JHButton type="middle">加入我们</JHButton>
    </JHCard>
    <JHCard type="small" :is-title="false" title="no">
      <div class="loading">
        <img src="/photo/index/2021.png" />
        <div class="loading-bar-border">
          <div class="loading-bar" :style="{ left: loadingWidth + '%' }"></div>
        </div>
        <img src="/photo/index/loading.png" />
      </div>
    </JHCard>
  </div>
  <Footer />
</template>
