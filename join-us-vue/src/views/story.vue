<script lang="ts" setup>
import JHLabel from '../components/JHLabel.vue';
import JHCard from '../components/JHCard.vue';
import Footer from '../components/Footer.vue';
import { usePageStore } from '../stores/pages';
const pageStore = usePageStore();
</script>
<style scoped>
.shiming-base.normal {
  width: 80%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: auto;
  grid-column-gap: 10%;
}
.shiming-base.middle {
  width: 80%;
  display: grid;
  grid-template-rows: 10% 1fr;
  margin: auto;
  grid-row-gap: 50px;
}
.shiming-base.mini {
  width: 80%;
  display: grid;
  grid-template-rows: 10% 700px;
  margin: auto;
  grid-row-gap: 10px;
}
.shiming-imgs {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 10%;
}
.shiming-imgs-img {
  width: 100%;
  /* min-width: 64px; */
}
.shiming-base .shiming-img {
  width: 80%;
  min-width: 200px;
}
.shiming {
  text-align: start;
  padding: 20px;
  padding-left: 10%;
  border-left: 5px solid #d20001;
  height: fit-content;
}

.shiming.mini {
  border-left: none;
}
.shiming h2 {
  border-bottom: 3px solid #d20001;
}
.jiyu {
  margin-top: 20px;
}
</style>
<template>
  <div style="height:100px"></div>
  <JHLabel type="title">我们的故事</JHLabel>
  <JHCard type="large" title="我们的使命" :isTitle="true">
    <div class="shiming-base" :class="pageStore.pageType">
      <img class="shiming-img" src="/photo/index/shiming.png" v-if="pageStore.pageType == 'normal'" />
      <div
        class="shiming-imgs"
        v-if="pageStore.pageType == 'mini' || pageStore.pageType == 'middle'"
      >
        <img class="shiming-imgs-img" src="/photo/index/shiming1.png" />
        <img class="shiming-imgs-img" src="/photo/index/shiming2.png" />
        <img class="shiming-imgs-img" src="/photo/index/shiming3.png" />
        <img class="shiming-imgs-img" src="/photo/index/shiming4.png" />
      </div>
      <div class="shiming" :class="pageStore.pageType">
        <h2>相关平台 | Related Platform</h2>精弘网络采用朝晖、屏峰、莫干山三个校区共同建制
        <br />目前运营和维护的平台包括但不仅限
        <br />浙江工业大学精弘网络微信服务号、
        <br />精小弘在线微信服务号、微精弘微信小程序、
        <br />浙工大易班官方机构号、知乎官方机构号、
        <br />邮件系统(https://mail.zjut.edu.cn/)、
        <br />工大云盘(http://pan.zjut.edu.cn/)、
        <br />精弘论坛、精弘直播、Feel电台等。
      </div>
    </div>
  </JHCard>
  <JHCard type="large" title="精弘毅行" :isTitle="true"></JHCard>
  <JHCard type="large" title="网络育人" :isTitle="true"></JHCard>
  <JHCard type="large" title="生活社交" :isTitle="true"></JHCard>
  <div class="jiyu">
    <JHLabel type="title">前辈寄语</JHLabel>
  </div>
  <Footer />
</template>