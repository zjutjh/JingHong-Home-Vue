<script lang="ts" setup>
interface Props {
  imgs: string[];
}
const props = defineProps<Props>();
const carouselClass = reactive(["left", "center", "right"]);
const touchStartPosition = ref(0);
const touchEndPosition = ref(0);
const timer = ref<number | undefined>(undefined);

function _resetTimer() {
  if (timer.value !== undefined) {
    clearInterval(timer.value);
  }
  timer.value = window.setInterval(() => {
    toNext();
  }, 3000);
}

function toPrevious() {
  _resetTimer();
  const first = carouselClass.shift() as string;
  carouselClass.push(first);
}
function toNext() {
  _resetTimer();
  const last = carouselClass.pop() as string;
  carouselClass.unshift(last);
}

function changePicture(e: MouseEvent) {
  const targetClassList = ((e.target as HTMLElement).parentNode as HTMLElement).classList;
  if (targetClassList.contains("left")) {
    toPrevious();
  } else if (targetClassList.contains("right")) {
    toNext();
  } else {
    return false;
  }
}

function touchStart(e: TouchEvent) {
  if (e.touches[0]) {
    touchStartPosition.value = e.touches[0].clientX;
    touchEndPosition.value = e.touches[0].clientX;
  }
}
function touchMove(e: TouchEvent) {
  if (e.touches[0]) {
    touchEndPosition.value = e.touches[0].clientX;
  }
}
function touchEnd() {
  if (Math.abs(touchEndPosition.value - touchStartPosition.value) > 50) {
    if (touchEndPosition.value > touchStartPosition.value) toPrevious();
    else toNext();
  }
}
onMounted(() => {
  for (let i = 0; i < props.imgs.length - 3; i++) {
    carouselClass.push("after");
  }

  timer.value = window.setInterval(() => {
    toNext();
  }, 3000);
});

onUnmounted(() => {
  if (timer.value !== undefined) {
    clearInterval(timer.value);
  }
});
</script>

<template>
  <div
    class="carousel"
    @touchstart="touchStart($event)"
    @touchmove="touchMove($event)"
    @touchend="touchEnd()"
  >
    <div class="whole">
      <div class="roll-img">
        <ul type>
          <li
            v-for="(item, index) in props.imgs"
            :key="item"
            :class="carouselClass[index]"
            @click="changePicture($event)"
          >
            <NuxtImg :src="item" :alt="'轮播图 ' + (index + 1)" />
            <div />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
* {
  border-radius: var(--radius-lg);
}

.carousel {
  margin: 1.5rem auto;
  border-radius: 0;
  width: 100%;
  overflow: hidden;
  touch-action: pan-y;

  &::after {
    display: block;
    margin: 0 auto;
    border-bottom: 0.2rem solid #efefef;
    padding-bottom: 2rem;
    width: 90%;
    content: "";
  }

  .whole {
    margin: 0 auto;
    width: 60%;
    height: 30vw;
    max-height: 600px;

    .roll-img {
      position: relative;
      transform-style: preserve-3d;
      width: 100%;
      height: 100%;
    }
  }

  img {
    margin: auto;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

ul {
  margin: 0;
  list-style: none;

  li {
    position: absolute;
    cursor: pointer;
    width: 100%;
    height: 100%;
  }
}

.left {
  left: -55vw;
  transform: scale(0.8);
  z-index: -1;
  transition: all 0.5s ease;
  background: rgb(0, 0, 0);
}

.center {
  top: 0;
  bottom: 10%;
  left: 0;
  z-index: 1;
  transition: all 0.5s ease;
}

.right {
  left: 55vw;
  transform: scale(0.8);
  z-index: -1;
  transition: all 0.5s ease;
  background: rgb(0, 0, 0);
}

.after {
  top: 0;
  left: 0;
  transform: scale(0);
  visibility: hidden;
  z-index: -3;
}

.left div,
.right div {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 5;
  transition: all 0.3s ease;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
}
</style>
