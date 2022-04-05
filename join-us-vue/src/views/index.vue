<script lang="ts" setup>
import Start from '../components/Start.vue';
import Introduce from '../components/Introduce.vue';
import History from '../components/History.vue';
import Timeline from '../components/Timeline.vue';
import { usePageStore } from '../stores/pages';
const pageStore = usePageStore();

</script>
<template>
  <start />
  <introduce />
  <history v-if="pageStore.pageType == 'normal'" />
  <timeline v-if="pageStore.pageType == 'mini' || pageStore.pageType == 'middle'" />
  <div style="height:300px"></div>
</template>
