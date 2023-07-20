<template>
  <div class="container"> 
     <QuestionCard @click="addQuestion"></QuestionCard>
     <QuestionCard></QuestionCard>
     <QuestionCard></QuestionCard>
     <QuestionCard></QuestionCard>
  </div>
</template>

<script setup lang="ts">
import NavBarAdmin from '../components/NavBarAdmin.vue'
import QuestionCard from '../components/QuestionCard.vue'
import JHCard from '../components/JHCard.vue'
import router from '@/router';
function addQuestion() {
  console.log('addQuestion');
  router.push('/questionnaire/create');
}

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

</style>