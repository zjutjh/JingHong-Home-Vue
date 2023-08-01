<script setup lang="ts">
import JHLabel from "./JHLabel.vue";
import { usePageStore } from "../stores/pages";
import { ref } from "vue";
const pageStore = usePageStore();
const Events = [
  ["2002年5月", "精弘网络成立", "https://download.tooc.xlj0.com/uploads/22/jhhome/public/photo/index/story1.png", "精弘网络"],
  [
    "2003年5月",
    "推出精弘论坛\nbbs.zjut.com",
    "https://download.tooc.xlj0.com/uploads/22/jhhome/public/photo/index/story2.png",
    "精弘论坛",
  ],
  [
    "2004年10月",
    "Feel电台创立\n radio.zjut.com",
    "https://download.tooc.xlj0.com/uploads/22/jhhome/public/photo/index/story3.png",
    "Feel电台",
  ],
  [
    "2005年5月",
    "推出第一版学生邮箱\n mail.zjut.com",
    "https://download.tooc.xlj0.com/uploads/22/jhhome/public/photo/index/story4.png",
    "学生邮箱",
  ],
  ["2012年3月", "第一届精弘毅行", "https://download.tooc.xlj0.com/uploads/22/jhhome/public/photo/index/story5.jpg", "精弘毅行"],
  [
    "2012年12月",
    '荣获第五届"全国高校百佳网站"的荣誉称号',
    "https://download.tooc.xlj0.com/uploads/22/jhhome/public/photo/index/story6.png",
    "百佳网站",
  ],
  [
    "2015年12月",
    '承办浙江工业大学首届"网络安全宣传月"活动',
    "https://download.tooc.xlj0.com/uploads/22/jhhome/public/photo/index/story7.jpg",
    "网络安全宣传",
  ],
  [
    "2016年8月",
    '精弘网络微信服务号"获全国高校东部地区榜亚军"',
    "https://download.tooc.xlj0.com/uploads/22/jhhome/public/photo/index/story8.jpg",
    "微信服务号",
  ],
  ["2017年2月", "微精弘改版正式上线", "https://download.tooc.xlj0.com/uploads/22/jhhome/public/photo/index/story9.png", "微精弘"],
  ["2020年2月", "第十三届精弘毅行", "https://download.tooc.xlj0.com/uploads/22/jhhome/public/photo/index/story5.jpg", "精弘毅行"],
  ["2022年8月", "微精弘2.0发布", "https://download.tooc.xlj0.com/uploads/22/jhhome/public/photo/index/story9.png", "微精弘"],
  ["2023年4月", "面向校组织合作，助力数字化转型", "https://download.tooc.xlj0.com/uploads/22/jhhome/public/photo/index/story10.jpg", "“For You”工程"]
];
const eventNow = ref<number>(0);
</script>
<template>
  <JHLabel type="title" v-if="pageStore.pageType == 'normal'"
    >精弘大事记</JHLabel
  >
  <div class="base-pc" v-if="pageStore.pageType == 'normal'">
    <div class="history-left">
      <img :src="Events[eventNow][2]" border="10" />
      <div class="event-name">{{ Events[eventNow][3] }}</div>
    </div>
    <div class="history-right" :class="pageStore.pageType">
      <div class="time">{{ Events[eventNow][0] }}</div>
      <div class="content">{{ Events[eventNow][1] }}</div>
      <img src="https://download.tooc.xlj0.com/uploads/22/jhhome/public/photo/index/jingxiaohong.png" border="2" />
    </div>
  </div>
  <div class="history-choice">
    <div class="red-line"></div>
    <div
      class="item"
      v-for="(item, index) in Events"
      :class="{ select: eventNow == index }"
      v-bind:style="{ 'background-image': 'url(' + item[2] + ')' }"
      @click="eventNow = index"
    ></div>
  </div>
</template>
<style scoped>
.base-pc {
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-inline: 10vw;
  border-radius: 15px;
  box-shadow: 0 5px 10px #999999;
}

.history-left {
  background-color: #e25f54;
  height: 300px;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
}

.history-left img {
  height: 150px;
  width: 150px;
  border: 1;
  border-color: white;
  border-radius: 50%;
  background-color: white;
}

.history-right {
  background-color: white;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
  align-items: start;
  padding: 30px;
  display: block;
  white-space: pre-wrap;
  float: right;
  position: relative;
}

.history-right.normal::before {
  content: "";
  position: absolute;
  right: 4%;
  top: 4%;
  width: 40%;
  height: 30%;
  border-right: black solid 3px;
  border-top: black solid 3px;
}

.history-right.normal::after {
  content: "";
  position: absolute;
  left: 4%;
  bottom: 4%;
  width: 40%;
  height: 30%;
  border-left: black solid 3px;
  border-bottom: black solid 3px;
}

.event-name {
  color: white;
  font-size: 20px;
  margin: 10px;
}

.time {
  font-size: xx-large;
  justify-content: center;
  text-align: left;
  padding-inline: 10px;
  border-bottom: black solid 3px;
  width: fit-content;
}

.content {
  text-align: left;
  font-size: x-large;
  width: 40%;
}

.history-right img {
  position: absolute;
  width: 250px;
  height: 250px;
  border-color: #efefef;
  background-color: #efefef;
  border-radius: 50%;
  transform: rotate(-15deg);
  top: 30px;
  bottom: 0;
}

.history-choice {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
}

.history-choice .item {
  width: 70px;
  height: 70px;
  background-size: cover;
  background-color: #fff;
  border-radius: 50%;
  border: 0.4rem solid #d20001;
  user-select: none;
  box-shadow: 0 5px 10px #999;
  cursor: pointer;
  margin: 20px;
  align-items: center;
  justify-content: center;
  z-index: 2;
}

.history-choice img {
  width: 80%;
}

.history-choice .item.select {
  width: 120px;
  height: 120px;
}

.red-line {
  position: absolute;
  width: 1400px;
  height: 0.7rem;
  background-color: #d20001;
  z-index: 1;
}
</style>
