<script setup lang="ts">
import JHLabel from './JHLabel.vue';
const prop = defineProps<{
  title: string,
  // number: string,
}>();
</script>
<template>
  <div class="base">
    <div class="label">{{ prop.title }}</div>
    <div class="number">
      <slot></slot>
    </div>
  </div>
</template>
<style scoped>
.base {
  display: grid;
  grid-template-columns: 20% 80%;
}
.label {
  background-color: #d20001;
  height: 30px;
  width: fit-content + 50px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 15px;
  padding-inline: 10px;
}
.number {
  color: red;
  font-size: x-large;
}
</style>