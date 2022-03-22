<script setup lang="ts">import { onMounted } from 'vue';
import { usePageStore } from '../../stores/pages';
import { products } from '../../utils/const';
import { RouterLink } from 'vue-router';
import JHButton from '../../components/pc/JHButton.vue';
import Footer from '../../components/pc/Footer.vue';
const pageStore = usePageStore();

onMounted(() => {
  document.title = "我们的产品";
  pageStore.pageNow = 2;
})
</script>

<template>
  <div id="body">
    <div class="title-style">
      <h1>我们的产品</h1>
    </div>

    <div class="product">
      <div
        class="product-item"
        v-for="product in products"
        v-bind:style="{ 'grid-column': product.wh[0], 'grid-row': product.wh[1] }"
      >
        <div class="product-title">{{ product.title }}</div>

        <div class="product-introduce">{{ product.introduce }}</div>

        <div class="product-img-list">
          <div v-for="item in product.img">
            <img class="product-img" :src="item[0]" />
            <div class="product-img-title">{{ item[1] }}</div>
          </div>
        </div>
      </div>
    </div>
    <router-link to="/department">
      <JHButton type="medium">
        我们的部门
        <img
          src="/photo/svg/右箭头.svg"
          data-v-5bbff373
          style="float: right; transform: scale(0.5);"
        />
      </JHButton>
    </router-link>
    <Footer />
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
  color: black;
  text-decoration: none;
}
body {
  margin: 0;
}
#body {
  background-color: #efefef;
  padding-top: 20vh;
}

.title-style {
  width: 20%;
  font-size: 10rpx;
  padding: 1% 0;
  margin: 0 15% 3%;
  background-color: #d20001;
  color: white;
  box-shadow: 0 5px 10px #999999;
}

.product {
  width: 70%;
  height: 170vh;
  margin: auto 15%;
  display: grid;
  grid-template-columns: 55% 45%;
  grid-template-rows: 42% 3% 48%;
  grid-gap: 1rem;
}
.product-item {
  background-color: white;
  box-shadow: 0 5px 10px #999999;
}
.product-title {
  /* height: 4rem; */
  font-size: 3vw;
  margin: 3rem;
  text-align: left;
}
.product-introduce {
  display: flex;
  justify-content: center;
  font-size: 1.5vw;
  line-height: 35px;
  width: 80%;
  text-indent: 2em;
  margin: auto auto;
  text-align: left;
  white-space: pre-line; /* 让\n有效 */
}
.product-img-list {
  display: flex;
  justify-content: space-evenly;
}
.product-img {
  height: 10vw;
  margin: 3rem auto 1rem auto;
  /* background-color: #D20001; */
  background-size: contain;
  background-repeat: no-repeat;
  max-width: 100%;
  max-height: 100%;
}
.product-img-title {
  font-size: 1vw;
  font-weight: bold;
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
  box-shadow: 0 5px 10px #999999;
}
</style>