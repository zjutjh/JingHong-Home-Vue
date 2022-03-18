<script setup lang="ts">import { onMounted } from 'vue';
import { RouterLink } from 'vue-router';
import { departments } from '../../utils/consts'
import Footer from '../../components/pc/Footer.vue';
import { usePageStore } from '../../stores/pages';
const pageStore = usePageStore();

onMounted(() => {
  document.title = "我们的部门";
  pageStore.pageNow = 3;
})
</script>
<template>
  <div id="body" ref="pronbit">
    <div class="title-style">
      <h1>我们的部门</h1>
    </div>
    <div class="department">
      <router-link class="department-item" v-for="item in departments" :to="item.href">
        <div
          class="img"
          v-bind:style="{ 'background-image': 'url(' + item.img + ')' }"
          :data-content-after="item.name"
        ></div>
      </router-link>
    </div>
  </div>
  <Footer />
</template>
<style scoped>
@font-face {
  font-family: "song";
  src: url("../../font/逐浪雅宋体.ttf");
}
@font-face {
  font-family: "SC-VF";
  src: url("../font/SourceHanSansSC-VF.otf");
}
* {
  text-align: center;
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
  background-color: #efefef;
  padding-top: 20vh;
}
.title-style {
  width: 15%;
  font-size: 10rpx;
  padding: 1% 0;
  margin: 0 8% 3%;
  background-color: #d20001;
  color: white;
  border-radius: 1rem;
  box-shadow: 0 5px 10px #999999;
}

.department {
  width: 84%;
  height: 70vh;
  margin: 3% 8% 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-content: space-between;
}
.department-item {
  width: 33.3%;
  height: 35vh;
  display: flex;
  justify-content: center;
}
.img {
  width: 50%;
  height: 0;
  padding-top: 25%;
  padding-bottom: 25%;
  border-radius: 50%;
  background-color: white;
  background-size: 70%;
  background-position: center;
  background-repeat: no-repeat;
  box-shadow: 0 5px 10px #999999;
}
.img::after {
  content: attr(data-content-after);
  position: relative;
  top: 2rem;
  left: 50%;
  width: 80%;
  height: 2.5rem;
  line-height: 2.5rem;
  text-align: center;
  background: #d20001;
  border: 0.3rem solid white;
  /* box-shadow: 1px 2px 3px -1px; */
  display: block;
  font-size: 1.5vw;
  color: white;
  box-shadow: 1px 1px 10px #999999;
}
.name {
  /* margin: auto; */
  width: 20rem;
  font-size: xx-large;
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
  box-shadow: 0 5px 10px #999999;
}
img {
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
</style>