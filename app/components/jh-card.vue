<script setup lang="ts">
const props = defineProps<{
  title?: string;
  type: "large" | "small";
}>();
</script>

<template>
  <div class="jh-card" :class="props.type">
    <h2 v-if="props.title" class="title" :class="props.type">
      {{ props.title }}
    </h2>
    <slot />
  </div>
</template>

<style scoped lang="scss">
@use "~/assets/css/mixins" as *;

.jh-card {
  @include card-base;

  &.large {
    margin: 20px auto;
    padding: 20px;
    width: 80%;
  }

  &.small {
    margin: 10px auto;
    padding-block: 20px;
    width: 100%;
  }

  .title {
    @include title-styled;
    left: -6vw;
    padding: 10px;
    padding-inline: 80px;
    width: fit-content;
    height: 50px;
  }
}
</style>
