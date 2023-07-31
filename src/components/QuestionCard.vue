
<template>
    <div  class="card-container" >
      <div class="text-container">
        <div class="text">
          {{ !props.is? "+ 创建新问卷" : props.title }}
        </div>
      </div>
      <div class="bar">
        <div class="bar" v-if="props.is">
          <div>
            发布
          </div>
          <div @click="nav2Data()">
            数据
          </div>
          <div @click="nav2Edit()">
            编辑
          </div>
          <div @click="deleteQuestionnaire() ">
            删除
          </div>
        </div>
      </div>
    </div>
</template>

<style scoped>
.card-container{
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 14rem;
  width: 35rem;
  margin-top: 8%;
  border-radius: 20px;
  box-shadow: 4px 4px 4px 4px rgba(0, 0, 0, 0.3);
}
.text-container {
  display: block;
  height: 60%;
  width: 100%;
  margin-top: 5%;
}
.text {
  font-size: 2em;
  text-align: center;
}

.bar {
    margin-top: 5vh;
  display: flex;
  width: 80%;
  justify-content: space-around;
  height: 9vh;
}
</style>

<script setup>
import {useQuestionnaireStore} from "@/stores/questionnaire";
import router from "@/router";
const nowId = useQuestionnaireStore();
const props = defineProps({
  id: Number,
  title: String,
  is: Boolean
})
function nav2Data(){
   nowId.setId(props.id);
   router.push('/questionnaire/data');
}
function nav2Edit(){
  nowId.setId(props.id);
  router.push('/questionnaire/create');
}
function deleteQuestionnaire(){
  const confirm = window.confirm('确定删除该问卷吗？');
  if(confirm){
    console.log('delete');
  }
  else {
    console.log('cancel');
  }
}
</script>