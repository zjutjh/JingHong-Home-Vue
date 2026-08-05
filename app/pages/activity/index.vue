<script lang="ts" setup>
import { acmCompetitionInfo } from "~~/constants/activity";

definePageMeta({ pageNo: 4 });
useSeoMeta({ title: "我们的活动" });
const pageStore = usePageStore();
</script>

<template>
  <div>
    <JhLabel
      v-if="pageStore.pageSize === PageSize.mini || pageStore.pageSize === PageSize.middle"
      type="title"
    >
      我们的活动
    </JhLabel>
    <JhCard title="ACM新生赛" type="large">
      <div class="base" :class="pageStore.pageSize">
        <NuxtImg class="poster" :src="acmCompetitionInfo.posterImage" alt="海报" />
        <div class="detail-base" :class="pageStore.pageSize">
          <div class="introduce" :class="pageStore.pageSize">
            <JhButton type="middle" :href="acmCompetitionInfo.registrationUrl" target="_blank">
              {{ acmCompetitionInfo.registrationUrl ? "立即报名" : "尚未开放" }}
            </JhButton>
            <br />
            <JhLabel type="nano">活动介绍</JhLabel>
            <div class="content">
              <pre style="white-space: pre-wrap; font-family: inherit">{{
                acmCompetitionInfo.introduction
              }}</pre>
            </div>
            <JhLabel type="nano">竞赛群号</JhLabel>
            <div class="content">{{ acmCompetitionInfo.competitionGroup }}</div>
          </div>
          <div class="qr">
            <div class="qr-base" :class="pageStore.pageSize">
              <div class="qr-code">
                <NuxtImg :src="acmCompetitionInfo.groupQrCode" alt="竞赛群二维码" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </JhCard>
    <NextPage @click="navigateTo('/join')"> 加入我们 </NextPage>
  </div>
</template>

<style scoped lang="scss">
@use "./style.scss";
</style>
