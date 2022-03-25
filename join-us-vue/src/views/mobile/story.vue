<script setup lang="ts">
import { onBeforeUnmount, onMounted, reactive, ref } from 'vue';
import { usePageStore } from '../../stores/pages';
import { RouterLink } from 'vue-router';
import Footer from '../../components/mobile/Footer.vue';
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
    realname: "小树",
    img: "../photo/story/jiyu/小树.jpg",
    introduction:
      "前精弘设计总监\n预计于2022年\n毕业于浙工大\n现就读于浙江工业大学",
    content:
      "大三的时候加入精弘，是我纠结了很久做的一个决定，现在想想倒觉得很庆幸。光是能够遇见你们，就已经很美好了。\n       没有当客服的经验，从新生群同意每一个新生宝宝的入群验证到后来与他们的 见面，对我来说都是新奇的体验。在很多 新生的身上，我都能看到刚收到录取通知 书时我的样子。不耐烦的回答一个个问 题，也是希望她们能少走弯路。\n       深入接触后，发现精弘网络其实是一 个很温暖的组织，可以说很多人都是“为 爱发电”，有着很强的责任心。\n        希望大家在精弘的日子里可以收获到 属于自己的美好。",
  },
  {
    n: 2,
    name: "小花仙",
    realname: "小花仙",
    img: "../photo/story/jiyu/小花仙.jpg",
    introduction:
      "前精弘开发部副部\n2021年毕业于浙工大\n现工作于腾讯(深圳)\nIEG技术运营部",
    content:
      "在开发部，我认识了许多好朋友，和自己喜欢的男孩子在一起，并且找到了自己理想的工作。希望大家能记得自己进入精弘的初心，并且为之努力，每个人都有 自己的理想，进入精弘可能是你实现理想中的某一个很小的步骤，但是也⼗分的重要，在精弘希望大家都可以好好提升自己，并且能够对精弘做出一些贡献~",
  },
  {
    n: 3,
    name: "大可爱",
    realname: "大可爱",
    img: "../photo/story/jiyu/周依佳.jpg",
    introduction:
      "前精弘屏峰校区副会长\n兼常务总监\n2020年毕业于浙工大\n现就读于中国人民大学",
    content:
      "在精弘的两年半时光里，是我大学里最珍贵和幸福的回忆。在这里，我提升了各方面的能力，并收获了美好的友谊，真的很值得怀念。这里有温暖的人，温暖的事，希望大家都能在这里有所成长，有所收获，和精弘一起越来越好！",
  },
  {
    n: 4,
    name: "寒假",
    realname: "寒假",
    img: "../photo/product/3.jpg",
    introduction: "2017届新媒体总监\n2019年毕业于浙工大\n现工作于华安证券",
    content:
      "转眼已经从精弘“毕业”好多年，从大一的办公室干事，到大二的活动部部长，再到大三的新媒体总监，在精弘，你会遇见一群最青春可爱的人，拥有最深刻独特的集体归属感，也会发掘自己无限的可能性。精弘大家庭欢迎你的到来！",
  },
];

function yixing_before() {
  let last = yixing_classes.pop() as string;
  yixing_classes.unshift(last);
}

function yixing_after() {
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
  window.clearInterval(timer2);
  let i = 0;
  timer2 = window.setInterval(() => {
    if (i > 0) {
      yuren_after();
    }
    i++;
  }, 1500);
  let last = yuren_classes.pop() as string;
  yuren_classes.unshift(last);
}

function yuren_after() {
  window.clearInterval(timer2);
  let i = 0;
  timer2 = window.setInterval(() => {
    if (i > 0) {
      yuren_before();
    }
    i++;
  }, 1500);
  let first = yuren_classes.shift() as string;
  yuren_classes.push(first);
}

var index = 3;

const now = ref(0);
const startx = ref(0);
const timer = ref(0);
function a() {
  now.value = 2;
}
function _resetTimer1() {
  clearInterval(timer1);
  timer1 = window.setInterval(() => {
    yixing_before();
  }, 3000);
}
function _resetTimer2() {
  clearInterval(timer2);
  timer2 = window.setInterval(() => {
    yuren_before();
  }, 3000);
}
function before(className: string) {
  if (className == "yixing_classes") {
    _resetTimer1();
    yixing_before();
  } else if (className == "yuren_classes") {
    _resetTimer2();
    yuren_before();
  }
}

function after(className: string) {
  if (className == "yixing_classes") {
    _resetTimer1();
    yixing_after();
  } else if (className == "yuren_classes") {
    _resetTimer2();
    yuren_after();
  }
}

function touchstart(e: TouchEvent) {
  startx.value = e.touches[0].pageX;
}

function touchmove(e: TouchEvent, className: string) {
  let endx = e.changedTouches[0].pageX;
  if (startx.value < endx) {
    after(className);
  } else {
    before(className);
  }
}

function change(e: MouseEvent, className: string) {
  console.log(className);
  if (((e.target as HTMLElement).parentNode as HTMLElement).classList.contains("left")) {
    after(className);
  } else if (((e.target as HTMLElement).parentNode as HTMLElement).classList.contains("right")) {
    before(className);
  } else {
    return false;
  }
}

onMounted(() => {
  store.pageNow = 1;
  document.title = "我们的故事";

  timer1 = window.setInterval(() => {
    yixing_before();
  }, 3000);
  timer2 = window.setInterval(() => {
    yuren_before();
  }, 3000);
});

onBeforeUnmount(() => {
  clearInterval(timer1);
  clearInterval(timer2);
});
</script>

<template>
  <div class="title-style">我们的故事</div>
  <div class="shiming">
    <div class="img" style="background-image: url(/photo/index/ziyou.png)"></div>
    <div class="img" style="background-image: url(/photo/index/gongxiang.png)"></div>
    <div class="img" style="background-image: url(/photo/index/tuanjie.png)"></div>
    <div class="img" style="background-image: url(/photo/index/chuangxin.png)"></div>
  </div>
  <div class="platform">
    <div class="platform-title">相关平台⼁Related Platform</div>
    <div class="platform-content">
      <p>精弘网络采用朝晖、屏峰、莫干山三校区共同建制</p>
      <p>目前运营和维护的平台包括但不仅限</p>
      <p>浙江工业大学精弘网络微信服务号、</p>
      <p>精小弘在线微信服务号、微精弘微信小程序、</p>
      <p>浙工大易班官方机构号、知乎官方机构号、</p>
      <p>邮件系统(https:/mai©.zjut.edu.cn/)、</p>
      <p>工大云盘(http://pan.zjut.edu.cn/)、</p>
      <p>精弘论坛、精弘直播、Feel电台等。</p>
    </div>
  </div>

  <div class="yixing">
    <div class="title">精弘毅行</div>

    <div
      class="carousel"
      ref="carousel"
      id="carousel"
      @touchstart="touchstart($event)"
      @touchend="touchmove($event, 'yixing_classes')"
    >
      <div class="whole">
        <div class="roll-img">
          <ul type>
            <li
              @click="change($event, 'yixing_classes')"
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

    <div
      class="content"
    >每年一度的"精弘毅行"始于2012年，是浙江工业大学的一次盛会，超过8000位师生校友从学校出发，徒步行走十公里或以上的路程后回到学校。“精弘毅行"鼓励工大学子暂离网络，走出宿舍，以最原始的徒步行走的方式亲近自然，感受青春的活力和朝气。因此，精弘毅行也是每届精弘人必要经历的一次挑战。</div>
  </div>

  <div class="shenghuo">
    <div class="title">生活社交</div>
    <div class="img" style="background-image: url(/photo/story/shenghuo/shenghuo1.jpg)"></div>
    <div class="content">精弘还定期举行素质拓展，各种小游戏需要每一位成员的通力合作，在游戏中互相了解，感受精弘大家庭的温暖。</div>
    <div class="img" style="background-image: url(/photo/story/shenghuo/shenghuo2.jpg)"></div>
    <div class="content">在每年一度的年会上，精弘网络的每个部门都准备了具有特色的节目，既是对过去工作生活的总结，也是对来年生活的美好祝愿。</div>
    <div class="img1">
      <div class="img11" style="background-image: url(/photo/story/shenghuo/shenghuo3.jpg)"></div>
      <div class="img12" style="background-image: url(/photo/story/shenghuo/shenghuo4.jpg)"></div>
      <div class="img13" style="background-image: url(/photo/story/shenghuo/shenghuo5.jpg)"></div>
    </div>
    <div class="content">在各个部门内还有各式各样的轰趴活动，聚餐、唱K或是游西湖。在精弘，绝不是只有工作，还有数不清的快乐。</div>
  </div>

  <div class="yuren">
    <div class="title">网络育人</div>
    <div
      class="carousel"
      ref="carousel"
      id="carousel2"
      @touchstart="touchstart($event)"
      @touchend="touchmove($event, 'yuren_classes')"
    >
      <div class="whole">
        <div class="roll-img">
          <ul type>
            <li
              @click="change($event, 'yuren_classes')"
              v-for="(item, index) in yuren_imgs"
              :class="yuren_classes[index]"
            >
              <img :src="item" />
              <div></div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="content">“网络安全宣传教育月”的系列活动⸺技术分享会、线下游园、人物访谈和拍摄防范网络诈骗微电影等由浙江工业大学精弘网络于全校范围内组织 承办。</div>
  </div>

  <div class="jiyu">
    <div class="title">前辈寄语</div>
    <div class="jiyu-content">
      <div class="choice">
        <div style="height: 100%; width: 100%; position: relative">
          <div
            :class="now === index ? 'person-name-selected' : 'person-name'"
            v-on:click="now = index;"
            v-for="person, index in persons"
            v-bind:style="{ left: index * 23 + '%', 'z-index': 4 - index }"
          >{{ person.name }}</div>
        </div>
      </div>

      <div class="person-card">
        <div class="img" v-bind:style="{ 'background-image': 'url(' + persons[now].img + ')' }"></div>
        <div style="width: 40%; height: 30%; float: left; margin-bottom: 20px">
          <div class="realname">{{ persons[now].realname }}</div>
          <div class="introduction">{{ persons[now].introduction }}</div>
        </div>
        <div class="neirong">
          <span>{{ persons[now].content }}</span>
        </div>
      </div>
    </div>
  </div>

  <div class="product">
    <router-link to="/m/product">
      <div class="product-button">
        我们的产品
        <img src="/photo/svg/右箭头.svg" style="float: right;" />
      </div>
    </router-link>
  </div>
  <Footer />
</template>

<style scoped>
* {
  text-align: center;
  border-radius: 1rem;
}
body,
#body {
  margin: 0;
  border-radius: 0;
}
a {
  color: black;
  text-decoration: none;
}
.img,
.img11,
.img12,
.img13 {
  background-size: cover;
  background-position: center;
  max-width: 100%;
  max-height: 100%;
  background-repeat: no-repeat;
}
#body {
  overflow: hidden;
  padding-top: 4rem;
  background-color: #efefef;
}
.title-style {
  width: 45%;
  height: 1.5rem;
  font-size: 10rpx;
  padding: 0.7rem 0;
  margin: 3% 7.5% 3%;
  background-color: #d20001;
  border-radius: 2.5rem;
  color: white;
  box-shadow: 0 1px 5px #999999;
}
.title {
  position: relative;
  top: 1rem;
  left: -2%;
  width: 35%;
  height: 2rem;
  line-height: 2rem;
  background-color: #d20001;
  font-size: large;
  font-weight: bolder;
  border-radius: 0;
  color: white;
}
#nav img {
  height: 100%;
  float: left;
}
.content {
  text-align: left;
  padding: 0 20px;
  margin-bottom: 20px;
  text-indent: 2rem;
  font-size: 4vw;
}

.shiming {
  width: 95%;
  height: 7.5rem;
  margin: 1rem auto;
  background-color: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-shadow: 0 1px 5px #999999;
}
.shiming div {
  width: 4rem;
  height: 4rem;
  /* background-color: #D20001; */
  border-radius: 0.5rem;
  background-size: contain;
  max-width: 100%;
  max-height: 100%;
  background-repeat: no-repeat;
}

.platform {
  width: 95%;
  /* height: 11rem; */
  margin: 2rem auto;
  position: relative;
  overflow: hidden;
  box-shadow: 0 1px 5px #999999;
}
.platform-title {
  height: 15%;
  margin: 0;
  padding: 2% 5%;
  background-color: #d6d6d6;
  border-radius: 0;
  text-align: left;
}
.platform-content {
  /* height: 10rem; */
  padding: 1% 7%;
  background-color: white;
  border-radius: 0;
  white-space: pre-line;

  text-align: left;
}
.platform p {
  line-height: 0.5rem;
  font-size: xx-small;
  text-align: left;
}

.yixing {
  width: 95%;
  /* height: 30rem; */
  margin: 1rem auto;
  background-color: white;
  padding-bottom: 1px;
  box-shadow: 0 1px 5px #999999;
}

.carousel {
  margin: 1.5rem auto;
  width: 100%;
  /* height: 8rem; */
  border-radius: 0;
  overflow: hidden;
}
.carousel::after {
  display: block;
  content: "";
  width: 90%;
  margin: 0 auto;
  border-bottom: 0.2rem solid #efefef;
  padding-bottom: 1rem;
}
.carousel .whole {
  width: 60%;
  height: 35vw;
  margin: 0 auto;
}
.carousel .whole .roll-img {
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
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
.left {
  left: -55vw;
  transform: scale(0.8);
  z-index: -1;
  background: rgb(0, 0, 0);
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
  left: 55vw;
  transform: scale(0.8);
  z-index: -1;
  background: rgb(0, 0, 0);
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
  left: 0;
  top: 0;
  visibility: hidden;
  transform: scale(0);
  z-index: -3;
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
  height: 5px;
  display: flex;
  margin: 0 auto;
  margin-top: 20px;
}
.last {
  left: -200px;
}
.next {
  right: -200px;
}

.shenghuo {
  width: 95%;
  /* height: 70rem; */
  margin: 1rem auto;
  padding-bottom: 1px;
  background-color: white;
  box-shadow: 0 1px 5px #999999;
}
.shenghuo .img {
  margin: 2rem auto 2rem auto;
  width: 95%;
  height: 12rem;
  background-color: black;
  float: none;
}
.img1 {
  margin: 1rem auto 1rem auto;
  width: 95%;
  height: 80vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: space-between;
}
.img11 {
  width: 100%;
  height: 55%;
  background-color: black;
}
.img12,
.img13 {
  width: 49%;
  height: 40%;
  background-color: black;
}

.yuren {
  width: 95%;
  /* height: 20rem; */
  margin: 1rem auto;
  padding-bottom: 1px;
  background-color: white;
  overflow: hidden;
  box-shadow: 0 1px 5px #999999;
}
.yuren .img {
  margin: 0;
  float: left;
}

.jiyu {
  width: 95%;
  height: 41rem;
  margin: 1rem auto;
  padding-bottom: 0.5rem;
  background-color: white;
  box-shadow: 0 1px 5px #999999;
}
.jiyu-content {
  width: 95%;
  height: 37rem;
  background-color: #fee3e3;
  margin: 2rem auto;
}
.jiyu .choice {
  margin: 0 auto 0.1rem;
  width: 100%;
  height: 2rem;
  border-radius: 0;
  border-bottom: 0.3rem solid #d20001;
  margin-bottom: 1rem;
  /* display: inline-block */
}
.person-name {
  position: absolute;
  width: 31%;
  height: 100%;
  line-height: 2rem;
  background-color: #f9b5b5;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  font-size: 0.9rem;
  /* font-weight: bold; */
}
.person-name-selected {
  position: absolute;
  width: 31%;
  height: 100%;
  line-height: 2rem;
  background-color: #fee3e3;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  z-index: 5 !important;
  font-size: 0.9rem;
  /* font-weight: bold; */
}

.person-card {
  width: 100%;
  height: 28rem;
}
.jiyu .img {
  width: 60%;
  height: 30%;
  margin-bottom: 20px;
  border-radius: 0;
  float: left;
}
.jiyu .realname {
  width: 60%;
  text-align: left;
  margin: 0.5rem 0.5rem 0;
  padding-bottom: 0.5rem;
  border-bottom: 0.2rem solid black;
  border-radius: 0;
  font-weight: bold;
}
.jiyu .introduction {
  width: 100%;
  height: 60%;
  text-align: left;
  padding: 0.5rem;
  white-space: pre-line; /* 让\n有效 */
  border-radius: 0;
  font-size: 10px;
}
.jiyu .neirong {
  height: 45%;
  font-size: 4vw;
  line-height: 25px;
  text-align: left;
  white-space: pre-wrap;
  border-radius: 0;
  margin: 20px;
  text-indent: 2em;
  word-wrap: break-word;
  word-break: break-all;
  padding-bottom: 1rem;
  /* overflow: hidden; */
}
.neirong span {
  padding-bottom: 1rem;
}

.product {
  position: relative;
  margin: 1rem auto;
  width: 95%;
  height: 5rem;
  /* background-color: white; */
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
  width: 40vw;
  height: 10vw;
  background-color: #d20001;
  border-radius: 7vw;
  color: white;
  font-size: 5vw;
  line-height: 8vw;
  display: flex;
  justify-content: center;
  align-items: center;
}

#nav * {
  border-radius: 0;
}
.img {
  float: left;
}
.button-on {
  position: relative;
  float: right;
  top: 1rem;
  right: 1rem;
  height: 2rem;
  width: 2rem;
  background-image: url(../photo/svg/mulu.svg);
  background-repeat: no-repeat;
  background-position: center;
  background-size: 90%;
}
.button-off {
  position: relative;
  float: right;
  top: 1rem;
  right: 1rem;
  height: 2rem;
  width: 2rem;
  background-image: url(../photo/svg/关闭.svg);
  background-repeat: no-repeat;
  background-position: center;
  background-size: 90%;
}
#nav img {
  height: 100%;
  float: left;
  transform: scale(0.8);
}
.topshow {
  position: fixed;
  left: 0;
  top: 0rem;
  width: 100%;
  height: 4rem;
  background: #d20001;
  transition: top linear 0.3s;
  z-index: 1000000;
  box-shadow: 0 1px 5px #999999;
}
.tophide {
  position: fixed;
  left: 0;
  top: -8rem;
  width: 100%;
  height: 4rem;
  background: #d20001;
  transition: top linear 0.3s;
  box-shadow: 0 1px 5px #999999;
}
.Nav-hide {
  position: fixed;
  left: 0;
  top: -100%;
  width: 100%;
  height: 100%;
  background: white;
  transition: left linear 0.3s;
}
.Nav-show {
  position: fixed;
  left: 0rem;
  top: 0;
  width: 100%;
  height: 100%;
  background: white;
  transition: left linear 0.3s;
  z-index: 1000001;
}

.nav-list {
  margin: 4rem 4%;
  width: 92%;
  height: 45%;
}
.nav-list div {
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  margin: 0;
  border-bottom: 0.1rem solid #efefef;
}

.footer {
  width: 100%;
  font-size: xx-small;
  background-color: white;
  height: 2.2rem;
  line-height: 2rem;
  border-radius: 0;
  box-shadow: 0 -0.5px 5px #999999;
}
</style>