<script setup lang="ts">
import { reactive, ref } from 'vue';
import { GetDataNormal } from '../../apis/admin';
import { INormalForm } from '../../types/forms';
const pwd = ref("");
var data = reactive(<INormalForm>{});
async function submitClicked() {
  const res = await GetDataNormal(pwd.value);
  console.log(res);
  alert(res.message);
  data = res.data.data;
}

</script>
<template>
  输入密码:
  <input v-model="pwd" />
  <button @click="submitClicked">提交</button>
  {{ data }}
</template>