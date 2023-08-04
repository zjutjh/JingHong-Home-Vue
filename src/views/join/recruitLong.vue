<script setup lang="ts">
import { useRouter } from "vue-router";
import Footer from "../../components/Footer.vue";
import JHLabel from "../../components/JHLabel.vue";
import JHCard from "../../components/JHCard.vue";
import JHButton from "../../components/JHButton.vue";
import { usePageStore } from "../../stores/pages";
const router = useRouter();
const pageStore = usePageStore();
function developClicked() {
  router.push("/join/develop");
}
function returnClicked() {
  router.push("/join");
}
</script>
<template>
  <div style="height: 20vh"></div>
  <JHLabel type="big">长期招新</JHLabel>
  <JHCard title="技术部" type="large" :is-title="true">
    <div class="base" :class="pageStore.pageType">
      <div class="content">
        招新范围：浙工大全体学院、全体年级的学生
        <br />
        <br />
        能力要求： <br />
        >1)能够独立开发api或使用前端框架 <br />
        >2)能够独立撰写说明文档 <br />
        >3)能够使用git进行团队协作交互
      </div>
      <img
        src="https://download.tooc.xlj0.com/uploads/22/jhhome/public/photo/index/jingxiaohong.png"
        class="img"
        v-if="pageStore.pageType == 'normal'"
      />
      <JHButton type="small" @click="developClicked">报名</JHButton>
    </div>
  </JHCard>
  <div style="height: 20px"></div>
  <JHButton type="small" @click="returnClicked">返回</JHButton>
  <div style="height: 30vh"></div>
  <Footer />
</template>

<style scoped lang="scss">
.base {
  &.normal {
    display: grid;
    grid-template-areas:
      "a b"
      "a c";
    grid-template-columns: 70% 30%;
    grid-template-rows: 1fr 50px;
    grid-row-gap: 20px;
    justify-items: center;
  }
  &.mini,
  &.middle {
    display: flex;
    flex-direction: column;
  }
  .content {
    grid-area: a;
    padding: 20px;
    text-align: left;
  }

  .img {
    grid-area: b;
    width: 200px;
    object-fit: cover;
  }
}
</style>
