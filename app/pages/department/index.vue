<script lang="ts" setup>
definePageMeta({ pageNo: 3 });
useSeoMeta({ title: "我们的部门" });
const pageStore = usePageStore();
const assetsBaseURL = useRuntimeConfig().public.cubeBaseURL;
</script>

<template>
  <div>
    <JhLabel
      v-if="pageStore.pageSize === PageSize.mini || pageStore.pageSize === PageSize.middle"
      type="title"
    >
      我们的部门
    </JhLabel>
    <JhCard title="部门结构" type="large">
      <NuxtImg src="common/structPc.webp" style="width: 100%" alt="部门结构图" />
    </JhCard>
    <div class="base" :class="pageStore.pageSize">
      <div class="item" @click="navigateTo('/department/ganshi')">
        <div class="img" :style="{ backgroundImage: `url(${assetsBaseURL}ui/ganshi.svg)` }" />
        <JhButton type="small" class="text">干事培训中心</JhButton>
      </div>
      <div class="item" @click="navigateTo('/department/jishu')">
        <div class="img" :style="{ backgroundImage: `url(${assetsBaseURL}ui/jishu.svg)` }" />
        <JhButton type="small" class="text">技术研发中心</JhButton>
      </div>
      <div class="item" @click="navigateTo('/department/sheji')">
        <div
          id="img3"
          class="img"
          :style="{ backgroundImage: `url(${assetsBaseURL}ui/sheji.svg)` }"
        />
        <JhButton type="small" class="text">设计服务中心</JhButton>
      </div>
      <div class="item" @click="navigateTo('/department/xinmeiti')">
        <div
          id="img4"
          class="img"
          :style="{ backgroundImage: `url(${assetsBaseURL}ui/xinmeiti.svg)` }"
        />
        <JhButton type="small" class="text">新媒体中心</JhButton>
      </div>
    </div>
    <NextPage @click="navigateTo('/activity')"> 我们的活动 </NextPage>
  </div>
</template>

<style scoped lang="scss">
@use "./index.scss";
</style>
