<script setup lang="ts">
import { useRouter } from 'vue-router';
import JHCard from '../../../components/pc/JHCard.vue';
import Footer from '../../../components/mobile/Footer.vue';
import JHButton from '../../../components/pc/JHButton.vue';
import JHLabel from '../../../components/pc/JHLabel.vue';
const router = useRouter();
function developClicked() {
  router.push('/m/recruit_develop');
}
function returnClicked() {
  router.push('/m/join');
}
</script>
<template>
  <div style="height: 70px;"></div>
  <JHLabel type="middle" style="font-size:3vw;">长期招新</JHLabel>
  <JHCard type="large-m" style="font-size:3vw;" title="技术部">
    <div class="mob_box">
      <div class="jishu_content">
        <div class="jishu_00">招新范围：</div>
        <div class="jishu_01">浙工大全体学院、全体年级的学生</div>
        <br />
        <div class="jishu_10">能力要求：</div>
        <div class="jishu_11">1)能够独立开发api或使用前端框架</div>
        <div class="jishu_21">2)能够独立撰写说明文档</div>
        <div class="jishu_31">3)能够使用git进行团队协作交互</div>
      </div>
      <!-- <div class="mob_button1" @click="developClicked">报名</div> -->
      <JHButton type="small" @click="developClicked">报名</JHButton>
    </div>
  </JHCard>
  <div style="height:30vh"></div>
  <JHButton type="small" @click="returnClicked" style="margin: 15px auto;">返回</JHButton>

  <Footer />
</template>

<style scoped>
/* 样式 */
.jishu_content {
  margin: 10px;
  text-align: left;

  font-size: 10px;
  display: grid;
  grid-template-rows: repeat(4, 40px);
  grid-template-columns: 60px;
}
.jishu_00 {
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 2;
}
.jishu_01 {
  grid-column-start: 2;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 2;
}
.jishu_10 {
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 3;
  grid-row-end: 4;
}
.jishu_11 {
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 3;
  grid-row-end: 4;
}
.jishu_21 {
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 4;
  grid-row-end: 5;
}
.jishu_31 {
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 5;
  grid-row-end: 6;
}
.mob_box {
  padding: 5vh;
}
</style>