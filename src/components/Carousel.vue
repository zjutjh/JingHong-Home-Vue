<script setup lang="ts">
import { reactive } from "vue";

const props = defineProps<{
  imgs: string[];
}>();
const position = reactive(["center", "left", "right"]);
</script>
<template>
  <div class="carousel">
    <div
      v-for="(img, index) in props.imgs"
      class="card"
      :class="position[index]"
    >
      <img :src="img" />
    </div>
  </div>
</template>
<style scoped lang="scss">
* {
  border-radius: 15px;
}
.carousel {
  width: 100%;
  height: 300px;
  overflow: hidden;
  position: relative;

  .card {
    &.center {
      width: 50%;
      position: absolute;
      left: 25%;
      top: 0;
    }
    &.left {
      width: 25%;
      position: absolute;
      left: -10%;
    }
    &.right {
      width: 25%;
      position: absolute;
      left: 85%;
    }
    img {
      width: 100%;
    }
  }
}
</style>
