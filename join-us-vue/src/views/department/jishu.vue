<script setup lang="ts">
import { onMounted } from 'vue';
import JHLabel from '../../components/JHLabel.vue';
import JHCard from '../../components/JHCard.vue';
import Footer from '../../components/Footer.vue';
import { useRouter } from 'vue-router';
const router = useRouter();
onMounted(() => {
  document.title = "技术版块";
})
</script>
<style scoped>
img {
  width: 80%;
  height: 300px;
  object-fit: cover;
}
.content {
  font-size: 20px;
  width: 80%;
  margin: auto;
  text-align: start;
  text-indent: 2em;
}
</style>
<template>
  <div style="height:100px"></div>
  <JHLabel type="big">技术模块</JHLabel>
  <JHCard type="large" title="技术部" :isTitle="true">
    <img src="/photo/department/8.jpg" />
    <JHLabel type="middle">部门介绍</JHLabel>
    <div
      class="content"
    >精弘网络的相关产品技术部门，负责承担技术开发的职责。平时负责产品需求的实现和性能迭代优化。主要参与设计了微精弘，精弘毅行报名系统，精小弘beta等产品。</div>
  </JHCard>
  <JHCard type="large" title="运维部" :isTitle="true">
    <JHLabel type="middle">部门介绍</JHLabel>
    <div class="content">精弘网络运维部，负责服务器日常的运行维护，以及精弘网络新服务的搭建。平时主要参与服务器压力监测，系统相关组件更新维护，安全漏洞排查，服务运行状态监测。</div>
  </JHCard>
  <img
    src="/photo/department/fork.png"
    style="width:80px; height:80px; margin-top: 50px; cursor:pointer;"
    @click="router.push('/department')"
  />
  <Footer />
</template>