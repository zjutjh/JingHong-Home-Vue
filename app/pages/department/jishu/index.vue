<script setup lang="ts">
import { departmentContent, technologyImages } from "~~/constants/department";

definePageMeta({ pageNo: 3 });
useSeoMeta({ title: "技术研发中心 | 我们的部门" });
</script>

<template>
  <div>
    <JhLabel type="big">技术研发中心</JhLabel>
    <JhCard type="large" title="产研部">
      <CarouselPictures :imgs="technologyImages" />
      <JhLabel type="big">产品</JhLabel>

      <JhLabel type="small">部门介绍</JhLabel>
      <div class="content">
        {{ departmentContent.product.introduction }}
      </div>
      <JhLabel type="small">招新宣言</JhLabel>
      <div class="content">
        {{ departmentContent.product.recruitment }}
      </div>
      <JhLabel type="big" style="margin-top: 5%">技术</JhLabel>
      <JhLabel type="small">部门介绍</JhLabel>
      <div
        v-for="(para, index) in departmentContent.technology.introduction"
        :key="index"
        class="content"
      >
        {{ para }}
      </div>
      <JhLabel type="small">招新宣言</JhLabel>
      <div
        v-for="(para, index) in departmentContent.technology.recruitment"
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
