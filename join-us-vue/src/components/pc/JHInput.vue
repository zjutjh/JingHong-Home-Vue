<script setup lang="ts">
const props = defineProps<{
  type: string,
  modelValue: string,
}>();
</script>
<template>
  <div class="item_name">姓名</div>
  <input class="item_content" :value="modelValue" @update:value />
  // ! Not finished
</template>
<style scoped>
</style>