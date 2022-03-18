<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { RouterLink } from 'vue-router';
import router from '../../router';
import { usePageStore } from '../../stores/pages';
const store = usePageStore();
const initialScrollTop = ref(0);
const show = ref(true);
const hide = ref(false);
const slideNav = ref("mob_Nav-hide");
const seen = ref(true);
const pages = [
  { name: "首页", href: "/m/index" },
  { name: "我们的故事", href: "/m/story" },
  { name: "我们的产品", href: "/m/product" },
  { name: "我们的部门", href: "/m/department" },
  { name: "加入我们", href: "/m/join" },
];
function scrolling() {
  // alert("Scrolling")
  let scrollTop = window.pageYOffset
    || document.documentElement.scrollTop
    || document.body.scrollTop;
  let scrollStep = scrollTop - initialScrollTop.value;
  initialScrollTop.value = scrollTop;
  if (scrollStep <= 0) {
    show.value = true;
    hide.value = false;
    // console.log("Scrolling Up")
  } else {
    // console.log("Scrolling Down")
    show.value = false;
    hide.value = true;
  }
}

function logoClicked() {
  router.push('/index');
}
function show1() {
  slideNav.value = "mob_Nav-show";
  seen.value = false;
}
function hide1() {
  slideNav.value = "mob_Nav-hide";
  seen.value = true;
}
onMounted(() => {
  initialScrollTop.value = window.pageYOffset
    || document.documentElement.scrollTop
    || document.body.scrollTop;
  window.addEventListener("scroll", scrolling);
})

</script>

<template>
  <div id="nav">
    <div
      v-bind:class="{ mob_topshow: show, mob_tophide: hide }"
      :style="{ 'background': initialScrollTop < 1 ? 'transparent' : '#D20001', 'box-shadow': initialScrollTop < 1 ? '' : '0 5px 10px #999999' }"
    >
      <img class="img" src="/photo/top/logo.png" v-show="seen" />
      <div class="button-on" @click="show1" @touchmove.prevent v-show="seen"></div>
    </div>
    <div v-bind:class="slideNav" @touchmove.prevent @mousewheel.prevent>
      <div
        v-bind:class="{ mob_topshow: show, mob_tophide: hide }"
        :style="{ 'background': '#D20001' }"
      >
        <div class="button-off" @click="hide1" v-show="!seen"></div>
        <img class="img" src="/photo/top/logo.png" v-show="!seen" />
      </div>
      <div class="mob-nav-list">
        <div v-for="page in pages">
          <router-link :to="page.href" @click="hide1">{{ page.name }}</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
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

.mob_topshow {
  position: fixed;
  left: 0;
  top: 0rem;
  width: 100%;
  height: 4rem;
  /* background: #d20001; */
  transition: top linear 0.3s;
  z-index: 1000000;
  /* box-shadow: 0 1px 5px #999999; */
}
.mob_topshow img {
  margin: auto;
}
.mob_tophide {
  position: fixed;
  left: 0;
  top: -8rem;
  width: 100%;
  height: 4rem;
  /* background: #d20001; */
  transition: top linear 0.3s;
  z-index: 1000000;
  box-shadow: 0 1px 5px #999999;
}
.mob_Nav-hide {
  position: fixed;
  left: 0;
  top: -100%;
  width: 100%;
  height: 100%;
  background: white;
  transition: left linear 0.3s;
}
.mob_Nav-show {
  position: fixed;
  left: 0rem;
  top: 0;
  width: 100%;
  height: 100%;
  background: white;
  transition: left linear 0.3s;
  z-index: 1000001;
}

.mob-nav-list {
  margin: 4rem 4%;
  width: 92%;
  height: 45%;
}
.mob-nav-list div {
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  margin: 0;
  border-bottom: 0.1rem solid #efefef;
}
a {
  color: black;
}
</style>