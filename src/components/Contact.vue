<template>
  <div class="contact-base" :class="pageStore.pageType">
    <JHCard type="small" :is-title="false" title="no">
      <div class="loading" :class="pageStore.pageType">
        <img src="https://qiuniu.phlin.cn/bucket/20250720215651909.svg" />
        <div class="loading-bar-border">
          <div class="loading-bar" :style="{ left: loadingWidth + '%' }"></div>
        </div>
        <img src="https://img.lonesome.cn/jhwl/home/photo/index/loading.webp" />
      </div>
    </JHCard>
    <img
      class="jh"
      :class="pageStore.pageType"
      src="https://img.lonesome.cn/jhwl/home/photo/index/story1.webp"
      border="5"
    />
    <JHCard type="small" :is-title="false" title="no">
      <div class="contact-us" :class="pageStore.pageType">
        <img
            src="https://img.lonesome.cn/jhwl/home/photo/svg/wechat.svg"
            @mouseover="onMouseOver"
        />
        <img
            v-if="isHovering"
            src="https://qiuniu.phlin.cn/bucket/20250714225620675.webp"
            class="qrcode"
            @mouseout="onMouseOut"
            style="width: auto; height: 20%;z-index:1; position: absolute;"
        />
        <div style="width: 99%">
          <h1>联系我们 | 关注我们</h1>
          <h4>jhwl@zjut.edu.cn</h4>
        </div>
        <img
          src="https://img.lonesome.cn/jhwl/home/photo/svg/LogoGitHub.svg"
          style="cursor: pointer"
          @click="toGithub"
        />
      </div>
    </JHCard>

    <JHCard type="small" :is-title="false" title="no">
      <div class="join">
        <div class="join-content" :class="pageStore.pageType">精弘诚聘</div>
        <JHButton
          :type="pageStore.pageType == 'mini' ? 'mini' : 'middle'"
          @click="toJoin"
          >加入我们</JHButton
        >
      </div>
    </JHCard>
  </div>
</template>

<style scoped>
.contact-base.normal {
  width: 85%;
  margin: auto;
  display: grid;
  grid-template-columns: 25% 10% 35% 30%;
  grid-column-gap: 20px;
}

.contact-base.middle,
.contact-base.mini {
  width: 90%;
  margin: auto;
  display: grid;
  grid-template-columns: 70% 30%;
  grid-template-rows: 1fr 1fr;
  /* grid-template-areas:
    "a b"
    "c d"; */
  grid-column-gap: 10px;
  align-items: center;
}

.contact-us {
  display: grid;
  grid-template-columns: 20% 60% 20%;
  align-items: center;
}

.contact-us.middle h1 {
  font-size: large;
}

.contact-us.mini h1 {
  font-size: 10px;
}

.contact-us.middle h4 {
  font-size: small;
}

.contact-us.mini h4 {
  font-size: 8px;
}

.contact-us.normal img {
  width: 80px;
  height: 80px;
  margin: auto;
}

.contact-us.middle img,
.contact-us.mini img {
  width: 30px;
  height: 30px;
  margin: auto;
  background-color: white;
}

.contact-base .jh {
  width: 100px;
  height: 100px;
  margin: auto;
  border-radius: 50%;
  border-color: white;
  box-shadow: 0 1px 5px #999;
}

.jh.mini {
  width: 80px;
  height: 80px;
}
.join {
  align-items: center;
}
.join-content.normal {
  font-size: x-large;
  border-bottom: 2px solid black;
  width: 60%;
  margin: auto;
  padding-bottom: 30px;
  margin-bottom: 30px;
}

.join-content.middle,
.join-content.mini {
  font-size: 12px;
  border-bottom: 1px solid black;
  width: 60%;
  margin: auto;
  padding-bottom: 10px;
  margin-bottom: 10px;
}
.loading {
  height: 180px;
  /* display: grid; */
  /* grid-template-rows: 30% 40% 30%; */
  display: flex;
  flex-direction: column;
}
.loading.mini {
  height: 100px;
}
.loading .loading-bar-border {
  width: 80%;
  height: 30px;
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
  width: 30%;
  margin: auto;
}

.qrcode {
  width: auto;
  height: 20%;
  position: absolute;
  z-index: 99;
  border: 3px solid #fff;
  border-radius: 3px;
  background-color: #fff;
  padding: 0.5rem;
  opacity: 1;
  transition: all 0.1s ease-in 0s;
}
</style>

<script setup lang="ts">
import { usePageStore } from "../stores/pages";
import { useRouter } from "vue-router";
import { onMounted, ref } from "vue";
import JHCard from "./JHCard.vue";
import JHButton from "./JHButton.vue";
const pageStore = usePageStore();
const router = useRouter();
const loadingBarTimer = ref(0);
const loadingWidth = ref(0);
const isHovering = ref(false);
function onMouseOver() {
  isHovering.value = true;
}

function onMouseOut() {
  isHovering.value = false;
}
function toGithub() {
  window.open("https://www.github.com/zjutjh", "_blank");
}
function toJoin() {
  router.push("/join");
}
onMounted(() => {
  loadingBarTimer.value = window.setInterval(() => {
    if (loadingWidth.value >= 0) {
      loadingWidth.value = -100;
    } else {
      loadingWidth.value += 0.2;
    }
  }, 10);
});
</script>
