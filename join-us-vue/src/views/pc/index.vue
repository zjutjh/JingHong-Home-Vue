<script setup lang="ts">
import { usePageStore } from '../../stores/pages';
// import NavBar from '../../components/pc/NavBar.vue';
import Start from '../../components/pc/Start.vue';
import Footer from '../../components/pc/Footer.vue';
import JHLabel from '../../components/pc/JHLabel.vue';
import { onMounted, ref } from 'vue';
const pageStore = usePageStore();
const loading_width = ref(0);

onMounted(
  () => {
    pageStore.pageNow = 0;
    let timer = window.setInterval(() => {
      if (loading_width.value >= 0) {
        loading_width.value = -100;
      } else {
        loading_width.value += 0.2;
      }
    }, 10);
  }

)
const now = ref(0);
const sites = [
  { img: "/photo/index/story1.png", name: "精弘网络", content: ["2002年5月", "精弘网络成立"] },
  {
    img: "/photo/index/story2.png",
    name: "精弘论坛",
    content: ["2003年5月", "推出精弘论坛\nbbs.zjut.com"]
  },
  {
    img: "/photo/index/story3.png",
    name: "Feel电台",
    content: ["2004年10月", "Feel电台创立\nradio.zjut.com"],
  },
  {
    img: "/photo/index/story4.png",
    name: "学术邮箱",
    content: ["2005年5月", "推出第一版学生邮箱\nmail.zjut.com"],
  },
  { img: "/photo/index/story5.jpg", name: "精弘毅行", content: ["2012年3月", "第一届精弘毅行"] },
  {
    img: "/photo/index/story6.png",
    name: "百佳网站",
    content: ['2012年12月', '荣获第五届"全国高校\n百佳网站"的荣誉称号'],
  },
  {
    img: "/photo/index/story7.jpg",
    name: "网络安全宣传",
    content: ['2015年12月', '承办浙江工业大学首届\n"网络安全宣传月"活动'],
  },
  {
    img: "/photo/index/story8.jpg",
    name: "微信服务号",
    content: ['2016年8月', '精弘网络微信服务号\n"获全国高校东部地区榜亚军"'],
  },
  { img: "/photo/index/story9.png", name: "微精弘", content: ["2017年2月", "微精弘改版正式上线"] },
  { img: "/photo/index/story5.jpg", name: "精弘毅行", content: ["2020年", "第十三届精弘毅行"] },
];
</script>

<template>
  <Start />

  <div class="introduce">
    <img class="introduce-img2" src="/photo/index/taiquandao.png" />
    <div class="introduce-content">
      <div class="title">
        <span>精弘网络⼁Jinghong Union</span>
      </div>
      <div class="content">
        成立于2002年5月，
        <br />精弘的名字取自工大学风“取精用弘”，
        <br />是浙江工业大学的学术网络组织。
        <br />精弘网络秉承着自由、共享、团结、创新的精神，
        <br />全心全意为在校师生提供优质的服务
        <br />和交流平台，收到了广泛好评。
        <br />
      </div>
    </div>
    <img class="introduce-img1" src="/photo/index/muqiu.png" />
  </div>

  <div>
    <div class="history">
      <JHLabel type="title">精弘大事记</JHLabel>
      <div class="qufudong">
        <div class="history-left">
          <div
            class="history-img"
            v-bind:style="{ 'background-image': 'url(' + sites[now].img + ')' }"
          ></div>
          <div class="history-img-name">{{ sites[now].name }}</div>
        </div>
        <div class="history-right">
          <div class="time">{{ sites[now].content[0] }}</div>
          <div class="event">{{ sites[now].content[1] }}</div>
          <div class="history-right-img"></div>
        </div>
      </div>
      <div class="history-choice">
        <div class="red-line"></div>
        <div class="choices" v-for="(site, index) in sites" v-on:click="now = index">
          <div
            :class="index == now ? 'big-ball' : 'ball'"
            v-bind:style="{ 'background-image': 'url(' + site.img + ')', 'border-color': (index % 2 == 1 ? '#D20001' : '#fab3b3') }"
          ></div>
        </div>
      </div>
    </div>
  </div>

  <div class="story">
    <!-- <div class="img"></div> -->
    <img src="/photo/index/story.jpg" class="img" />

    <div class="content">
      <router-link to="/story">
        <div class="story-title">
          <div>我们的故事</div>
          <div class="right-arrow"></div>
        </div>
      </router-link>
      <div class="story-content">因梦想，我们齐聚一堂；因使命，我们同舟共济。</div>
    </div>
  </div>

  <div class="end">
    <div class="end-1">
      <a>
        <div class="follow-img1"></div>
      </a>
      <div class>
        <div class="title-font1">联系我们 | 关注我们</div>
        <div class="title-font2">jhwl@zjut.edu.cn</div>
      </div>
      <a href="https://github.com/zjutjh" target="_blank">
        <div class="follow-img2"></div>
      </a>
    </div>

    <div class="end-iron" id="end-iron"></div>

    <div class="end-recruit">
      <div class="title-font">精弘招聘</div>
      <router-link to="/join">
        <div class="recruit-button">加入我们</div>
      </router-link>
    </div>

    <div class="loading">
      <div class="loading-text">
        <img src="/photo/index/2021.png" />
      </div>
      <div class="loading-border">
        <div id="loading-img" class="loading-img" :style="{ left: loading_width + '%' }"></div>
      </div>
      <div class="loading-text">
        <img src="/photo/index/loading.png" />
      </div>
    </div>
  </div>
  <Footer />
</template>

<style scoped>
@font-face {
  font-family: "song";
  src: url("/font/逐浪雅宋体.ttf");
}
@font-face {
  font-family: "SC-VF";
  src: url("/font/SourceHanSansSC-VF.otf");
}

.red-line {
  position: absolute;
  width: 90%;
  height: 0.7rem;
  background-color: #d20001;
  z-index: 1; /*置于下方*/
}
* {
  text-align: center;
  /* border-radius: 1rem; */
  font-family: "SC-VF";
}
a {
  text-decoration: none;
  color: black;
}
body {
  margin: 0;
  background-color: #efefef;
}
.introduce-content .title {
  border-radius: 1rem;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

.introduce {
  margin: 35px 0;
  padding: 20px 60px;
  /* height: 60vh; */
  display: flex;
  position: relative;
  overflow: hidden;
}
.introduce-img1 {
  margin-top: 2%;
  height: 45vh;
  position: absolute;
  right: -80px;
}
.introduce-img2 {
  margin-top: 2%;
  height: 45vh;
  position: absolute;
  left: -80px;
}
.introduce-content {
  margin: 0 auto;
  width: 80%;
}
.introduce .title {
  height: 25%;
  margin: 0;
  padding: 0 10%;
  background-color: #d6d6d6;
  font-size: 50px;
  text-align: left;
  display: flex;
  align-items: center;
}
.introduce .content {
  height: 75%;
  padding: 5px 5px 5px 13%;
  text-align: left;
  font-size: 35px;
  line-height: 50px;
  background-color: white;
  display: flex;
  align-items: center;
  /* white-space:pre-wrap; */
  box-shadow: 0 5px 10px #999999;
}
.introduce p {
  text-align: left;
}

.history {
  margin: 2rem 7%;
  width: 86%;
  height: 95vh;
  /* background-color: aqua; */
}
.title-style {
  width: 20%;
  font-size: 10rpx;
  padding: 1% 0;
  margin: 0 0 3%;
  background-color: #d20001;
  color: white;
  box-shadow: 0 5px 10px #999999;
}
.qufudong {
  width: auto;
  height: 50%;
}
.qufudong::after {
  content: "";
  visibility: hidden;
  height: 0;
  display: block;
  clear: both;
}
.history-left {
  width: 46%;
  height: 100%;
  float: left;
  padding: 2%;
  background-color: #e25f54;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 5px 10px #999999;
}
.history-img {
  height: 200px;
  width: 200px;
  border: 10px white solid;
  border-radius: 50%;
  background-size: cover;
  background-color: white;
  float: left;
}
.history-img-name {
  font-size: 30px;
  color: white;
  margin-top: 30px;
  width: 200px;
  height: 50px;
}
.history-right {
  width: 46%;
  height: 100%;
  float: right;
  padding: 2%;
  background-color: white;
  white-space: pre-wrap;
  position: relative;
  box-shadow: 0 5px 10px #999999;
}
.history-right::after {
  content: "";
  position: absolute;
  left: 4%;
  bottom: 4%;
  width: 40%;
  height: 30%;
  border-left: black solid 3px;
  border-bottom: black solid 3px;
}
.history-right::before {
  content: "";
  position: absolute;
  right: 4%;
  top: 4%;
  width: 40%;
  height: 30%;
  border-right: black solid 3px;
  border-top: black solid 3px;
}
.history-right .time {
  width: 18vw;
  font-size: 3vw;
  font-weight: bolder;
  padding: 20px 0;
  border-bottom: black solid 5px;
  /* margin: 0 20px 0 15px; */
  border-radius: 0;
}
.history-right .event {
  width: 17vw;
  font-size: 1.7rem;
  line-height: 3vw;
  text-align: left;
  margin: 0 0 0 1vw;
}
.history-right-img {
  width: 20vw;
  height: 20vw;
  background-image: url(/photo/index/jingxiaohong.png);
  background-color: #efefef;
  background-size: cover;
  transform: rotate(-15deg);
  border-radius: 50%;
  margin: auto;
  position: absolute;
  right: 2vw;
  top: 0;
  bottom: 0;
}
.history-content p {
  text-align: left;
}
.history-content:first-line /* 伪元素，首行加粗 */ {
  color: #d20001;
  font-variant: small-caps;
}
.history-choice {
  position: relative;
  width: 100%;
  height: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.choices {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
}
.ball {
  width: 4vw;
  height: 4vw;
  background-size: cover;
  background-color: white;
  border-radius: 50%;
  border: 0.4rem solid #d20001;
  user-select: none; /*文字无法选中*/
  box-shadow: 0 5px 10px #999999;
  cursor: pointer;
}
.big-ball {
  width: 6vw;
  height: 6vw;
  background-size: cover;
  background-color: white;
  border-radius: 50%;
  border: 0.4rem solid #d20001;
  user-select: none; /*文字无法选中*/
  box-shadow: 0 2px 10px #999999;
  cursor: pointer;
}

.story {
  width: 70%;
  height: 100vh;
  margin: auto;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 1rem;
  box-shadow: 0 2px 20px #999999;
}

.story .img {
  /* padding: 2vw; */
  height: 60vh;
  border-radius: 1rem;
}
.story .content {
  width: 70%;
  height: 20%;
  /* background-color: white; */
}
.story-title {
  width: 100%;
  height: 50%;
  font-size: 3vw;
}
.story-title::after {
  display: block;
  content: "";
  width: 50%;
  margin: auto;
  padding-bottom: 10px;
  border-bottom: 5px solid #efefef;
}
.story-title div {
  display: inline-block;
}
.right-arrow {
  width: 2vw;
  height: 2vw;
  /* background-color: aqua; */
  background-image: url(/photo/svg/正三角形2.svg);
  transform: rotate(90deg);
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
}
.story-content {
  width: 100%;
  height: 50%;
  font-size: 2vw;
}

.end {
  margin-top: 2rem;
  margin-left: 5%;
  width: 90%;
  height: 20vh;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  border-radius: 1rem;
}

.end-1 {
  border-radius: 1rem;
  width: 44%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: white;
  box-shadow: 0 5px 10px #999999;
}
.title-font1 {
  margin-bottom: 1rem;
  height: auto;
  font-size: 35px;
  font-weight: bold;
  border-radius: 0;
  white-space: pre-wrap;
}
.title-font2 {
  font-size: 20px;
}
.follow-img1 {
  background-image: url(/photo/svg/微信.svg);
  background-size: cover;
  height: 6vw;
  width: 6vw;
  border-radius: 6rem;
}
.follow-img2 {
  background-image: url(/photo/svg/LogoGitHub.svg);
  background-size: cover;
  height: 6vw;
  width: 6vw;
  border-radius: 6rem;
}

.end-iron {
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
  border: 10px solid white;
  background-image: url(/photo/index/story1.png);
  background-size: cover;
  background-color: white;
  box-shadow: 0 5px 10px #999999;
}

.end-recruit {
  border-radius: 1rem;
  height: 100%;
  width: 19%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-color: white;
  box-shadow: 0 5px 10px #999999;
}
.recruit-button {
  border-radius: 1rem;
  font-size: 20px;
  color: white;
  padding: 10px;
  margin: auto;
  width: 8rem;
  height: 20px;
  line-height: 20px;
  border-radius: 20px;
  background-color: #d20001;
}
.end-recruit .title-font {
  font-size: 35px;
  border-bottom: 2px solid black;
  padding-bottom: 10px;
  border-radius: 0;
}

.loading {
  border-radius: 1rem;
  width: 19%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-color: white;
  box-shadow: 0 5px 10px #999999;
}
.loading-text {
  height: 35%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.loading-text img {
  height: 70%;
}
.loading-border {
  height: 15%;
  width: 90%;
  border-radius: 100px;
  border: 5px solid #d20001;
  overflow: hidden;
}
.loading-img {
  position: relative;
  width: 100%;
  height: 100%;

  background-color: #d20001;
  border-radius: 100px;
}

.footer {
  margin-top: 2rem;
  width: 100%;
  font-size: xx-small;
  background-color: white;
  height: 2.2rem;
  line-height: 2rem;
  border-radius: 0;
  box-shadow: 0 -1px 20px #999999;
}
</style>