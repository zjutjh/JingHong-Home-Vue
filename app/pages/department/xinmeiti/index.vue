<script setup lang="ts">
import { departmentContent, editorialImages, visualImages } from "~~/constants/department";

definePageMeta({ pageNo: 3 });
useSeoMeta({ title: "新媒体中心 | 我们的部门" });
</script>

<template>
  <div>
    <JhLabel type="big">新媒体中心</JhLabel>
    <JhCard type="large" :title="departmentContent.visual.title">
      <CarouselPictures :imgs="visualImages" />
      <JhLabel type="small">部门介绍</JhLabel>
      <div
        v-for="(para, index) in departmentContent.visual.introduction"
        :key="index"
        class="content"
      >
        {{ para }}
      </div>

      <JhLabel type="small">招新宣言</JhLabel>
      <div
        v-for="(para, index) in departmentContent.visual.recruitment"
        :key="index"
        class="content"
      >
        {{ para }}
      </div>
    </JhCard>

    <JhCard type="large" :title="departmentContent.editorial.title">
      <CarouselPictures :imgs="editorialImages" />
      <JhLabel type="small">部门介绍</JhLabel>
      <div
        v-for="(para, index) in departmentContent.editorial.introduction"
        :key="index"
        class="content"
      >
        {{ para }}
      </div>

      <JhLabel type="small">招新宣言</JhLabel>
      <div
        v-for="(para, index) in departmentContent.editorial.recruitment"
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
