<script setup lang="ts">
import { onMounted, reactive } from 'vue';
export interface Card {
  img: string;
  introduction: string;
  content: string;
}
interface Props {
  card: Card[];
  type: string;
}
const props = defineProps<Props>();
const carouselClass = reactive(['left', 'center', 'right']);
function after() {
  let first = carouselClass.shift() as string;
  carouselClass.push(first);
}
function before() {
  let last = carouselClass.pop() as string;
  carouselClass.unshift(last);
}
function touchStart(e: TouchEvent) {

}
function touchMove(e: TouchEvent) {

}
onMounted(() => {
  for (var i = 0; i < props.card.length - 3; i++) {
    carouselClass.push('after');
  }
})
</script>
<style scoped>
* {
  border-radius: 15px;
}

.carousel {
  position: relative;
  width: 90%;
  margin: auto;
}
.carousel {
  height: 600px;
}
.carousel.mini {
  height: 800px;
}

.carousel .whole {
  position: relative;
  width: 80%;
  height: 100%;
  overflow: visible;
  margin: 2rem auto 0;
}
ul {
  position: relative;
  margin: auto;
  top: 8rem;
  width: 31%;
  height: 100%;
  overflow: visible;
  margin: auto;
  list-style: none;
}
ul.mini,
ul.middle {
  width: 70%;
  height: 100%;
  overflow: visible;
  margin: auto;
  list-style: none;
}
ul li {
  position: absolute;
  width: 100%;
  height: 100%;
}
.carousel .img {
  width: 100%;
  height: 30%;
  max-height: 200px;
  border-radius: 0;
  background-size: contain;
  margin: auto;
  background-repeat: no-repeat;
  background-position: center;
}
.left {
  left: -110%;
  z-index: 0;
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
  left: 110%;
  z-index: 0;
  transition: all 0.5s ease;
}

.left.mini,
.right.mini,
.left.middle,
.right.middle {
  display: none;
}
.after {
  left: 0;
  top: 0;
  visibility: hidden;
  transform: scale(0);
  z-index: -1;
}
.left-btn {
  width: 10vw;
  height: 10vw;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 90%;
  margin: auto;
  margin: auto;
  background: center/cover no-repeat url(/photo/svg/右箭头红.svg);
  transform: rotate(180deg);
  cursor: pointer;
}
.right-btn {
  width: 10vw;
  height: 10vw;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 90%;
  margin: auto;
  background: center/cover no-repeat url(/photo/svg/右箭头红.svg);
  cursor: pointer;
}

.card {
  display: inline-block;
  width: 100%;
  height: 100%;
  background-color: white;
  overflow: hidden;
  box-shadow: 0 5px 10px #999999;
}
.card .introduction {
  width: 100%;
  /* height: 15%; */
  text-align: left;
  white-space: pre-line; /* 让\n有效 */
  border-radius: 0;
  margin: 20px;
  font-size: 20px;
}
.card .introduction::first-line {
  font-size: 30px;
  font-weight: border;
}
.card .content {
  font-size: 12px;
  text-align: left;
  white-space: pre-wrap;
  border-radius: 0;
  margin: 20px;
  text-indent: 2em;
  word-wrap: break-word;
  word-break: break-all;
  overflow: hidden;
}
</style>
<template>
  <div
    class="carousel"
    :class="type"
    @touchstart="touchStart($event)"
    @touchend="touchMove($event)"
  >
    <div class="whole">
      <ul type :class="type">
        <li class="card" :class="carouselClass[index], type" v-for="(item, index) in props.card">
          <div class="img" v-bind:style="{ 'background-image': 'url(' + item.img + ')' }"></div>
          <div class="introduction">{{ item.introduction }}</div>
          <div class="content">
            <span>{{ item.content }}</span>
          </div>
        </li>
      </ul>
    </div>
    <div class="left-btn" :class="type" @click.native="after"></div>
    <div class="right-btn" :class="type" @click.native="before"></div>
  </div>
</template>