<script lang="ts" setup>
import { computed, onMounted, ref, watch } from "vue";
import { usePageStore } from "../stores/pages";
import { RouterLink } from "vue-router";
import store from "../stores/store";
import { storeToRefs } from "pinia";
import router from "../router";
const base = ref<HTMLDivElement>();
const isAtTop = ref<boolean>(true);
const pageStore = usePageStore(store);
const btnOn = ref<boolean>(false);
const listShow = ref<boolean>(false);
const oldScrollPosition = ref<number>(0);
const hide = ref<boolean>(false);
const { pageNow } = storeToRefs(pageStore);
watch(pageNow, () => {
  handleScroll();
});
function handleScroll() {
  let nowScrollPosition = window.pageYOffset;
  if (nowScrollPosition < 300 && pageStore.pageNow == 0) {
    isAtTop.value = true;
  } else {
    isAtTop.value = false;
  }
  if (nowScrollPosition > oldScrollPosition.value) {
    hide.value = true;
    oldScrollPosition.value = nowScrollPosition;
  } else {
    hide.value = false;
    oldScrollPosition.value = nowScrollPosition;
  }
}

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
  oldScrollPosition.value = 0;
});

const links = [
  { name: "首页", link: "/index" },
  { name: "我们的故事", link: "/story" },
  { name: "我们的产品", link: "/product" },
  { name: "我们的部门", link: "/department" },
  { name: "加入我们", link: "/join" },
];

function listBtnClicked() {
  btnOn.value = !btnOn.value;
  listShow.value = !listShow.value;
}

function logoClicked() {
  router.push("/index");
}
</script>
<template>
  <div :class="[
    isAtTop && pageStore.pageNow == 0 && btnOn == false
      ? 'atTop'
      : 'notAtTop',
    pageStore.pageType,
    hide ? 'hide' : '',
  ]" class="base" ref="base">
    <img class="logo" :class="pageStore.pageType" src="https://download.tooc.xlj0.com/uploads/22/jhhome/public/photo/top/logo.png" @click="logoClicked" />
    <div v-for="(l, index) in links" class="link" :class="index == pageStore.pageNow ? 'select' : 'notSelect'"
      v-show="pageStore.pageType == 'normal'">
      <router-link :to="l.link">{{ l.name }}</router-link>
    </div>
    <div class="listButton" :class="btnOn ? 'btnOn' : 'btnOff'"
      v-show="pageStore.pageType == 'mini' || pageStore.pageType == 'middle'" @click="listBtnClicked"></div>

    <div class="list" :class="pageStore.pageType" v-show="listShow">
      <div v-for="(l, index) in links" class="listItem" :class="index == pageStore.pageNow ? 'select' : 'notSelect'"
        @click="listBtnClicked">
        <router-link :to="l.link">{{ l.name }}</router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
@font-face {
  font-family: "song";
  src: url("https://download.tooc.xlj0.com/uploads/22/jhhome/public/font/逐浪雅宋体.ttf");
}

@keyframes showList {
  from {
    top: -100%;
    z-index: -1;
  }

  to {
    top: 100%;
  }
}

* {
  font-family: "song";
}

a {
  text-decoration: none;
  color: white;
  font-size: large;
}

.atTop {
  background: transparent;
  transition: background linear 0.2s;
}

.notAtTop {
  background-color: #d20001;
  transition: background linear 0.2s;
}

.base {
  z-index: 10;
  display: grid;
  width: 100%;
  color: white;
  position: fixed;
  align-items: center;
  transition: top linear 0.4s, background linear 0.2s;
  top: 0;
}

.base.normal {
  height: 90px;
  grid-template-columns: 30% repeat(5, 1fr);
}

.base.middle {
  height: 90px;
  grid-template-columns: 1fr 60px;
}

.base.mini {
  height: 50px;
  grid-template-columns: 1fr 60px;
}

.base.hide {
  top: -100px;
  transition: top linear 0.4s, background linear 0.2s;
  /* transition: background linear 0.2s; */
}

.logo.normal {
  width: 200px;
  transform: scale(0.8);
}

.logo.middle {
  width: 200px;
  transform: scale(0.8);
}

.logo.mini {
  width: 120px;
  transform: scale(0.8);
}

.link.select {
  background-color: white;
  border-radius: 20px;
  padding: 5px;
  transition: background-color 0.5s;
}

.link.select a {
  color: #d20001;
}

.link.select::after {
  display: block;
  content: "";
  width: 100%;
  position: relative;
  top: 20px;
  border-bottom: 3px solid white;
}

.link.notSelect a {
  color: white;
}

.listButton {
  width: 40px;
  height: 40px;
}

.listButton.btnOn {
  background-image: url("https://download.tooc.xlj0.com/uploads/22/jhhome/public/photo/svg/close.svg");
  background-repeat: no-repeat;
  background-position: center;
}

.listButton.btnOff {
  background-image: url("https://download.tooc.xlj0.com/uploads/22/jhhome/public/photo/svg/list.svg");
  background-repeat: no-repeat;
  background-position: center;
}

.list {
  width: 100%;
  height: 100vh;
  z-index: 5;
  position: absolute;
  top: 50px;
  background-color: white;
  align-items: center;
  justify-items: center;
  animation: showList 0.1s ease;
}

.list.middle {
  top: 90px;
}

.list .listItem {
  width: 40%;
  margin: auto;
  margin-top: 20px;
  padding: 5px;
  border: 2px solid;
  border-radius: 15px;
  border-color: #d20001;
}

.list .listItem.select {
  background-color: #d20001;
  color: white;
}

.list .listItem.notSelect {
  background-color: white;
}

.list .listItem.notSelect a {
  color: #d20001;
}
</style>
