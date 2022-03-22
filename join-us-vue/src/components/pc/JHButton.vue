<script setup lang="ts">
const prop = defineProps<{
  type: string;
}>()
</script>

<template>
  <button
    :class="{
      'button-small': type == 'small',
      'button-medium': type == 'medium',
    }"
  >
    <slot></slot>
  </button>
</template>

<style scoped>
.button-small {
  width: 120px;
  height: 30px;
  margin: 15px auto;
  border-radius: 20px;

  background-color: #d20001;

  color: white;
  font-size: 15px;
  line-height: 30px;

  display: flex;
  justify-content: center;
  align-items: center;
}
.button-medium {
  /* position: absolute; */
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  width: 25%;
  height: 4vw;
  background-color: #d20001;
  border-radius: 4vw;
  font-size: 1.8vw;
  color: white;
  line-height: 4vw;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>