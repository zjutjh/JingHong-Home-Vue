<script setup lang="ts">import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { mokuai } from '../../../utils/const';
const router = useRouter();
onMounted(() => {
  document.title = "设计版块";
})
function closeWindow() {
  router.push('/department');
}
</script>
<template>
  <div id="body" ref="pronbit">
    <div class="mokuai-title">设计模块</div>
    <div class="xiaohong">
      <div class="title">小弘工作室</div>
      <div class="neikuang">
        <div class="img1">
          <div
            class="img11"
            v-bind:style="{ 'background-image': 'url(/photo/department/' + img + '.jpg)' }"
            v-for="img in mokuai[3].img.slice(0, 3)"
          ></div>
        </div>
        <div v-for="content in mokuai[3].content.slice(0, 2)">
          <div class="content-title">{{ content.title }}</div>
          <div class="content-content">{{ content.content }}</div>
        </div>
      </div>
    </div>
    <div class="fork" v-on:click="closeWindow"></div>
  </div>
</template>
<style src="./mokuai.css" scoped/>