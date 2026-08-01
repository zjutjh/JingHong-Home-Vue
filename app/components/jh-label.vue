<script setup lang="ts">
const props = defineProps<{ type: "title" | "big" | "small" | "nano" }>();
</script>

<template>
  <div :class="[props.type, usePageStore().pageSize]">
    <div class="h">
      <slot />
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "~/assets/css/mixins" as *;

.title {
  @include primary-styled;
  align-items: center;
  margin: 0 7.5% 3%;
  box-shadow: var(--shadow-lg);
  border-radius: var(--radius-lg);
  padding: 10px;
  padding-inline: 80px;
  width: fit-content;
  font-family: "AliSans-EN";

  .h {
    display: block;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    margin-block-start: 0.67em;
    margin-block-end: 0.67em;
    font-weight: bold;
    font-size: x-large;
  }

  &.middle,
  &.mini {
    margin: auto;
  }
}

.big {
  @include primary-styled;
  margin: 0 auto 3vw auto;
  box-shadow: var(--shadow-lg);
  border-radius: var(--radius-pill);
  width: 15rem;
  height: 5rem;
  font-size: 30px;
  line-height: 5rem;
}

.small {
  @include primary-styled;
  @include flex-center;
  margin: 15px auto;
  border-radius: var(--radius-xl);
  padding: 10px;
  width: fit-content;
  min-width: 10vw;
  height: 5vh;
  font-size: 20px;
  line-height: 30px;
}

.nano {
  @include primary-styled;
  align-items: center;
  border-radius: var(--radius-sm);
  padding: 5px;
  padding-inline: 20px;
  width: fit-content;

  .h {
    display: block;
    font-size: 15px;
  }

  &.mini,
  &.middle {
    margin: auto;
  }
}
</style>
