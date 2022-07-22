<script lang="ts" setup>
import { onMounted, reactive } from "vue";

interface Props {
  imgs: string[];
}
const props = defineProps<Props>();
const carouselClass = reactive(["left", "center", "right"]);
var touchStartPosition = 0;
var touchEndPosition = 0;
var timer: number;

function _resetTimer() {
  clearInterval(timer);
  timer = window.setInterval(() => {
    after();
  }, 3000);
}

function before() {
  _resetTimer();
  let first = carouselClass.shift() as string;
  carouselClass.push(first);
}
function after() {
  _resetTimer();
  let last = carouselClass.pop() as string;
  carouselClass.unshift(last);
}

function changePicture(e: MouseEvent) {
  if (
    ((e.target as HTMLElement).parentNode as HTMLElement).classList.contains(
      "left"
    )
  ) {
    before();
  } else if (
    ((e.target as HTMLElement).parentNode as HTMLElement).classList.contains(
      "right"
    )
  ) {
    after();
  } else {
    return false;
  }
}

function touchStart(e: TouchEvent) {
  touchStartPosition = e.touches[0].clientX;
  touchEndPosition = e.touches[0].clientX;
}
function touchMove(e: TouchEvent) {
  touchEndPosition = e.touches[0].clientX;
}
function touchEnd(e: TouchEvent) {
  if (
    touchEndPosition - touchStartPosition > 0 &&
    Math.abs(touchEndPosition - touchStartPosition) > 50
  ) {
    before();
  } else if (
    touchEndPosition - touchStartPosition < 0 &&
    Math.abs(touchEndPosition - touchStartPosition) > 50
  ) {
    after();
  }
}
onMounted(() => {
  for (var i = 0; i < props.imgs.length - 3; i++) {
    carouselClass.push("after");
  }

  timer = window.setInterval(() => {
    after();
  }, 3000);
});
</script>

<style scoped>
* {
  border-radius: 15px;
}

.carousel {
  margin: 1.5rem auto;
  width: 100%;
  /* height: 8rem; */
  border-radius: 0;
  overflow: hidden;
}

.carousel::after {
  display: block;
  content: "";
  width: 90%;
  margin: 0 auto;
  border-bottom: 0.2rem solid #efefef;
  padding-bottom: 2rem;
}

.carousel .whole {
  width: 60%;
  height: 30vw;
  max-height: 600px;
  margin: 0 auto;
}

.carousel .whole .roll-img {
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
}

ul {
  margin: 0;
  list-style: none;
}

ul li {
  position: absolute;
  width: 100%;
  height: 100%;
  cursor: pointer;
}

.carousel img {
  width: 100%;
  height: 100%;
  margin: auto;
  /* object-fit: cover; */
}

.left {
  left: -55vw;
  transform: scale(0.8);
  z-index: -1;
  background: rgb(0, 0, 0);
  transition: all 0.5s ease;
}

.center {
  z-index: 1;
  left: 0;
  top: 0;
  bottom: 10%;
  transition: all 0.5s ease;
}

.right {
  left: 55vw;
  transform: scale(0.8);
  z-index: -1;
  background: rgb(0, 0, 0);
  transition: all 0.5s ease;
}

.after {
  left: 0;
  top: 0;
  visibility: hidden;
  transform: scale(0);
  z-index: -3;
}

.left div,
.right div {
  z-index: 5;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
  left: 0;
  top: 0;
  transition: all 0.3s ease;
}
</style>

<template>
  <div
    class="carousel"
    @touchstart="touchStart($event)"
    @touchmove="touchMove($event)"
    @touchend="touchEnd($event)"
  >
    <div class="whole">
      <div class="roll-img">
        <ul type>
          <li
            @click="changePicture($event)"
            v-for="(item, index) in props.imgs"
            :class="carouselClass[index]"
          >
            <img :src="item" />
            <div></div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
