<script setup lang="ts">
interface Props {
  label: string,
  type: string,
  modelValue: string | number,
  valid: boolean,
  notice: string,
  disabled: boolean,
}

const props = withDefaults(defineProps<Props>(), {
  label: "label",
  type: "normal",
  valid: true,
  notice: "此项不为空",
});
function handleInput(event: Event) {
  var v = event.target as HTMLInputElement;
}
</script>
<template>
  <div class="base" :class="type">
    <div class="label" :class="type">{{ props.label }}</div>
    <select
      class="select"
      :class="type, valid ? 'valid' : 'invalid'"
      :value="modelValue"
      @input="$emit('update:modelValue', ($event.target as HTMLSelectElement).value)"
      :disabled="disabled"
    >
      <slot></slot>
    </select>
    <span></span>
    <div class="notice" :class="type, valid ? 'valid' : 'invalid'">* {{ props.notice }}</div>
  </div>
</template>

<style scoped>
.base.normal {
  display: grid;
  grid-template-columns: 20% 80%;
  grid-template-rows: 70% 30%;
  grid-column-gap: 10%;
}

.label.normal {
  background-color: #d20001;
  height: 30px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1vw;
  max-width: 25vw;
}

.select.normal {
  outline: none;
  background-color: white;

  border-radius: 10px;
  text-align: left;

  box-sizing: border-box;
  padding: 5px 10px;
  font-size: 12px;
  line-height: 20px;
  font-weight: 600;
  width: 80%;
  box-shadow: 0 5px 10px #999999;
  height: 30px;
}

.select.normal.valid {
  border: none;
}
.select.long.invalid,
.select.normal.invalid {
  border: solid red;
  border-width: 2px;
}
.notice.normal {
  color: red;
  font-size: 0.5vw;
  text-align: start;
  padding: 5px;
}

.notice.normal.valid {
  display: none;
}
</style>