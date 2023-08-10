<template>
  <div class="container">
    <QuestionCard @click="addQuestion" :is="false"></QuestionCard>
    <QuestionCard v-for="item in questionnaire" :is="true" :title="item.title" :id="item.id" :public="item.public"
      :draft="item.draft"></QuestionCard>
  </div>
</template>

<script setup lang="ts">
import QuestionCard from '../components/QuestionCard.vue'
import router from '@/router';
import { getQuestionnaire } from "@/apis/questionnaire";
import { onMounted, ref } from "vue";
import { useQuestionnaireStore } from "@/stores/questionnaire";
const pinia = useQuestionnaireStore();
function addQuestion() {
  pinia.setId(-1);
  console.log('addQuestion');
  router.push('/questionnaire/create');
}
const questionnaire = ref();


onMounted(() => {
  pinia.setId(-1);
  console.log(pinia.getIsAdmin());
  if (pinia.getIsAdmin() !== "true")
    router.push('/questionnaire/user');
  getQuestionnaire().then(res => {
    if (res.msg === 'ok') {
      questionnaire.value = res.data.filter(item => item.draft === false);
      console.log(questionnaire.value);
    }
    else {
      alert("请求错误");
    }
  })
})
</script>

<style scoped>
.container {
  margin-top: 100px;
  background-color: rgb(239, 239, 239);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
}
</style>
