<template>
  <div v-if="data.type !== 'Subjective'">
  <input placeholder="输入题干" v-model="data.text" @input="$emit('update',props.data,props.index)">
  <span v-if="type === 'Single'">单选</span>
    <span v-if="type === 'Multiple'">多选</span>
  <div class="choice" v-for="(item,index) in data.options" :key="index">
    <input placeholder="选项" v-model="data.options[index]" @input="$emit('update',props.data,props.index)">
    <span>
      <span @click="addOptions()" >
        +
      </span>
      <span @click="deleteOptions(index)">
        -
      </span>
    </span>
  </div>
  </div>
  <div v-else-if="type === 'Subjective'">


    <input placeholder="输入题干" v-model="data.text" @input="$emit('update',props.data,props.index)">
    <span>填空</span>
  </div>
  <div class="buttom-container">
     <j-h-button type="small" @click="deleteIssue()">
       删除
     </j-h-button>
  </div>
  <hr>
</template>

<script setup lang="ts">
import JHButton from "@/components/JHButton.vue";

const emit = defineEmits(['update','deleteIssue'])
const props = defineProps({
  type: String,
  data: Object,
  index: Number
})
function addOptions(){
  props.data.options.push('');
  emit('update',props.data)
}
function deleteOptions(id: number){
   props.data.options.splice(id,1);
  emit('update',props.data);
}
function deleteIssue(){
  emit('deleteIssue',props.index);
}
</script>

<style scoped>
 input{
  margin-left: 2%;
  width: 30vw;
  height: 1.5rem;
}
 span{
  margin-left: 7%;
  font-size: 1.5rem;
}
hr {
  width: 80%;
  height: 2px;
  background-color: black;
}
.choice span {
  margin-left: 2.8%;
  font-size: 1.5rem;
}
.buttom-container {
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-top: 5%;
}
</style>