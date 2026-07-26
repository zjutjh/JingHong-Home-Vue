<script setup lang="ts">
import { departmentContent, designImages } from "~~/constants/department";

definePageMeta({ pageNo: 3 });
useSeoMeta({ title: "设计服务中心 | 我们的部门" });
</script>

<template>
  <div>
    <JhLabel type="big">设计服务中心</JhLabel>
    <JhCard type="large" :title="departmentContent.design.title">
      <CarouselPictures :imgs="designImages" />
      <JhLabel type="small">部门介绍</JhLabel>
      <div
        v-for="(para, index) in departmentContent.design.introduction"
        :key="index"
        class="content"
      >
        {{ para }}
      </div>

      <JhLabel type="small">招新宣言</JhLabel>
      <div
        v-for="(para, index) in departmentContent.design.recruitment"
        :key="index"
        class="content"
      >
        {{ para }}
      </div>
    </JhCard>
    <CloseButton />
  </div>
</template>

<style scoped lang="scss">
@use "../detail.scss";
</style>
