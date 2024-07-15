<script setup lang="ts">
import { CSSProperties, onMounted, onUnmounted, ref } from 'vue';
import JHCard from './JHCard.vue';
const items = [
  {
    id: 0,
    img: "https://img.lonesome.cn/jhwl/home/photo/index/story1.webp",
    content: "2002年5月\n精弘网络成立",
  },
  {
    id: 1,
    img: "https://img.lonesome.cn/jhwl/home/photo/index/story2.webp",
    time: "2003年5月",
    content: "推出精弘论坛\nbbs.zjut.com",
  },
  {
    id: 2,
    img: "https://img.lonesome.cn/jhwl/home/photo/index/story3.webp",
    time: "2004年10月",
    content: "Feel电台创立\nradio.zjut.com",
  },
  {
    id: 3,
    img: "https://img.lonesome.cn/jhwl/home/photo/index/story4.webp",
    time: "2006年5月",
    content: "推出第一版学生邮箱\nmail.zjut.com",
  },
  {
    id: 4,
    img: "https://img.lonesome.cn/jhwl/home/photo/index/story5.webp",
    time: "2012年3月",
    content: "第一届精弘毅行",
  },
  {
    id: 5,
    img: "https://img.lonesome.cn/jhwl/home/photo/index/story6.webp",
    time: "2012年12月",
    content: '荣获第五届\n"全国高校百佳网站"\n荣誉称号',
  },
  {
    id: 6,
    img: "https://img.lonesome.cn/jhwl/home/photo/index/story7.webp",
    time: "2015年12月",
    content: '承办浙江工业大学首届\n"网络安全宣传月"活动',
  },
  {
    id: 7,
    img: "https://img.lonesome.cn/jhwl/home/photo/index/story8.webp",
    time: "2016年8月",
    content: '精弘网络微信服务号获\n"全国高校东部地区榜亚军"',
  },
  {
    id: 8,
    img: "https://img.lonesome.cn/jhwl/home/photo/index/story9.webp",
    time: "2017年2月",
    content: "微精弘改版正式上线",
  },
  {
    id: 9,
    img: "https://img.lonesome.cn/jhwl/home/photo/index/story5.webp",
    time: "2020年2月",
    content: "第十三届精弘毅行",
  },
  {
    id: 10,
    img: "https://img.lonesome.cn/jhwl/home/photo/index/story9.webp",
    time: "2022年8月",
    content: "微精弘2.0发布",
  },
  {
    id: 11,
    img: "https://img.lonesome.cn/jhwl/home/photo/index/story10.webp",
    time: "2023年4月",
    content: "成为校级组织数字化转型解决方案的提供者",
  },
];
const angle = (Math.atan(0.5) * 180) / Math.PI + "deg";
const angle2 = (-Math.atan(0.5) * 180) / Math.PI + "deg";
const scale = 1 / Math.cos(Math.atan(0.5));
const styleVal = (function (index: number): CSSProperties {
  return <CSSProperties>{
    '--angle': index % 2 === 0 ? angle : angle2,
    '--scale': scale,
    '--border': index % 2 === 0 ? 'dashed' : 'solid',
    '--line_seen': index === 11 ? 'none' : 'block',
  }
});
const top111 = ref(0);
function handleScrollX() {
  top111.value = historyLine.value.getBoundingClientRect().top;
}
const historyLine = ref(<Element>{});
onMounted(() => {
  window.addEventListener("scroll", handleScrollX, true);
})

onUnmounted(() => {
  window.removeEventListener("scroll", handleScrollX, true);
})
</script>
<style scoped>
.history-line {
  padding: 4rem 0 1rem;
  width: 10rem;
  margin: auto;
}
.history-line-mask {
  position: absolute;
  width: 10rem;
  top: var(--top);
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  background-color: white;
  border-radius: 0;
  z-index: 2;
}
.history-item {
  position: relative;
  width: 10rem;
  height: 5rem;
}
.history-item::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 2.5rem;
  box-sizing: border-box;
  border-bottom: 1px var(--border) black;
  transform-origin: bottom center;
  transform: rotateZ(var(--angle)) scale(var(--scale));
  display: var(--line_seen);
  z-index: 1;
}
.history-img {
  position: relative;
  top: -2.2rem;
  width: 4.4rem;
  height: 4.4rem;
  background-color: white;
  border-radius: 50%;
  z-index: 3;
  opacity: 1;
  transition: opacity 2s;
  background-size: cover;
}
.history-img-hide {
  position: relative;
  top: -2.2rem;
  width: 4.4rem;
  height: 4.4rem;
  background-color: white;
  border-radius: 50%;
  z-index: 3;
  opacity: 0;
  transition: opacity 2s;
  background-size: cover;
}
.history-img1 {
  float: left;
  left: -2.2rem;
}
.history-img2 {
  float: right;
  right: -2.2rem;
}
.history-content {
  width: 200%;
  position: relative;
  top: 100%;
  left: -50%;
}
.history-content1 {
  font-size: xx-small;
  white-space: pre-line;
}
.history-content2 {
  font-size: xx-small;
  white-space: pre-line;
}
</style>
<template>
  <JHCard title="精弘成长史" type="large" :is-title="true">
    <div class="history" ref="history">
      <div class="history-line" ref="historyLine">
        <div class="history-item" v-for="item, index in items" :style="styleVal(index)">
          <div
            class="img"
            :class="[index % 2 === 0 ? 'history-img1' : 'history-img2', top111 < 487 - (index - 2) * 80 - 60 ? 'history-img' : 'history-img-hide']"
            :style="{ 'background-image': 'url(' + item.img + ')' }"
          >
            <div class="history-content">
              <div class="history-content1">{{ item.time }}</div>
              <div class="history-content2">{{ item.content }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </JHCard>
</template>