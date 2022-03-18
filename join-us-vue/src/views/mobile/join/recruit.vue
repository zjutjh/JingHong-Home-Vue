<script setup lang="ts">
import { onMounted, reactive, watch } from "vue";
import Footer from "../../../components/pc/Footer.vue"
import { useRouter } from "vue-router";
import { usePageStore } from "../../../stores/pages";
import { INormalForm } from "../../../types/forms";
import { isPhone, isStuId } from "../../../utils/valid";
import { NormalForm } from "../../../apis/forms";
import { regions, choices } from '../../../utils/consts';
import Footer1 from "../../../components/pc/Footer.vue";
const store = usePageStore();
const router = useRouter();
const form = reactive(<INormalForm>{
  name: "",
  stu_id: "",
  gender: 0,
  college: "",
  campus: "",
  phone: "",
  qq: "",
  region: "",
  profile: "",
  feedback: "",
  want1: "",
  want2: "",
});

function regionChanged() {
  form.want1 = "";
  form.want2 = "";
}
function returnClicked() {
  router.push('/m/join');
}
async function submitClicked() {
  if (!isPhone(form.phone)) {
    alert("电话号码有误");
    return;
  }
  if (!isStuId(form.stu_id)) {
    alert("学号输入有误");
    return;
  }
  // TODO submit
  var res = await NormalForm(form);
  if (res.message == "ok") {
    alert("提交成功!");
    router.push('/m/join');
  } else {
    alert(res.message);
  }
}
onMounted(() => {
  store.pageNow = 4;
})
</script>
<template>
  <!-- {{ form }} -->
  <div style="margin-top: 80px;"></div>
  <div class="mob_label_1">报名表</div>
  <div style="width: 90%;margin: auto;">
    <div class="mob_basic_info">
      <div class="mob_item_name">姓名</div>
      <input class="mob_item_content" v-model="form.name" />
      <div class="mob_item_name">专业</div>
      <input class="mob_item_content" v-model="form.college" />
      <div class="mob_item_name">性别</div>
      <select class="mob_item_content" v-model="form.gender">
        <option value="0">男</option>
        <option value="1">女</option>
        <option value="2">其他</option>
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
      <div class="mob_choice">
        <div class="mob_item_name">第一志愿</div>
        <select class="mob_item_content" v-model="form.want1">
          <option
            v-for="(item) in choices[regions.indexOf(form.region)]"
            :value="item"
            :disabled="'disabled' ? item == form.want2 : 'true'"
          >{{ item }}</option>
        </select>

        <div class="mob_item_name">第二志愿</div>
        <select class="mob_item_content" v-model="form.want2">
          <option
            v-for="(item) in choices[regions.indexOf(form.region)]"
            :value="item"
            :disabled="'disabled' ? item == form.want1 : 'true'"
          >{{ item }}</option>
        </select>
      </div>
      <div class="mob_label_2">来一段简单的自我介绍吧！</div>
      <input class="mob_capability_2" v-model="form.profile" />

      <div class="mob_label_2">最后，有什么想对精弘网络说的话，可以在这里畅所欲言哦~</div>
      <input class="mob_capability_2" v-model="form.feedback" />
    </div>
    <div style="display:flex;">
      <div class="mob_button1" @click="returnClicked">返回</div>
      <div class="mob_button1" @click="submitClicked">提交</div>
    </div>
  </div>
  <Footer />
</template>

<style>
/* 样式 */

.mob_capability_2 {
  width: 100%;
  height: 100px;
  background-color: #dfdfdf;

  border-radius: 10px;
}

.mob_choice {
  padding: 20px 0;
  border-bottom: 1px black solid;

  display: grid;
  justify-content: center;
  grid-template-columns: 30% 60%;
  grid-template-rows: repeat(2, 30px);
  grid-gap: 10px 2.8%;
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
.mob_button1 {
  width: 120px;
  height: 30px;
  /* padding: 0 20px; */
  margin: 15px auto;
  border-radius: 20px;

  background-color: #d20001;

  color: white;
  font-size: 15px;
  line-height: 30px;

  display: flex;
  justify-content: center;
  align-items: center;
  /* box-shadow: 0 5px 10px #999999; */
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
  height: 100px;
  background-color: #dfdfdf;

  border-radius: 10px;
  text-align: left;

  box-sizing: border-box;
  padding: 5px 5px;
  font-size: 12px;
}
</style>