<script setup lang="ts">
const prop = defineProps<{
  title?: string;
  type: string;
  isTitle: boolean;
}>();
</script>
<template>
  <div :class="{
    'container-large': type == 'large',
    'container-small': type == 'small',
    'container-large-m': type == 'large-m',
    'container-small-m': type == 'small-m',
  }">
    <div :class="{
      'title-large': type == 'large',
      'title-small': type == 'small',
      'title-large-m': type == 'large-m',
      'title-small-m': type == 'small-m',
    }" v-show="isTitle">
      {{ prop.title }}
    </div>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>
<style scoped>
.container-large {
  width: 80%;
  height: fit-content + 10px;
  background-color: white;
  margin: 3vw auto 0;
  box-shadow: 0 5px 10px #999999;
  padding: 20px;
  border-radius: 10px;
}

.title-large {
  width: fit-content;
  padding: 10px;
  padding-inline: 80px;
  height: 50px;
  background-color: #d20001;
  position: relative;
  top: 10px;
  left: -6vw;
  font-size: x-large;
  color: white;
  font-weight: bolder;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0;
}

.container-small {
  width: 100%;
  /* min-height: 100px; */
  background-color: white;
  margin: 10px auto 0;
  padding-block: 20px;
  box-shadow: 0 5px 10px #999999;
  border-radius: 10px;
}

.title-small {
  width: fit-content;
  height: fit-content;
  padding: 10px;
  background-color: #d20001;
  position: relative;
  top: 2vh;
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
  background-color: white;
  margin: 3vw auto 0;
  box-shadow: 0 5px 10px #999999;
}

.title-large-m {
  width: 20vw;
  height: 5vh;
  background-color: #d20001;
  position: relative;
  top: 2rem;
  left: -2%;
  font-size: 5vw;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0;
}

.container-small-m {
  width: 80vw;
  height: 100vw;
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

.content {
  margin-top: 20px;
}
</style>
