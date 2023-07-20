<template>
    <div class="container"> 
    <div>
    这是草稿箱
    </div>
       <QuestionCard></QuestionCard>
    </div>
  </template>
  
  <script setup lang="ts">
  import NavBarAdmin from '../../components/NavBarAdmin.vue'
  import QuestionCard from '../../components/QuestionCard.vue'
  import JHCard from '../../components/JHCard.vue'
  const links = [
    { name: '问卷', link: '/questionnaire' },
    { name: '草稿箱', link: '/questionnaire/draft' },
  ]
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