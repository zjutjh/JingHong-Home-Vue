<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { RouterLink } from 'vue-router';
import router from '../../router';
import { usePageStore } from '../../stores/pages';
const store = usePageStore();
// const props = defineProps(['pageNow'])

// Should use State Manager.
// Should use one var to include following vars.
const initialScrollTop = ref(0);
const show = ref(true);
const hide = ref(false);

const pages = [
  { name: "首页", href: "/index" },
  { name: "我们的故事", href: "/story" },
  { name: "我们的产品", href: "/product" },
  { name: "我们的部门", href: "/department" },
  { name: "加入我们", href: "/join" },
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

onMounted(() => {
  initialScrollTop.value = window.pageYOffset
    || document.documentElement.scrollTop
    || document.body.scrollTop;
  window.addEventListener("scroll", scrolling);
})

</script>

<template>
  <div :class="{ topShow: show, topHide: hide }">
    <img src="photo/top/logo.png" @click.native="logoClicked" />
    <nav>
      <div class="nav-list">
        <div
          v-for="page, index in pages"
          :class="store.pageNow == index ? 'page_selected' : 'page_unselected'"
        >
          <!-- TODO : Should not us a. -->
          <!-- <a :href="page.href" style="height: 100%">{{ page.name }}</a> -->
          <router-link :to="page.href">{{ page.name }}</router-link>
        </div>
      </div>
    </nav>
  </div>
</template>

<style>
a {
  text-decoration: none;
}
.topShow {
  position: sticky;
  /* left: 0; */
  left: auto;
  top: 0rem;
  width: 100%;
  min-width: 900px;
  height: 96px;
  transition: top linear 0.3s;
  border-radius: 0;
  background-color: #d20001;
  z-index: 10;
}
.topShow img,
.topHide img {
  width: 139px;
  height: 58px;
  margin-top: 20px;
  margin-left: 36px;
  float: left;
  transform: scale(1.2);
}
.topHide {
  position: sticky;
  left: 0;
  top: -16vh;
  width: 100%;
  min-width: 1000px;
  height: 16vh;
  /* background: white; */
  transition: top linear 0.3s;
  border-radius: 0;
  background-color: #d20001;

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