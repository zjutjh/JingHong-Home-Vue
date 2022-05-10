<script lang="ts" setup>
import { computed, onMounted, ref, watch } from 'vue';
import { usePageStore } from '../stores/pages';
import { RouterLink } from 'vue-router';
import store from "../stores/store";
import { storeToRefs } from 'pinia';
import router from '../router';
const base = ref<HTMLDivElement>();
const pageStore = usePageStore(store);
const btnOn = ref<boolean>(false);
const listShow = ref<boolean>(false);
const oldScrollPosition = ref<number>(0);
const hide = ref<boolean>(false);
const { pageAdminNow } = storeToRefs(pageStore);
watch(pageAdminNow, () => {
  handleScroll();
})
function handleScroll() {
  let nowScrollPosition = window.pageYOffset;
  if (nowScrollPosition > oldScrollPosition.value) {
    hide.value = true;
    oldScrollPosition.value = nowScrollPosition;
  } else {
    hide.value = false;
    oldScrollPosition.value = nowScrollPosition;
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  oldScrollPosition.value = 0;
})

const links = [
  { name: '总览', link: '/admin/total' },
  { name: '详细', link: '/admin/detail' },
]

function listBtnClicked() {
  btnOn.value = !btnOn.value;
  listShow.value = !listShow.value;
}

function logoClicked() {
  router.push('/index');
}
</script>
<template>
  <div :class="pageStore.pageType, hide ? 'hide' : ''" class="base" ref="base">
    <img class="logo" :class="pageStore.pageType" src="/photo/top/logo.png" @click="logoClicked" />
    <div v-for="(l, index) in links" class="link" :class="index == pageStore.pageAdminNow ? 'select' : 'notSelect'"
      v-show="pageStore.pageType == 'normal'">
      <router-link :to="l.link">{{ l.name }}</router-link>
    </div>
    <div class="listButton" :class="btnOn ? 'btnOn' : 'btnOff'"
      v-show="pageStore.pageType == 'mini' || pageStore.pageType == 'middle'" @click="listBtnClicked"></div>

    <div class="list" :class="pageStore.pageType" v-show="listShow">
      <div v-for="(l, index) in links" class="listItem"
        :class="index == pageStore.pageAdminNow ? 'select' : 'notSelect'" @click="listBtnClicked">
        <router-link :to="l.link">{{ l.name }}</router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
@font-face {
  font-family: "song";
  src: url("/font/逐浪雅宋体.ttf");
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


.base {
  z-index: 10;
  display: grid;
  width: 100%;
  color: white;
  position: fixed;
  align-items: center;
  transition: top linear 0.4s, background linear 0.2s;
  /* transition: background linear 0.2s; */
  background-color: #d20001;
  top: 0;
}

.base.normal {
  height: 90px;
  grid-template-columns: 70% repeat(2, 1fr);
}

.base.middle {
  height: 90px;
  grid-template-columns: 1fr 50px;
}

.base.mini {
  height: 50px;
  grid-template-columns: 1fr 50px;
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

.testDiv {
  width: 20px;
  height: 20px;
  background-color: white;
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
  width: 32px;
  height: 32px;
}

.listButton.btnOn {
  background-image: url("/photo/svg/close.svg");
  background-repeat: no-repeat;
  background-position: center;
}

.listButton.btnOff {
  background-image: url("/photo/svg/list.svg");
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
  /* transition: all 0.5s ease; */
  animation: showList 0.1s ease;
}

.list.middle {
  top: 90px;
}

.list .listItem {
  width: 40%;
  margin-inline: auto;
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