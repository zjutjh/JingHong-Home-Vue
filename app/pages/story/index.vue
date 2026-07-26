<script lang="ts" setup>
import {
  missionContent,
  persons,
  socialLifeContent,
  yixingContent,
  yixingImages,
  yurenContent,
  yurenImages
} from "~~/constants/story";

definePageMeta({ pageNo: 1 });
useSeoMeta({ title: "我们的故事" });
const pageStore = usePageStore();
</script>

<template>
  <div>
    <JhLabel
      v-if="pageStore.pageSize === PageSize.mini || pageStore.pageSize === PageSize.middle"
      type="title"
    >
      我们的故事
    </JhLabel>
    <JhCard type="large" title="我们的使命">
      <div class="shiming-base" :class="pageStore.pageSize">
        <NuxtImg
          v-if="pageStore.pageSize === PageSize.normal"
          class="shiming-img"
          src="temp/shiming.webp"
          alt=""
        />
        <div v-else class="shiming-imgs" :class="pageStore.pageSize">
          <NuxtImg class="shiming-imgs-img" src="temp/shiming1.webp" alt="" />
          <NuxtImg class="shiming-imgs-img" src="temp/shiming2.webp" alt="" />
          <NuxtImg class="shiming-imgs-img" src="temp/shiming3.webp" alt="" />
          <NuxtImg class="shiming-imgs-img" src="temp/shiming4.webp" alt="" />
        </div>
        <div class="shiming" :class="pageStore.pageSize">
          <h3>{{ missionContent.title }}</h3>
          <pre style="white-space: pre-wrap; font-family: inherit">{{
            missionContent.description
          }}</pre>
        </div>
      </div>
    </JhCard>
    <JhCard type="large" title="精弘毅行">
      <CarouselPictures :imgs="yixingImages" />
      <div class="yixing-content" :class="pageStore.pageSize">
        {{ yixingContent[0] }}
      </div>
      <div class="yixing-content" :class="pageStore.pageSize">
        {{ yixingContent[1] }}
      </div>
    </JhCard>
    <JhCard type="large" title="网络育人">
      <CarouselPictures :imgs="yurenImages" />
      <div class="yixing-content" :class="pageStore.pageSize">
        {{ yurenContent }}
      </div>
    </JhCard>
    <JhCard type="large" title="生活社交">
      <div class="shenghuo" :class="pageStore.pageSize">
        <NuxtImg id="img1" src="groupPhoto/shenghuo0.webp" alt="生活社交照片 1" />
        <div class="content">
          {{ socialLifeContent[0] }}
        </div>
        <NuxtImg id="img2" src="groupPhoto/shenghuo1.webp" alt="生活社交照片 2" />
        <div class="content">
          {{ socialLifeContent[1] }}
        </div>
        <NuxtImg id="img3" src="groupPhoto/shenghuo2.webp" alt="生活社交照片 3" />
        <div class="shenghuo-imgs">
          <NuxtImg id="img4" src="groupPhoto/shenghuo3.webp" alt="生活社交照片 4" />
          <NuxtImg id="img5" src="groupPhoto/shenghuo4.webp" alt="生活社交照片 5" />
        </div>
        <div class="content">
          {{ socialLifeContent[2] }}
        </div>
      </div>
    </JhCard>

    <div class="jiyu">
      <JhLabel type="title">前辈寄语</JhLabel>
      <CarouselCards :card="persons" :type="pageStore.pageSize" />
    </div>

    <NextPage @click="navigateTo('/product')"> 我们的产品 </NextPage>
  </div>
</template>

<style scoped lang="scss">
@use "./style.scss";
</style>
