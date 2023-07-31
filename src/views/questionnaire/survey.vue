<template>
  <div class="container">
    <div class="content">
       <div class="title">
            {{"问卷"}}
       </div>
      <hr>
      <div v-for="(item,index) in questions" :key="index">
        
      </div>
    </div>
  </div>
</template>


<script setup lang="ts">

import {onMounted, ref} from "vue";
import {useQuestionnaireStore} from "@/stores/questionnaire";
import {getQuestionnaireData} from "@/apis/questionnaire";
const data = ref();
const title = ref();
const questions = ref();
onMounted(() => {
  const pinia = useQuestionnaireStore();
  getQuestionnaireData(pinia.selectedId).then(res => {
    console.log(res.data);
    data.value = res.data;
    title.value = data.value.title;
    questions.value = data.value.questions
    console.log(questions.value);
  })
})

</script>

<style scoped>
.container{
  margin-top: 15%;
  background-color: rgb(239, 239, 239);
  width: 100vw;
  display: flex;
  justify-content: center;
}
.content{
  width: 70vw;
  background: white;
  border-radius: 30px;
}
.title{
  font-size: 2.5em;
  text-align: center;
  font-weight: bolder;
}
hr {
  width: 80%;
  height: 2px;
  background-color: black;
}
</style>