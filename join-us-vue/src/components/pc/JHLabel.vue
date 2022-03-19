<script setup lang="ts">import { HTMLAttributes } from 'vue';

const prop = defineProps<{
  type: string,
}>();

</script>

<template>
  <div :class="prop.type">
    <slot></slot>
  </div>
</template>

<style scoped>
.title {
  width: 15%;
  font-size: 10rpx;
  padding: 1% 0;
  margin: 0 8% 3%;
  background-color: #d20001;
  color: white;
  border-radius: 1rem;
  box-shadow: 0 5px 10px #999999;
}

.big {
  width: 15rem;
  height: 5rem;
  border-radius: 5rem;
  font-size: 30px;
  color: white;
  line-height: 5rem;
  background-color: #d20001;
  margin: 0 auto 3vw auto;
  box-shadow: 0 5px 10px #999999;
}
.middle {
  min-width: 90px;
  width: fit-content;
  height: 35px;
  padding: 0 20px;
  margin: 15px auto;
  border-radius: 20px;

  background-color: #d20001;

  color: white;
  font-size: 18px;
  line-height: 30px;

  display: flex;
  justify-content: center;
  align-items: center;
}
.small {
  background-color: #d20001;
  height: 30px;
  width: fit-content;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  /* font-size: 15px; */
  padding-inline: 20px;
}
.nano {
  height: 20px;
  width: fit-content;
  background-color: #d20001;
  color: white;
  border-radius: 2px;
  padding-inline: 15px;
}
</style>