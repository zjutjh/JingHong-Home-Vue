<script setup lang="ts">
import { introduceContent } from "~~/constants/index";

const pageStore = usePageStore();
</script>

<template>
  <div class="base" :class="pageStore.pageSize">
    <NuxtImg
      v-if="pageStore.pageSize !== PageSize.mini"
      src="jingxiaohong/xiaohongLeft.webp"
      alt=""
    />
    <div class="introduce">
      <div class="title">{{ introduceContent.title[pageStore.pageSize] }}</div>
      <div class="content" :class="pageStore.pageSize">
        <p v-for="(line, index) in introduceContent.description" :key="index">
          {{ line }}
        </p>
      </div>
    </div>
    <NuxtImg
      v-if="pageStore.pageSize !== PageSize.mini"
      src="jingxiaohong/xiaohongRight.webp"
      alt=""
    />
  </div>
</template>

<style scoped lang="scss">
@use "style.scss";
</style>
