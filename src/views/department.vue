<script lang="ts" setup>
import JHLabel from "../components/JHLabel.vue";
import { usePageStore } from "../stores/pages";
import JHCard from "../components/JHCard.vue";
import JHButton from "../components/JHButton.vue";
import Footer from "../components/Footer.vue";
import { useRouter } from "vue-router";
import PageTop from "../components/PageTop.vue";
const pageStore = usePageStore();
const router = useRouter();
</script>
<style scoped lang="scss">
.base {
  display: grid;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  width: 80%;
  margin: auto;
  margin-top: 20px;
  #img3 {
    background-size: 65%;
  }
  #img4 {
    background-size: 65%;
  }
  #img5 {
    background-size: 90%;
  }
}
.base.normal {
  grid-template-rows: 1fr 1fr;
  .line1 {
    width: 80%;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
  .line2 {
    width: 80%;
    margin: auto;
    margin-top: 2%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
}

.base.mini .item {
  display: grid;
  grid-template-columns: 40% 60%;
  align-items: center;
}

.base.mini .item .img {
  width: 100px;
  height: 100px;
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
.base.middle,
.base.mini {
  .line1 {
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    grid-row-gap: 20px;
  }
  .line2 {
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    grid-row-gap: 20px;
  }
}

.base.mini .button {
  min-width: 80%;
}
</style>
<template>
  <PageTop />
  <JHLabel type="title" v-if="pageStore.pageType == 'mini' || pageStore.pageType == 'middle'">我们的部门</JHLabel>
  <JHCard title="部门结构" type="large" :is-title="true">
    <img src="https://img.lonesome.cn/jhwl/home/photo/haibao/structPc.webp" style="width: 70%" v-if="pageStore.pageType == 'normal'" />
    <img src="https://img.lonesome.cn/jhwl/home/photo/haibao/structMob.webp" style="width: 70%" v-if="pageStore.pageType != 'normal'" />
  </JHCard>
  <div v-show="pageStore.pageType == 'normal'" style="height: 100px"></div>
  <div class="base" :class="pageStore.pageType">
    <div class="line1">
      <div class="item">
        <div
          class="img"
          style="background-image: url(https://img.lonesome.cn/jhwl/home/photo/svg/ganshi.svg)"
          id="img1"
        ></div>
        <JHButton
          type="small"
          @click="router.push('/department/ganshi')"
          class="button"
          >干事培训中心</JHButton
        >
      </div>
      <div class="item">
        <div
          class="img"
          style="background-image: url(https://img.lonesome.cn/jhwl/home/photo/svg/jishu.svg)"
          id="img2"
        ></div>

        <JHButton
          type="small"
          @click="router.push('/department/jishu')"
          class="button"
          >技术研发中心</JHButton
        >
      </div>
    </div>
    <div class="line2">
      <div class="item">
        <div
          class="img"
          style="background-image: url(https://img.lonesome.cn/jhwl/home/photo/svg/sheji.svg)"
          id="img3"
        ></div>

        <JHButton
          type="small"
          @click="router.push('/department/sheji')"
          class="button"
          >设计服务中心</JHButton
        >
      </div>
      <div class="item">
        <div
          class="img"
          style="background-image: url(https://img.lonesome.cn/jhwl/home/photo/svg/xinmeiti.svg)"
          id="img4"
        ></div>

        <JHButton
          type="small"
          @click="router.push('/department/xinmeiti')"
          class="button"
          >新媒体中心</JHButton
        >
      </div>
<!--      <div class="item">-->
<!--        <div-->
<!--          class="img"-->
<!--          style="background-image: url(https://img.lonesome.cn/jhwl/home/photo/svg/yiban.svg)"-->
<!--          id="img5"-->
<!--        ></div>-->
<!--        <JHButton-->
<!--          type="small"-->
<!--          @click="router.push('/department/yiban')"-->
<!--          class="button"-->
<!--          >易班文化工作站</JHButton-->
<!--        >-->
<!--      </div>-->
    </div>
  </div>
  <div style="height: 100px"></div>
  <JHButton type="middle" @click="router.push('/activity')">
    我们的活动
    <img
      src="https://img.lonesome.cn/jhwl/home/photo/svg/rightArrow.svg"
      style="width: 20px; margin-left: 20px"
    />
  </JHButton>
  <Footer />
</template>
