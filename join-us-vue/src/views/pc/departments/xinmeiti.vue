<script setup lang="ts">import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { mokuai } from '../../../utils/const';
const router = useRouter();
onMounted(() => {
  document.title = "新媒体模块";
})
function closeWindow() {
  router.push('/department');
}
</script>
<template>
  <div id="body" ref="pronbit">
    <div class="mokuai-title">新媒体模块</div>
    <div class="xinmeiti">
      <div class="img1">
        <div
          class="img11"
          v-bind:style="{ 'background-image': 'url(/photo/department/' + img + '.jpg)' }"
          v-for="img in mokuai[4].img.slice(0, 1)"
        ></div>
      </div>

      <div class="title">视觉影像部</div>

      <div class="neikuang">
        <div v-for="content in mokuai[4].content.slice(0, 1)">
          <div class="content-title">{{ content.title }}</div>
          <div class="content-content">{{ content.content }}</div>
        </div>
      </div>

      <div class="title">编辑工作室</div>

      <div class="neikuang">
        <div v-for="content in mokuai[4].content.slice(1, 2)">
          <div class="content-title">{{ content.title }}</div>
          <div class="content-content">{{ content.content }}</div>
        </div>
      </div>
    </div>

    <div class="fork" v-on:click="closeWindow"></div>
  </div>
</template>
<style src="./mokuai.css" scoped/>