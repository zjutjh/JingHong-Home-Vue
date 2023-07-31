<template>
<div class="contain">
   <div class="text">
     {{props.number + "." + props.data.text}}
   </div>
  <div class="options" >
    <div>
      <span style="float: left ;margin-left: 5%">选项测试一</span> <span style="float: right;margin-right: 5%">66人</span>
    </div>
  </div>
  <hr>
</div>
</template>

<script setup lang="ts">

const props = defineProps({
  'number': Number,
  'data': Object,
})
</script>

<style scoped>
hr {
  width: 90%;
  height: 1px;
  background-color: black;
}
.contain{
  width: 100%;
}
.text{
  margin-left: 3%;
  font-size: 1.5em;
  text-align: left;
}
.options {
  display: flex;
  flex-direction: column;
}

</style>