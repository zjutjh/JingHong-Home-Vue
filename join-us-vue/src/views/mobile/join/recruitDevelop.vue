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
import JHInput from '../../../components/pc/JHInput.vue';
import JHSelect from '../../../components/pc/JHSelect.vue';
const router = useRouter();
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
})

function returnClicked() {
  router.push('/join');
}

const phoneValid = ref(true);
const stuIDValid = ref(true);
const noticeShow = ref(false);
const nameValid = ref(true);
const noticeMessage = ref<string>('请将信息正确填写完整再提交');
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
const submitted = ref(false);
const genderOptions = [
  { label: "男", value: 0 },
  { label: "女", value: 1 },
];

</script>
<template>
  <!-- 组件内容 -->
  <JHNotice :show="noticeShow" @changeShow="closeNoticeShow" type="mob">{{ noticeMessage }}</JHNotice>
  <div style="margin-top: 80px;"></div>
  <div class="mob_label_1">技术部长期招新</div>
  <div style="width:90%;margin: auto;">
    <div class="mob_basic_info">
      <JHInput label="姓名" v-model="form.name" :valid="nameValid" notice="姓名长度2-12" type="mob"></JHInput>
      <JHInput
        label="专业"
        v-model="form.campus"
        :valid="!(form.campus == '' && submitted)"
        type="mob"
        notice="此项不为空"
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

      <JHInput label="联系电话" v-model="form.phone" :valid="phoneValid" notice="电话号码11位" type="mob"></JHInput>
      <JHInput label="学号" v-model="form.stu_id" :valid="stuIDValid" notice="学号12位" type="mob"></JHInput>
      <JHInput
        label="QQ"
        v-model="form.qq"
        :valid="!(form.qq == '' && submitted)"
        type="mob"
        notice="此项不为空"
      ></JHInput>
      <JHInput
        label="学院"
        v-model="form.college"
        :valid="!(form.college == '' && submitted)"
        notice="此项不为空"
        type="mob"
      ></JHInput>

      <JHSelect
        label="校区"
        v-model="form.region"
        :valid="!(form.region == 'no' && submitted)"
        :disabled="false"
        notice="此项不为空"
        type="mob"
      >
        <option v-for="region in regions" :value="region">{{ region }}</option>
      </JHSelect>
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
  grid-template-columns: 50% 50%;
  grid-template-rows: repeat(4, 40px);
  grid-gap: 10px 2%;
  margin: auto;
  padding-bottom: 20px;
  border-bottom: 1px black solid;

  /* transform: scale(1, 1); */
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