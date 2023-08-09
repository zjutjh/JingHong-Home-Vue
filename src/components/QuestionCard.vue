<template>
  <div v-if="!isDeleted" class="card-container">
    <div class="text-container">
      <div class="text">
        {{ !props.is ? "+ 创建新问卷" : props.title }}
      </div>
    </div>
    <div class="bar" v-if="props.admin">
      <div class="bar" v-if="props.is">
        <div @click="changePublic()">
          <div v-if="!isPublic">
            发布
          </div>
          <div v-else>
            取消发布
          </div>
        </div>
        <div @click="nav2Data()" v-if="!draft">
          数据
        </div>
        <div @click="nav2Edit()" v-if="draft">
          编辑
        </div>
        <div @click="deleteQ()">
          删除
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card-container {
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 200px;
  width: 40%;
  border-radius: 20px;
  box-shadow: 4px 4px 4px 4px rgba(0, 0, 0, 0.3);
}

.text-container {
  display: block;
  margin-top: 20px;
}

.text {
  font-size: 24px;
  text-align: center;
}

.bar {
  margin-top: 80px;
  display: flex;
  width: 80%;
  justify-content: space-around;
}
</style>

<script lang="ts" setup>
import { deleteQuestionnaire, changeQuestionnaireStatus } from "@/apis/questionnaire";
import { useQuestionnaireStore } from "@/stores/questionnaire";
import router from "@/router";
import { ref } from "vue";
const nowId = useQuestionnaireStore();
const isDeleted = ref(false);
const props = defineProps({
  id: Number,
  title: String,
  is: Boolean,
  public: Boolean,
  draft: Boolean,
  admin: {
    type: Boolean,
    default: true,
  },
})
const isPublic = ref(props.public);
function nav2Data() {
  nowId.setId(props.id);
  router.push('/questionnaire/data');
}
function nav2Edit() {
  nowId.setId(props.id);
  router.push('/questionnaire/create');
}
function deleteQ() {
  const confirm = window.confirm('确定删除该问卷吗？');
  if (confirm) {
    console.log('delete');
    deleteQuestionnaire(props.id).then(res => {

      if (res.msg === 'ok') {
        alert("删除成功");
        isDeleted.value = true;
      }
      else {
        alert("请求错误");
      }
    })
  }
  else {
    console.log('cancel');
  }
}
function changePublic() {
  let postData = {
    id: props.id,
    public: !isPublic.value,
    draft: false,
  }
  changeQuestionnaireStatus(postData).then(res => {
    if (res.msg === 'ok') {
      alert("修改成功");
      isPublic.value = !isPublic.value;
      if (props.draft === true && isPublic.value === true) {
        isDeleted.value = true;
      }
    }
    else {
      alert("请求错误");
    }
  })
}
</script>
