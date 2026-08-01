<script setup lang="ts">
import { historyEvents } from "~~/constants/index";

const eventNow = ref<number>(0);
type HistoryEvent = NonNullable<(typeof historyEvents)[number]>;
const currentEvent = computed(() => historyEvents[eventNow.value] as HistoryEvent);
</script>

<template>
  <JhLabel type="title">精弘大事记</JhLabel>
  <div class="base-pc">
    <div class="history-left">
      <NuxtImg :src="currentEvent.img" border="10" :alt="currentEvent.name" />
      <div class="event-name">{{ currentEvent.name }}</div>
    </div>
    <div class="history-right">
      <div class="time">{{ currentEvent.time }}</div>
      <div class="content">{{ currentEvent.content }}</div>
      <NuxtImg src="jingxiaohong/jingxiaohong.webp" alt="精小弘" />
    </div>
  </div>
  <div class="choices-container">
    <div
      class="choices"
      :style="{ gridTemplateColumns: `repeat(${historyEvents.length}, minmax(75px, 90px))` }"
    >
      <div
        v-for="(item, index) in historyEvents"
        :key="index"
        class="item"
        :class="{ select: eventNow == index }"
        :style="{
          'background-image': `url(${useRuntimeConfig().public.cubeBaseURL}${item.img})`
        }"
        @click="eventNow = index"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "style.scss";
</style>
