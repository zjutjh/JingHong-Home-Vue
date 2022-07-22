<script lang="ts" setup>
import { usePageStore } from "../stores/pages";
const pageStore = usePageStore();
</script>
<style scoped lang="scss">
.top {
  &.middle,
  &.normal {
    margin: 100px;
  }
  &.mini {
    margin: 60px;
  }
}
</style>
<template>
  <div class="top" :class="pageStore.pageType"></div>
</template>
