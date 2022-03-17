<script setup lang="ts">
import { onMounted, reactive, watch } from "vue";
import Footer from "../../../components/pc/Footer.vue"
import { useRouter } from "vue-router";
import { usePageStore } from "../../../stores/pages";
import { INormalForm } from "../../../types/forms";
import { isPhone, isStuId } from "../../../utils/valid"
import { NormalForm } from "../../../apis/forms"
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
const regions = ["朝晖", "屏峰", "莫干山"];
const choices = [
  ["办公室", "活动部",
    "Touch产品部", "编辑工作室",
    "视觉影像部", "技术部",
    "易班文化工作站", "小弘工作室",],
  ["办公室", "活动部",
    "Touch产品部", "小弘工作室",
    "编辑工作室", "视觉影像部",
    "技术部", "易班文化站"],
  ["秘书处", "小弘工作室", "编辑工作室", "视觉影像部", "技术部",],
]
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
  <!-- ! TODO 测试数据, 移除这一行. -->
  {{ form }}
  <div style="margin-top: 10px;"></div>
  <div class="des_label_1">报名表</div>
  <!-- <div class="box"> -->
  <div class="basic_info">
    <div class="item_name">姓名</div>
    <input class="item_content" v-model="form.name" />
    <div class="item_name">专业</div>
    <input class="item_content" v-model="form.campus" />
    <div class="item_name">性别</div>
    <!-- <div class="item_content" ></div> -->
    <select class="item_content" v-model="form.gender">
      <option value="0">男</option>
      <option value="1">女</option>
      <option value="2">跨性别</option>
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
      <option style="display: none;">选择后显示志愿</option>
      <option v-for="region in regions" :value="region">{{ region }}</option>
    </select>
  </div>
  <div class="other_info">
    <div
      style="padding: 20px 0;border-bottom: 1px black solid;display: flex;justify-content: space-between;"
    >
      <div class="item_name">第一志愿</div>
      <select class="item_content" v-model="form.want1" :disabled="(form.region == '')">
        <!-- <option style="display: none;">请先选择志愿</option> -->
        <option
          v-for="(item) in choices[regions.indexOf(form.region)]"
          :value="item"
          :disabled="'disabled' ? item == form.want2 : 'true'"
        >{{ item }}</option>
      </select>

      <div class="item_name">第二志愿</div>
      <select class="item_content" v-model="form.want2" :disabled="(form.region == '')">
        <!-- <option style="display: none;">请先选择志愿</option> -->
        <option
          v-for="item in choices[regions.indexOf(form.region)]"
          :value="item"
          :disabled="'disabled' ? item == form.want1 : 'true'"
        >{{ item }}</option>
      </select>
    </div>
    <div class="des_label_2">来一段简单的自我介绍吧！</div>
    <input class="capability_2" v-model="form.profile" />

    <div class="des_label_2">最后，有什么想对精弘网络说的话，可以在这里畅所欲言哦~</div>
    <input class="capability_2" v-model="form.feedback" />
  </div>
  <div style="display:flex; center">
    <!-- TODO: 缺少样式 -->
    <div class="button1" @click="returnClicked">返回</div>
    <div class="button1" @click="submitClicked">提交</div>
  </div>
  <!-- </div> -->
  <Footer></Footer>
</template>

<style>
template {
  min-width: 900px;
}
.basic_info {
  display: grid;
  width: 70%;
  grid-template-columns: 13% 33% 13% 33%;
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
  font-size: 15px;
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
}

.other_info {
  width: 70%;
  margin: auto;
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
}
.other_info .item_name {
  width: 15%;
  height: 40px;
}

.other_info .item_content {
  width: 30%;
}

.other_info {
  width: 70%;
  margin: auto;
}
.other_info option {
  width: 10px;
}
</style>