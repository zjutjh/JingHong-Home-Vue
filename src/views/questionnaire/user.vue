<template>
  <div class="container">
    <div v-for="item in questionnaire" :key="item.id">
      <QuestionCard @click="fillQuestionnaire(item.id)" :admin="false" :is="true" :title="item.title" :id="item.id" :public="item.public" :draft="item.draft"></QuestionCard>
    </div>
  </div>
</template>

<script setup lang="ts">
import QuestionCard from '../../components/QuestionCard.vue'
import router from '@/router';
import {UserGetQuestionnaireAll} from "@/apis/questionnaire";
import {onMounted, ref} from "vue";
import {useQuestionnaireStore} from "@/stores/questionnaire";
const questionnaire = ref();
const pinia = useQuestionnaireStore();

function fillQuestionnaire(id: number) {
  pinia.setId(id);
  router.push('/questionnaire/survey/'+id.toString());
}

onMounted(() => {
  pinia.setId(-1);
  UserGetQuestionnaireAll().then(res => {
    if (res.msg === 'ok')
    {
      questionnaire.value = res.data.filter(item => (item.draft === false && item.public === true));
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
  margin-top: 5%;
  width: 100vw;
  background-color: rgb(239, 239, 239);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 5%;
}

</style>
