<script setup lang="ts">
import { onMounted } from 'vue';
import { RouterView, useRouter } from 'vue-router';
import { isMobile } from './utils/device'
import { usePageStore } from './stores/pages';
import store from './stores/store';
const router = useRouter();
const pageStore = usePageStore(store);
// TODO: un comment following lines for switch mobile and pc mode.
onMounted(() => {
  if (isMobile()) {
    pageStore.isMobile = true;
    router.push('/m/index');
  } else {
    pageStore.isMobile = false;
    router.push('/index');
  }
})
</script>

<template>
  {{ pageStore }}
  <router-view name="navbar" />
  <router-view />
</template>

<style>
#app {
  width: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
