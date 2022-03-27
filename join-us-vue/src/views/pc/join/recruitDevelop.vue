<script setup lang="ts">
import Footer from '../../../components/pc/Footer.vue';
import { useRouter } from 'vue-router';
import { DevelopForm } from '../../../apis/forms';
import { isPhone, isStuId } from '../../../utils/valid';
import { IDevelopForm } from '../../../types/forms';
import { reactive, ref } from 'vue';
import { regions } from '../../../utils/const';
import JHButton from '../../../components/pc/JHButton.vue'
import JHLabel from '../../../components/pc/JHLabel.vue';
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
  <JHNotice :show="noticeShow" @changeShow="closeNoticeShow" type="pc">请将信息正确填写完整再提交</JHNotice>
  <div style="height:20vh"></div>
  <JHLabel type="middle">技术部长期招新</JHLabel>
  <div class="basic_info">
    <div class="item_name">姓名</div>
    <input class="item_content" v-model="form.name" />
    <div class="item_name">专业</div>
    <input class="item_content" v-model="form.college" />
    <div class="item_name">性别</div>
    <select class="item_content" v-model="form.gender">
      <option value="0">男</option>
      <option value="1">女</option>
      <option value="2">保密</option>
    </select>
    <div class="item_name">联系电话</div>
    <input class="item_content" v-model="form.phone" />
    <div class="item_name">学号</div>
    <input class="item_content" v-model="form.stu_id" />
    <div class="item_name">QQ</div>
    <input class="item_content" v-model="form.qq" />

    <div class="item_name">学院</div>
    <input class="item_content" v-model="form.campus" />
    <div class="item_name">校区</div>
    <select class="item_content" v-model="form.region">
      <!-- <option value="0" style="display: none;">选择校区</option> -->
      <option v-for="region in regions" :value="region">{{ region }}</option>
    </select>
  </div>
  <div class="other_info">
    <JHLabel type="small">必要能力勾选</JHLabel>
    <div style="padding-bottom: 20px;border-bottom: 1px black solid;">
      <div class="capability_1">
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
      <textarea class="capability_2" v-model="form.ability_other" placeholder="在这里输入你拥有的其他能力" />
    </div>

    <JHLabel type="small">有什么想对技术部说的话，可以在这里告诉我们</JHLabel>
    <textarea class="capability_2" v-model="form.feedback" placeholder="暂时想不到可以填无" />
  </div>
  <div style="display:flex;">
    <!-- TODO no style for this -->
    <JHButton type="small" @click="returnClicked">返回</JHButton>
    <JHButton type="small" @click="submitClicked">提交</JHButton>
  </div>
  <!-- </div> -->
  <Footer />
</template>
<style scoped>
template {
  min-width: 900px;
}
.basic_info {
  display: grid;
  width: 70vw;
  grid-template-columns: 13% 33% 13% 33%;
  grid-template-rows: repeat(4, 30px);
  grid-gap: 20px 2.8%;

  margin: auto;
  padding-top: 5vh;
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
  font-size: 1vw;
  line-height: 20px;
  font-weight: 600;
  border: none;
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
  width: 70vw;
  margin: auto;
}
.other_info option {
  width: 10px;
}
</style>