<script setup lang="ts">import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { mokuai } from '../../../utils/const';
const router = useRouter();
onMounted(() => {
  document.title = "运营版块";
})
function closeWindow() {
  router.push('/department');
}
</script>
<template>
  <div id="body" ref="pronbit">
    <div class="mokuai-title">运营模块</div>
    <div class="chanpinbu">
      <div class="title">产品部</div>
      <div class="neikuang">
        <div class="img1">
          <div
            class="img11"
            :style="{ 'background-image': 'url(/photo/department/' + img + '.jpg)' }"
            v-for="img in mokuai[2].img.slice(0, 2)"
          ></div>
        </div>
        <div v-for="content in mokuai[2].content.slice(0, 2)">
          <div class="content-title">{{ content.title }}</div>
          <div class="content-content">{{ content.content }}</div>
        </div>
      </div>
    </div>

    <div class="fork" v-on:click="closeWindow"></div>
  </div>
</template>
<style src="./mokuai.css" scoped/>