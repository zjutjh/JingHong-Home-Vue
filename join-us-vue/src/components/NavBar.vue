<script lang="ts" setup>
import { onMounted, ref, watch } from 'vue';
import { usePageStore } from '../stores/pages';
import { RouterLink } from 'vue-router';
const base = ref<HTMLDivElement>();
const isAtTop = ref<boolean>(true);
const pageStore = usePageStore();
const btnOn = ref<boolean>(false);
const listShow = ref<boolean>(false);
const oldScrollPosition = ref<number>(0);
const hide = ref<boolean>(false);

function handleScroll() {
  let nowScrollPosition = window.pageYOffset;
  if (nowScrollPosition < 300) {
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
  window.addEventListener('scroll', handleScroll);
  oldScrollPosition.value = 0;
})

const links = [
  { name: '首页', link: '/index' },
  { name: '我们的故事', link: '/story' },
  { name: '我们的产品', link: '/product' },
  { name: '我的的部门', link: '/department' },
  { name: '加入我们', link: '/join' },
]

function listBtnClicked() {
  btnOn.value = !btnOn.value;
  listShow.value = !listShow.value;
}

</script>
<template>
  <div
    :class="isAtTop ? 'atTop' : 'notAtTop', pageStore.pageType, hide ? 'hide' : ''"
    class="base"
    ref="base"
  >
    <img class="logo" :class="pageStore.pageType" src="/photo/top/logo.png" />
    <div
      v-for="(l, index) in links"
      class="link"
      :class="index == pageStore.pageNow ? 'select' : 'notSelect'"
      v-show="pageStore.pageType == 'normal'"
    >
      <router-link :to="l.link">{{ l.name }}</router-link>
    </div>
    <div
      class="listButton"
      :class="btnOn ? 'btnOn' : 'btnOff'"
      v-show="pageStore.pageType == 'mini' || pageStore.pageType == 'middle'"
      @click="listBtnClicked"
    ></div>

    <div class="list" :class="pageStore.pageType" v-show="listShow">
      <div
        v-for="(l, index) in links"
        class="listItem"
        :class="index == pageStore.pageNow ? 'select' : 'notSelect'"
      >
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
  /* transition: background linear 0.2s; */
  top: 0;
}
.base.normal {
  height: 90px;
  grid-template-columns: 30% repeat(5, 1fr);
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
}
.link.select a {
  color: #d20001;
}
.link.select::after {
  display: block;
  content: "";
  /* width: 30px; */
  width: 100%;
  position: relative;
  /* bottom: -10px; */
  /* bottom: 10x; */
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
  z-index: 10;
  position: absolute;
  top: 50px;
  background-color: white;
  align-items: center;
  justify-items: center;
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