<script setup lang="ts">
import { onMounted, reactive, watch } from "vue";
import Footer from "../../../components/pc/Footer.vue"
import { useRouter } from "vue-router";
import { usePageStore } from "../../../stores/pages";
import { INormalForm } from "../../../types/forms";
import { isPhone, isStuId } from "../../../utils/valid";
import { NormalForm } from "../../../apis/forms";
import { regions, choices } from '../../../utils/const';
import Label from "../../../components/pc/JHLabel.vue";
import JHButton from "../../../components/pc/JHButton.vue";
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
  region: "no",
  profile: "",
  feedback: "",
  want1: "no",
  want2: "no",
});

function regionChanged() {
  form.want1 = "";
  form.want2 = "";
}
function returnClicked() {
  router.push('/join');
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
    router.push('/join');
  } else {
    alert(res.message);
  }
}

onMounted(() => {
  store.pageNow = 4;
})


</script>

<template>
  <div style="margin-top: 20vh;"></div>
  <Label type="middle">报名表</Label>
  <div class="basic_info">
    <div class="item_name">姓名</div>
    <input class="item_content" v-model="form.name" />
    <div class="item_name">专业</div>
    <input class="item_content" v-model="form.campus" />
    <div class="item_name">性别</div>
    <select class="item_content" v-model="form.gender">
      <option value="0">男</option>
      <option value="1">女</option>
      <option value="2">其他</option>
    </select>

    <div class="item_name">联系电话</div>
    <input class="item_content" v-model="form.phone" />
    <div class="item_name">学号</div>
    <input class="item_content" v-model="form.stu_id" />
    <div class="item_name">QQ</div>
    <input class="item_content" v-model="form.qq" />
    <div class="item_name">学院</div>
    <input class="item_content" v-model="form.college" />
    <div class="item_name">校区</div>
    <select class="item_content" v-model="form.region" @change="regionChanged">
      <option value="no">选择后显示志愿</option>
      <option v-for="region in regions" :value="region">{{ region }}</option>
    </select>
  </div>
  <div class="other_info">
    <div class="item_name">第一志愿</div>
    <select class="item_content" v-model="form.want1" :disabled="(form.region == '')">
      <option value="no">请先选择校区</option>
      <option
        v-for="(item) in choices[regions.indexOf(form.region)]"
        :value="item"
        :disabled="'disabled' ? item == form.want2 : 'true'"
      >{{ item }}</option>
    </select>

    <div class="item_name">第二志愿</div>

    <select class="item_content" v-model="form.want2" :disabled="(form.region == '')">
      <option value="no">请先选择校区</option>
      <option
        v-for="item in choices[regions.indexOf(form.region)]"
        :value="item"
        :disabled="'disabled' ? item == form.want1 : 'true'"
      >{{ item }}</option>
    </select>
  </div>
  <div class="selfIntroduce">
    <div>
      <Label type="small">来一段简单的自我介绍吧！</Label>
      <input class="capability_2" v-model="form.profile" />
    </div>

    <div>
      <Label type="small">最后，有什么想对精弘网络说的话，可以在这里畅所欲言哦~</Label>
      <input class="capability_2" v-model="form.feedback" />
    </div>
  </div>
  <div style="display:flex; center">
    <JHButton type="small" @click="returnClicked">返回</JHButton>
    <JHButton type="small" @click="submitClicked">提交</JHButton>
  </div>

  <Footer></Footer>
</template>

<style>
template {
  min-width: 900px;
}
.selfIntroduce {
  width: 70vw;
  margin: auto;
  display: grid;
  grid-template-rows: 50% 50%;
  padding: 2vh;
}
.basic_info {
  display: grid;
  width: 70%;
  grid-template-columns: 10% 90%;
  grid-template-rows: repeat(4, 30px);
  grid-gap: 20px 2.8%;

  margin: auto;
  padding-bottom: 20px;
  border-bottom: 1px black solid;
}
.item_name {
  background-color: #d20001;
  height: 30px;

  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;

  color: white;
  font-size: 1vw;
}

.item_content {
  /* background-color: #dfdfdf; */
  background-color: white;

  border-radius: 10px;
  text-align: left;

  box-sizing: border-box;
  padding: 5px 10px;
  font-size: 12px;
  line-height: 20px;
  font-weight: 600;
  border: none;
  width: 60vw;
  box-shadow: 0 5px 10px #999999;
}

.other_info {
  display: grid;
  width: 70vw;
  grid-row-gap: 2vh;
  grid-column-gap: 1vw;
  grid-template-rows: 50% 50%;
  grid-template-columns: 15% 85%;
  margin: auto;
  padding: 3vh;
  border-bottom: 1px black solid;
}

.capability_1 {
  width: 100%;
  height: 80px;
  /* background-color: #dfdfdf; */

  background-color: white;
  border-radius: 10px;

  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: repeat(2, 40px);
}
.capability_1 div {
  display: flex;
  align-items: center;
  margin: 20px;
  /* justify-content: center; */
}
.capability_2 {
  width: 100%;
  height: 100px;
  /* background-color: #dfdfdf; */
  background-color: white;

  border-radius: 10px;
  text-align: left;

  box-sizing: border-box;
  padding: 5px 5px;
  font-size: 12px;
  font-weight: 600;
  box-shadow: 0 5px 10px #999999;
}
.other_info .item_name {
  width: 10vw;
  height: 40px;
  display: flex;
  display: inline-flex;
}

.other_info .item_content {
  width: 58vw;
}

.other_info option {
  width: 10px;
}
.des_label_1 {
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
}
.des_label_2 {
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
}
</style>