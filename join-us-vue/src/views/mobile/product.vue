<script setup lang="ts">
import { ref } from "vue";
import { productsMobile, product_details } from "../../utils/const";
import { RouterLink } from "vue-router";
import Footer from "../../components/pc/Footer.vue";
const seen_pro = ref(false);
const seen = ref(false);
const now = ref(0);
function product_show(index: number) {
  seen_pro.value = true;
  now.value = index;
}
function product_hide() {
  seen_pro.value = false;
}

</script>
<template>
  <div id="body" ref="pronbit">
    <div class="title-style">我们的产品</div>
    <div class="product">
      <div
        v-for="product, index in productsMobile"
        class="product-list"
        @click="product_show(product.n)"
      >
        <div
          class="product-img img"
          v-bind:style="{ 'background-image': 'url(' + product.img + ')' }"
        ></div>
        <div class="product-title">{{ product.title }}</div>
        <div v-if="index !== 3" style="width: 100%; height: 0.2rem; background-color: #efefef"></div>
      </div>

      <div v-if="seen_pro" class="product_detail">
        <div class="detail">
          <div class="mengban" @click="product_hide"></div>
          <pronbitdiv
            class="detail-img img"
            v-bind:style="{ 'background-image': 'url(' + product_details[now].img + ')' }"
          ></pronbitdiv>
          <div class="detail-title">{{ product_details[now].title }}</div>
          <div class="detail-content">{{ product_details[now].content }}</div>
          <div class="product-button" v-on:click="product_hide"></div>
        </div>
      </div>
    </div>

    <router-link to="/m/department">
      <div class="department">
        <div class="department-button">
          我们的部门
          <img src="/photo/svg/右箭头.svg" style="float: right;" />
        </div>
      </div>
    </router-link>
  </div>
  <Footer />
</template>
<style scoped>
* {
  text-align: center;
}
body {
  margin: 0;
}
a {
  color: black;
  text-decoration: none;
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
#body {
  padding-top: 4rem;
  margin: auto;
  background-color: #efefef;
  padding-bottom: 2rem;
}
.img {
  background-size: cover;
  background-repeat: no-repeat;
  max-width: 100%;
  max-height: 100%;
}
.product {
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  padding: 1rem 2rem;
  background-color: white;
  border-radius: 1rem;
  box-shadow: 0 1px 5px #999999;
}
.product-list {
  width: 90%;
  height: 30vw;

  background-color: white;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}
.product-img {
  width: 20vw;
  height: 20vw;
  /* margin: 2rem 0; */
  border-radius: 50%;
  float: left;
  box-shadow: 0 1px 5px #999999;
}
.product-title {
  margin-right: 0vw;
  line-height: 8vw;
  height: 8vw;
  width: 30vw;
  color: #d20001;
  border: 0.6vw solid #d20001;
  border-radius: 0.2rem;
  float: left; /* 加了这句话就好了 */
}

.product_detail {
  position: fixed;
  left: 0rem;
  bottom: 0;
  width: 100%;
  height: 120vw;
  background: white;
  border-radius: 1rem;
  transition: left linear 0.3s;
  z-index: 1;
}
.detail {
  margin: auto;
  width: 70%;
  height: 100%;
}
.mengban {
  position: fixed;
  top: 0;
  bottom: 120vw;
  left: 0;
  right: 0;
  width: 100vw;
  height: calc(100vh - 120vw);
  background-color: black;
  /* filter: Alpha(Opacity=60); */
  opacity: 0.6;
  z-index: -1;
}
.detail-img {
  width: 25vw;
  height: 25vw;
  margin: 1rem auto 0;
  border-radius: 50%;
}
.detail-title {
  font-size: xx-large;
  width: auto;
  height: auto;
  margin: 0.5rem auto;
  padding-bottom: 0.5rem;
  border-bottom: 0.3rem solid #d20001;
}
.detail-content {
  width: auto;
  height: 35%;
  text-align: left;
  font-size: 15px;
  text-indent: 2em;
}

.product-button {
  position: fixed;
  bottom: 10px;
  left: 0;
  right: 0;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  margin: 10px auto;
  background-image: url(/photo/svg/返回.svg);
  background-color: white;
  background-size: cover;
  background-position: center;
}

.department {
  margin: 2rem auto 0;
  width: 80%;
  height: 3rem;
  position: relative;
}
.department-button {
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
  box-shadow: 0 1px 5px #999999;
}

#nav * {
  border-radius: 0;
}
.button-on {
  position: relative;
  float: right;
  top: 1rem;
  right: 1rem;
  height: 2rem;
  width: 2rem;
  background-image: url(/photo/svg/mulu.svg);
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
  background-image: url(/photo/svg/关闭.svg);
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