<script setup lang="ts">
const prop = defineProps<{
  title: string;
  type: string;
}>();
</script>
<template>
  <div
    :class="{ 'container-large': type == 'large', 'container-small': type == 'small', 'container-large-m': type == 'large-m', 'container-small-m': type == 'small-m' }"
  >
    <div
      :class="{ 'title-large': type == 'large', 'title-small': type == 'small', 'title-large-m': type == 'large-m', 'title-small-m': type == 'small-m' }"
    >{{ prop.title }}</div>
    <slot></slot>
  </div>
</template>
<style scoped>
.container-large {
  width: 80vw;
  /* height: 40vw; */
  background-color: white;
  margin: 3vw auto 0;
  box-shadow: 0 5px 10px #999999;
  padding: 2vw;
}
.title-large {
  width: 12vw;
  height: 4rem;
  background-color: #d20001;
  position: relative;
  top: 2rem;
  left: -5%;
  font-size: 2.3vw;
  color: white;
  font-weight: bolder;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0;
}

.container-small {
  width: 30vw;
  background-color: white;
  margin: 3vw auto 0;
  box-shadow: 0 5px 10px #999999;
}

.title-small {
  width: 8vw;
  height: 2rem;
  background-color: #d20001;
  position: relative;
  top: 1rem;
  left: -2%;

  font-size: large;
  color: white;
  font-weight: bolder;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0;
}

.container-large-m {
  width: 80vw;
  /* height: 40vw; */
  background-color: white;
  margin: 3vw auto 0;
  box-shadow: 0 5px 10px #999999;
}

.title-large-m {
  width: 30vw;
  height: 4rem;
  background-color: #d20001;
  position: relative;
  top: 2rem;
  left: -2%;
  font-size: xx-large;
  color: white;
  font-weight: bolder;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0;
}

.container-small-m {
  width: 80vw;
  height: 80vw;
  background-color: white;
  margin: 3vw auto 0;
  box-shadow: 0 5px 10px #999999;
}

.title-small-m {
  width: 40vw;
  height: 2rem;
  background-color: #d20001;
  position: relative;
  top: 1rem;
  left: -2%;

  font-size: large;
  color: white;
  font-weight: bolder;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0;
}
</style>