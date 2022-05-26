<script setup lang="ts">
import { onMounted } from 'vue';
import JHLabel from '../../components/JHLabel.vue';
import JHCard from '../../components/JHCard.vue';
import Footer from '../../components/Footer.vue';
import { useRouter } from 'vue-router';
const router = useRouter();
onMounted(() => {
  document.title = "运营模块";
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
  <JHLabel type="big">运营模块</JHLabel>
  <JHCard type="large" title="产品部" :isTitle="true">
    <img src="/photo/department/9.jpg" />
    <img src="/photo/department/10.jpg" />
    <JHLabel type="middle">部门介绍</JHLabel>
    <div
      class="content"
    >你好呀，这里是Touch产品，那么产品部是做什么的呢？在这里，我们将扮演产品经理的⻆色，探讨工大师生们的需求，和精弘的各位小伙伴一起合作，更新迭代实用的原有产品以及开发出好看又好用的新产品。我们绝对不咕咕，助力工大师生的便捷美好生活。</div>
    <JHLabel type="middle">小朋友们看这里！</JHLabel>
    <div class="content">无论你对产品是有充分的了解还是小白一枚，来这里的学习一定会让你收获满满，做出的成果一定会让你成就满满。快来快来吧，期待与你的见面！</div>
  </JHCard>
  <img
    src="/photo/department/fork.png"
    style="width:80px; height:80px; margin-top: 50px; cursor:pointer;"
    @click="router.push('/department')"
  />
  <Footer />
</template>