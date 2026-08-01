<template>
  <div class="contact-base" :class="pageStore.pageSize">
    <JhCard type="small">
      <div class="contact-us" :class="pageStore.pageSize">
        <div class="text">
          <h2>联系我们 | 关注我们</h2>
          <a href="mailto:jhwl2002@zjut.edu.cn">jhwl2002@zjut.edu.cn</a>
        </div>
        <NuxtImg class="platform" src="ui/wechat.svg" alt="微信公众号" @mouseover="onMouseOver" />
        <NuxtImg
          v-show="isHovering"
          provider="wechatOpen"
          :src="useRuntimeConfig().public.contact.wechat.jxhzx"
          class="qrcode"
          alt="浙工大精小弘在线 微信二维码"
          @mouseout="onMouseOut"
        />
        <NuxtImg
          class="platform"
          src="ui/LogoGitHub.svg"
          style="cursor: pointer"
          alt="GitHub"
          @click="toGithub"
        />
      </div>
    </JhCard>

    <NuxtImg
      class="jh-logo"
      :class="pageStore.pageSize"
      src="common/logo_red.webp"
      border="5"
      alt="精弘网络"
    />

    <JhCard type="small" class="join">
      <h2 class="join-content">精弘诚聘</h2>
      <JhButton type="middle" @click="() => navigateTo('/join')">加入我们 </JhButton>
    </JhCard>

    <JhCard type="small" class="loading" :class="pageStore.pageSize">
      <div class="loading-year">
        {{ useRuntimeConfig().public.lastUpdateYear }}
      </div>
      <div class="loading-bar-box">
        <div class="loading-bar" :style="{ left: loadingWidth + '%' }" />
      </div>
      <div class="loading-text">Loading...</div>
    </JhCard>
  </div>
</template>

<script setup lang="ts">
const pageStore = usePageStore();
const loadingWidth = ref(0);
const isHovering = ref(false);
function onMouseOver() {
  isHovering.value = true;
}
function onMouseOut() {
  isHovering.value = false;
}
function toGithub() {
  window.location.href = useRuntimeConfig().public.contact.github;
}

let loadingBarTimer: number;
onMounted(() => {
  loadingBarTimer = window.setInterval(() => {
    if (loadingWidth.value >= 0) {
      loadingWidth.value = -100;
    } else {
      loadingWidth.value += 0.2;
    }
  }, 10);
});
onUnmounted(() => {
  clearInterval(loadingBarTimer);
});
</script>

<style scoped lang="scss">
.contact-base {
  &.normal {
    display: flex;
    gap: 20px;
    margin: 10px auto;
    width: 90%;
  }

  &.middle {
    display: grid;
    grid-template-columns: auto auto;
    margin: auto;
    width: calc(80% + 40px);
    grid-column-gap: 20px;
  }

  &.mini {
    margin: auto;
    width: 90%;
  }

  .contact-us {
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    gap: 10px;

    .text {
      grid-column-start: 1;
      grid-column-end: 3;
    }

    h2 {
      margin: 0;
    }

    img {
      margin: auto;
    }

    img.qrcode {
      position: absolute;
      width: auto;
      height: 20dvh;
    }

    &.middle img.qrcode {
      width: 15dvw;
      height: auto;
    }

    &.normal .platform {
      width: 72px;
      height: 72px;
    }

    &.middle .platform,
    &.mini .platform {
      width: 50px;
      height: 50px;
    }
  }

  .jh-logo {
    margin: auto;
    box-shadow: var(--shadow-md);
    border-color: white;
    border-radius: 50%;
    background-color: white;
    width: 100px;
    height: 100px;

    &.mini {
      width: 80px;
      height: 80px;
    }
  }

  .join {
    display: flex;
    flex-direction: column;

    &-content {
      margin: auto;
    }
  }

  .contact-base.mini .join-content {
    max-width: 2em;
  }

  .loading {
    display: flex;
    flex-direction: column;

    &.normal {
      max-width: 300px;
    }

    &.mini {
      height: 100px;
    }

    .loading-year {
      margin: auto;
      color: var(--primary-color);
      font-weight: bold;
      font-size: 2em;
    }

    .loading-bar-box {
      margin: auto;
      border: 5px solid var(--primary-color);
      border-radius: var(--radius-pill);
      width: 80%;
      height: 30px;
      overflow: hidden;
    }

    .loading-bar {
      position: relative;
      background-color: var(--primary-color);
      width: 100%;
      height: 100%;
    }

    .loading-text {
      margin: auto;
      color: var(--primary-color);
      font-size: 24px;
    }
  }
}
</style>
