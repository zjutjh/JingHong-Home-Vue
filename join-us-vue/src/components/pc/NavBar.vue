<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import { RouterLink } from 'vue-router';
import router from '../../router';
import { usePageStore } from '../../stores/pages';
const pageStore = usePageStore();
const initialScrollTop = ref(0);
const show = ref(true);
const hide = ref(false);
const top = ref(true);

const pages = [
  { name: "首页", href: "/index" },
  { name: "我们的故事", href: "/story" },
  { name: "我们的产品", href: "/product" },
  { name: "我们的部门", href: "/department" },
  { name: "加入我们", href: "/join" },
];

function scrolling() {
  let scrollTop = window.pageYOffset
    || document.documentElement.scrollTop
    || document.body.scrollTop;
  let scrollStep = scrollTop - initialScrollTop.value;
  initialScrollTop.value = scrollTop;
  if (scrollStep <= 0) {
    show.value = true;
    hide.value = false;
  } else {
    show.value = false;
    hide.value = true;
  }
}

function logoClicked() {
  router.push('/index');
}
function changePage(index: number) {
  console.log(initialScrollTop.value, pageStore.pageNow)
  if (initialScrollTop.value == 0 && index == 0) {
    top.value = true;
  } else {
    top.value = false;
  }
}

watch(initialScrollTop, (newValue, oldValue) => {
  if (newValue == 0) {
    if (pageStore.pageNow == 0) {
      top.value = true;
    }
  } else {
    top.value = false;
  }
})

onMounted(() => {
  initialScrollTop.value = window.pageYOffset
    || document.documentElement.scrollTop
    || document.body.scrollTop;
  window.addEventListener("scroll", scrolling);
})

</script>

<template>
  <div :class="{ topShow: show && !top, topHide: hide, atTop: top }">
    <img src="/photo/top/logo.png" @click.native="logoClicked" />
    <nav>
      <div class="nav-list">
        <div
          v-for="page, index in pages"
          :class="pageStore.pageNow == index ? 'page_selected' : 'page_unselected'"
        >
          <router-link :to="page.href" @click="changePage(index)">{{ page.name }}</router-link>
        </div>
      </div>
    </nav>
  </div>
</template>

<style scoped>
* {
  font-size: x-large;
}
a {
  text-decoration: none;
}
.atTop {
  position: fixed;
  left: auto;
  top: 0rem;
  width: 100%;
  min-width: 1200px;
  height: 16vh;
  transition: top linear 0.3s;
  border-radius: 0;
  background: transparent;
  /* background-color: #ffffff; */
  z-index: 10;
}
.topShow {
  position: fixed;
  left: auto;
  top: 0rem;
  width: 100%;
  height: 16vh;
  transition: top linear 0.3s;
  border-radius: 0;
  background-color: #d20001;
  z-index: 10;
  box-shadow: 0 5px 10px #999999;
  min-width: 1200px;
}
.atTop img,
.topShow img,
.topHide img {
  float: left;
  transform: scale(0.8);
  width: 20%;
}

.topHide {
  position: fixed;
  left: 0;
  top: -16vh;
  width: 100%;
  height: 16vh;
  /* background: white; */
  transition: top linear 0.3s;
  border-radius: 0;
  background-color: #d20001;
  min-width: 1200px;
  z-index: 10;
}
img {
  float: left;
  height: 100%;
}

nav {
  width: 70%;
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
  position: relative;
  border-radius: 8vh;
  font-size: 18px;
  margin: 1rem;
  padding: 3px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
.page_unselected a {
  color: white;
  font-family: song;
  text-align: center;
  line-height: 18px;
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
  bottom: -10px;
  border-bottom: 3px solid white;
}
</style>