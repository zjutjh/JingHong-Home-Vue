<template>
  <NuxtImg
    src="ui/fork.webp"
    class="fork-button"
    alt="返回我们的部门页面"
    @click="navigateTo('/department')"
  />
</template>

<style scoped>
.fork-button {
  cursor: pointer;
  margin-top: 50px;
  width: 80px;
  height: 80px;
}
</style>
