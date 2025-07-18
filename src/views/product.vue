<script lang="ts" setup>
import { usePageStore } from "../stores/pages";
import JHLabel from "../components/JHLabel.vue";
import JHCard from "../components/JHCard.vue";
import Footer from "../components/Footer.vue";
import JHButton from "../components/JHButton.vue";
import { ref } from "vue";
import { useRouter } from "vue-router";
import PageTop from "../components/PageTop.vue";
const router = useRouter();
const pageStore = usePageStore();
const isWechat = ref<boolean>(false);
const isWejh = ref<boolean>(false);
const isVisual = ref<boolean>(false);
const isEmail = ref<boolean>(false);
function toDepartment() {
  router.push("/department");
}
</script>

<style scoped>
.base.normal {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-column-gap: 10%;
  width: 80%;
  margin: auto;
}

.base.middle {
  display: grid;
  grid-template-rows: repeat(4, 1fr);
  grid-gap: 20px;
  width: 80%;
  margin: auto;
}

.base.mini {
  display: grid;
  grid-template-rows: repeat(4, 1fr);
  grid-gap: 20px;
  width: 95%;
  margin: auto;
}

.wechat {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  align-items: center;
  justify-items: center;
}

.introduction {
  grid-column-start: 1;
  grid-column-end: 3;
  font-size: 24px;
  text-indent: 2em;
  text-align: start;
}

.wechat img {
  width: 100px;
}

#email-img {
  margin-top: 20px;
  width: 50%;
}

.product-item {
  display: grid;
  grid-template-columns: 40% 1fr;
  padding-bottom: 20px;
  border-bottom: 5px solid rgb(239, 239, 239);
}

.product-item img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 2px;
  box-shadow: 0 1px 5px #999;
}

.detail {
  position: fixed;
  left: 0rem;
  bottom: 0;
  width: 100%;
  height: 70vh;
  background: white;
  border-radius: 15px;
  z-index: 1;
}

.detail .title {
  font-size: 24px;
  padding-bottom: 30px;
  border-bottom: 5px solid #d20001;
  width: 80%;
  margin: auto;
  display: flex;
  flex-direction: column;
}

.detail .title .icon {
  position: relative;
  top: 10px;
  margin: auto;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 2px;
  box-shadow: 0 1px 5px #999;
}

.detail .content {
  text-align: start;
  width: 80%;
  margin: auto;
  font-size: 20px;
  margin-top: 20px;
}

.detail img {
  position: absolute;
  bottom: 20px;
  width: 50px;
}

.retbtn{
  transform: translateX(-50%);
}

.shadow {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
}
</style>

<template>
  <PageTop />
  <JHLabel type="title" v-if="pageStore.pageType == 'mini' || pageStore.pageType == 'middle'">我们的产品</JHLabel>
  <div class="shadow" v-if="isWejh || isWechat || isVisual || isEmail"></div>
  <div class="base" :class="pageStore.pageType" v-if="pageStore.pageType == 'normal'">
    <JHCard type="large" :is-title="true" title="微信公众号">
      <div class="wechat">
        <div class="introduction">
          浙江工业大学精弘网络微信公众号,提供结合精弘网络产品的实用功能,推出微精弘板块等系列服务,是工大学子学习生活的好帮手。
        </div>
        <div>
          <img src="https://img.lonesome.cn/jhwl/home/photo/product/11.webp" />
          <h3>浙江工业大学精弘网络</h3>
        </div>
        <div>
          <img src="https://qiuniu.phlin.cn/bucket/20250714225620675.webp" />
          <h3>浙工大微学工</h3>
        </div>
      </div>
    </JHCard>
    <JHCard type="large" :is-title="true" title="微精弘">
      <div class="wejh">
        <div class="introduction">
          微精弘是专属于zjuter的微信小程序,集课表、成绩查询、考试安排、空教室查询、一卡通、借阅等功能于一身，是工大学子必不可少的一体化校园移动门户。
        </div>
        <div>
          <img src="https://img.lonesome.cn/jhwl/home/photo/product/1.webp" />
          <h3>微精弘小程序</h3>
        </div>
      </div>
    </JHCard>
    <JHCard type="large" :is-title="true" title="视觉影像">
      <div class="visual">
        <div class="introduction">
          校园学习生活、学校各类大型活动的记录团队，专注于摄影、视频前期拍摄和后期剪辑,致力于用最优秀的制作呈现最美的工大人、工大景。视觉影像像期待用最用心的摄制给你带来最高级的视听盛宴!
          <br />欢迎关注!
          <br />哔哩哔哩: 浙工大精弘网络 <br />微信视频号: 精小弘在线
        </div>
        <img src="https://img.lonesome.cn/jhwl/home/photo/product/13.webp" />
      </div>
    </JHCard>
    <JHCard type="large" :is-title="true" title="学生邮箱">
      <div class="email">
        <div class="introduction">
          学校为每一位学生提供邮箱,由精弘网络提供运营服务,是你参与学校工作、学习、生活等各类活动的官方邮箱,伴随你的大学四年乃至一生,毕业后仍可享受校方的服务。
        </div>
        <img id="email-img" src="https://img.lonesome.cn/jhwl/home/photo/product/4.webp" />
        <h3>邮箱网址：mail.zjut.edu.cn</h3>
      </div>
    </JHCard>
  </div>
  <div v-if="pageStore.pageType == 'middle' || pageStore.pageType == 'mini'">
    <JHCard type="large" :is-title="false" title="no">
      <div class="base" :class="pageStore.pageType">
        <div class="product-item">
          <img src="https://img.lonesome.cn/jhwl/home/photo/product/1.webp" />
          <JHButton type="middle" @click="isWejh = true">微信小程序</JHButton>
        </div>
        <div class="product-item">
          <img src="https://img.lonesome.cn/jhwl/home/photo/product/2.webp" />
          <JHButton type="middle" @click="isWechat = true">微信服务号</JHButton>
        </div>
        <div class="product-item">
          <img src="https://img.lonesome.cn/jhwl/home/photo/product/3.webp" />
          <JHButton type="middle" @click="isVisual = true">视觉影像</JHButton>
        </div>
        <div class="product-item">
          <img src="https://img.lonesome.cn/jhwl/home/photo/product/4.webp" />
          <JHButton type="middle" @click="isEmail = true">学生邮箱</JHButton>
        </div>
      </div>
    </JHCard>
    <div class="detail" v-if="isWejh">
      <div class="title">
        微精弘
        <img class="icon" src="https://img.lonesome.cn/jhwl/home/photo/product/1.webp" />
      </div>

      <div class="content">
        微精弘是专属于zjuter的微信小程序，集课表、成绩查询、考试安排、空教室查询、一卡通、借阅等功能于一身，是工大学子必不可少的一体化校园移动门户。
      </div>
      <img src="https://img.lonesome.cn/jhwl/home/photo/svg/return.svg" @click="isWejh = false" class="retbtn"/>
    </div>
    <div class="detail" v-if="isWechat">
      <div class="title">
        微信公众号
        <img class="icon" src="https://img.lonesome.cn/jhwl/home/photo/product/2.webp" />
      </div>

      <div class="content">
        浙江工业大学精弘网络微信公众号,提供结合精弘网络产品的实用功能,推出微精弘板块等系列服务,是工大学子学习生活的好帮手。
      </div>
      <img src="https://img.lonesome.cn/jhwl/home/photo/svg/return.svg" @click="isWechat = false" class="retbtn"/>
    </div>
    <div class="detail" v-if="isVisual">
      <div class="title">
        视觉影像
        <img class="icon" src="https://img.lonesome.cn/jhwl/home/photo/product/3.webp" />
      </div>
      <div class="content" style="font-size: 18px;">
        校园学习生活、学校各类大型活动的记录团队，专注于摄影、视频前期拍摄和后期剪辑,致力于用最优秀的制作呈现最美的工大人、工大景。视觉影像像期待用最用心的摄制给你带来最高级的视听盛宴!
        欢迎关注!<br /><center>b站:浙工大精弘网络</center><center>微信视频号:精小弘在线</center>
      </div>
      <img src="https://img.lonesome.cn/jhwl/home/photo/svg/return.svg" @click="isVisual = false" class="retbtn"/>
    </div>
    <div class="detail" v-if="isEmail">
      <div class="title">
        学生邮箱
        <img class="icon" src="https://img.lonesome.cn/jhwl/home/photo/product/4.webp" />
      </div>
      <div class="content">
        学校为每一位学生提供邮箱,由精弘网络提供运营服务,是你参与学校工作、学习、生活等各类活动的官方邮箱,伴随你的大学四年乃至一生,毕业后仍可享受校方的服务。
      </div>
      <img src="https://img.lonesome.cn/jhwl/home/photo/svg/return.svg" @click="isEmail = false" class="retbtn"/>
    </div>
  </div>
  <div style="height: 100px"></div>
  <JHButton type="middle" @click="toDepartment">
    我们的部门
    <img src="https://img.lonesome.cn/jhwl/home/photo/svg/rightArrow.svg" style="width: 20px; margin-left: 20px" />
  </JHButton>
  <Footer />
</template>
