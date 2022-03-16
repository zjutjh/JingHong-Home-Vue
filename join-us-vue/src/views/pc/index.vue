<script setup lang="ts">
import NavBar from '../../components/pc/NavBar.vue';
import Start from '../../components/pc/Start.vue';
import Footer from '../../components/pc/Footer.vue';

</script>
<template>
  <NavBar page-now="0" />
  <Start />
  <div class="introduce">
    <img class="introduce-img2" src="/index/taiquandao.png" />
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
    <img class="introduce-img1" src="/index/muqiu.png" />
  </div>
  <div class="story">
    <div class="img"></div>

    <div class="content">
      <a href="story.html">
        <div class="story-title">
          <div>我们的故事</div>
          <div class="right-arrow"></div>
        </div>
      </a>
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
      <a href="join.html">
        <div class="recruit-button">加入我们</div>
      </a>
    </div>

    <div class="loading">
      <div class="loading-text">
        <img src="/index/2021.png" />
      </div>
      <div class="loading-border">
        <!-- TODO What is loading-width? -->
        <!-- <div id="loading-img" class="loading-img" v-bind:style="{ left: loading_width + '%' }"></div> -->
        <div id="loading-img" class="loading-img" style="{ left: 50 + '%' }"></div>
      </div>
      <div class="loading-text">
        <img src="/index/loading.png" />
      </div>
    </div>
  </div>
  <Footer />
</template>

<style>
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

.introduce-content .content {
  text-align: center;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
.introduce-content .title {
  margin-bottom: 50em;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

.introduce {
  margin: 35px 0;
  padding: 15px 50px;
  height: 60vh;
  display: flex;

  position: relative;
  overflow: hidden;
}
.introduce-img1 {
  margin-top: 2%;
  height: 80%;
  position: absolute;
  right: -80px;
}
.introduce-img2 {
  margin-top: 2%;
  height: 80%;
  position: absolute;
  left: -80px;
}
.introduce-content {
  margin: 0 auto;
  width: 80%;
  box-shadow: 0 5px 10px #999999;
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
  padding: 0 0 0 13%;
  text-align: left;
  font-size: 35px;
  line-height: 50px;
  background-color: white;
  display: flex;
  align-items: center;
  /* white-space:pre-wrap; */
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
  font-size: 1.7vw;
  line-height: 3vw;
  text-align: left;
  margin: 0 0 0 1vw;
}
.history-right-img {
  width: 20vw;
  height: 20vw;
  background-image: url(/index/jingxiaohong.png);
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
.red-line {
  position: absolute;
  width: 90%;
  height: 0.7rem;
  background-color: #d20001;
  z-index: -1; /*置于下方*/
}
.choices {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
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
  box-shadow: 0 2px 20px #999999;
}
.story .img {
  width: 70%;
  height: 60%;
  background-size: contain;
  background-color: aqua;
  background-image: url(/index/story.jpg);
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
  background-image: url(/svg/正三角形2.svg);
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
}

.end-1 {
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
  background-image: url(/svg/微信.svg);
  background-size: cover;
  height: 6vw;
  width: 6vw;
  border-radius: 6rem;
}
.follow-img2 {
  background-image: url(/svg/LogoGitHub.svg);
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
  background-image: url(/index/story1.png);
  background-size: cover;
  background-color: white;
  box-shadow: 0 5px 10px #999999;
}

.end-recruit {
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