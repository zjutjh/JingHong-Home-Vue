<template>
  <div class="container">
    <div class="none" v-if="!draftQuestionnaire">
      暂无草稿
    </div>
    <QuestionCard v-for="item in draftQuestionnaire" :is="true" :title="item.title" :id="item.id" :draft="true">
    </QuestionCard>
  </div>
</template>

<script setup lang="ts">
import QuestionCard from '../../components/QuestionCard.vue'
import { onMounted } from "vue";
import { ref } from "vue";
import router from "@/router";
import { useQuestionnaireStore } from "@/stores/questionnaire";
import { getQuestionnaire } from "@/apis/questionnaire";
const questionnaire = ref();
const pinia = useQuestionnaireStore();
const draftQuestionnaire = ref();
onMounted(() => {
  if (pinia.getIsAdmin() !== "true")
    router.push('/questionnaire/user');
  getQuestionnaire().then(res => {
    questionnaire.value = res.data;
    draftQuestionnaire.value = questionnaire.value.filter(item => item.draft === true);
    if (!draftQuestionnaire.value)
      alert("当前没有草稿");
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
}
</style>
