<template>
  <div class="video">
    <div class="introduce" :class="pageStore.pageType">
      <div class="title">客服视频</div>
      <div class="content" :class="pageStore.pageType">
        <iframe
          src="//player.bilibili.com/player.html?aid=514039970&bvid=BV1cg41127UT&cid=791985606&page=1"
          scrolling="no"
          border="0"
          frameborder="no"
          framespacing="0"
          allowfullscreen="true"
        >
        </iframe>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { usePageStore } from "../stores/pages";
const pageStore = usePageStore();
</script>
<style lang="scss" scoped>
.introduce {
  display: grid;
  grid-template-rows: 20% 80%;
  margin: auto;
  margin-top: 50px;
  margin-bottom: 100px;
  align-items: center;
  &.normal {
    width: 40%;
  }
  &.middle,
  &.mini {
    width: 80%;
  }
}

.title {
  background-color: #d6d6d6;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  font-size: xx-large;
  white-space: pre-line;
  padding-block: 10px;
  width: 100%;
}
.content {
  background-color: white;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  box-shadow: 0 5px 10px #999;
  width: 100%;
  &.normal {
    iframe {
      width: 100%;
      height: 500px;
    }
  }
  &.middle,
  &.mini {
    iframe {
      width: 100%;
      height: 300px;
    }
  }
}
</style>
