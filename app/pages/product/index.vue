<script lang="ts" setup>
import { productsContent } from "~~/constants/product";

definePageMeta({ pageNo: 2 });
useSeoMeta({ title: "我们的产品" });

const pageStore = usePageStore();
const { lock: lockScroll, unlock: unlockScroll } = useScrollLock();
type DetailPart = "wejh" | "wechat" | "visual" | "email";
const currentDetail = ref<DetailPart | null>(null);

function setDetail(part: DetailPart | null) {
  if (part) {
    currentDetail.value = part;
    lockScroll();
  } else {
    if (currentDetail.value) unlockScroll();
    currentDetail.value = null;
  }
}

watch(
  () => pageStore.pageSize,
  (newSize) => {
    if (newSize === PageSize.normal) {
      setDetail(null);
    }
  }
);

onUnmounted(() => {
  if (currentDetail.value) setDetail(null);
});
</script>

<template>
  <div>
    <JhLabel
      v-if="pageStore.pageSize === PageSize.mini || pageStore.pageSize === PageSize.middle"
      type="title"
    >
      我们的产品
    </JhLabel>
    <!-- MARK: 宽屏 -->
    <div v-if="pageStore.pageSize === PageSize.normal" class="base normal">
      <JhCard type="large" :title="productsContent.wechat.title">
        <div class="wechat">
          <div class="introduction">
            {{ productsContent.wechat.description }}
          </div>
          <div>
            <NuxtImg
              provider="wechatOpen"
              :src="useRuntimeConfig().public.contact.wechat.jhwl"
              alt="精弘网络 微信二维码"
            />
            <h3>浙江工业大学精弘网络</h3>
          </div>
          <div>
            <NuxtImg
              provider="wechatOpen"
              :src="useRuntimeConfig().public.contact.wechat.jxhzx"
              alt="浙工大精小弘在线 微信二维码"
            />
            <h3>浙工大精小弘在线</h3>
          </div>
        </div>
      </JhCard>
      <JhCard type="large" :title="productsContent.wejh.title">
        <div class="introduction">{{ productsContent.wejh.description }}</div>
        <NuxtImg
          id="wejh-code"
          :src="productsContent.wejh.miniProgramCode"
          :alt="productsContent.wejh.title + ' 小程序二维码'"
        />
        <h3>微精弘小程序</h3>
      </JhCard>
      <JhCard type="large" :title="productsContent.visual.title">
        <div class="visual">
          <div class="introduction">
            {{ productsContent.visual.description }}
          </div>
          <a href="https://space.bilibili.com/485566103">
            <NuxtImg
              provider="cliQR"
              src="https://space.bilibili.com/485566103"
              style="max-width: 100%; height: auto"
              alt="哔哩哔哩 二维码"
            />
            <h3>哔哩哔哩</h3>
          </a>
          <div>
            <NuxtImg
              :src="productsContent.visual.shipinhao"
              style="max-width: 100%; height: auto"
              alt=""
            />
            <h3>微信视频号</h3>
          </div>
        </div>
      </JhCard>
      <JhCard type="large" :title="productsContent.email.title">
        <div class="introduction">{{ productsContent.email.description }}</div>
        <h3>
          邮箱系统网址：<a :href="productsContent.email.url">
            {{ productsContent.email.url }}
          </a>
        </h3>
        <NuxtImg id="email-img" :src="productsContent.email.icon" alt="" />
      </JhCard>
    </div>

    <!-- MARK: 窄屏 -->
    <div v-else>
      <JhCard type="large">
        <div class="base" :class="pageStore.pageSize">
          <div class="product-item" @click="setDetail('wejh')">
            <NuxtImg :src="productsContent.wejh.icon" alt="" />
            <JhButton type="middle"> 微信小程序 </JhButton>
          </div>
          <div class="product-item" @click="setDetail('wechat')">
            <NuxtImg :src="productsContent.wechat.icon" alt="" />
            <JhButton type="middle"> 微信服务号 </JhButton>
          </div>
          <div class="product-item" @click="setDetail('visual')">
            <NuxtImg :src="productsContent.visual.icon" alt="" />
            <JhButton type="middle"> 视觉影像 </JhButton>
          </div>
          <div class="product-item" @click="setDetail('email')">
            <NuxtImg :src="productsContent.email.icon" alt="" />
            <JhButton type="middle"> 学生邮箱 </JhButton>
          </div>
        </div>
      </JhCard>

      <!-- MARK: 窄屏详情 -->
      <Transition name="fade">
        <div v-show="currentDetail" class="shadow" @click="setDetail(null)" />
      </Transition>
      <Transition name="sheet" mode="out-in">
        <div v-if="currentDetail" :key="currentDetail" class="detail">
          <div class="title">
            {{ productsContent[currentDetail].title }}
            <NuxtImg class="icon" :src="productsContent[currentDetail].icon" alt="" />
          </div>
          <div class="content">
            {{ productsContent[currentDetail].description }}
          </div>
          <NuxtImg src="ui/back.svg" class="back" alt="返回" @click="setDetail(null)" />
        </div>
      </Transition>
    </div>

    <NextPage @click="navigateTo('/department')"> 我们的部门 </NextPage>
  </div>
</template>

<style scoped lang="scss">
@use "./style.scss";
</style>
