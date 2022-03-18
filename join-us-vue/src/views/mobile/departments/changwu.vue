<script setup lang="ts">import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { mokuai } from '../../../utils/const';
const router = useRouter();
onMounted(() => {
  document.title = "常务版块";
})
function closeWindow() {
  router.push('/department');
}
</script>
<template>
  <div id="body" ref="pronbit">
    <div class="mokuai-title">常务模块</div>
    <div class="mishuchu">
      <div class="title">秘书处</div>

      <div class="neikuang">
        <div class="img1">
          <div
            class="img11"
            v-bind:style="{ 'background-image': 'url(../../photo/department/' + img + '.jpg)' }"
            v-for="img in mokuai[0].img.slice(0, 2)"
          ></div>
        </div>
        <div v-for="content in mokuai[0].content.slice(0, 1)">
          <div class="content-title">{{ content.title }}</div>
          <div class="content-content">{{ content.content }}</div>
        </div>
      </div>
    </div>

    <div class="bangongshi">
      <div class="title">办公室</div>

      <div class="neikuang">
        <div class="img1">
          <div
            class="img11"
            v-bind:style="{ 'background-image': 'url(../../photo/department/' + img + '.jpg)' }"
            v-for="img in mokuai[0].img.slice(2, 5)"
          ></div>
        </div>
        <div v-for="content in mokuai[0].content.slice(1, 3)">
          <div class="content-title">{{ content.title }}</div>
          <div class="content-content">{{ content.content }}</div>
        </div>
      </div>
    </div>

    <div class="huodongbu">
      <div class="title">活动部</div>

      <div class="neikuang">
        <div class="img1">
          <div
            class="img11"
            v-bind:style="{ 'background-image': 'url(../../photo/department/' + img + '.jpg)' }"
            v-for="img in mokuai[0].img.slice(5, 7)"
          ></div>
        </div>
        <div v-for="content in mokuai[0].content.slice(3, 4)">
          <div class="content-title">{{ content.title }}</div>
          <div class="content-content">{{ content.content }}</div>
        </div>
      </div>
    </div>
    <div class="fork" v-on:click="closeWindow"></div>
  </div>
</template>
<style src="./mokuai.css" scoped/>