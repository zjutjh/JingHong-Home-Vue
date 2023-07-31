<template>
<div class="container">
   <div class="content">
        <div class="title">
            {{title + "概况"}}
        </div>
     <hr>
     <div v-for="(item,index) in questions" :key="index">
       <issueDataCard :number="index" :data="item" ></issueDataCard>
     </div>
     <div class="buttom-container">
       <JHButton type="middle" @click="nav2Detail">在线查看数据</JHButton>
       <JHButton type="middle" >导出数据</JHButton>
     </div>
   </div>

</div>
</template>

<script setup lang="ts">
import issueDataCard from "@/components/issueDataCard.vue";
import {onMounted} from "vue";
import {useQuestionnaireStore} from "@/stores/questionnaire";
import {getQuestionnaireData} from "@/apis/questionnaire";
import {ref} from "vue";
import JHButton from "@/components/JHButton.vue";
import router from "@/router";

const data = ref();
const title = ref();
const questions = ref();
onMounted(() => {
    console.log('data');
    const pinia = useQuestionnaireStore();
    getQuestionnaireData(pinia.selectedId).then(res => {
        console.log(res.data);
        data.value = res.data;
        title.value = data.value.title;
        questions.value = data.value.questions
      console.log(questions.value);
    })
})
function nav2Detail(){
    console.log('nav2Detail');
    router.push('/questionnaire/detail');
}
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
hr {
  width: 80%;
  height: 2px;
  background-color: black;
}
.title{
  font-size: 2.5em;
  text-align: center;
  font-weight: bolder;
}
.buttom-container{
  display: flex;
  justify-content: space-around;
  margin-bottom: 2%;
  margin-top: 5%;
}
</style>