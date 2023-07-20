<template>
<div class="container">
   <div class="add-bar">
       <div class="problem-add">
           + 创建单选题
       </div>
       <div class="problem-add">
           + 创建多选题
       </div>
       <div class="problem-add">
           + 创建填空题
       </div>
   </div>
   <div class="question-bar">
        <div class="title">
              <input placeholder="输入标题(不能为空)" >
        </div>
     <hr>
     <div class="issue-container">
       <issueCard></issueCard>
     </div>
     <div class="issue-container">
       <issueCard></issueCard>
     </div>
     <div class="issue-container">
       <issueCard></issueCard>
     </div>
     <div class="issue-container">
       <issueCard></issueCard>
     </div>
     <div class="issue-container">
       <issueCard></issueCard>
     </div>

     <div class="title">

     </div>
   </div>
</div>
</template>

<script setup>
import issueCard from '../../components/IssueCard.vue'
</script>

<style scoped>
.container{
    margin-top: 15%;
    background-color: rgb(239, 239, 239);
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: space-around;
    justify-content: center;
    gap: 5%;
}
.add-bar{
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
  display: block;
  background-color: white;
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
  width: 50%;
  font-size: 0.8em;
}
.issue-container{
  display: block;
  width: 90%;
  height: 20vh;
  /*background: green;*/
}
hr {
  width: 80%;
  height: 2px;
  background-color: black;
}
</style>