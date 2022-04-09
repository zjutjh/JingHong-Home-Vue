<script setup lang="ts">
import Footer from '../components/Footer.vue';
import { useRouter } from 'vue-router';
import JHCard from '../components/JHCard.vue';
import { ENV } from '../utils/const';
import { usePageStore } from '../stores/pages';
import JHButton from '../components/JHButton.vue';
import JHLabel from '../components/JHLabel.vue';
const pageStore = usePageStore();
const router = useRouter();
function toRecruit() {
  window.open('/recruit');
}
function toLong() {
  if (ENV == 'dev') {
    window.open('/recruit_long');
  } else {
    return false;
  }
}
</script>
<template>
  <JHCard title="加入我们" type="large" :is-title="true" style="margin-top:20vh">
    <div class="base" :class="pageStore.pageType">
      <img class="haibao" src="/photo/haibao/pc.jpg" v-if="pageStore.pageType == 'normal'" />
      <img class="haibao" src="/photo/haibao/mob.jpg" v-if="pageStore.pageType != 'normal'" />
      <div class="detail-base" :class="pageStore.pageType">
        <div class="btn">
          <JHButton type="middle" @click="toRecruit">招新季报名</JHButton>(点击报名)
          <JHButton type="middle-disabled" @click="toLong">长期招新报名</JHButton>(暂未开放)
        </div>
        <div class="introduce" :class="pageStore.pageType">
          <JHLabel type="small">线下摆摊</JHLabel>屏峰：20212021年9月15日至16日
          <br />地点：支干路
          <br />
          <br />朝晖：2021年9月15日至16日
          <br />地点：上塘河畔
          <JHLabel type="small">招新宣讲</JHLabel>屏峰：2021年9月10日晚6：30
          <br />地点：广知C 301
          <br />
          <br />朝晖：2021年9月11日晚6：30
          <br />地点：新教 201
          <JHLabel type="small">招新群号</JHLabel>715270127
        </div>
      </div>
      <div class="qr">
        <JHLabel type="small">最新动态</JHLabel>
        <div class="qr-base">
          <div class="qr-code">
            <img src="/photo/product/11.png" />
            精弘网络
          </div>
          <div class="qr-code">
            <img src="/photo/product/10.png" />
            精小弘在线
          </div>
        </div>
      </div>
    </div>
  </JHCard>

  <JHCard title="部门结构一览图" type="large" :is-title="true">
    <img src="/photo/haibao/structPc.png" style="width:70%" v-if="pageStore.pageType == 'normal'" />
    <img src="/photo/haibao/structMob.png" style="width:70%" v-if="pageStore.pageType != 'normal'" />
  </JHCard>
  <Footer />
</template>


<style scoped>
.base {
  display: grid;
}
.base.normal {
  grid-template-columns: 60% 40%;
  grid-gap: 20px;
  grid-template-rows: 1100px 150px;
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
  display: grid;
  grid-template-rows: 200px 1fr;
}

.btn {
  /* height: 450px; */
  display: grid;
  grid-template-rows: 40% 10% 40% 10%;
}

.introduce {
  margin-top: 40px;
  text-align: start;
  font-size: 18px;
}
.introduce.middle,
.introduce.mini {
  text-align: center;
  font-size: 18px;
}
.introduce.middle .small,
.introduce.mini .small {
  margin: auto;
}
.qr-base {
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 200px;
  width: 200px;
  margin: auto;
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
