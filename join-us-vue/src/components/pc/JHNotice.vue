<script setup lang="ts">
const props = defineProps<{
  show: boolean,
}>();
const emits = defineEmits<{
  (e: "changeShow"): void;
}>();

function confirmClicked() {
  emits("changeShow");
}
</script>
<template>
  <div v-if="props.show">
    <div class="back" @click="confirmClicked()">
      <div class="notice">
        <span class="message">
          <slot></slot>
        </span>
        <button class="button" @click="confirmClicked">确定</button>
      </div>
    </div>
  </div>
</template>
<style scoped>
.back {
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
}
.notice {
  height: 30vh;
  width: 30vw;
  background-color: #d20001;
  border-radius: 10px;
  display: grid;
  grid-template-rows: 80% 20%;
  align-items: center;
  z-index: 11;
}

.message {
  color: white;
  font-size: 1.3vw;
}
.button {
  height: 3vh;
  width: 5vw;
  border-radius: 10px;
  margin: auto;
}
</style>