<script setup lang="ts">

</script>

<template>
  <button class="button">
    <slot></slot>
  </button>
</template>

<style scoped>
.button {
  width: 120px;
  height: 30px;
  margin: 15px auto;
  border-radius: 20px;

  background-color: #d20001;

  color: white;
  font-size: 15px;
  line-height: 30px;

  display: flex;
  justify-content: center;
  align-items: center;
}
</style>