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
      'button-middle-disabled': type == 'middle-disabled',
    }"
  >
    <slot></slot>
  </button>
</template>

<style scoped>
.button-small {
  width: fit-content;
  padding-inline: 30px;
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
  cursor: pointer;
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
  cursor: pointer;
}
.button-middle-disabled {
  width: fit-content;
  padding: 10px;
  padding-inline: 20px;
  margin: auto;
  background-color: #999999;
  border-radius: 30px;
  font-size: x-large;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: not-allowed;
}
</style>