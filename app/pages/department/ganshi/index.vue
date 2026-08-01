<script setup lang="ts">
import { affairsImages, departmentContent } from "~~/constants/department";

definePageMeta({ pageNo: 3 });
useSeoMeta({ title: "干事培训中心 | 我们的部门" });
</script>

<template>
  <div>
    <JhLabel type="big">干事培训中心</JhLabel>
    <JhCard type="large" :title="departmentContent.affairs.title">
      <CarouselPictures :imgs="affairsImages" />
      <JhLabel type="small">部门介绍</JhLabel>
      <div
        v-for="(para, index) in departmentContent.affairs.introduction"
        :key="index"
        class="content"
      >
        {{ para }}
      </div>

      <JhLabel type="small">招新宣言</JhLabel>
      <div
        v-for="(para, index) in departmentContent.affairs.recruitment"
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
