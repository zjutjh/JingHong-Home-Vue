<script setup lang="ts">
import { onMounted, reactive, ref, watch } from "vue";
import Footer from "../../../components/pc/Footer.vue"
import { useRouter } from "vue-router";
import { usePageStore } from "../../../stores/pages";
import { INormalForm } from "../../../types/forms";
import { isPhone, isStuId } from "../../../utils/valid";
import { NormalForm } from "../../../apis/forms";
import { regions, choices } from '../../../utils/const';
import Label from '../../../components/pc/JHLabel.vue'
import JHNotice from "../../../components/pc/JHNotice.vue";
import JHInput from "../../../components/pc/JHInput.vue";
import JHSelect from "../../../components/pc/JHSelect.vue";
const store = usePageStore();
const router = useRouter();
const genderOptions = [
  { label: "男", value: 0 },
  { label: "女", value: 1 },
];
const form = reactive(<INormalForm>{
  name: "",
  stu_id: "",
  gender: "-1",
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
  router.push('/m/join');
}
const phoneValid = ref(true);
const stuIDValid = ref(true);
const wantValid = ref(false);
const noticeShow = ref(false);
const noticeMessage = ref<string>('请将信息正确填写完整再提交');
const nameValid = ref(true);
async function submitClicked() {
  submitted.value = true;
  nameValid.value = form.name.length > 2 && form.name.length < 12;
  phoneValid.value = isPhone(form.phone);
  stuIDValid.value = isStuId(form.stu_id);
  wantValid.value = form.want1 != "no" && form.want2 != "no";

  if (!(phoneValid.value && stuIDValid.value && wantValid.value)) {
    noticeMessage.value = "请将信息正确填写完整再提交";
    noticeShow.value = true;
    return;
  }
  var res = await NormalForm(form);

  if (res.message == "ok") {
    noticeMessage.value = "提交成功";
    noticeShow.value = true;
    while (true) {
      await new Promise(resolve => setTimeout(resolve, 3000));
      if (noticeShow.value) {
        noticeShow.value = false;
        break;
      }
    }
    router.push('/join');
  } else {
    noticeMessage.value = res.message;
    noticeShow.value = true;
  }
}

function closeNoticeShow() {
  noticeShow.value = false;
}

onMounted(() => {
  store.pageNow = 4;
})
const submitted = ref(false);
</script>
<template>
  <JHNotice :show="noticeShow" @changeShow="closeNoticeShow" type="mob">{{ noticeMessage }}</JHNotice>
  <div style="margin-top: 80px;"></div>
  <div class="mob_label_1">报名表</div>
  <div style="width: 90%;margin: auto;">
    <div class="mob_basic_info">
      <JHInput label="姓名" type="mob" v-model="form.name" notice="姓名长度2-12" :valid="nameValid"></JHInput>
      <JHInput
        label="专业"
        type="mob"
        v-model="form.college"
        notice="此项不为空"
        :valid="!(form.college == '' && submitted)"
      ></JHInput>
      <JHSelect
        label="性别"
        v-model.number:value="form.gender"
        :valid="!(form.gender == '-1' && submitted)"
        :disabled="false"
        type="mob"
        notice="此项不为空"
      >
        <option v-for="gender in genderOptions" :value="gender.value">{{ gender.label }}</option>
      </JHSelect>

      <JHInput label="联系电话" type="mob" v-model="form.phone" notice="电话号码11位" :valid="phoneValid"></JHInput>
      <JHInput label="学号" type="mob" v-model="form.stu_id" notice="学号12位" :valid="stuIDValid"></JHInput>
      <JHInput
        label="QQ"
        type="mob"
        v-model="form.qq"
        notice="此项不为空"
        :valid="!(form.qq == '' && submitted)"
      ></JHInput>
      <JHInput
        label="学院"
        v-model.number:value="form.campus"
        :valid="!(form.campus == '' && submitted)"
        :disabled="false"
        type="mob"
        notice="此项不为空"
      ></JHInput>
      <JHSelect
        label="校区"
        v-model.number:value="form.region"
        :valid="!(form.region == 'no' && submitted)"
        :disabled="false"
        type="mob"
        notice="此项不为空"
        @change="regionChanged"
      >
        <option value="no" disabled="true">选择后显示志愿</option>
        <option v-for="region in regions" :value="region">{{ region }}</option>
      </JHSelect>
    </div>

    <div class="mob_other_info">
      <JHSelect
        label="第一志愿"
        v-model="form.want1"
        :disabled="form.region == 'no'"
        :valid="!(form.want1 == 'no' && submitted)"
        notice="此项不为空"
        type="normal"
      >
        <option value="no" disabled="true">{{ form.region == 'no' ? '请先选择校区' : '未选择' }}</option>
        <option
          v-for="(item) in choices[regions.indexOf(form.region)]"
          :value="item"
          :disabled="'disabled' ? item == form.want2 : 'true'"
        >{{ item }}</option>
      </JHSelect>

      <JHSelect
        label="第二志愿"
        v-model="form.want2"
        :disabled="form.region == 'no'"
        :valid="!(form.want2 == 'no' && submitted)"
        notice="此项不为空"
        type="normal"
      >
        <option value="no" disabled="true">{{ form.region == 'no' ? '请先选择校区' : '未选择' }}</option>
        <option
          v-for="(item) in choices[regions.indexOf(form.region)]"
          :value="item"
          :disabled="'disabled' ? item == form.want1 : 'true'"
        >{{ item }}</option>
      </JHSelect>
    </div>

    <div class="mob_label_2">来一段简单的自我介绍吧！</div>
    <textarea class="mob_capability_2" v-model="form.profile" />

    <div class="mob_label_2">最后，有什么想对精弘网络说的话，可以在这里畅所欲言哦~</div>
    <textarea class="mob_capability_2" v-model="form.feedback" />
  </div>
  <div style="display:flex;">
    <div class="mob_button1" @click="returnClicked">返回</div>
    <div class="mob_button1" @click="submitClicked">提交</div>
  </div>
  <div style="height:20vh"></div>
  <Footer />
</template>

<style scoped>
/* 样式 */
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
  box-shadow: 0 2px 5px #999999;
}
.mob_basic_info {
  display: grid;
  width: 100%;
  grid-template-columns: 50% 50%;
  grid-template-rows: repeat(4, 40px);
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
  margin-top: 10px;
  display: grid;
  grid-template-rows: repeat(2, 40px);
  grid-gap: 10px;
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
</style>