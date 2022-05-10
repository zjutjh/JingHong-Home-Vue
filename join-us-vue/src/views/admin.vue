<script lang="ts" setup>
import JHCard from '../components/JHCard.vue';
import JHButton from '../components/JHButton.vue';
import JHInput from '../components/JHInput.vue';
import { ref } from 'vue';
import Footer from '../components/Footer.vue';
import JHNotice from '../components/JHNotice.vue';
const pwd = ref('');
const submitted = ref(false);
</script>
<style scoped>
.base {
  margin: auto;
  margin-top: 20px;
  width: 80%;
}

.btn {
  margin-top: 20px;
  display: flex;
}
</style>
<template>
  <div style="height:100px"></div>
  <JHCard type="large" title="管理员登陆" :is-title="true">
    <div class="base">
      <JHInput type="normal" label="密码" notice="此项不为空" :valid="!(pwd == '' && submitted)" v-model="pwd"></JHInput>
      <div class="btn">
        <JHButton type="small">登陆</JHButton>
        <JHButton type="small">返回</JHButton>
      </div>
    </div>
  </JHCard>

  <div style="height:200px"></div>
  <Footer />
</template>