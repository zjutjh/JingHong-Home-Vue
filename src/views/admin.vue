<script lang="ts" setup>
import JHCard from "@/components/JHCard.vue";
import JHButton from "@/components/JHButton.vue";
import JHInput from "@/components/JHInput.vue";
import { ref } from "vue";
import Footer from "@/components/Footer.vue";
import PageTop from "@/components/PageTop.vue";
import { useRouter } from "vue-router";
import { TestAdmin } from "@/apis/admin";
import { usePageStore } from "@/stores/pages";
import JHLabel from "@/components/JHLabel.vue";
const pwd = ref("");
const submitted = ref(false);
const router = useRouter();
const pageStore = usePageStore();
async function handleLogin() {
  const res = await TestAdmin(pwd.value)
  if (res.message == "ok") {
    alert("登陆成功")
    pageStore.admin = res.data.data
    pageStore.token = pwd.value;
    router.push("/admin/total")
  } else {
    alert("登陆失败")
    return
  }
}
</script>
<style scoped>
.page-base {
  margin: auto;
  margin-top: 20px;
  width: 60%;
  height: 70vh;
}

.btn {
  margin-top: 20px;
  display: flex;
}
</style>
<template>
  <PageTop />
  <div class="page-base">
    <JHCard type="large" :is-title="false">
      <JHLabel type="small"> 管理员登陆 </JHLabel>
      <div style="height: 50px"></div>
      <JHInput type="normal" label="密码" notice="此项不为空" :valid="!(pwd == '' && submitted)" v-model="pwd"></JHInput>
      <div class="btn">
        <JHButton type="small" @click="handleLogin">登陆</JHButton>
        <JHButton type="small" @click="router.push('/index')">返回</JHButton>
      </div>
    </JHCard>
  </div>
  <Footer />
</template>
