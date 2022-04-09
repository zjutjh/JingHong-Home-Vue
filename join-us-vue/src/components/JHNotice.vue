<script setup lang="ts">
const props = defineProps<{
  show: boolean,
  type: string,
}>();
const emits = defineEmits<{
  (e: "changeShow"): void;
}>();

function confirmClicked() {
  emits("changeShow");
}
</script>
<template>
  <div v-if="props.show" :class="type">
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
.pc .back {
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
.pc .notice {
  /* height: 30vh; */
  height: 200px;
  width: 30%;
  background-color: #d20001;
  border-radius: 10px;
  display: grid;
  grid-template-rows: 80% 20%;
  align-items: center;
  z-index: 11;
}

.pc .message {
  color: white;
  font-size: 1.3vw;
}
.pc .button {
  width: fit-content;
  border-radius: 10px;
  margin: auto;
  margin-bottom: 10px;
}

.mob .back {
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
.mob .notice {
  height: 200px;
  width: 60%;
  background-color: #d20001;
  border-radius: 10px;
  display: grid;
  grid-template-rows: 80% 20%;
  align-items: center;
  z-index: 11;
}

.mob .message {
  color: white;
  font-size: 4vw;
}
.mob .button {
  width: fit-content;
  border-radius: 10px;
  margin: auto;
}
</style>