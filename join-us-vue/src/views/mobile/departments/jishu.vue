<script setup lang="ts">import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { mokuai } from '../../../utils/const';
const router = useRouter();
onMounted(() => {
  document.title = "技术版块";
})
function closeWindow() {
  router.push('/department');
}
</script>
<template>
  <div id="body" ref="pronbit">
    <div class="mokuai-title">技术模块</div>
    <div class="jishu">
      <div class="jishu-left">
        <div class="kaifa">
          <div class="title">技术部</div>
          <div class="content-title">{{ mokuai[1].content[0].title }}</div>
          <div class="content-content">{{ mokuai[1].content[0].content }}</div>
        </div>

        <div class="yunwei">
          <div class="title">运维部</div>
          <div class="content-title">{{ mokuai[1].content[1].title }}</div>
          <div class="content-content">{{ mokuai[1].content[1].content }}</div>
        </div>
      </div>
      <div class="Separator"></div>
      <div class="jishu-right">
        <div
          class="img1"
          v-bind:style="{ 'background-image': 'url(/photo/department/' + img + '.jpg)' }"
          v-for="img in mokuai[1].img.slice(0, 1)"
        ></div>

        <div class="content-title">{{ mokuai[1].content[2].title }}</div>
        <div class="content-content">{{ mokuai[1].content[2].content }}</div>
      </div>
    </div>
    <div class="fork" v-on:click="closeWindow"></div>
  </div>
</template>
<style src="./mokuai.css" scoped/>