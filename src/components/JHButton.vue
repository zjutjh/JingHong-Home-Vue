<script setup lang="ts">
const prop = defineProps<{
  type: string;
}>();
</script>

<template>
  <button
    :class="{
      'button-mini': type == 'mini',
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
  padding-inline: 24px;
  height: 60px;
  margin: auto;
  border-radius: 20px;
  background-color: #d20001;
  color: white;
  font-size: 20px;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 5px #999999;
  border: none;
  cursor: pointer;
  white-space: nowrap;
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

.button-mini {
  width: fit-content;
  border-radius: 30px;
  font-size: small;
  background-color: #d20001;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  margin: auto;
}
</style>
