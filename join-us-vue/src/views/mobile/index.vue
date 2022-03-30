<script setup lang="ts">
import { computed, CSSProperties, onMounted, onUnmounted, ref } from 'vue';
import { RouterView, RouterLink } from 'vue-router';
import Footer from '../../components/mobile/Footer.vue'
import Start from '../../components/mobile/Start.vue';
import { usePageStore } from '../../stores/pages';
const pageStore = usePageStore();
const items = [
  {
    id: 0,
    img: "../photo/index/story1.png",
    content: "2002年5月\n精弘网络成立",
  },
  {
    id: 1,
    img: "../photo/index/story2.png",
    time: "2003年5月",
    content: "推出精弘论坛\nbbs.zjut.com",
  },
  {
    id: 2,
    img: "../photo/index/story3.png",
    time: "2004年10月",
    content: "Feel电台创立\nradio.zjut.com",
  },
  {
    id: 3,
    img: "../photo/index/story4.png",
    time: "2006年5月",
    content: "推出第一版学生邮箱\nmail.zjut.com",
  },
  {
    id: 4,
    img: "../photo/index/story5.jpg",
    time: "2012年3月",
    content: "第一届精弘毅行",
  },
  {
    id: 5,
    img: "../photo/index/story6.png",
    time: "2012年12月",
    content: '荣获第五届\n"全国高校百佳网站"\n荣誉称号',
  },
  {
    id: 6,
    img: "../photo/index/story7.jpg",
    time: "2015年12月",
    content: '承办浙江工业大学首届\n"网络安全宣传月"活动',
  },
  {
    id: 7,
    img: "../photo/index/story8.jpg",
    time: "2016年8月",
    content: '精弘网络微信服务号获\n"全国高校东部地区榜亚军"',
  },
  {
    id: 8,
    img: "../photo/index/story9.png",
    time: "2017年2月",
    content: "微精弘改版正式上线",
  },
  {
    id: 9,
    img: "../photo/index/story5.jpg",
    time: "2020年2月",
    content: "第十三届精弘毅行",
  },
];

const loading_width = ref(-100);
const angle = (Math.atan(0.5) * 180) / Math.PI + "deg";
const angle2 = (-Math.atan(0.5) * 180) / Math.PI + "deg";
const scale = 1 / Math.cos(Math.atan(0.5));
const historyline = ref(<Element>{});
const top111 = ref(0);
// const top111 = historyline.value.getBoundingClientRect().top;

const styleVal = (function (index: number): CSSProperties {
  return <CSSProperties>{
    '--angle': index % 2 === 0 ? angle : angle2,
    '--scale': scale,
    '--border': index % 2 === 0 ? 'dashed' : 'solid',
    '--line_seen': index === 9 ? 'none' : 'block',
  }
})

function handleScrollx() {
  top111.value = historyline.value.getBoundingClientRect().top;
}
onMounted(() => {
  window.addEventListener("scroll", handleScrollx, true);
  document.title = '精弘首页';
  pageStore.pageNow = 0;
  let timer = window.setInterval(() => {
    if (loading_width.value >= 0) {
      loading_width.value = -100;
    } else {
      loading_width.value += 0.2;
    }
  }, 10);
})

onUnmounted(() => {
  window.removeEventListener("scroll", handleScrollx, true);
})

</script>
<template>
  <div class="content">
    <Start />
  </div>

  <div id="body" ref="pronbit">
    <div class="introduce" id="introduce">
      <div class="title">精弘网络⼁Jinghong Union</div>
      <div class="content">
        成立于2002年5月，
        <br />精弘的名字取自工大学风“取精用弘”，
        <br />是浙江工业大学的学术网络组织。
        <br />精弘秉承着自由、共享、团结、创新的精神，
        <br />全心全意为在校师生提供优质的服务
        <br />和交流平台，收到了广泛好评。
      </div>
    </div>

    <div class="title-style">精弘成长史</div>
    <div class="history" ref="history">
      <div class="history-line" ref="historyline">
        <div class="history-item" v-for="item, index in items" :style="styleVal(index)">
          <div
            class="img"
            :class="[index % 2 === 0 ? 'history-img1' : 'history-img2', top111 < 487 - (index - 2) * 80 - 60 ? 'history-img' : 'history-img-hide']"
            :style="{ 'background-image': 'url(' + item.img + ')' }"
          >
            <div class="history-content">
              <div class="history-content1">{{ item.time }}</div>
              <div class="history-content2">{{ item.content }}</div>
            </div>
          </div>
        </div>
        <!-- <div class="history-line-mask" style="--top:0px"></div> -->
      </div>
    </div>

    <div class="story">
      <div class="img" style="background-image: url(/photo/index/diannao.jpg)"></div>

      <div class="content">
        <router-link to="/m/story">
          <div class="story-title">
            <div>我们的故事</div>
            <div class="right-arrow"></div>
          </div>
        </router-link>

        <div class="story-content">因梦想，我们齐聚一堂；因使命，我们同舟共济。</div>
      </div>
    </div>

    <div class="end">
      <div class="loading">
        <div class="loading-text">
          <img src="/photo/index/2021.png" />
        </div>
        <div class="loading-border">
          <div id="loading-img" class="loading-img" v-bind:style="{ left: loading_width + '%' }"></div>
        </div>
        <div class="loading-text">
          <img src="/photo/index/loading.png" />
        </div>
      </div>

      <div class="end-iron" id="end-iron"></div>

      <div class="end-recruit">
        <div class="title-font">精弘招聘</div>
        <router-link to="/m/join" class="recruit-button">加入我们</router-link>
      </div>

      <div class="end-1">
        <div class="follow-img1"></div>
        <div class>
          <div class="title-font1">联系我们|关注我们</div>
          <div class="title-font2">jhwl@zjut.edu.cn</div>
        </div>
        <a href="https://github.com/zjutjh">
          <div class="follow-img2"></div>
        </a>
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

* {
  text-align: center;
  border-radius: 1rem;
  /* position: relative; */
  /* scroll-behavior:smooth; */
}
a {
  text-decoration: none;
  color: black;
}
body {
  margin: 0;
  background-color: #efefef;
}
.img {
  background-size: cover;
  background-repeat: no-repeat;
}
/* #body {
  margin-top: 4rem;
} */
.title-style {
  width: 45%;
  height: 1.5rem;
  font-size: 10rpx;
  padding: 0.7rem 0;
  margin: 3% 7.5% 3%;
  background-color: #d20001;
  border-radius: 2.5rem;
  color: white;
  box-shadow: 0 1px 10px #999999;
}

.start-title {
  width: 18rem;
  height: 6.6rem;
  margin: auto;
  margin-top: 11.5rem;
  font-size: xx-large;
  color: white;
  font-size: 40px;
  font-family: song;
  letter-spacing: 10px;
  text-indent: 0.25em;
}

.start-img-content {
  position: absolute;
  left: 50%;
  bottom: 4rem;
  color: white;
  transform: translate(-50%);
}

.introduce {
  width: 95%;
  /* height: 11rem; */
  margin: 2rem auto;
  position: relative;
  overflow: hidden;
  box-shadow: 0 1px 10px #999999;
}
.introduce .title {
  height: 15%;
  margin: 0;
  padding: 2% 5%;
  background-color: #d6d6d6;
  border-radius: 0;
  text-align: left;
}
.introduce .content {
  /* height: 10rem; */
  padding: 3% 7%;
  background-color: white;
  border-radius: 0;
  white-space: pre-line;
  font-size: 5vw;
  text-align: left;
}
.introduce p {
  text-align: left;
}

.history {
  margin: 2rem auto;
  width: 95%;
  background-color: white;
  overflow: hidden;
  box-shadow: 0 1px 10px #999999;
}
.history-line {
  padding: 4rem 0 1rem;
  width: 10rem;
  margin: auto;
}
.history-line-mask {
  position: absolute;
  width: 10rem;
  top: var(--top);
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  background-color: white;
  border-radius: 0;
  z-index: 2;
}
.history-item {
  position: relative;
  /* margin:50px auto; */
  width: 10rem;
  height: 5rem;
  /* box-sizing:border-box; */
  /* border:1px solid #333;   */
  /* background-color:#333; */
  /* line-height:120px; */
  /* text-indent:5px; */
}
.history-item::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 2.5rem;
  box-sizing: border-box;
  border-bottom: 1px var(--border) black;
  transform-origin: bottom center;
  transform: rotateZ(var(--angle)) scale(var(--scale));
  display: var(--line_seen);
  z-index: 1;
  /* animation:slash 5s infinite ease; */
}
.history-img {
  position: relative;
  top: -2.2rem;
  width: 4.4rem;
  height: 4.4rem;
  background-color: white;
  border-radius: 50%;
  z-index: 3;
  opacity: 1;
  transition: opacity 2s;
}
.history-img-hide {
  position: relative;
  top: -2.2rem;
  width: 4.4rem;
  height: 4.4rem;
  background-color: white;
  border-radius: 50%;
  z-index: 3;
  opacity: 0;
  transition: opacity 2s;
}
.history-img1 {
  float: left;
  left: -2.2rem;
}
.history-img2 {
  float: right;
  right: -2.2rem;
}
.history-content {
  width: 200%;
  position: relative;
  top: 100%;
  left: -50%;
}
.history-content1 {
  font-size: xx-small;
  white-space: pre-line;
}
.history-content2 {
  font-size: xx-small;
  white-space: pre-line;
}

.story {
  width: 95%;
  padding: 20px 0;
  margin: auto;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 1px 10px #999999;
}
.story .img {
  width: 80vw;
  height: 50vw;
  background-color: aqua;
}
.story .content {
  width: 90%;
  height: 70px;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  /* background-color: white; */
}
.story-title {
  width: 7rem;
  /* height: 2rem; */
  margin: 0.4rem auto;
  background-color: #d20001;
  color: white;
  padding: 0.3rem 0;
  border-radius: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.story-title div {
  display: inline-block;
}
.right-arrow {
  width: 1rem;
  height: 1rem;
  /* background-color: aqua; */
  background-image: url(/photo/svg/正三角形.svg);
  transform: rotate(90deg);
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
}
.story-content {
  font-size: 3vw;
}

.end {
  margin: 0.3rem auto;
  width: 95%;
  height: 55vw;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
}

.loading {
  margin-top: 1rem;
  width: 55%;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-color: white;
  box-shadow: 0 1px 5px #999999;
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
  height: 10%;
  width: 90%;
  border-radius: 100px;
  border: 0.2rem solid #d20001;
  overflow: hidden;
}
.loading-img {
  position: relative;
  width: 100%;
  height: 100%;
  background-color: #d20001;
  border-radius: 100px;
}

.end-iron {
  width: 4.5rem;
  height: 4.5rem;
  margin: 1rem 1.5rem 0 0;
  border-radius: 50%;
  border: 0.4rem solid white;
  background-color: white;
  background-image: url(/photo/index/story1.png);
  background-size: cover;
  background-repeat: no-repeat;
  box-shadow: 0 1px 5px #999999;
}

.end-recruit {
  height: 30%;
  width: 43%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  background-color: white;
  box-shadow: 0 1px 5px #999999;
}
.recruit-button {
  width: 50%;
  height: 1.5rem;
  line-height: 1.5rem;
  border-radius: 1rem;
  font-size: 12px;
  background-color: #d20001;
  color: white;
  padding: 3px;
  transform: scale(0.9);
}
.end-recruit .title-font {
  width: 50%;
  border-right: 2px solid pink;
  padding-right: 2px;
  height: 1rem;
  font-size: small;
  font-weight: bold;
  border-radius: 0;
  transform: scale(0.9);
}

.end-1 {
  width: 55%;
  height: 30%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: white;
  box-shadow: 0 1px 5px #999999;
}
.title-font1 {
  height: 1rem;
  font-size: xx-small;
  font-weight: bold;
}
.title-font2 {
  height: 1rem;
  font-size: 10px;
}
.follow-img1 {
  background-image: url(/photo/svg/微信.svg);
  background-size: cover;
  height: 2rem;
  width: 2rem;
}
.follow-img2 {
  background-image: url(/photo/svg/Logo\GitHub.svg);
  background-size: cover;
  height: 2rem;
  width: 2rem;
}

/* .footer {
  width: 100%;
  font-size: xx-small;
  background-color: white;
  height: 2.2rem;
  line-height: 2rem;
  border-radius: 0;
  box-shadow: 0 -1px 5px #999999;
} */
</style>