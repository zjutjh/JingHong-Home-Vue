<script lang="ts" setup>
import { usePageStore } from "../stores/pages";
const pageStore = usePageStore();
</script>
<template>
  <div class="base" :class="pageStore.pageType">
    <img
      src="https://img.lonesome.cn/jhwl/home/photo/index/xiaohongLeft.webp"
      v-if="!(pageStore.pageType == 'mini')"
    />
    <div class="introduce">
      <div class="title">
        {{
          pageStore.pageType == "mini" || pageStore.pageType == "middle"
            ? "精弘网络 \nJinghong Union"
            : "精弘网络⼁Jinghong Union"
        }}
      </div>
      <div class="content" :class="pageStore.pageType">
        成立于2002年5月，
        <br />精弘的名字取自工大学风“取精用弘”，
        <br />是浙江工业大学的学术网络组织。
        <br />精弘网络秉承着自由、共享、团结、创新的精神，
        <br />全心全意为在校师生提供优质的服务
        <br />和交流平台，收到了广泛好评。
      </div>
    </div>
    <img
      src="https://img.lonesome.cn/jhwl/home/photo/index/xiaohongRight.webp"
      v-if="!(pageStore.pageType == 'mini')"
    />
  </div>
</template>
<style scoped>
.base {
  display: grid;
  grid-template-columns: 20% 60% 20%;
  margin-top: 50px;
  margin-bottom: 100px;
  align-items: center;
  width: 80%;
  margin: auto;
}
.base.mini {
  display: unset;
}
.introduce {
  display: grid;
  grid-template-rows: 20% 80%;
  width: 80%;
  margin: auto;
  margin-top: 50px;
  align-items: center;
}

.title {
  background-color: #d6d6d6;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  font-size: xx-large;
  white-space: pre-line;
  padding: 10px;
}
.content {
  background-color: white;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  box-shadow: 0 5px 10px #999;
  font-size: x-large;
  justify-content: start;
  text-align: left;
  padding: 40px;
  height: fit-content;
  margin-bottom: 100px;
}

.content.mini {
  font-size: small;
}
img {
  position: relative;
  width: 100%;
}
</style>
