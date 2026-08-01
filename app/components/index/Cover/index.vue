<script lang="ts" setup>
const pageStore = usePageStore();
</script>

<template>
  <div class="start" :class="pageStore.pageSize">
    <div class="title" :class="pageStore.pageSize">精弘网络,取精用弘</div>
    <NuxtImg class="downArrow" src="ui/downArrow.svg" alt="" />
  </div>
</template>

<style lang="scss" scoped>
.start {
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 100%;
  height: 100vh;
  max-height: 100%;

  &.normal {
    background:
      linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url("#{$cubeBaseURL}groupPhoto/2024.webp") no-repeat center;
    background-size: cover;
  }

  &.middle {
    background:
      linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url("#{$cubeBaseURL}common/startPc.webp") no-repeat center;
    background-size: cover;
  }

  &.mini {
    background:
      linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url("#{$cubeBaseURL}common/startMobile.webp") no-repeat center;
    background-size: cover;
  }

  .title {
    color: white;
    font-family: "ZLY-song";

    &.normal,
    &.middle {
      font-size: 6vw;
      letter-spacing: 1vw;
    }

    &.mini {
      font-size: x-large;
      letter-spacing: 10px;
    }
  }

  .downArrow {
    position: absolute;
    bottom: 50px;
    width: 50px;
    height: 50px;
  }
}
</style>
