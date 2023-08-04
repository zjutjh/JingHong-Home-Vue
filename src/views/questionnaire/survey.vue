<template>
  <div class="container">
    <div class="content">
       <div class="title">
            {{title}}
       </div>
      <hr>
      <div class="issue">
        <div v-for="(item,index) in questions" :key="index">
          <label class="issue-title">{{index + 1}}. {{item.text}}</label>
          <div v-if="item.type === 'Single'">
            <div v-for="(option,i) in item.options">
              <input type="radio"  :value="option" v-model="answers[item.qid]">
              <label>{{option}}</label>
            </div>
          </div>
          <div v-else-if="item.type === 'Multiple'">
            <div v-for="(option,i) in item.options">
              <input type="checkbox"  :value="i" v-model="answers[item.qid]">
              <label>{{option}}</label>
            </div>
          </div>
          <div v-else>
            <textarea class="my-textarea" v-model="answers[item.qid]"></textarea>
          </div>
          <hr>
      </div>

      </div>
      <j-h-button type="middle" @click="submit">提交</j-h-button>
    </div>
  </div>
</template>


<script setup lang="ts">

import {onMounted, ref} from "vue";
import {useQuestionnaireStore} from "@/stores/questionnaire";
import {UserGetQuestionnaireData , UserSubmitQuestionnaireData} from "@/apis/questionnaire";
import JHButton from "@/components/JHButton.vue";
import router from "@/router";
const data = ref();
const title = ref();
const questions = ref();
const answers = ref({});
onMounted(() => {
  const pinia = useQuestionnaireStore();
  UserGetQuestionnaireData(pinia.selectedId).then(res => {

    if(res.msg === "ok")
    {
      console.log(res.data);
      data.value = res.data;
      title.value = data.value.title;
      questions.value = data.value.list;
      console.log(questions.value);
      questions.value.forEach(item => {
        if(item.type === "Single")
          answers.value[item.qid] = "";
        else if(item.type === "Multiple")
          answers.value[item.qid] = [];
        else
          answers.value[item.qid] = "";
      })
    }
    else
      alert("获取问卷数据失败");
  })
})

function submit(){

  console.log(answers.value);
  const pinia = useQuestionnaireStore();
  let ans = Object.entries(answers.value).reduce((acc, [key, value]) => {
    if (Array.isArray(value)) {
      acc[key] = value.join('');
    } else {
      acc[key] = value.toString();
    }
    return acc;
  }, {});
  let list: { qid: any; content: any; }[] = [];
  questions.value.forEach(item => {
    list.push({
      qid: item.qid,
      content: ans[item.qid]
    })
  })
  let data = {
    id: pinia.selectedId,
    list: list
  }
  UserSubmitQuestionnaireData(data).then(res => {
    if(res.msg === "ok")
    {
      alert("提交成功");
      router.push('/questionnaire/user');
    }
    else
      alert("提交失败");
  })
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
.title{
  font-size: 2.5em;
  text-align: center;
  font-weight: bolder;
}
hr {
  width: 90%;
  height: 2px;
  background-color: rgb(239, 239, 239);
}
.issue-title {
   margin-left: -1%;
}
.issue {
  text-align: left;
  margin-left: 5%;
}
.issue-title {
  font-size: 1.5em;
  font-weight: bolder;
}
.my-textarea {
  display: inline-block;
  width: 90%;
  height: 5rem;
  line-height: 30px;
  font-size: 20px;
  resize: none;
}
</style>