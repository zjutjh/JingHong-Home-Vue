<template>
    <div class="container">
      <div class="none" v-if="!draftQuestionnaire">
        暂无草稿
      </div>
        <div v-for="item in draftQuestionnaire" :key="item.id">
         <QuestionCard :is="true" :title="item.title" :id="item.id"></QuestionCard>
        </div>
    </div>
  </template>

  <script setup lang="ts">
  import QuestionCard from '../../components/QuestionCard.vue'
  import {onMounted} from "vue";
  import {ref} from "vue";
  import {getQuestionnaire} from "@/apis/questionnaire";
  const questionnaire = ref();
  const draftQuestionnaire = ref();
  onMounted(() => {
    getQuestionnaire().then(res => {
      questionnaire.value = res.data;
      console.log(questionnaire.value);
      draftQuestionnaire.value = questionnaire.value.filter(item => item.draft === true);
    })
   if (!draftQuestionnaire.value)
     alert("当前没有草稿");
  })
  </script>

  <style scoped>
  .container {
    margin-top: 5%;
    width: 100vw;
    height: 100vh;
    background-color: rgb(239, 239, 239);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 5%;
  }

  .none{
    background: #2c3e50;
    height: 20vh;
    width: 20vw;
    margin-top: 15vh;
  }
  </style>