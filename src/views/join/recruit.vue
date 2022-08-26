<script setup lang="ts">
import { reactive, ref } from "vue";
import Footer from "@/components/Footer.vue";
import { useRouter } from "vue-router";
import { usePageStore } from "@/stores/pages";
import { INormalForm } from "@/types/forms";
import { isPhone, isStuId } from "@/utils/valid";
import { PostNormalForm } from "@/apis/forms";
import { GetCaptchaForm } from "@/apis/captcha";
import { ICaptcha } from "@/types/forms";
import JHLabel from "@/components/JHLabel.vue";
import JHButton from "@/components/JHButton.vue";
import JHNotice from "@/components/JHNotice.vue";
import JHInput from "@/components/JHInput.vue";
import JHSelect from "@/components/JHSelect.vue";
import { departments, regions } from "@/utils/const";
import PageTop from "@/components/PageTop.vue";
const pageStore = usePageStore();
const router = useRouter()
const captcha = reactive<ICaptcha>({
  id: "",
  b64s: "",
});
const choices = [
  [],
  ["办公室", "活动部",
    "Touch产品部", "编辑工作室",
    "视觉影像部", "技术部",
    "易班文化工作站", "小弘工作室",],
  ["办公室", "活动部",
    "Touch产品部", "小弘工作室",
    "编辑工作室", "视觉影像部",
    "技术部", "易班文化工作站"],
  ["秘书处", "小弘工作室", "编辑工作室", "视觉影像部", "技术部",],
]
const form = reactive<INormalForm>({
  name: "",
  stu_id: "",
  gender: "-1",
  college: "",
  campus: '',
  phone: "",
  qq: "",
  region: 0,
  profile: "",
  feedback: "",
  want1: 0,
  want2: 0,
  captcha_id: "",
  captcha_code: "",
});

function regionChanged() {
  form.want1 = 0;
  form.want2 = 0;
}

function returnClicked() {
  router.push("/join");
}
const nameValid = ref(true);
const phoneValid = ref(true);
const stuIDValid = ref(true);
const wantValid = ref(false);
const submitted = ref(false);
const vertifyCaptchaNotice = ref<boolean>(false);
async function SubmitCaptcha() {
  if (form.captcha_code == "") {
    alert("请输入验证码");
  } else {
    vertifyCaptchaNotice.value = false;
    var res = await PostNormalForm(form);
    if (res.message == "ok") {
      noticeMessage.value = "提交成功, (两秒后返回)";
      noticeShow.value = true;
      vertifyCaptchaNotice.value = false;
      setTimeout(() => {
        router.push("/index");
      }, 2000);
    } else {
      noticeMessage.value = res.message;
      noticeShow.value = true;
    }
  }
}
async function submitClicked() {
  submitted.value = true;
  nameValid.value = form.name.length >= 2 && form.name.length <= 12;
  phoneValid.value = isPhone(form.phone);
  stuIDValid.value = isStuId(form.stu_id);
  wantValid.value = form.want1 != 0;

  if (!(phoneValid.value && stuIDValid.value && wantValid.value)) {
    noticeMessage.value = "请将信息正确填写完整再提交";
    noticeShow.value = true;
    return;
  }
  GetCaptcha();
  vertifyCaptchaNotice.value = true;
}

const noticeShow = ref(false);

function closeNoticeShow() {
  noticeShow.value = false;
}

const textarea1Focused = ref(false);
const textarea2Focused = ref(false);
const genderOptions = [
  { label: "男", value: 0 },
  { label: "女", value: 1 },
];

const noticeMessage = ref<string>("请将信息正确填写完整再提交");
async function GetCaptcha() {
  let res = await GetCaptchaForm();
  form.captcha_id = res.data.id;
  captcha.b64s = res.data.b64s;
}

</script>

<template>
  <page-top />
  <JHLabel type="small">报名表</JHLabel>
  <JHNotice :show="noticeShow" @changeShow="closeNoticeShow" @cancel="closeNoticeShow"
    :type="pageStore.pageType == 'normal' ? 'pc' : 'mob'">
    {{ noticeMessage }}
  </JHNotice>
  <JHNotice :show="vertifyCaptchaNotice" :type="pageStore.pageType == 'normal' ? 'pc' : 'mob'"
    @changeShow="SubmitCaptcha" @cancel="vertifyCaptchaNotice = false">
    <div style="background-color: white; margin: auto; width: fit-content">
      <img class="captcha" :class="pageStore.pageType" :src="captcha.b64s"
        :style="captcha.b64s == '' ? 'display:none' : ''" @click="GetCaptcha" />
    </div>
    输入验证码：<br />
    <input v-model="form.captcha_code" style="max-width: 80%" />
  </JHNotice>
  <div class="basic_info" :class="pageStore.pageType">
    <JHInput label="姓名" v-model="form.name" :valid="nameValid" notice="姓名长度2-12"
      :type="pageStore.pageType == 'normal' ? 'normal' : 'mob'"></JHInput>
    <JHInput label="学院" v-model="form.campus" :valid="!(form.campus == '' && submitted)"
      :type="pageStore.pageType == 'normal' ? 'normal' : 'mob'" notice="此项不为空"></JHInput>
    <JHSelect label="性别" v-model.number:value="form.gender" :valid="!(form.gender == '-1' && submitted)"
      :disabled="false" :type="pageStore.pageType == 'normal' ? 'normal' : 'mob'" notice="此项不为空">
      <option v-for="gender in genderOptions" :value="gender.value">
        {{ gender.label }}
      </option>
    </JHSelect>

    <JHInput label="联系电话" v-model="form.phone" :valid="phoneValid" notice="电话号码11位"
      :type="pageStore.pageType == 'normal' ? 'normal' : 'mob'"></JHInput>
    <JHInput label="学号" v-model="form.stu_id" :valid="stuIDValid" notice="学号12位"
      :type="pageStore.pageType == 'normal' ? 'normal' : 'mob'"></JHInput>
    <JHInput label="QQ" v-model="form.qq" :valid="!(form.qq == '' && submitted)"
      :type="pageStore.pageType == 'normal' ? 'normal' : 'mob'" notice="此项不为空"></JHInput>
    <JHInput label="专业" v-model="form.college" :valid="!(form.college == '' && submitted)" notice="此项不为空"
      :type="pageStore.pageType == 'normal' ? 'normal' : 'mob'"></JHInput>

    <JHSelect label="校区" v-model.number="form.region" @change="regionChanged" :valid="!(form.region == 0 && submitted)"
      :disabled="false" notice="此项不为空" :type="pageStore.pageType == 'normal' ? 'normal' : 'mob'">
      <option value="0" selected disabled>选择校区后才能选择志愿</option>
      <option v-for="(region, index) in regions.slice(1)" :value="index + 1">{{ region }}</option>
    </JHSelect>
  </div>

  <div class="other_info">
    <JHSelect label="第一志愿" v-model.number="form.want1" :disabled="form.region == 0"
      :valid="!(form.want1 == 0 && submitted)" notice="此项不为空" :type="pageStore.pageType == 'normal' ? 'normal' : 'mob'">
      <option value="0" disabled="true">
        {{ form.region == 0 ? "请先选择校区" : "未选择" }}
      </option>
      <option v-for="item in choices[form.region]" :value="departments.indexOf(item)"
        :disabled="'disabled' ? departments.indexOf(item) == form.want2 : 'true'">
        {{ item }}
      </option>
    </JHSelect>

    <JHSelect label="第二志愿" v-model.number="form.want2" :disabled="form.region == 0" notice="此项不为空"
      :type="pageStore.pageType == 'normal' ? 'normal' : 'mob'">
      <option value="0">
        {{ form.region == 0 ? "请先选择校区" : "未选择" }}
      </option>
      <option v-for="item in choices[form.region]" :value="departments.indexOf(item)"
        :disabled="'disabled' ? departments.indexOf(item) == form.want1 : 'true'">
        {{ item }}
      </option>
    </JHSelect>
  </div>

  <div class="selfIntroduce">
    <div>
      <JHLabel type="nano">来一段简单的自我介绍吧！</JHLabel>
      <textarea class="capability_2" v-model="form.profile" :placeholder="
        textarea1Focused ? '' : '还可以加入你的特长、爱好、职位相关经历哦～'
      " @focusin="textarea1Focused = true" @focusout="textarea1Focused = false" />
    </div>

    <div>
      <JHLabel type="nano">最后，有什么想对精弘网络说的话，可以在这里畅所欲言哦~</JHLabel>
      <textarea class="capability_2" v-model="form.feedback" :placeholder="textarea2Focused ? '' : '暂时想不到可以填写“无”'"
        @focusin="textarea2Focused = true" @focusout="textarea2Focused = false" />
    </div>
  </div>

  <div style="display:flex;">
    <JHButton type="small" @click="returnClicked">返回</JHButton>
    <JHButton type="small" @click="submitClicked">提交</JHButton>
  </div>

  (提交成功后自动返回首页)
  <Footer></Footer>
</template>

<style scoped lang="scss">
template {
  min-width: 900px;
}

.item_base {
  display: grid;
  grid-template-columns: 20% 80%;
  grid-template-rows: 70% 30%;
  grid-column-gap: 20px;
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
  grid-template-columns: 50% 50%;
  grid-template-rows: repeat(4, 40px);
  grid-gap: 10px;
  margin: auto;
  padding-bottom: 20px;
  border-bottom: 1px black solid;
}

.basic_info.mini {
  display: grid;
  width: 80%;
  grid-template-columns: 50% 50%;
  grid-template-rows: repeat(4, 30px);
  grid-gap: 20px;
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
  outline: none;
  background-color: white;

  border-radius: 10px;
  text-align: left;

  box-sizing: border-box;
  padding: 5px 10px;
  font-size: 12px;
  line-height: 20px;
  font-weight: 600;
  border: none;
  width: 22vw;
  box-shadow: 0 5px 10px #999999;
}

.other_info {
  display: grid;
  width: 70vw;
  grid-row-gap: 4vh;
  grid-column-gap: 1vw;
  grid-template-rows: 40px 40px;
  margin: auto;
  padding: 5vh;
  border-bottom: 1px black solid;
}

.capability_1 {
  outline: none;
  width: 100%;
  height: 150px;

  background-color: white;
  border-radius: 10px;

  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: repeat(2, 40px);
}

.capability_1 div {
  outline: none;
  display: flex;
  align-items: center;
  margin: 20px;
  /* justify-content: center; */
}

.capability_2 {
  width: 100%;
  /* background-color: #dfdfdf; */
  background-color: white;
  height: 150px;
  border-radius: 10px;
  text-align: left;
  outline: none;
  box-sizing: border-box;
  padding: 5px 5px;
  font-size: 16px;
  font-weight: 600;
  box-shadow: 0 5px 10px #999999;
  margin-top: 10px;
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

.captcha.mini,
.captcha.middle {
  width: 120px;
}

.captcha.normal {
  width: 240px;
}
</style>
