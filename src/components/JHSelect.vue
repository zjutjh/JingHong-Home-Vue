<script setup lang="ts">
interface Props {
  label: string;
  type: string;
  modelValue: string | number;
  valid: boolean;
  notice: string;
  disabled: boolean;
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
  <div class="jh-base" :class="type">
    <div class="label" :class="type">{{ props.label }}</div>
    <select class="select" :class="[type, valid ? 'valid' : 'invalid']" :value="modelValue"
      @input="$emit('update:modelValue', ($event.target as HTMLSelectElement).value as typeof modelValue)"
      :disabled="disabled">

      <slot></slot>
    </select>
    <span></span>
    <div class="notice" :class="[type, valid ? 'valid' : 'invalid']">
      * {{ props.notice }}
    </div>
  </div>
</template>

<style scoped lang="scss">
.jh-base.normal {
  display: grid;
  grid-template-columns: 20% 80%;
  grid-column-gap: 10%;
  height: 55px;
}

.label.normal {
  background-color: #d20001;
  height: 30px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 20px;
  margin: auto;
  width: 80%;
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

.select.mob.valid,
.select.normal.valid {
  border: none;
}

.select.mob.invalid,
.select.long.invalid,
.select.normal.invalid {
  border: solid red;
  border-width: 2px;
}

.notice.mob,
.notice.normal {
  color: red;
  font-size: 0.5vw;
  text-align: start;
  padding: 5px;
}

.notice.mob.valid,
.notice.normal.valid {
  display: none;
}

.jh-base.mob {
  display: grid;
  grid-template-columns: 40% 60%;
  grid-column-gap: 20px;
  height: 50px;
}

.label.mob {
  background-color: #d20001;
  height: 24px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 15px;
  border-radius: 10px;
  border: none;
}

.select.mob {
  width: 90%;
  height: 24px;
  border-radius: 5px;
  text-align: left;
  box-sizing: border-box;
  line-height: 20px;
  padding: 0 5px;
  resize: none;
  outline: none;
  font-size: 10px;
  white-space: nowrap;
  overflow-x: scroll;
  overflow-y: hidden;
  box-shadow: 0 2px 5px #999999;
  border: none;
  background-color: white;
}
</style>
