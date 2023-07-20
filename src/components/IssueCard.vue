<template>
  <div class="container">
    <input placeholder="输入题干">
    <span>单选</span>
    <input placeholder="选项">

  </div>

  <hr>
</template>

<script setup lang="ts">
const props = defineProps({
  type: String,
  data: Object,
})
</script>

<style scoped>
.container {
  /*background: #2c3e50;*/
  width: 100%;
  height: 100%;
  display: block;
}
.container input{
  margin-left: 2%;
  width: 70%;
  height: 10%;
}
.container span{
  margin-left: 7%
}
hr {
  width: 80%;
  height: 2px;
  background-color: black;
}
</style>