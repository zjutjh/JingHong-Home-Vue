<template>
<div class="container">
   <div class="add-bar">
       <div class="problem-add" @click="addIssue('Single')">
           + 创建单选题
       </div>
       <div class="problem-add" @click="addIssue('Multiple')">
           + 创建多选题
       </div>
       <div class="problem-add" @click="addIssue('Subjective')">
           + 创建填空题
       </div>
   </div>
   <div class="question-bar">
        <div class="title">
              <input placeholder="输入标题(不能为空)" v-model="title"  >
        </div>
     <hr>
     <div v-for="(item,index) in questions" class="issue-container" :key="index">
       <issueCard :type="item.type" :data="item" :index="index" @update="onUpdated" @deleteIssue="deleteIssue"></issueCard>
     </div>
     <div class="buttom-container">
       <j-h-button type="middle" @click="saveDraft()" >保存为草稿</j-h-button>
          <j-h-button type="middle">提交</j-h-button>
     </div>
   </div>
</div>
</template>

<script setup>
import JHButton from "@/components/JHButton.vue";
import {onMounted , ref} from "vue";
import IssueCard from "@/components/IssueCard.vue";
import {getQuestionnaireById} from "@/apis/questionnaire";
import {useQuestionnaireStore} from "@/stores/questionnaire";
const data = ref();
const questions = ref([]);
const title = ref();
const isNew = ref();
onMounted(() => {
  console.log('create');
  const pinia = useQuestionnaireStore();
  console.log(pinia.selectedId);
  if(pinia.selectedId !== -1)
   {
     isNew.value = false;
    getQuestionnaireById(pinia.selectedId).then(res => {
      console.log(res.data);
      data.value = res.data;
      title.value = data.value.title;
      questions.value = data.value.questions;
    })
  }
  else {
    isNew.value = true;
    title.value = '';
    questions.value = [];
    data.value = {
      title: '',
      questions: []
    }
  }
})
function onUpdated(updateData,index){
  questions.value[index] = updateData;
}
function deleteIssue(index){
  questions.value.splice(index,1);
}
function addIssue(type){
  const issue = {
    type: type,
    text: '',
    options: [
        '',
        '',
        '',
    ]
  }
  questions.value.push(issue);
}
function saveDraft(){

  let data = {
    title: title.value,
    questions: questions.value,
    draft: true,
    public: false
  }
  console.log('最终发送的数据：')
  console.log(data);
}
</script>

<style scoped>
.container{
    margin-top: 11%;
    background-color: rgb(239, 239, 239);
    width: 100vw;

    gap: 5%;
}
.add-bar{
    position: fixed;
    background-color: white;
    width: 40vw;
    height: 60vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border-radius: 20px;
}
.problem-add{
    background-color: rgb(239, 239, 239);
    width: 80%;
    height: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
}
.question-bar {
  float: right;
  display: block;
  background-color: white;
  flex-direction: column;
  gap: 5%;
  border-radius: 20px;
}

.title {
  display: flex;
  align-items: center;
  /*background-color: burlywood;*/
  width: 50vw;
  height: 10vh; /* 设置子元素的高度 */
  border-radius: 20px;
  display: flex;
  font-size: 2em;
}
.title input {
  height: 50%;
  margin-left: 9%;
  width: 50vw;
  font-size: 0.8em;
}
.issue-container{
  display: block;
  width: 55vw;
  /*background: green;*/
}
hr {
  width: 80%;
  height: 2px;
  background-color: black;
}
.buttom-container{
  display: flex;
  justify-content: space-around;
}
</style>