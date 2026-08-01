<script setup lang="ts">
import { useElementBounding } from "@vueuse/core";

import { historyEvents } from "~~/constants/index";

const angle = `${(Math.atan(0.5) * 180) / Math.PI}deg`;
const angle2 = `${(-Math.atan(0.5) * 180) / Math.PI}deg`;
const scale = 1 / Math.cos(Math.atan(0.5));
const styleVal = (index: number) => {
  return {
    "--angle": index % 2 === 0 ? angle : angle2,
    "--scale": scale,
    "--border": index % 2 === 0 ? "dashed" : "solid",
    "--line_seen": index === historyEvents.length - 1 ? "none" : "block"
  };
};
const historyLine = ref<HTMLElement | null>(null);
const { top: historyLineTop } = useElementBounding(historyLine);
const hasMeasured = computed(
  () => historyLine.value !== null && Number.isFinite(historyLineTop.value)
);
</script>

<template>
  <JhCard title="精弘成长史" type="large">
    <div ref="history" class="history">
      <div ref="historyLine" class="history-line">
        <div
          v-for="(item, index) in historyEvents"
          :key="index"
          class="history-item"
          :style="styleVal(index)"
        >
          <div
            class="img"
            :class="[
              index % 2 === 0 ? 'history-img1' : 'history-img2',
              hasMeasured && historyLineTop < 487 - (index - 2) * 80 - 60
                ? 'history-img'
                : 'history-img-hide'
            ]"
            :style="{
              'background-image': 'url(' + useRuntimeConfig().public.cubeBaseURL + item.img + ')'
            }"
          >
            <div class="history-content">
              <div class="history-content1">{{ item.time }}</div>
              <div class="history-content2">{{ item.content }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </JhCard>
</template>

<style scoped lang="scss">
.history-line {
  margin: auto;
  padding: 4rem 0 1rem;
  width: 10rem;
}

.history-item {
  position: relative;
  width: 10rem;
  height: 5rem;

  &::before {
    display: var(--line_seen);
    position: absolute;
    top: 0;
    left: 0;
    transform: rotateZ(var(--angle)) scale(var(--scale));
    transform-origin: bottom center;
    z-index: 1;
    box-sizing: border-box;
    border-bottom: 1px var(--border) black;
    width: 100%;
    height: 2.5rem;
    content: "";
  }
}

.history-img {
  position: relative;
  top: -2.2rem;
  opacity: 1;
  z-index: 3;
  transition: opacity 2s;
  border-radius: 50%;
  background-size: cover;
  background-color: white;
  width: 4.4rem;
  height: 4.4rem;

  &-hide {
    position: relative;
    top: -2.2rem;
    opacity: 0;
    z-index: 3;
    transition: opacity 2s;
    border-radius: 50%;
    background-size: cover;
    width: 4.4rem;
    height: 4.4rem;
  }

  &1 {
    left: -2.2rem;
    float: left;
  }

  &2 {
    right: -2.2rem;
    float: right;
  }
}

.history-content {
  position: relative;
  top: 100%;
  left: -50%;
  width: 200%;

  &1 {
    font-size: xx-small;
    white-space: pre-line;
  }

  &2 {
    font-size: xx-small;
    white-space: pre-line;
  }
}
</style>
