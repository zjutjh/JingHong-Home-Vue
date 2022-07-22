<script setup lang="ts">
import { usePageStore } from "../stores/pages";

const prop = defineProps<{
  type: string;
}>();
const pageStore = usePageStore();
</script>

<template>
  <div :class="[prop.type, pageStore.pageType]">
    <div class="h">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.title {
  width: fit-content;
  padding: 10px;
  padding-inline: 80px;
  align-items: center;
  font-family: "SC-VF";
  margin: 0 7.5% 3%;
  background-color: #d20001;
  color: white;
  box-shadow: 0 5px 10px #999999;
  border-radius: 1rem;
}

.title .h {
  display: block;
  font-size: x-large;
  margin-block-start: 0.67em;
  margin-block-end: 0.67em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
}
.title.middle,
.title.mini {
  margin: auto;
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

.small {
  min-width: 10vw;
  width: fit-content;
  height: 5vh;
  padding: 10px;
  margin: 15px auto;
  border-radius: 20px;

  background-color: #d20001;

  color: white;
  font-size: 20px;
  line-height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.nano {
  background-color: #d20001;
  /* height: 30px; */
  width: fit-content;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  color: white;
  padding: 5px;
  padding-inline: 20px;
}
.nano.mini,
.nano.middle {
  margin: auto;
}
.nano .h {
  display: block;
  font-size: 15px;
}
</style>
