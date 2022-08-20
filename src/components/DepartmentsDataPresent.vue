<script setup lang="ts">
import JHLabel from './JHLabel.vue';
import { DepartmentsData } from '../types/components';
const props = defineProps<{
  data: DepartmentsData,
  type: string,
}>();
</script>
<template>
  <div class="base">
    <div class="item">
      <div class="label">第一志愿</div>
      <div class="number">{{ props.data[0] }}</div>
    </div>
    <div class="item">
      <div class="label">第二志愿</div>

      <div class="number">{{ props.data[4] }}</div>
    </div>
    <div class="item">
      <div class="label">朝晖</div>
      <div class="number">{{ props.data[1] }}</div>
    </div>
    <div class="item">
      <div class="label">朝晖</div>
      <div class="number">{{ props.data[5] }}</div>
    </div>
    <div class="item">
      <div class="label">屏峰</div>
      <div class="number">{{ props.data[2] }}</div>
    </div>
    <div class="item">
      <div class="label">屏峰</div>
      <div class="number">{{ props.data[6] }}</div>
    </div>
    <div class="item">
      <div class="label">莫干山</div>
      <div class="number">{{ props.data[3] }}</div>
    </div>
    <div class="item">
      <div class="label">莫干山</div>
      <div class="number">{{ props.data[7] }}</div>
    </div>
    <div class="item">
      招新情况
      <div class="label">总数</div>

      <div class="number">{{ props.data[8] }}</div>
    </div>
    <div class="item">
      <div class="label">今日增加</div>
      <div class="number">{{ props.data[9] }}</div>
    </div>
  </div>
</template>
<style scoped>
.base {
  display: grid;
  height: 400px;
  margin-top: 35px;
  margin-inline: 10px;
  grid-template-columns: 50% 50%;
  grid-template-rows: 35% 10% 10% 10% 35%;
  align-items: center;
  justify-items: start;
}

.item {
  display: flex;
  align-items: center;
  justify-items: center;
  text-align: center;
  margin: auto;
}

.label {
  display: inline-block;
  background-color: white;
  color: black;
  /* width: 15vw; */
  margin: auto;
  padding: 10px;
}

.number {
  margin-inline: 10px;
  display: inline;
  font-size: 24px;
  color: red;
}
</style>