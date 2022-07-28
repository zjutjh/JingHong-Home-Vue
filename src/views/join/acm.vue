<script setup lang="ts">
import { onMounted, reactive } from "vue";
import PageTop from "../../components/PageTop.vue";
import { IACMUser } from "../../types/acm";
import JHInput from "../../components/JHInput.vue";
import JHLabel from "../../components/JHLabel.vue";
import { usePageStore } from "../../stores/pages";
import JHCard from "../../components/JHCard.vue";
import { isPhone, isID, isEmail, isStuId } from "../../utils/valid";
import JHButton from "../../components/JHButton.vue";
import router from "../../router";
import { getCaptcha, registerUser } from "../../apis/acm";
import { GetCaptchaForm } from "../../apis/captcha";
const data = reactive(<IACMUser>{
  name: "",
  phone: "",
  email: "",
  stu_id: "",
  code: "",
});
const pageStore = usePageStore();
function returnClicked() {
  router.push("/join");
  return;
}
async function captchaClicked() {
  var res = await getCaptcha(data);
  // console.log(res);
  if (res != "OK") alert("提交失败");
  else alert("验证码已发送");
  return;
}
async function submitClicked() {
  var res = await registerUser(data);
  if (res != "OK") alert("提交失败");
  else alert("提交成功");
  return;
}

onMounted(() => {
  alert("不要使用代理，否则可能导致提交失败");
});
</script>
<template>
  <PageTop />
  <div class="form-base">
    <JHLabel type="small">ACM新生赛报名表</JHLabel>
    <JHInput
      label="姓名"
      v-model="data.name"
      :valid="data.name != ''"
      notice="姓名长度2-12"
      :type="pageStore.pageType == 'normal' ? 'normal' : 'mob'"
    />
    <JHInput
      label="电话号码"
      v-model="data.phone"
      :valid="isPhone(data.phone)"
      notice="请输入您的电话号码"
      :type="pageStore.pageType == 'normal' ? 'normal' : 'mob'"
    />
    <JHInput
      label="身份证号或学号"
      v-model="data.stu_id"
      :valid="isID(data.stu_id) || isStuId(data.stu_id)"
      notice="身份证号长度18位"
      :type="pageStore.pageType == 'normal' ? 'normal' : 'mob'"
    />
    <JHInput
      label="E-mail"
      v-model="data.email"
      :valid="isEmail(data.email)"
      notice="输入Email"
      :type="pageStore.pageType == 'normal' ? 'normal' : 'mob'"
    />
    <JHInput
      label="验证码"
      v-model="data.code"
      :valid="data.code != ''"
      notice="输入验证码"
      :type="pageStore.pageType == 'normal' ? 'normal' : 'mob'"
    />
    <div class="btns">
      <JHButton type="small" @click="returnClicked">返回</JHButton>
      <JHButton type="small" @click="captchaClicked">获取验证码</JHButton>
      <JHButton type="small" @click="submitClicked">提交</JHButton>
    </div>
  </div>
</template>
<style scoped lang="scss">
.form-base {
  width: 80%;
  margin: auto;
  background-color: #ffffff;
  box-shadow: 0 5px 10px #999999;
  padding: 20px;
  border-radius: 15px;
  display: grid;
  grid-column: 30px;
  column-gap: 5px;
  .email-base {
    display: grid;
    grid-template-columns: 80% 20%;
    grid-column-gap: 10px;
  }
  .btns {
    display: flex;
    flex-direction: row;
  }
}
</style>
