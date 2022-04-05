<script setup lang="ts">
import JHLabel from './JHLabel.vue';
const prop = defineProps<{
  title: string,
  type: string,
  // number: string,
}>();
</script>
<template>
  <div :class="{ 'base': prop.type == 'pc', 'base-m': prop.type == 'mob' }">
    <div :class="{ 'label': prop.type == 'pc', 'label-m': prop.type == 'mob' }">{{ prop.title }}</div>
    <div :class="{ 'number': prop.type == 'pc', 'number-m': prop.type == 'mob' }">
      <slot></slot>
    </div>
  </div>
</template>
<style scoped>
.base {
  display: grid;
  grid-template-columns: 20% 80%;
  align-items: center;
}
.label {
  /* background-color: #d20001; */
  height: 80px;
  width: 200px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  /* color: white; */
  font-size: 1.5vw;
  padding-inline: 10px;
}
.number {
  color: red;
  font-size: xx-large;
  align-items: center;
  justify-content: center;
  /* padding-top: 20px; */
}

.base-m {
  display: grid;
  grid-template-columns: 20% 80%;
}
.label-m {
  background-color: #d20001;
  height: 30px;
  width: 20vw;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 15px;
  padding-inline: 10px;
}
.number-m {
  color: red;
  font-size: x-large;
  padding-left: 20vw;
}
</style>