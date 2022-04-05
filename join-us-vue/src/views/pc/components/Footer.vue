<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>
<template>
  <div class="footer">
    <router-link to="/admin">©2021 浙江工业大学-精弘网络</router-link>
  </div>
</template>

<style scoped>
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

router-link {
  color: black;
  text-decoration: none;
}
</style>