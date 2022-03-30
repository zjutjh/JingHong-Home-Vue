<script setup lang="ts">
import Footer from '../../../components/pc/Footer.vue';
import { useRouter } from 'vue-router';
import { DevelopForm } from '../../../apis/forms';
import { isPhone, isStuId } from '../../../utils/valid';
import { IDevelopForm } from '../../../types/forms';
import { reactive, ref } from 'vue';
import { regions } from '../../../utils/const';
import JHButton from '../../../components/pc/JHButton.vue';
import JHNotice from '../../../components/pc/JHNotice.vue';
const router = useRouter();
const form = reactive(<IDevelopForm>{
  name: '',
  college: '',
  gender: -1,
  phone: '',
  stu_id: '',
  qq: '',
  campus: '',
  region: '',
  ability: {
    api: false,
    front_end: false,
    document: false,
    git: false,
  },
  ability_other: '',
})

function returnClicked() {
  router.push('/join');
}

const phoneValid = ref(false);
const stuIDValid = ref(false);
const noticeShow = ref(false);
async function submitClicked() {
  phoneValid.value = isPhone(form.phone);
  stuIDValid.value = isStuId(form.stu_id);
  if (!(phoneValid.value && stuIDValid.value)) {
    noticeShow.value = true;
    return;
  }
  var res = await DevelopForm(form);
  if (res.message == "ok") {
    alert("提交成功");
    returnClicked();
    return;
  } else {
    alert(res.message);
    return;
  }
}
function closeNoticeShow() {
  noticeShow.value = false;
}
</script>
<template>
  <!-- 组件内容 -->
  <JHNotice :show="noticeShow" @changeShow="closeNoticeShow" type="mob">请将信息正确填写完整再提交</JHNotice>
  <div style="margin-top: 80px;"></div>
  <div class="mob_label_1">技术部长期招新</div>
  <div style="width:90%;margin: auto;">
    <div class="mob_basic_info">
      <div class="mob_item_name">姓名</div>
      <input class="mob_item_content" v-model="form.name" />
      <div class="mob_item_name">专业</div>
      <input class="mob_item_content" v-model="form.college" />
      <div class="mob_item_name">性别</div>
      <select class="mob_item_content" v-model="form.gender">
        <option value="0">男</option>
        <option value="1">女</option>
        <option value="2">保密</option>
      </select>
      <div class="mob_item_name">联系电话</div>
      <input class="mob_item_content" v-model="form.phone" />
      <div class="mob_item_name">学号</div>
      <input class="mob_item_content" v-model="form.stu_id" />
      <div class="mob_item_name">QQ</div>
      <input class="mob_item_content" v-model="form.qq" />
      <div class="mob_item_name">学院</div>
      <input class="mob_item_content" v-model="form.campus" />
      <div class="mob_item_name">校区</div>
      <select class="mob_item_content" v-model="form.region">
        <option v-for="region in regions" :value="region">{{ region }}</option>
      </select>
    </div>
    <div class="mob_other_info">
      <div class="mob_label_2">必要能力勾选</div>
      <div style="padding-bottom: 20px;border-bottom: 1px black solid;">
        <div class="mob_capability_1">
          <div>
            <input type="checkbox" v-model="form.ability.api" />能够独立开发api
          </div>
          <div>
            <input type="checkbox" v-model="form.ability.front_end" />能够使用前端框架
          </div>
          <div>
            <input type="checkbox" v-model="form.ability.document" />能够独立撰写说明文档
          </div>
          <div>
            <input type="checkbox" v-model="form.ability.git" />能够使用git进行团队协作交互
          </div>
        </div>
        <div class="mob_label_2">其他能力</div>
        <textarea
          class="mob_capability_2"
          v-model="form.ability_other"
          placeholder="在这里输入你拥有的其他能力"
        />
      </div>
      <div class="mob_label_2">有什么想对技术部说的话，可以在这里告诉我们</div>
      <textarea class="mob_capability_2" v-model="form.feedback" placeholder="暂时想不到可以填无" />
    </div>
    <div style="display:flex;">
      <JHButton type="small" @click="returnClicked">返回</JHButton>
      <JHButton type="small" @click="submitClicked">提交</JHButton>
    </div>
  </div>
  <div style="height:20vh"></div>
  <Footer />
</template>
<style scoped>
/* 样式 */
.mob_basic_info {
  display: grid;
  width: 100%;
  grid-template-columns: 20% 27% 20% 27%;
  grid-template-rows: repeat(4, 20px);
  grid-gap: 10px 2%;

  margin: auto;
  padding-bottom: 20px;
  border-bottom: 1px black solid;

  /* transform: scale(1, 1); */
}
.mob_item_name {
  background-color: #d20001;
  height: 100%;
  /* height: 20px; */

  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;

  color: white;
  font-size: 8px;
}
.mob_item_content {
  background-color: #dfdfdf;
  width: 100%;
  height: 100%;
  border-radius: 5px;

  text-align: left;
  box-sizing: border-box;
  /* width: 100%; */
  /* min-height: 60px; */
  /* max-height: 88px; */
  line-height: 20px;
  padding: 0 5px;
  resize: none;
  outline: none;
  /* background-color: #f0f1f4; */
  /* border-radius: 10px; */
  font-size: 10px;

  white-space: nowrap;
  overflow-x: scroll;
  overflow-y: hidden;
  /* border: 1px white solid; */
}
.mob_item_content:focus {
  border: 1px #ff8200 solid;
  background-color: white;
}

option {
  height: 20px;
}

.mob_other_info {
  width: 100%;
  margin: auto;
}

.mob_capability_1 {
  width: 100%;
  /* height: 80px; */
  background-color: #dfdfdf;

  border-radius: 10px;

  /* display: grid; */
  /* grid-template-columns: 50% 50%; */
  /* grid-template-rows: repeat(2, 40px); */
}
.mob_capability_1 div {
  display: flex;
  align-items: center;
  padding: 10px 30px;
  /* justify-content: center; */
}
.mob_capability_2 {
  width: 100%;
  height: 150px;

  border-radius: 10px;
  text-align: left;

  box-sizing: border-box;
  padding: 5px 5px;
  font-size: 12px;
}
.mob_basic_info {
  display: grid;
  width: 100%;
  grid-template-columns: 20% 27% 20% 27%;
  grid-template-rows: repeat(4, 20px);
  grid-gap: 10px 2%;

  margin: auto;
  padding-bottom: 20px;
  border-bottom: 1px black solid;

  /* transform: scale(1, 1); */
}
.mob_item_name {
  background-color: #d20001;
  height: 100%;
  /* height: 20px; */

  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;

  color: white;
  font-size: 8px;
  border-radius: 10px;
  border: none;
}
.mob_item_content {
  width: 100%;
  height: 100%;
  border-radius: 5px;

  text-align: left;
  box-sizing: border-box;
  line-height: 20px;
  padding: 0 5px;
  resize: none;
  outline: none;
  font-size: 10px;

  white-space: nowrap;
  overflow-x: scroll;
  overflow-y: hidden;
  box-shadow: 0 2px 5px #999999;
  border: none;
  background-color: white;
}
.mob_item_content:focus {
  border: 1px #ff8200 solid;
  background-color: white;
}

option {
  height: 20px;
}

.mob_other_info {
  width: 100%;
  margin: auto;
}

.mob_capability_1 {
  width: 100%;
  /* height: 80px; */
  background-color: white;

  border-radius: 10px;

  /* display: grid; */
  /* grid-template-columns: 50% 50%; */
  /* grid-template-rows: repeat(2, 40px); */
}
.mob_capability_1 div {
  display: flex;
  align-items: center;
  padding: 10px 30px;
  /* justify-content: center; */
}

.mob_label_1 {
  min-width: 90px;
  width: fit-content;
  height: 35px;
  padding: 0 20px;
  margin: 15px auto;
  border-radius: 20px;

  background-color: #d20001;

  color: white;
  font-size: 18px;
  line-height: 30px;

  display: flex;
  justify-content: center;
  align-items: center;
  /* box-shadow: 0 5px 10px #999999; */
}

.mob_label_2 {
  width: fit-content;
  height: fit-content;
  margin: 10px 0;
  padding: 0 10px;
  border-radius: 5px;

  background-color: #d20001;

  color: white;
  font-size: 12px;
  line-height: 30px;
  text-align: left;

  display: flex;
  justify-content: center;
  align-items: center;

  /* box-shadow: 0 5px 10px #999999; */
}
</style>