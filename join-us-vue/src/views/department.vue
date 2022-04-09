<script lang="ts" setup>
import JHLabel from '../components/JHLabel.vue';
import { usePageStore } from '../stores/pages';
import JHButton from '../components/JHButton.vue';
import Footer from '../components/Footer.vue';
import { useRouter } from 'vue-router';
const pageStore = usePageStore();
const router = useRouter();
</script>
<style scoped>
.base {
  display: grid;
  grid-column-gap: 5%;
  width: 80%;
  margin: auto;
}
.base.normal {
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr 1fr;
}
.base.middle {
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr 1fr 1fr;
}
.base.mini {
  grid-template-rows: repeat(6, 1fr);
}

.base .item .img {
  width: 200px;
  height: 200px;
  margin: auto;
  border-radius: 50%;
  background-color: #fff;
  background-size: 70%;
  background-position: center;
  background-repeat: no-repeat;
  box-shadow: 0 5px 10px #999;
}
.base .item {
  border-bottom: 3px solid #d20001;
  padding: 10px;
}
</style>
<template>
  <div style="height:100px"></div>
  <JHLabel type="title">我们的部门</JHLabel>
  <div class="base" :class="pageStore.pageType">
    <div class="item">
      <div class="img" style="background-image: url(/photo/svg/changwu.svg);"></div>
      <JHButton type="small" @click="router.push('/department/changwu')">常务版块</JHButton>
    </div>
    <div class="item">
      <div class="img" style="background-image: url(/photo/svg/jishu.svg);"></div>

      <JHButton type="small" @click="router.push('/department/jishu')">技术版块</JHButton>
    </div>
    <div class="item">
      <div class="img" style="background-image: url(/photo/svg/yunying.svg);"></div>

      <JHButton type="small" @click="router.push('/department/yunying')">运营版块</JHButton>
    </div>
    <div class="item">
      <div class="img" style="background-image: url(/photo/svg/sheji.svg);"></div>

      <JHButton type="small" @click="router.push('/department/sheji')">设计版块</JHButton>
    </div>
    <div class="item">
      <div class="img" style="background-image: url(/photo/svg/xinmeiti.svg);"></div>

      <JHButton type="small" @click="router.push('/department/xinmeiti')">新媒体版块</JHButton>
    </div>
    <div class="item">
      <div class="img" style="background-image: url(/photo/svg/yiban.svg);"></div>

      <JHButton type="small" @click="router.push('/department/yiban')">易班文化工作站</JHButton>
    </div>
  </div>
  <Footer />
</template>