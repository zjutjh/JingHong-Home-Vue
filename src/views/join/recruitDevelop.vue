<script setup lang="ts">
import Footer from '../../components/Footer.vue';
import { useRouter } from 'vue-router';
import { DevelopForm } from '../../apis/forms';
import { isPhone, isStuId } from '../../utils/valid';
import { IDevelopForm } from '../../types/forms';
import { reactive, ref } from 'vue';
import { regions } from '../../utils/const';
import JHButton from '../../components/JHButton.vue'
import JHLabel from '../../components/JHLabel.vue';
import JHNotice from '../../components/JHNotice.vue';
import JHSelect from '../../components/JHSelect.vue';
import JHInput from '../../components/JHInput.vue';
import { usePageStore } from '../../stores/pages';
const router = useRouter();
const pageStore = usePageStore();
const form = reactive(<IDevelopForm>{
  name: '',
  college: '',
  gender: '-1',
  phone: '',
  stu_id: '',
  qq: '',
  campus: '',
  region: 'no',

  ability: {
    api: false,
    front_end: false,
    document: false,
    git: false,
  },
  ability_other: '',
  feedback: '',
})

function returnClicked() {
  router.push('/join');
}

const phoneValid = ref(true);
const stuIDValid = ref(true);
const noticeShow = ref(false);
const nameValid = ref(true);
const submitted = ref(false);

async function submitClicked() {
  phoneValid.value = isPhone(form.phone);
  stuIDValid.value = isStuId(form.stu_id);
  nameValid.value = form.name.length > 2 && form.name.length < 12;
  submitted.value = true;
  if (!(phoneValid.value && stuIDValid.value && nameValid.value)) {
    noticeMessage.value = "请将信息正确填写完整再提交"
    noticeShow.value = true;
    return;
  }
  var ability = 0;
  Object.values(form.ability).forEach(v => {
    if (v) ability++;
  });
  if (ability < 2) {
    noticeMessage.value = "请至少选择两项能力"
    noticeShow.value = true;
    return;
  }
  var res = await DevelopForm(form);
  if (res.message == "ok") {
    noticeMessage.value = "提交成功";
    noticeShow.value = true;

    while (true) {
      await new Promise(resolve => setTimeout(resolve, 3000));
      if (noticeShow.value) {
        noticeShow.value = false;
        break;
      }
      router.push('/join');
    }
  } else {
    alert(res.message);
    return;
  }
}
function closeNoticeShow() {
  noticeShow.value = false;
}
const textarea1Focused = ref(false);
const textarea2Focused = ref(false);

const noticeMessage = ref<string>("");

const genderOptions = [
  { label: "男", value: 0 },
  { label: "女", value: 1 },
];
</script>
<template>
  <JHNotice :show="noticeShow" :type="pageStore.pageType == 'normal' ? 'pc' : 'mob'" @changeShow="closeNoticeShow"
    type="pc">{{ noticeMessage }}</JHNotice>

  <div style="height:20vh"></div>
  <JHLabel type="middle">技术部长期招新</JHLabel>
  <div class="basic_info">
    <JHInput label="姓名" v-model="form.name" :valid="nameValid" notice="姓名长度2-12"
      :type="pageStore.pageType == 'normal' ? 'normal' : 'mob'"></JHInput>
    <JHInput label="专业" v-model="form.campus" :valid="!(form.campus == '' && submitted)"
      :type="pageStore.pageType == 'normal' ? 'normal' : 'mob'" notice="此项不为空"></JHInput>
    <JHSelect label="性别" v-model.number:value="form.gender" :valid="!(form.gender == '-1' && submitted)"
      :disabled="false" :type="pageStore.pageType == 'normal' ? 'normal' : 'mob'" notice="此项不为空">
      <option v-for="gender in genderOptions" :value="gender.value">{{ gender.label }}</option>
    </JHSelect>

    <JHInput label="联系电话" v-model="form.phone" :valid="phoneValid" notice="电话号码11位"
      :type="pageStore.pageType == 'normal' ? 'normal' : 'mob'"></JHInput>
    <JHInput label="学号" v-model="form.stu_id" :valid="stuIDValid" notice="学号12位"
      :type="pageStore.pageType == 'normal' ? 'normal' : 'mob'"></JHInput>
    <JHInput label="QQ" v-model="form.qq" :valid="!(form.qq == '' && submitted)"
      :type="pageStore.pageType == 'normal' ? 'normal' : 'mob'" notice="此项不为空"></JHInput>
    <JHInput label="学院" v-model="form.college" :valid="!(form.college == '' && submitted)" notice="此项不为空"
      :type="pageStore.pageType == 'normal' ? 'normal' : 'mob'"></JHInput>

    <JHSelect label="校区" v-model="form.region" :valid="!(form.region == 'no' && submitted)" :disabled="false"
      notice="此项不为空" :type="pageStore.pageType == 'normal' ? 'normal' : 'mob'">
      <option v-for="region in regions" :value="region">{{ region }}</option>
    </JHSelect>
  </div>

  <div class="other_info">
    <JHLabel type="small">必要能力勾选</JHLabel>
    <div style="padding-bottom: 20px;border-bottom: 1px black solid;">
      <div class="capability_1" :class="pageStore.pageType">
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

      <JHLabel type="small">其他能力</JHLabel>
      <textarea class="capability_2" v-model="form.ability_other" :placeholder="textarea1Focused ? '' : '在这里输入你拥有的其他能力'"
        @focusin="textarea1Focused = true" @focusout="textarea1Focused = false" />
    </div>

    <JHLabel type="small">有什么想对技术部说的话，可以在这里告诉我们</JHLabel>
    <textarea class="capability_2" v-model="form.feedback" :placeholder="textarea2Focused ? '' : '暂时想不到可以填写“无”'"
      @focusin="textarea2Focused = true" @focusout="textarea2Focused = false" />
  </div>
  <div style="display:flex;">
    <JHButton type="small" @click="returnClicked">返回</JHButton>
    <JHButton type="small" @click="submitClicked">提交</JHButton>
  </div>
  <Footer />
</template>
<style scoped>template {
  min-width: 900px;
}

.basic_info {
  display: grid;
  grid-template-columns: 20% 80%;
  grid-template-rows: 70% 30%;
  grid-column-gap: 20px;
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

.capability_1 {
  width: 100%;
  height: 80px;

  background-color: white;
  border-radius: 10px;

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(2, 40px);
  box-shadow: 0 5px 10px #999999;
}

.capability_1.mini,
.capability_1.middle {
  width: 100%;
  height: 180px;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, 40px);
}

.capability_1 div {
  display: flex;
  width: fit-content;
  align-items: center;
  margin: 20px;
  font-size: 18px;
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
  font-size: 16px;
  font-weight: 600;
  outline: none;
  box-shadow: 0 5px 10px #999999;
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
}</style>