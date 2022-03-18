<script setup lang="ts">
import { useRouter } from 'vue-router';
const router = useRouter();
function developClicked() {
  router.push('/recruit_develop');
}
function returnClicked() {
  router.push('/join');
}
</script>
<template>
  <!-- 组件内容 -->
  <Nav_bar1 page_now="4"></Nav_bar1>
  <div style="height: 120px;"></div>
  <!-- TODO NO style for this -->
  <div class="label_1">长期招新</div>
  <div class="des_box">
    <Des_label2 content="开发部"></Des_label2>
    <div class="des_jishu_content">
      <div class="des_jishu_00">招新范围：</div>
      <div class="des_jishu_01">浙工大全体学院、全体年级的学生</div>
      <br />
      <div class="des_jishu_10">能力要求：</div>
      <div class="des_jishu_11">1)能够独立开发api或使用前端框架</div>
      <div class="des_jishu_21">2)能够独立撰写说明文档</div>
      <div class="des_jishu_31">3)能够使用git进行团队协作交互</div>
    </div>
    <div class="button1" @click="developClicked">报名</div>
  </div>
  <!-- TODO NO style for this -->
  <div class="button1" @click="returnClicked">返回</div>

  <Footer></Footer>
</template>

<style>
/* 样式 */
template {
  min-width: 900px;
}
.des_jishu_content {
  margin: 50px;
  text-align: left;

  font-size: 20px;
  display: grid;
  grid-template-rows: repeat(4, 30px);
  grid-template-columns: 100px;
  /* grid-gap: 50px 100px; */
}
.des_jishu_00 {
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 2;
}
.des_jishu_01 {
  grid-column-start: 2;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 2;
}
.des_jishu_10 {
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 3;
  grid-row-end: 4;
}
.des_jishu_11 {
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 3;
  grid-row-end: 4;
}
.des_jishu_21 {
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 4;
  grid-row-end: 5;
}
.des_jishu_31 {
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 5;
  grid-row-end: 6;
}
</style>