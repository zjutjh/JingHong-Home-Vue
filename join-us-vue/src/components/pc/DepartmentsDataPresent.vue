<script setup lang="ts">
import JHLabel from './JHLabel.vue';
import { DepartmentsData } from '../../types/components';
const props = defineProps<{
  data: DepartmentsData,
}>();
</script>
<template>
  <div class="base">
    <div>
      <JHLabel type="small" class="label">第一志愿</JHLabel>
      <div class="number">{{ props.data.want1 }}</div>
    </div>
    <div>
      <JHLabel type="small" class="label">第二志愿</JHLabel>
      <div class="number">{{ props.data.want2 }}</div>
    </div>
    <div>
      <JHLabel type="small" class="label">朝晖</JHLabel>
      <div class="number">{{ props.data.want1_zh }}</div>
    </div>
    <div>
      <JHLabel type="small" class="label">朝晖</JHLabel>
      <div class="number">{{ props.data.want2_zh }}</div>
    </div>
    <div>
      <JHLabel type="small" class="label">屏峰</JHLabel>
      <div class="number">{{ props.data.want1_pf }}</div>
    </div>
    <div>
      <JHLabel type="small" class="label">屏峰</JHLabel>
      <div class="number">{{ props.data.want2_pf }}</div>
    </div>
    <div>
      <JHLabel type="small" class="label">莫干山</JHLabel>
      <div class="number">{{ props.data.want1_mgs }}</div>
    </div>
    <div>
      <JHLabel type="small" class="label">莫干山</JHLabel>
      <div class="number">{{ props.data.want2_mgs }}</div>
    </div>
    <div>
      <JHLabel type="small" class="label">总数</JHLabel>
      <div class="number">{{ props.data.total }}</div>
    </div>
    <div>
      <JHLabel type="small" class="label">今日增加</JHLabel>
      <div class="number">{{ props.data.today }}</div>
    </div>
  </div>
</template>
<style scoped>
.base {
  display: grid;
  height: 15vw;
  margin-top: 35px;
  margin-inline: 10px;
  grid-template-columns: 50% 50%;
  grid-template-rows: 35% 10% 10% 10% 35%;
  align-items: center;
}
.label {
  display: inline;
}
.number {
  margin-inline: 10px;
  display: inline;
  font-size: 24px;
}
</style>