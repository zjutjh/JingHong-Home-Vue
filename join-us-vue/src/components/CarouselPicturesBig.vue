<script lang="ts" setup>
import { onMounted, reactive } from 'vue';

interface Props {
  imgs: string[];
}
const props = defineProps<Props>();
const carouselClass = reactive(['left', 'center', 'right']);
var timer: number;

function _resetTimer() {
  clearInterval(timer);
  timer = window.setInterval(() => {
    before();
  }, 3000);
}

function after() {
  _resetTimer();
  let first = carouselClass.shift() as string;
  carouselClass.push(first);
}
function before() {
  _resetTimer();
  let last = carouselClass.pop() as string;
  carouselClass.unshift(last);
}

function changePicture(e: MouseEvent) {
  if (((e.target as HTMLElement).parentNode as HTMLElement).classList.contains("left")) {
    after();
  } else if (((e.target as HTMLElement).parentNode as HTMLElement).classList.contains("right")) {
    before();
  } else {
    return false;
  }
}

function touchStart(e: TouchEvent) {

}
function touchMove(e: TouchEvent) {

}
onMounted(() => {
  for (var i = 0; i < props.imgs.length - 3; i++) {
    carouselClass.push('after');
  }

  timer = window.setInterval(() => {
    before();
  }, 3000);
})
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
  height: 35vw;
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
  margin: auto;
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
  <div class="carousel" @touchstart="touchStart($event)" @touchend="touchMove($event)">
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
