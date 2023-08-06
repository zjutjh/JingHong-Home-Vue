<template>
<div class="container">
   <div class="content">
        <div class="title">
            {{title + "概况"}}
        </div>
     <hr>
     <div v-for="(item,index) in questions" :key="index">
       <issue-data-card :number="index" :adata="Adata" :qdata="Qdata"></issue-data-card>
     </div>
     <div class="buttom-container">
       <JHButton type="middle" @click="nav2Detail">在线查看数据</JHButton>
       <JHButton type="middle" @click="outputData">导出数据</JHButton>
     </div>
   </div>

</div>
</template>

<script setup lang="ts">
import issueDataCard from "@/components/issueDataCard.vue";
import {onMounted} from "vue";
import {Q_BASE_URL_DEV} from "@/utils/const";
import {useQuestionnaireStore} from "@/stores/questionnaire";
import {getQuestionnaireById, getQuestionnaireDataById} from "@/apis/questionnaire";
import {ref} from "vue";
import JHButton from "@/components/JHButton.vue";
import router from "@/router";
import IssueDataCard from "@/components/issueDataCard.vue";
import {saveAs} from 'file-saver';
const Adata = ref();
const Qdata = ref();
const title = ref();
const questions = ref();
const pinia = useQuestionnaireStore();
onMounted(() => {
    console.log('data');
    if(pinia.getIsAdmin() !== "true")
      router.push('/questionnaire/user');
    getQuestionnaireDataById(pinia.selectedId.toString()).then(res => {
      Adata.value = res.data.reduce((acc, curr) => {
        curr.forEach(item => {
          if (!acc[item.qid - 1]) {
            acc[item.qid - 1] = {};
          }
          if (!acc[item.qid - 1][item.content]) {
            acc[item.qid - 1][item.content] = 0;
          }
          acc[item.qid - 1][item.content]++;
        });
        return acc;
      }, []);

    })
    getQuestionnaireById(pinia.selectedId.toString()).then(res => {
      Qdata.value = res.data.list;
      title.value = res.data.title;
      questions.value = Qdata.value;
      console.log("A-Q");
      console.log(Qdata.value);
    })

})
function nav2Detail(){
    console.log('nav2Detail');
    router.push('/questionnaire/detail');
}

function outputData(){
    console.log('outputData');
    let url = Q_BASE_URL_DEV + "/api/admin/download/" + pinia.selectedId;
    saveAs(url,"问卷数据.xlsx")
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
hr {
  width: 80%;
  height: 2px;
  background-color: black;
}
.title{
  font-size: 2.5em;
  text-align: center;
  font-weight: bolder;
}
.buttom-container{
  display: flex;
  justify-content: space-around;
  margin-bottom: 2%;
  margin-top: 5%;
}
</style>