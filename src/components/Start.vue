<script lang="ts" setup>
import { onMounted, ref } from "vue";
import { usePageStore } from "../stores/pages";
const pageStore = usePageStore();
const loaded = ref<boolean>(false);
onMounted(() => {
  loaded.value = true;
});
</script>
<template>
  <div
    class="start"
    :class="[pageStore.pageType, loaded ? 'loaded' : 'unloaded']"
  >
    <div class="title1" :class="pageStore.pageType">精弘网络,取精用弘</div>
    <img class="downArrow" src="https://download.tooc.xlj0.com/uploads/22/jhhome/public/photo/svg/downArrow.svg" />
  </div>
</template>

<style scoped>
@font-face {
  font-family: "song";
  src: url("https://download.tooc.xlj0.com/uploads/22/jhhome/public/font/逐浪雅宋体.ttf");
}
.start {
  background-position: 0 0;
  max-width: 100%;
  max-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.start.normal {
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(https://download.tooc.xlj0.com/uploads/22/jhhome/public/photo/index/startPc2.jpg) no-repeat center;
  background-size: cover;
  height: 100vh;
}
.start.middle {
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(https://download.tooc.xlj0.com/uploads/22/jhhome/public/photo/index/startPc.jpg) no-repeat center;
  background-size: cover;
  height: 100vh;
}
.start.mini {
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(https://download.tooc.xlj0.com/uploads/22/jhhome/public/photo/index/startMobile.jpg) no-repeat center;
  background-size: cover;
  height: 100vh;
}

.title1 {
  color: white;
  font-family: "song";
  margin: auto;
  display: block;
}
.title1.normal {
  font-size: 6vw;
  letter-spacing: 1vw;
  padding: 10px;
}

.title1.middle {
  font-size: 6vw;
  letter-spacing: 1vw;
  padding: 10px;
}
.title1.mini {
  font-size: x-large;
  letter-spacing: 10px;
}
.downArrow {
  /* margin: auto; */
  position: absolute;
  bottom: 50px;
  width: 50px;
  height: 50px;
}
</style>
