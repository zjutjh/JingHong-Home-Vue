<script setup lang="ts">
const props = defineProps<{ type: "mini" | "small" | "middle" }>();
</script>

<template>
  <button type="button" class="jh-button" :class="props.type">
    <slot />
  </button>
</template>

<style scoped lang="scss">
@use "~/assets/css/mixins" as *;

.jh-button {
  @include button-base;

  &.small {
    box-shadow: var(--shadow-md);
    border-radius: var(--radius-xl);
    padding-inline: 24px;
    height: 30px;
    font-size: 20px;
    white-space: nowrap;
  }

  &.middle {
    border-radius: var(--radius-2xl);
    padding: 10px;
    padding-inline: 20px;
    font-size: large;
  }

  &.mini {
    border-radius: var(--radius-2xl);
    font-size: small;
  }
}
</style>
