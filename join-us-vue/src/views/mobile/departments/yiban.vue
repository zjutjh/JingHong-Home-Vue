<script setup lang="ts">import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { mokuai } from '../../../utils/const';
const router = useRouter();
onMounted(() => {
  document.title = "易班文化工作站";
})
function closeWindow() {
  router.push('/department');
}
</script>
<template>
  <div id="body" ref="pronbit">
    <div class="mokuai-title">易班文化工作站</div>
    <div class="yiban">
      <div class="title">易班文化工作站</div>
      <div class="neikuang">
        <div
          class="img1"
          v-bind:style="{ 'background-image': 'url(../../photo/department/' + img + '.jpg)' }"
          v-for="img in mokuai[5].img.slice(0, 3)"
        ></div>

        <div v-for="content in mokuai[5].content.slice(0, 3)">
          <div class="content-title">{{ content.title }}</div>
          <div class="content-content">{{ content.content }}</div>
        </div>
      </div>
    </div>

    <div class="fork" v-on:click="closeWindow"></div>
  </div>
</template>
<style src="./mokuai.css" scoped/>