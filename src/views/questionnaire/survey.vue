<template>
  <div class="container">
    <div class="title">
      {{ title }}
    </div>
    <div class="content">
      <div v-for="(item, index) in questions" :key="index" class="issue">
        <label class="issue-title">{{ index + 1 }}. {{ item.text }}</label>
        <div v-if="item.type === 'Single'">
          <div v-for="(option, i) in item.options">
            <input type="radio" :value="option" v-model="answers[item.qid]">
            <label>{{ option }}</label>
          </div>
        </div>
        <div v-else-if="item.type === 'Multiple'">
          <div v-for="(option, i) in item.options">
            <input type="checkbox" :value="String.fromCharCode(i + 65)" v-model="answers[item.qid]">
            <label>{{ option }}</label>
          </div>
        </div>
        <div v-else>
          <textarea class="my-textarea" v-model="answers[item.qid]"></textarea>
        </div>
      </div>
    </div>
    <j-h-button type="middle" @click="submit">提交</j-h-button>
  </div>
</template>


<script setup lang="ts">

import { onMounted, ref } from "vue";
import { useQuestionnaireStore } from "@/stores/questionnaire";
import { UserGetQuestionnaireData, UserSubmitQuestionnaireData } from "@/apis/questionnaire";
import { getCurrentInstance } from "vue";
import JHButton from "@/components/JHButton.vue";
import router from "@/router";
const data = ref();
const title = ref();
const questions = ref();
const currentInstance = getCurrentInstance();
const currentRoute = currentInstance.proxy.$route.params.id;
const pinia = useQuestionnaireStore();
const answers = ref({});
pinia.setId(Number(currentRoute));
onMounted(() => {
  UserGetQuestionnaireData(pinia.selectedId).then(res => {
    if (res.msg === "ok") {
      console.log(res.data);
      data.value = res.data;
      title.value = data.value.title;
      questions.value = data.value.list;
      console.log(questions.value);
      questions.value.forEach(item => {
        if (item.type === "Single")
          answers.value[item.qid] = "";
        else if (item.type === "Multiple")
          answers.value[item.qid] = [];
        else
          answers.value[item.qid] = "";
      })
    }
    else
      alert("获取问卷数据失败");
  })
})

function submit() {

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
    if (res.msg === "ok") {
      alert("提交成功");
      router.push('/questionnaire/user');
    }
    else
      alert("提交失败");
  })
}

</script>

<style scoped lang="scss">
.container {
  margin-top: 100px;
  background-color: rgb(239, 239, 239);
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  justify-content: center;
  width: fit-content;
  margin-inline: auto;
}

.content {
  background: white;
  border-radius: 20px;
}

.title {
  font-size: 2.5em;
  text-align: center;
  font-weight: bolder;
  border-bottom: 2px solid rgb(239, 239, 239);
}

.issue {
  text-align: left;
  margin-inline: 20px;
  border-bottom: 2px solid rgb(239, 239, 239);
}

.issue-title {
  font-size: 20px;
  font-weight: bolder;
}

.my-textarea {
  display: inline-block;
  min-height: 100px;
  min-width: 300px;
  font-size: 16px;
  resize: none;
}

input {
  margin-right: 10px;
}
</style>
