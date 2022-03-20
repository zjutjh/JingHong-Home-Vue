<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter();
function admin() {
  router.push('/m/admin');
}
</script>
<template>
  <div class="footer" @click="admin">©2021 浙江工业大学-精弘网络</div>
</template>

<style>
.footer {
  margin-top: 2rem;
  width: 100%;
  font-size: xx-small;
  background-color: white;
  height: 2.2rem;
  line-height: 2rem;
  border-radius: 0;
  box-shadow: 0 -1px 20px #999999;
}
</style>