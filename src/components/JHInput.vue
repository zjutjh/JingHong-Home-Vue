<script setup lang="ts">
interface Props {
  type: string;
  modelValue: string;
  label: string;
  notice: string;
  valid: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  type: "normal",
  label: "label",
  notice: "此项不为空",
  valid: true,
});
</script>
<template>
  <div class="base" :class="type">
    <div class="label" :class="type">{{ props.label }}</div>
    <input
      class="input"
      :class="[type, valid ? 'valid' : 'invalid']"
      :value="modelValue"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    />
    <span></span>
    <div class="notice" :class="[type, valid ? 'valid' : 'invalid']">
      * {{ props.notice }}
    </div>
    <!-- {{ props }} -->
  </div>
</template>
<style scoped>
.base.normal {
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

.input.normal {
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
.input.mob.valid,
.input.normal.valid {
  border: none;
}
.input.mob.invalid,
.input.normal.invalid {
  border: solid red;
  border-width: 2px;
}
.notice.mob,
.notice.normal {
  color: red;
  font-size: 12px;
  text-align: start;
}
.notice.mob.valid,
.notice.normal.valid {
  display: none;
}

.base.mob {
  display: grid;
  height: 50px;
  grid-template-columns: 40% 60%;
  grid-column-gap: 20px;
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
.input.mob {
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
