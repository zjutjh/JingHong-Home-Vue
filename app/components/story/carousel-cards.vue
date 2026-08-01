<script setup lang="ts">
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
const carouselClass = reactive(["left", "center", "right"]);
let touchStartPosition = 0;
let touchEndPosition = 0;

function toPrevious() {
  const first = carouselClass.shift() as string;
  carouselClass.push(first);
}
function toNext() {
  const last = carouselClass.pop() as string;
  carouselClass.unshift(last);
}

function touchStart(e: TouchEvent) {
  if (e.touches[0]) {
    touchStartPosition = e.touches[0].clientX;
    touchEndPosition = e.touches[0].clientX;
  }
}
function touchMove(e: TouchEvent) {
  if (e.touches[0]) {
    touchEndPosition = e.touches[0].clientX;
  }
}
function touchEnd() {
  if (Math.abs(touchEndPosition - touchStartPosition) > 50) {
    if (touchEndPosition > touchStartPosition) toPrevious();
    else toNext();
  }
}
onMounted(() => {
  for (let i = 0; i < props.card.length - 3; i++) {
    carouselClass.push("after");
  }
});
</script>

<template>
  <div
    class="carousel"
    :class="type"
    @touchstart="touchStart($event)"
    @touchmove="touchMove($event)"
    @touchend="touchEnd()"
  >
    <div class="left btn" :class="type" @click="toPrevious" />
    <ul :class="type">
      <li v-for="(item, index) in props.card" :key="index" :class="[carouselClass[index], type]">
        <div
          class="img"
          :style="{
            backgroundImage: 'url(' + useRuntimeConfig().public.cubeBaseURL + item.img + ')'
          }"
        />
        <div class="introduction">{{ item.introduction }}</div>
        <div class="content">
          <div>{{ item.content }}</div>
        </div>
      </li>
    </ul>
    <div class="right btn" :class="type" @click="toNext" />
  </div>
</template>

<style scoped lang="scss">
.carousel {
  position: relative;
  margin: 30px auto;
  width: 90%;
  touch-action: pan-y;

  &.normal,
  &.middle {
    height: 800px;
  }

  &.mini {
    height: 720px;
  }

  ul {
    position: relative;
    margin: auto;
    padding-inline-start: 0;
    height: 100%;
    list-style: none;

    &.normal {
      width: 25%;
    }

    &.mini,
    &.middle {
      width: 75%;
    }

    li {
      display: flex;
      position: absolute;
      flex-direction: column;
      box-shadow: var(--shadow-xl);
      border-radius: var(--radius-xl);
      background-color: var(--card-bg);
      width: 100%;
      height: 100%;
      overflow: hidden;

      @media (hover: hover) {
        transition: box-shadow 0.3s ease;

        &:hover {
          box-shadow: var(--shadow-2xl);

          .img {
            transform: scale(1.03);
          }
        }
      }

      .img {
        flex-shrink: 0;
        background: center/cover no-repeat;
        width: 100%;
        height: 30%;

        @media (hover: hover) {
          transition: transform 0.3s ease;
        }
      }

      .introduction {
        flex-shrink: 0;
        margin: 20px;
        width: 90%;
        color: var(--primary-color);
        font-size: 18px;
        text-align: left;
        white-space: pre-line;

        &::first-line {
          color: var(--text-title);
          font-weight: 700;
          font-size: 28px;
        }
      }

      .content {
        margin: 0 20px 20px;
        overflow: auto;
        font-size: 16px;
        text-align: left;
        text-indent: 2em;
        white-space: pre-wrap;
        -webkit-overflow-scrolling: touch;
        flex-grow: 1;
      }
    }

    .left,
    .right {
      opacity: 0.7;
      z-index: 0;
      transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .left {
      left: -110%;

      &.mini,
      &.middle {
        top: 0;
        bottom: 10%;
        left: 0;
        opacity: 1;
        z-index: 1;
        transition: none;
      }
    }

    .center {
      top: 0;
      bottom: 10%;
      left: 0;
      z-index: 1;
      transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);

      &.mini,
      &.middle {
        display: none;
      }
    }

    .right {
      left: 110%;

      &.mini,
      &.middle {
        display: none;
      }
    }

    .after {
      top: 0;
      left: 0;
      transform: scale(0);
      visibility: hidden;
      opacity: 0;
      z-index: -1;
    }
  }

  .btn {
    position: absolute;
    top: 50%;
    cursor: pointer;
    background: center/cover no-repeat url("#{$cubeBaseURL}ui/rightArrow_red.svg");
    width: 50px;
    height: 50px;

    @media (hover: hover) {
      transition:
        transform 0.2s ease,
        opacity 0.2s ease;

      &:hover {
        opacity: 1;
      }
    }

    &.left {
      left: 0;
      transform: translateY(-50%) rotate(180deg);

      @media (hover: hover) {
        &:hover {
          transform: translateY(-50%) rotate(180deg) scale(1.1);
        }
      }

      &:active {
        transform: translateY(-50%) rotate(180deg) scale(0.95);
      }
    }

    &.right {
      right: 0;
      transform: translateY(-50%);

      @media (hover: hover) {
        &:hover {
          transform: translateY(-50%) scale(1.1);
        }
      }

      &:active {
        transform: translateY(-50%) scale(0.95);
      }
    }
  }
}
</style>
