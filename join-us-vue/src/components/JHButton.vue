<script setup lang="ts">
const prop = defineProps<{
  type: string;
}>()
</script>

<template>
  <button
    :class="{
      'button-small': type == 'small',
      'button-middle': type == 'middle',
    }"
  >
    <slot></slot>
  </button>
</template>

<style scoped>
.button-small {
  width: fit-content;
  height: 40px;
  margin: 15px auto;
  border-radius: 20px;
  background-color: #d20001;
  color: white;
  font-size: 15px;
  line-height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 5px #999999;
  border: none;
}
.button-middle {
  width: fit-content;
  padding: 10px;
  padding-inline: 20px;
  margin: auto;
  background-color: #d20001;
  border-radius: 30px;
  font-size: x-large;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
}
</style>