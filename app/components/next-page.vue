<template>
  <JhButton type="middle" class="btn">
    <slot />
    <NuxtImg src="ui/rightArrow.svg" class="right-arrow" alt="" />
  </JhButton>
</template>

<style scoped lang="scss">
.btn {
  margin: 20px auto;
}

.right-arrow {
  margin-left: 10px;
  width: 20px;
}
</style>
