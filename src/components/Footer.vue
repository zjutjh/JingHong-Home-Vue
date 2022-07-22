<script setup lang="ts">
import { useRouter } from "vue-router";
const router = useRouter();
function admin() {
  // router.push('/admin');
  return;
}
</script>
<template>
  <div class="footer" @click="admin">©2022 浙江工业大学-精弘网络</div>
</template>

<style scoped>
.footer {
  margin-top: 10%;
  width: 100%;
  font-size: xx-small;
  background-color: white;
  height: 2.2rem;
  line-height: 2rem;
  border-radius: 0;
  box-shadow: 0 -1px 20px #999999;
  cursor: pointer;
}
</style>
