<template>
<div class="contain">
   <div class="text">
     {{props.number + "." + props.qdata[props.number].text}}
   </div>
  <div class="options">
    <div v-for="(key,value) in props.adata[props.number] " v-if="props.qdata[props.number].type !=='Subjective'">
      <span style="float: left ;margin-left: 5%">{{value}}</span> <span style="float: right;margin-right: 5%">{{key}}人</span>
    </div>
  </div>
  <hr>
</div>
</template>

<script setup lang="ts">

const props = defineProps({
  'number': Number,
  'adata': Object,
  'qdata': Object,
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