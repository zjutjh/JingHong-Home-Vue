<script setup lang="ts">
import { onMounted, reactive, ref, watch } from "vue";
import Footer from "../../components/Footer.vue";
import { useRouter } from "vue-router";
import { usePageStore } from "../../stores/pages";
import { INormalForm } from "../../types/forms";
import { isPhone, isStuId } from "../../utils/valid";
import { NormalForm } from "../../apis/forms";
import { GetCaptchaForm } from "../../apis/captcha";
import { ICaptcha } from "../../types/forms";
import Label from "../../components/JHLabel.vue";
import JHButton from "../../components/JHButton.vue";
import JHNotice from "../../components/JHNotice.vue";
import JHInput from "../../components/JHInput.vue";
import JHSelect from "../../components/JHSelect.vue";
const pageStore = usePageStore();
const router = useRouter();
const captcha = reactive(<ICaptcha>{
  id: "",
  b64s: "",
});
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
  captcha_id: "",
  captcha_code: "",
});
function regionChanged() {
  form.want1 = "no";
  form.want2 = "no";
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
    alert("ok");
    vertifyCaptchaNotice.value = false;
    var res = await NormalForm(form);
    if (res.message == "ok") {
      noticeMessage.value = "提交成功";
      noticeShow.value = true;
      vertifyCaptchaNotice.value = false;
      while (true) {
        await new Promise((resolve) => setTimeout(resolve, 3000));
        if (noticeShow.value) {
          noticeShow.value = false;
          break;
        }
      }
      router.push("/join");
    } else {
      noticeMessage.value = res.message; // 显示提示信息
      noticeShow.value = true;
    }
  }
}
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
const regions = ["朝晖", "屏峰", "莫干山"];

const choices = [
  [
    "办公室",
    "活动部",
    "Touch产品部",
    "编辑工作室",
    "视觉影像部",
    "技术部",
    "易班文化工作站",
    "小弘工作室",
  ],
  [
    "办公室",
    "活动部",
    "Touch产品部",
    "小弘工作室",
    "编辑工作室",
    "视觉影像部",
    "技术部",
    "易班文化工作站",
  ],
  ["秘书处", "小弘工作室", "编辑工作室", "视觉影像部", "技术部"],
];
const noticeMessage = ref<string>("请将信息正确填写完整再提交");
async function GetCaptcha() {
  let res = await GetCaptchaForm();
  console.log(res);
  form.captcha_id = res.data.id;
  captcha.b64s = res.data.b64s;
}
</script>

<template>
  <div style="margin-top: 20vh"></div>
  <Label type="middle">报名表</Label>
  <JHNotice
    :show="noticeShow"
    @changeShow="closeNoticeShow"
    @cancel="closeNoticeShow"
    :type="pageStore.pageType == 'normal' ? 'pc' : 'mob'"
  >
    {{ noticeMessage }}
  </JHNotice>
  <JHNotice
    :show="vertifyCaptchaNotice"
    :type="pageStore.pageType == 'normal' ? 'pc' : 'mob'"
    @changeShow="SubmitCaptcha"
    @cancel="vertifyCaptchaNotice = false"
  >
    <div style="background-color: white; margin: auto; width: fit-content">
      <img
        class="captcha"
        :class="pageStore.pageType"
        :src="captcha.b64s"
        :style="captcha.b64s == '' ? 'display:none' : ''"
        @click="GetCaptcha"
      />
    </div>
    输入验证码：<br />
    <input v-model="form.captcha_code" style="max-width: 80%" />
  </JHNotice>
  <div class="basic_info" :class="pageStore.pageType">
    <JHInput
      label="姓名"
      v-model="form.name"
      :valid="nameValid"
      notice="姓名长度2-12"
      :type="pageStore.pageType == 'normal' ? 'normal' : 'mob'"
    ></JHInput>
    <JHInput
      label="专业"
      v-model="form.campus"
      :valid="!(form.campus == '' && submitted)"
      :type="pageStore.pageType == 'normal' ? 'normal' : 'mob'"
      notice="此项不为空"
    ></JHInput>
    <JHSelect
      label="性别"
      v-model.number:value="form.gender"
      :valid="!(form.gender == '-1' && submitted)"
      :disabled="false"
      :type="pageStore.pageType == 'normal' ? 'normal' : 'mob'"
      notice="此项不为空"
    >
      <option v-for="gender in genderOptions" :value="gender.value">
        {{ gender.label }}
      </option>
    </JHSelect>

    <JHInput
      label="联系电话"
      v-model="form.phone"
      :valid="phoneValid"
      notice="电话号码11位"
      :type="pageStore.pageType == 'normal' ? 'normal' : 'mob'"
    ></JHInput>
    <JHInput
      label="学号"
      v-model="form.stu_id"
      :valid="stuIDValid"
      notice="学号12位"
      :type="pageStore.pageType == 'normal' ? 'normal' : 'mob'"
    ></JHInput>
    <JHInput
      label="QQ"
      v-model="form.qq"
      :valid="!(form.qq == '' && submitted)"
      :type="pageStore.pageType == 'normal' ? 'normal' : 'mob'"
      notice="此项不为空"
    ></JHInput>
    <JHInput
      label="学院"
      v-model="form.college"
      :valid="!(form.college == '' && submitted)"
      notice="此项不为空"
      :type="pageStore.pageType == 'normal' ? 'normal' : 'mob'"
    ></JHInput>

    <JHSelect
      label="校区"
      v-model="form.region"
      @change="regionChanged"
      :valid="!(form.region == 'no' && submitted)"
      :disabled="false"
      notice="此项不为空"
      :type="pageStore.pageType == 'normal' ? 'normal' : 'mob'"
    >
      <option value="no" selected disabled>选择校区后才能选择志愿</option>
      <option v-for="region in regions" :value="region">{{ region }}</option>
    </JHSelect>
  </div>

  <div class="other_info">
    <JHSelect
      label="第一志愿"
      v-model="form.want1"
      :disabled="form.region == 'no'"
      :valid="!(form.want1 == 'no' && submitted)"
      notice="此项不为空"
      :type="pageStore.pageType == 'normal' ? 'normal' : 'mob'"
    >
      <option value="no" disabled="true">
        {{ form.region == "no" ? "请先选择校区" : "未选择" }}
      </option>
      <option
        v-for="item in choices[regions.indexOf(form.region)]"
        :value="item"
        :disabled="'disabled' ? item == form.want2 : 'true'"
      >
        {{ item }}
      </option>
    </JHSelect>

    <JHSelect
      label="第二志愿"
      v-model="form.want2"
      :disabled="form.region == 'no'"
      :valid="!(form.want2 == 'no' && submitted)"
      notice="此项不为空"
      :type="pageStore.pageType == 'normal' ? 'normal' : 'mob'"
    >
      <option value="no" disabled="true">
        {{ form.region == "no" ? "请先选择校区" : "未选择" }}
      </option>
      <option
        v-for="item in choices[regions.indexOf(form.region)]"
        :value="item"
        :disabled="'disabled' ? item == form.want1 : 'true'"
      >
        {{ item }}
      </option>
    </JHSelect>
  </div>

  <div class="selfIntroduce">
    <div>
      <Label type="small">来一段简单的自我介绍吧！</Label>
      <textarea
        class="capability_2"
        v-model="form.profile"
        :placeholder="
          textarea1Focused ? '' : '还可以加入你的特长、爱好、职位相关经历哦～'
        "
        @focusin="textarea1Focused = true"
        @focusout="textarea1Focused = false"
      />
    </div>

    <div>
      <Label type="small"
        >最后，有什么想对精弘网络说的话，可以在这里畅所欲言哦~</Label
      >
      <textarea
        class="capability_2"
        v-model="form.feedback"
        :placeholder="textarea2Focused ? '' : '暂时想不到可以填写“无”'"
        @focusin="textarea2Focused = true"
        @focusout="textarea2Focused = false"
      />
    </div>
  </div>

  <div style="display:flex; center">
    <JHButton type="small" @click="returnClicked">返回</JHButton>
    <JHButton type="small" @click="submitClicked">提交</JHButton>
  </div>
  <!-- <button
    @click="
      GetCaptcha();
      captcha.b64s =
        'data:image/png;base64,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';
      vertifyCaptchaNotice = true;
    "
  >
    验证码测试
  </button> -->
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
  grid-gap: 20px 2.8%;

  margin: auto;
  padding-bottom: 20px;
  border-bottom: 1px black solid;
}

.basic_info.mini {
  display: grid;
  width: 90%;
  grid-template-columns: 50% 50%;
  grid-template-rows: repeat(4, 40px);
  grid-gap: 10px 2%;
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
  /* background-color: #dfdfdf; */

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
