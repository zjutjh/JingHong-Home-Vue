<script setup lang="ts">
import { onBeforeUnmount, onMounted, reactive, ref } from 'vue';
import { usePageStore } from '../../stores/pages';
const store = usePageStore();
var timer1: number;
var timer2: number;

const yixing_imgs = [
  "/photo/yixing/1.jpg",
  "/photo/yixing/2.jpg",
  "/photo/yixing/3.jpg",
];
const yixing_classes = reactive([
  "left",
  "center",
  "right",
]);
const yuren_imgs = [
  "/photo/wangan/1.jpg",
  "/photo/wangan/2.jpg",
  "/photo/wangan/3.jpg",
  "/photo/wangan/4.jpg",
  "/photo/wangan/5.jpg",
];
const yuren_classes = reactive([
  "left",
  "center",
  "right",
  "after1",
  "after2",
]);
const shenghuo_seen = ref(true);
const shenghuo_selected = ref(0);
const jiyu_classes = reactive(["jiyuleft", "jiyucenter", "jiyuright", "jiyuafter"]);

const photos = [
  [170, 26, 164, 102, "/photo/story/shenghuo/1.jpg", 3],
  [306, 0, 280, 177, "/photo/story/shenghuo/2.jpg", 1],
  [601, 89, 111, 67, "/photo/story/shenghuo/3.jpg", 5],
  [25, 89, 252, 156, "/photo/story/shenghuo/4.jpg", 2],
  [241, 205, 134, 83, "/photo/story/shenghuo/5.jpg", 6],
  [444, 124, 186, 116, "/photo/story/shenghuo/6.jpg", 4],
  [537, 177, 204, 127, "/photo/story/shenghuo/7.jpg", 12],
  [0, 225, 200, 125, "/photo/story/shenghuo/8.jpg", 8],
  [95, 324, 189, 118, "/photo/story/shenghuo/9.jpg", 7],
  [306, 262, 283, 176, "/photo/story/shenghuo/10.jpg", 11],
  [256, 405, 164, 102, "/photo/story/shenghuo/11.jpg", 9],
  [507, 375, 159, 102, "/photo/story/shenghuo/12.jpg", 10],
];

const persons = [
  {
    n: 1,
    name: "小树",
    img: "/photo/story/jiyu/小树.jpg",
    introduction:
      "小树\n\n前精弘设计总监\n预计于2022年毕业于浙工大\n现就读于浙江工业大学",
    content:
      "大三的时候加入精弘，是我纠结了很久做的一个决定，现在想想倒觉得很庆幸。光是能够遇见你们，就已经很美好 了。\n       没有当客服的经验，从新生群同意每一个新生宝宝的入群验证到后来与他们的见面，对我来说都是新奇的体验。在很多新生的身上，我都能看到刚收到录取通知书时我的样子。不耐烦的回答一个个问题，也是希望她们能少走弯路。\n       深入接触后，发现精弘网络其实是一个很温暖的组织，可以说很多人都是“为爱发电”，有着很强的责任心。\n        希望大家在精弘的日子里可以收获到属于自己的美好。",
  },
  {
    n: 2,
    name: "小花仙",
    img: "/photo/story/jiyu/小花仙.jpg",
    introduction:
      "小花仙\n\n前精弘开发部副部\n2021年毕业于浙工大\n现工作于腾讯(深圳)IEG技术运营部",
    content:
      "在开发部，我认识了许多好朋友，和自己喜欢的男孩子在一起，并且找到了自己理想的工作。希望大家能记得自己进入精弘的初心，并且为之努力，每个人都有自己的理想，进入精弘可能是你实现理想中的某一个很小的步骤，但是也⼗分的重要，在精弘希望大家都可以好好提升自己，并且能够对精弘做出一些贡献~",
  },
  {
    n: 3,
    name: "大可爱",
    img: "/photo/story/jiyu/周依佳.jpg",
    introduction:
      "大可爱\n\n前精弘屏峰校区副会长兼常务总监\n2020年毕业于浙工大\n现就读于中国人民大学",
    content:
      "在精弘的两年半时光里，是我大学里最珍贵和幸福的回忆。在这里，我提升了各方面的能力，并收获了美好的友谊，真的很值得怀念。这里有温暖的人，温暖的事，希望大家都能在这里有所成长，有所收获，和精弘一起越来越好！",
  },
  {
    n: 4,
    name: "寒假",
    img: "/photo/product/3.jpg",
    introduction:
      "寒假\n\n2017届新媒体总监\n2019年毕业于浙工大\n现工作于华安证券",
    content:
      "转眼已经从精弘“毕业”好多年，从大一的办公室干事，到大二的活动部部长，再到大三的新媒体总监，在精弘，你会遇见一群最青春可爱的人，拥有最深刻独特的集体归属感，也会发掘自己无限的可能性。精弘大家庭欢迎你的到来！",
  },
];


function yixing_before() {
  clearInterval(timer1);
  let i = 0;
  timer1 = setInterval(() => {
    if (i > 0) {
      yixing_before();
    }
    i++;
  }, 1500);
  let last = yixing_classes.pop() as string;
  yixing_classes.unshift(last);
}

function yixing_after() {
  clearInterval(timer1);
  let i = 0;
  timer1 = setInterval(() => {
    if (i > 0) {
      yixing_before();
    }
    i++;
  }, 1500);

  let first = yixing_classes.shift() as string;
  yixing_classes.push(first);
}
function changePicture(e: MouseEvent) {
  if (((e.target as HTMLElement).parentNode as HTMLElement).classList.contains("left")) {
    yixing_after();
  } else if (((e.target as HTMLElement).parentNode as HTMLElement).classList.contains("right")) {
    yixing_before();
  } else {
    return false;
  }
}

function yuren_before() {
  clearInterval(timer2);
  let i = 0;
  timer2 = setInterval(() => {
    if (i > 0) {
      yuren_after();
    }
    i++;
  }, 1500);
  let last = yuren_classes.pop() as string;
  yuren_classes.unshift(last);
}

function yuren_after() {
  clearInterval(timer2);
  let i = 0;
  timer2 = setInterval(() => {
    if (i > 0) {
      yuren_before();
    }
    i++;
  }, 1500);
  let first = yuren_classes.shift() as string;
  yuren_classes.push(first);
}

function toggle_on(n: number) {
  // console.log("toggle_on");
  shenghuo_seen.value = true;
  shenghuo_selected.value = n;
}
function toggle_off() {
  // console.log("toggle_off");
  shenghuo_seen.value = false;
}
var index = 3;
function jiyu_before() {
  // console.log("jiyu_before");
  jiyu_classes[index] = "jiyubefore";
  let last = jiyu_classes.pop() as string;
  jiyu_classes.unshift(last);
  index = (index + 1) % 4;

  setTimeout(() => {
    let last = jiyu_classes.shift() as string;
    jiyu_classes.unshift(last);
    jiyu_classes[index] = "jiyuafteractive";
  }, 500);
}

function jiyu_after() {
  // console.log("jiyu_after");
  let last = jiyu_classes.shift() as string;
  jiyu_classes.unshift(last);
  jiyu_classes[index] = "jiyubeforeactive";
  setTimeout(() => {
    jiyu_classes[index] = "jiyuafter";
    let last = jiyu_classes.shift() as string;
    jiyu_classes.push(last);
    index = (index + 3) % 4;
  }, 10);
}




onMounted(() => {
  store.pageNow = 1;
  document.title = "我们的故事";
  timer1 = setInterval(() => {
    yixing_before();
  }, 3000);
  timer2 = setInterval(() => {
    yixing_before();
  }, 3000);
});
onBeforeUnmount(() => {
  clearInterval(timer1);
  clearInterval(timer2);
});
</script>
<template>
  <div id="body">
    <div class="title-style">
      <h1>我们的故事</h1>
    </div>

    <div class="shiming">
      <div class="title">我们的使命</div>
      <div class="img" style="background-image: url(/photo/index/shiming.png)"></div>
      <div class="Separator"></div>
      <div class="content">
        <div class="before">相关平台 | Related Platform</div>
        <span>精弘网络采用朝晖、屏峰、莫干山三个校区共同建制</span>
        <br />
        <span>目前运营和维护的平台包括但不仅限</span>
        <br />
        <span>浙江工业大学精弘网络微信服务号、</span>
        <br />
        <span>精小弘在线微信服务号、微精弘微信小程序、</span>
        <br />
        <span>浙工大易班官方机构号、知乎官方机构号、</span>
        <br />
        <span>邮件系统(https:/mai©.zjut.edu.cn/)、</span>
        <br />
        <span>工大云盘(http://pan.zjut.edu.cn/)、</span>
        <br />
        <span>精弘论坛、精弘直播、Feel电台等。</span>
        <br />
      </div>
    </div>

    <div class="yixing">
      <div class="title">精弘毅行</div>
      <div class="carousel" ref="carousel">
        <div class="whole">
          <div class="roll-img">
            <ul type>
              <li
                @click="changePicture($event)"
                v-for="(item, index) in yixing_imgs"
                :class="yixing_classes[index]"
              >
                <img :src="item" />
                <div></div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="content">
        <div>毅行，顾名思义，就是考验毅力的徒步活动。参与毅行活动并走完全程对很多人来讲都是一种挑战，但是有很多人也正是因为毅行的体验，才发觉自己也会有无限可能。</div>
        <div>"精弘毅行"全称为浙江工业大学精弘毅行，始于2012年，这次已是第⼗三届毅行活动。它是由浙江工业大学党委学工部指导下的A类社团精弘网络发起并和杭州北风户外俱乐部共同组织的一项师生远⾜活动，由北风户外俱乐部护航队全程保障，是一项考验耐力与毅力的户外运动。“精弘毅行"鼓励工大学子暂离网络，走出宿舍，以最原始的徒步行走的方式亲近自然，感受青春的活力和朝气。</div>
      </div>
    </div>

    <div class="yuren">
      <div class="title">网络育人</div>
      <div class="carousel2" ref="carousel">
        <div class="whole">
          <div class="roll-img">
            <ul type>
              <li v-for="(item, index) in yuren_imgs" :class="yuren_classes[index]">
                <img :src="item" />
                <div></div>
              </li>
            </ul>
          </div>

          <div class="yuren-left" @click="yuren_after"></div>
          <div class="yuren-right" @click="yuren_before"></div>
        </div>
        <div class="list">
          <span
            class="btn"
            v-for="(item, index) in yuren_classes"
            :key="index"
            :class="[item == 'center' ? 'active' : '']"
          ></span>
        </div>
      </div>
      <div class="Separator"></div>
      <div class="content">
        <span>
          为深入贯彻落实习近平总书记在全国网络
          安全和信息化工作会议上的重要讲话精神、增
          强广大师生安全意识和网络素质、营造安全健
          康文明的网络环境，积极响应国家网络安全的
          号召，结合我校实际情况，于全校开展“网络
          安全宣传教育月”系列活动。由浙江工业大学
          精弘网络参与承办，通过技术分享会、线下游
          园活动，人物访谈和拍摄防范网络诈骗微电影
          等方式达到宣传网络安全知识的目的。
        </span>
        <br />
      </div>
    </div>

    <div class="shenghuo">
      <div class="title">生活社交</div>
      <div class="shenghuo-content">
        <div
          class="shenghuo-img"
          v-for="photo, n in photos"
          :style="{
            zIndex: photo[5] as number,
            top: photo[1] + 'px',
            left: photo[0] + 'px',
            width: photo[2] + 'px',
            height: photo[3] + 'px',
            background: 'center/cover no-repeat url(' + photo[4] + ')'
          }"
          @click="toggle_on(n)"
        ></div>
      </div>
      <div class="toggle" v-if="shenghuo_seen" v-on:click="toggle_off">
        <div class="timg">
          <div
            :style="{ background: 'center/cover no-repeat url(' + photos[shenghuo_selected][4] + ')' }"
          ></div>
        </div>
      </div>
    </div>

    <div class="jiyu-out">
      <div style="width: 85%;position: relative;margin: 2rem auto;">
        <div class="title">前辈寄语</div>
      </div>
      <div class="jiyu">
        <div class="jiyu-content">
          <div
            class="person-card"
            v-for="(person, index) in persons.slice(0, 4)"
            :class="jiyu_classes[index]"
          >
            <div class="img" v-bind:style="{ 'background-image': 'url(' + person.img + ')' }"></div>
            <div class="introduction">{{ person.introduction }}</div>
            <div class="neirong">
              <span>{{ person.content }}</span>
            </div>
          </div>
        </div>
        <div></div>
      </div>
      <div class="jiyu-left" @click.native="jiyu_after"></div>
      <div class="jiyu-right" @click.native="jiyu_before"></div>
    </div>

    <div class="product">
      <router-link to="/product">
        <div class="product-button">
          我们的产品
          <img src="/photo/svg/右箭头.svg" style="float: right; transform: scale(0.5)" />
        </div>
      </router-link>
    </div>
    <div class="footer">©2021 浙江工业大学-精弘网络</div>
  </div>
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
* {
  text-align: center;
  border-radius: 1rem;
  font-family: "SC-VF";
}
a {
  text-decoration: none;
  color: black;
}

body {
  margin: 0;
}
#body {
  padding-top: 20vh;
  background-color: #efefef;
}
.Separator {
  position: relative;
  width: 0.8%;
  height: 60%;
  /* top: 1rem; */
  background-color: #d20001;
  margin: 0;
  border-radius: 0;
}

.title {
  width: 20%;
  height: 5rem;
  background-color: #d20001;
  color: white;
  position: absolute;
  top: 2rem;
  left: -2%;
  font-size: xx-large;
  font-weight: bolder;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0;
}
.img {
  background-size: cover;
  max-width: 100%;
  max-height: 100%;
  background-repeat: no-repeat;
}

.title-style {
  width: 20%;
  font-size: 10rpx;
  padding: 1% 0;
  margin: 0 7.5% 3%;
  background-color: #d20001;
  color: white;
  box-shadow: 0 5px 10px #999999;
}

.shiming {
  position: relative;
  width: 85%;
  height: 30vw;
  background-color: white;
  display: flex;
  align-items: center;
  margin: 2rem auto;
  box-shadow: 0 5px 10px #999999;
}
.shiming::after {
  content: "";
  visibility: hidden;
  height: 0;
  display: block;
  clear: both;
}
.shiming .img {
  position: absolute;
  left: 15%;
  margin: 0;
  width: 30%;
  height: 0;
  padding: 15% 0;
  background-size: contain;
  max-width: 100%;
  max-height: 100%;
  background-repeat: no-repeat;
  /* background-color: ; */
}
.shiming .before {
  width: 100%;
  margin-bottom: 15px;
  padding-bottom: 0.5rem;
  border-bottom: 0.2rem solid black;
  text-align: left;
  border-radius: 0;
  font-size: 2vw;
  font-weight: bolder;
}
.shiming .content {
  position: absolute;
  left: 53%;
  width: 35%;
  text-align: left;
}
.shiming .content span {
  margin-left: 10px;
  font-size: 1.2vw;
  line-height: 2vw;
}
.shiming .Separator {
  position: absolute;
  left: 50%;
}

.yixing {
  position: relative;
  width: 85%;
  padding-bottom: 15px;
  background-color: white;
  margin: 2rem auto;
  box-shadow: 0 5px 10px #999999;
}

.yixing .img {
  width: 60%;
  height: 100%;
  background-color: black;
}
.yixing .content {
  position: relative;
  /* text-indent: 2em; */
  /* top: 9rem; */
  width: 90%;
  text-align: left;
  margin: 1rem auto 3rem;
  /* white-space: pre-wrap; */
  font-size: 1.6vw;
  line-height: 2.5vw;
}
.yixing .content div {
  text-indent: 2em;
  text-align: left;
}

.yuren {
  position: relative;
  width: 85%;
  height: 80vh;
  background-color: white;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 2rem auto;
  box-shadow: 0 5px 10px #999999;
}
.yuren-right {
  width: 50px;
  height: 50px;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 90%;
  margin: auto;
  background: center/cover no-repeat url(/photo/svg/右箭头红.svg);
  cursor: pointer;
}
.yuren-left {
  width: 50px;
  height: 50px;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 90%;
  margin: auto;
  background: center/cover no-repeat url(/photo/svg/右箭头红.svg);
  cursor: pointer;
  transform: rotate(180deg);
}
.yuren li {
  cursor: default;
}
/* .yuren .img {
  position: absolute;
  left: 15%;
  margin: 0;
  width: 30%;
  height: 0;
  padding: 15% 0;
  background-color: black;
} */
.yuren .content {
  /* margin: 50px; */
  left: 52%;
  width: 40%;
  text-align: left;
  font-size: 1.6vw;
  line-height: 2.5vw;
  text-indent: 2em;
}

.shenghuo {
  position: relative;
  width: 85%;
  height: 120vh;
  background-color: white;
  display: flex;
  align-items: center;
  margin: 2rem auto;
  box-shadow: 0 5px 10px #999999;
}
.shenghuo-content {
  margin: auto;
  /* width: 60vw; */
  width: 741px;
  /* height: 41vw; */
  height: 507px;
  transform: scale(1.7, 1.7);
}
.shenghuo-img {
  position: absolute;
  background-size: 100% 100%;
  background-color: aqua;
  border: 1px solid white;
}
.shenghuo-img:hover {
  transform: scale(1.3, 1.3);
  /* box-shadow: 0 0 10px #0000ff; */
  /* cursor: pointer; */
  z-index: 15 !important;
}
/* 蒙版+放大 */
.toggle {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 20000;
}
.toggle .timg {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 48vw;
  height: 30vw;
  margin: auto;
  z-index: 1001;
}
.toggle .timg div {
  width: 100%;
  height: 100%;
}

.jiyu-out {
  position: relative;
  width: 100%;
  height: 65vw;
}
.jiyu {
  position: relative;
  width: 85%;
  height: 65vw;
  /* background-color: white; */
  /* display: flex; */
  /* align-items: center; */
  overflow: hidden;
  margin: 2rem auto 0;
}

.jiyu-content {
  position: relative;
  margin: auto;
  top: 8rem;
  width: 31%;
  height: 83%;
  overflow: visible;
}
.person-card {
  display: inline-block;
  width: 100%;
  height: 100%;
  background-color: white;
  overflow: hidden;
  box-shadow: 0 5px 10px #999999;
}
.jiyu .img {
  width: 100%;
  height: 15vw;
  transform: scale(1) !important;
  border-radius: 0;
}
.jiyu .introduction {
  width: 100%;
  /* height: 15%; */
  text-align: left;
  white-space: pre-line; /* 让\n有效 */
  border-radius: 0;
  margin: 20px;
  font-size: 1.5vw;
}
.jiyu .introduction::first-line {
  font-size: 40px;
  font-weight: border;
}
.jiyu .neirong {
  /* height: 45%; */
  font-size: 1vw;
  line-height: 1.7vw;
  text-align: left;
  white-space: pre-wrap;
  border-radius: 0;
  margin: 20px;
  text-indent: 2em;
  word-wrap: break-word;
  word-break: break-all;
  overflow: hidden;
}

.product {
  position: relative;
  margin: 1rem auto 3rem;
  width: 60%;
  height: 4vw;
  display: flex;
  align-items: center;
  justify-content: center;
}
.product-button {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  width: 25%;
  height: 4vw;
  background-color: #d20001;
  border-radius: 4vw;
  font-size: 1.8vw;
  color: white;
  line-height: 4vw;
  display: flex;
  justify-content: center;
  align-items: center;
}

.topshow {
  position: fixed;
  left: 0;
  top: 0rem;
  width: 100%;
  height: 16vh;
  /* background: white; */
  transition: top linear 0.3s;
  border-radius: 0;
  box-shadow: 0 5px 10px #999999;
  z-index: 9999;
}
.topshow img,
.tophide img {
  height: 100%;
  float: left;
  transform: scale(0.8);
}
.tophide {
  position: fixed;
  left: 0;
  top: -16vh;
  width: 100%;
  height: 16vh;
  /* background: white; */
  transition: top linear 0.3s;
  border-radius: 0;
  z-index: 9999;
}
#body img {
  float: left;
  height: 100%;
}
nav {
  width: 60%;
  height: 100%;
  float: right;
  display: flex;
}
.nav-list {
  margin-right: 30px;
  display: flex;
  align-items: center;
  width: 100%;
}
.nav-list div {
  width: 20%;
  /* height: 40%; */
  position: relative;
  border-radius: 8vh;
  font-size: 1.3vw;
  margin: 1rem;
  padding: 0.5rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
.page_unselected a {
  color: white;
  font-family: song;
}
.page_selected {
  background: white;
}
.page_selected a {
  color: #d20001;
  font-family: song;
}
.page_selected::after {
  display: block;
  content: "";
  width: 80%;
  position: absolute;
  bottom: -20px;
  border-bottom: 5px solid white;
}

.carousel {
  margin: 1.5rem auto;
  padding-top: 7rem;
  width: 100%;
  height: 20vw;
  border-radius: 0;
}
.carousel .whole {
  width: 40%;
  height: 100%;
  margin: 0 auto;
}
.roll-img {
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
}
.carousel2 {
  margin: 1.5rem;
  padding: 4rem 0;
  width: 30vw;
  height: 20vw;
  border-radius: 0;
  overflow: hidden;
}
.carousel2 .whole {
  width: 100%;
  height: 100%;
  margin: 0 auto;
  position: relative;
}
.carousel2 .left {
  left: -100%;
  transform: scale(1);
}
.carousel2 .right {
  left: 100%;
  transform: scale(1);
}

ul {
  margin: 0;
  list-style: none;
}
ul li {
  position: absolute;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.carousel img {
  width: 100%;
  height: 100%;
}
.carousel2 img {
  width: 100%;
  height: 100%;
}
.left {
  left: -60%;
  transform: scale(0.8);
  z-index: -1;
  /* background: rgb(0, 0, 0); */
  transition: all 0.5s ease;
}
.center {
  z-index: 1;
  left: 0;
  top: 0;
  bottom: 10%;
  transition: all 0.5s ease;
}
.right {
  left: 60%;
  transform: scale(0.8);
  z-index: -1;
  /* background: rgb(0, 0, 0); */
  transition: all 0.5s ease;
}
.left div,
.right div {
  z-index: 5;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
  left: 0;
  top: 0;
  transition: all 0.3s ease;
}
.after1,
.after2,
.after3 {
  z-index: -3;
  left: 0;
  top: 0;
  visibility: hidden;
  transform: scale(0);
}
.last,
.next {
  position: absolute;
  z-index: 10;
  width: 50px;
  height: 50px;
  border: 5px solid rgba(255, 255, 255, 0.7);
  border-radius: 50px;
  font-size: 50px;
  font-weight: bold;
  text-align: center;
  line-height: 45px;
  cursor: pointer;
  top: 45%;
  color: rgba(255, 255, 255, 0.6);
}
.list {
  width: 30%;
  height: 20px;
  display: flex;
  margin: 0 auto;
  margin-top: 20px;
  justify-content: space-between;
}
/*  */
.btn {
  width: 20px;
  transition: all 0.3s ease;
  /* flex: 1; */
  background: rgb(244, 244, 244);
  border-radius: 20px;
}

.last {
  left: -200px;
}
.next {
  right: -200px;
}
/* 指示灯 */
.btn.active {
  background: #f00;
}

.footer {
  margin-top: 2rem;
  width: 100%;
  font-size: xx-small;
  background-color: white;
  height: 2.2rem;
  line-height: 2rem;
  border-radius: 0;
  box-shadow: 0 -1px 10px #999999;
}

.jiyubefore {
  position: absolute;
  left: -220%;
  transition: all 0.5s ease;
  z-index: -1;
}
.jiyubeforeactive {
  position: absolute;
  left: -220%;
  /* transition: all 0.5s ease; */
  z-index: -1;
}
.jiyuleft {
  position: absolute;
  left: -110%;
  transition: all 0.5s ease;
  z-index: 2;
}
.jiyucenter {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 10%;
  transition: all 0.5s ease;
  z-index: 2;
}
.jiyuright {
  position: absolute;
  left: 110%;
  transition: all 0.5s ease;
  z-index: 2;
}
.jiyuafter {
  position: absolute;
  left: 220%;
  transition: all 0.5s ease;
  z-index: -1;
}
.jiyuafteractive {
  position: absolute;
  left: 220%;
  z-index: -1;
}

.jiyu-left {
  width: 100px;
  height: 100px;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 92%;
  margin: auto;
  margin: auto;
  background: center/cover no-repeat url(/photo/svg/右箭头红.svg);
  transform: rotate(180deg);
  cursor: pointer;
}
.jiyu-right {
  width: 100px;
  height: 100px;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 92%;
  margin: auto;
  background: center/cover no-repeat url(/photo/svg/右箭头红.svg);
  cursor: pointer;
}
</style>