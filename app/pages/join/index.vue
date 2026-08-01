<script setup lang="ts">
import { posterImage, recruitmentInfo } from "~~/constants/recruitment";

definePageMeta({ pageNo: 5 });
useSeoMeta({ title: "加入我们" });
const pageStore = usePageStore();

function toRecruit() {
  window.open(recruitmentInfo.registrationUrl);
}
</script>

<template>
  <JhCard title="加入我们" type="large">
    <div class="base" :class="pageStore.pageSize">
      <NuxtImg class="poster" :src="posterImage" alt="招新海报" />
      <div class="detail-base" :class="pageStore.pageSize">
        <div class="introduce" :class="pageStore.pageSize">
          <JhButton type="middle" style="position: relative; margin-bottom: 20px" @click="toRecruit"
            >点我报名
          </JhButton>
          <JhLabel type="nano">线下摆摊</JhLabel>
          <div class="content">
            <div>朝晖: {{ recruitmentInfo.offline.chaohuiDate }}</div>
            <div>地址：{{ recruitmentInfo.offline.chaohuiLocation }}</div>
            <div style="margin-top: 20px">屏峰: {{ recruitmentInfo.offline.pingfengDate }}</div>
            <div>地址：{{ recruitmentInfo.offline.pingfengLocation }}</div>
          </div>

          <JhLabel type="nano">招新宣讲</JhLabel>
          <div class="content">
            <div>朝晖: {{ recruitmentInfo.presentation.chaohuiDate }}</div>
            <div>地址: {{ recruitmentInfo.presentation.chaohuiLocation }}</div>
          </div>
          <JhLabel type="nano">招新群号</JhLabel>
          <div class="content">
            <div v-for="group in recruitmentInfo.recruitmentGroups" :key="group.number" class="row">
              <span>{{ group.name }}</span
              ><span>{{ group.number }}</span>
            </div>
          </div>
        </div>
        <div class="qr">
          <JhLabel type="nano">最新动态</JhLabel>
          <div class="qr-base">
            <div class="qr-code">
              <NuxtImg
                provider="wechatOpen"
                :src="useRuntimeConfig().public.contact.wechat.jhwl"
                alt="精弘网络 微信二维码"
              />
              精弘网络
            </div>
            <div class="qr-code">
              <NuxtImg
                provider="wechatOpen"
                :src="useRuntimeConfig().public.contact.wechat.jxhzx"
                alt="浙工大精小弘在线 微信二维码"
              />
              浙工大精小弘在线
            </div>
          </div>
        </div>
      </div>
    </div>
  </JhCard>
</template>

<style scoped lang="scss">
@use "./style.scss";
</style>
