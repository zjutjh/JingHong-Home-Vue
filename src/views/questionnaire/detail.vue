<template>
  <div class="container">
    <div class="content">
       <table>
         <tr>
           <th v-for="item in Qdata">{{item.text}}</th>
         </tr>
         <tr v-for="person in Adata">
           <td v-for="item in person">
              {{item.content}}
           </td>
         </tr>
       </table>
    </div>
  </div>
</template>

<script setup lang="ts">
import {onMounted , ref} from "vue";
import {useQuestionnaireStore} from "@/stores/questionnaire";
import {getQuestionnaireById, getQuestionnaireDataById} from "@/apis/questionnaire";
import router from "@/router";

const tmpHead=[
  {
    title: 'Header 1',
  },
  {
    title: 'Header 2',
  }
]
const tmpData=[
  {
    data: 'row 1, cell 1',
  },

]
const Qdata = ref();
const Adata = ref();
const pinia = useQuestionnaireStore();
onMounted(() => {
  console.log('data');
  if (pinia.isAdmin === false)
    router.push('/questionnaire/user');
  getQuestionnaireDataById(pinia.selectedId.toString()).then(res => {
    Adata.value = res.data;
  })
  getQuestionnaireById(pinia.selectedId.toString()).then(res => {
    Qdata.value = res.data.list;
  })

})
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
.content table{
  width: 100%;
}
</style>