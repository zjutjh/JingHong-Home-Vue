<script setup lang="ts">
import { useWindowSize } from "@vueuse/core";

const pageStore = usePageStore();
const { width } = useWindowSize();

// 响应式断点：监听窗口宽度，写入全局 pageStore.pageSize。
// 取值与触发条件见 app/stores/pages.ts（PageSize 常量注释）。
// 该值会作为 CSS 类名被各组件直接引用，因此字符串不可更改。
function handleResize() {
  try {
    if (width.value >= 1024) {
      pageStore.pageSize = PageSize.normal;
    } else if (width.value >= 768) {
      pageStore.pageSize = PageSize.middle;
    } else {
      pageStore.pageSize = PageSize.mini;
    }
  } catch (error) {
    console.error("[App] Error handling resize:", error);
  }
}

onMounted(() => {
  try {
    watch(width, handleResize, { immediate: true });
  } catch (error) {
    console.error("[App] Error setting up resize watcher:", error);
  }
});

onErrorCaptured((error) => {
  console.error("[App] Captured component error:", error);
});
</script>

<template>
  <NuxtRouteAnnouncer />
  <NavBar />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
