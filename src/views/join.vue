<script setup lang="ts">
import Footer from "../components/Footer.vue";
import { useRouter } from "vue-router";
import JHCard from "../components/JHCard.vue";
import { ENV } from "../utils/const";
import { usePageStore } from "../stores/pages";
import JHButton from "../components/JHButton.vue";
import JHLabel from "../components/JHLabel.vue";
import PageTop from "../components/PageTop.vue";
const pageStore = usePageStore();
const router = useRouter();
function toRecruit() {
  window.open("/join/recruit");
  return false;
}
function toLong() {
  // if (ENV == "dev") {
  //   window.open("/join/long");
  // } else {
  //   return false;
  // }
  return false;
}
</script>
<template>
  <PageTop />
  <JHCard title="加入我们" type="large" :is-title="true">
    <div class="base" :class="pageStore.pageType">
      <img class="haibao" src="https://download.tooc.xlj0.com/uploads/22/jhhome/public/photo/haibao/future.png" v-if="pageStore.pageType == 'normal'" />
      <img class="haibao" src="https://download.tooc.xlj0.com/uploads/22/jhhome/public/photo/haibao/future.png" v-if="pageStore.pageType != 'normal'" />
      <div class="detail-base" :class="pageStore.pageType">
        <div class="btn">
          <!-- <JHButton type="middle" @click="router.push('/join/acm')">
            ACM新// 生赛
          </JHButton>
          (点击报名) -->
          <JHButton type="middle" @click="toRecruit">招新季报名</JHButton>
          (现已开启)

          <JHButton type="middle-disabled" @click="toLong">长期招新报名</JHButton>(暂未开放)
        </div>
        <div class="introduce" :class="pageStore.pageType">
          <JHLabel type="nano">线下摆摊</JHLabel>
          <div class="content">
            敬请期待
          </div>

          <JHLabel type="nano">招新宣讲</JHLabel>
          <div class="content">
            敬请期待
          </div>
          <JHLabel type="nano">招新群号</JHLabel>
          <div class="content">885342047</div>
        </div>
        <div class="qr">
          <JHLabel type="nano">最新动态</JHLabel>
          <div class="qr-base">
            <div class="qr-code">
              <img src="https://download.tooc.xlj0.com/uploads/22/jhhome/public/photo/product/11.png" />
              精弘网络
            </div>
            <div class="qr-code">
              <img src="https://download.tooc.xlj0.com/uploads/22/jhhome/public/photo/product/10.jpg" />
              浙工大微学工
            </div>
          </div>
        </div>
      </div>
    </div>
  </JHCard>
  <Footer />
</template>

<style scoped lang="scss">
.base {
  display: grid;
}

.base.normal {
  grid-template-columns: 60% 40%;
  grid-gap: 20px;
}

.base.middle {
  height: 2000px;
  grid-template-rows: 1100px 700px 100px;
}

.haibao {
  max-height: 1000px;
  max-width: 80%;
  margin: auto;
}

.detail-base {
  display: flex;
  flex-direction: column;
  column-gap: 5px;
}

.btn {
  /* height: 450px; */
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  width: 50%;
  min-width: 300px;
}

.introduce.normal {
  margin-top: 40px;
  text-align: start;
  font-size: 18px;

  .content {
    position: relative;
    left: 50px;
    margin-bottom: 20px;
  }
}

.introduce.middle,
.introduce.mini {
  text-align: center;
  font-size: 18px;
  margin-top: 40px;

  .content {
    margin-bottom: 20px;
  }
}

.introduce.middle .small,
.introduce.mini .small {
  margin: auto;
}

.detail-base.middle,
.detail-base.mini {
  margin: auto;
}

.qr-base {
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: auto;
  max-width: 300px;
  margin-top: 20px;
}

.qr-base img {
  width: 80px;
  height: 80px;
}

.qr-code {
  height: 100px;
  display: grid;
  grid-template-rows: 1fr 1fr;
  text-align: center;
  align-items: center;
  justify-content: center;
}
</style>
