<script lang="ts" setup xmlns="http://www.w3.org/1999/html">
import JHLabel from "../components/JHLabel.vue";
import PageTop from "@/components/PageTop.vue";
import JHCard from "@/components/JHCard.vue";
import {usePageStore} from "@/stores/pages";
import JHButton from "@/components/JHButton.vue";
import Footer from "@/components/Footer.vue";
import router from "@/router";
const pageStore = usePageStore();

const application = () => {
  window.open("https://qa.lonesome.cn/View?id=U2FsdGVkX18+lUY5ONeQ7YaHYXRFNChCdD0bL3hQfF0=")
}
</script>

<template>
  <PageTop />
  <JHLabel type="title" v-if="pageStore.pageType == 'mini' || pageStore.pageType == 'middle'">我们的活动</JHLabel>
  <JHCard title="ACM新生赛 (即将开启!)" type="large" :is-title="true">
    <div class="base" :class="pageStore.pageType">
      <!-- <img class="haibao" src="https://img.lonesome.cn/jhwl/home/photo/activity/ACM_Poster.webp" /> -->
      <div class="detail-base" :class="pageStore.pageType">
        <div style="height: 50px"></div>
        <div class="btn">
          <!-- <JHButton type="middle" v-on:click="application">立即报名</JHButton> -->
        </div>
        <div class="introduce" :class="pageStore.pageType">
          <!-- <JHLabel type="nano">活动介绍</JHLabel>
          <div class="content">
            无论你是熟稔各类算法与数据结构的编程大佬，还是从未接触过编程语言的萌新小白，在精弘ACM新生赛这个大舞台上，都能尽情地体验算法的魅力੭ ᐕ)੭*⁾⁾<br />
            除了比赛舞台之外，还有浙工大精弘网络B站号以及ACM校队学长学姐为萌新们精心准备的编程与算法基础课程，助力大家更快更好地入门~
          </div>
          <JHLabel type="nano">竞赛群号</JHLabel> -->
          <!-- <div class="content">965992603</div> -->
        </div>
        <!-- <div class="qr">
          <div class="qr-base" :class="pageStore.pageType">
            <div class="qr-code">
              <img src="https://img.lonesome.cn/jhwl/home/photo/activity/ACM_Group_qrcode.webp"/>
            </div>
          </div>
        </div> -->
      </div>
    </div>
  </JHCard>
  <div style="height: 100px"></div>
  <JHButton type="middle" @click="router.push('/join')">
    加入我们
    <img
        src="https://img.lonesome.cn/jhwl/home/photo/svg/rightArrow.svg"
        style="width: 20px; margin-left: 20px"
    />
  </JHButton>
  <Footer />
</template>

<style scoped lang="scss">
.base {
  display: grid;
}

.base.normal {
  grid-template-columns: 60% 40%;
  grid-gap: 20px;
}

.base.middle {
  height: 2000px;
  grid-template-rows: 1100px 700px 100px;
}

.haibao {
  max-height: 1000px;
  max-width: 80%;
  margin: auto;
}

.detail-base {
  display: flex;
  flex-direction: column;
  column-gap: 5px;
  max-width: 70%;
}

.btn {
  /* height: 450px; */
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  // width: 50%;
  // min-width: 300px;
}

.introduce.normal {
  margin-top: 40px;
  text-align: start;
  font-size: 18px;

  .content {
    position: relative;
    left: 50px;
    margin-bottom: 20px;
  }
}

.introduce.middle,
.introduce.mini {
  text-align: center;
  font-size: 18px;
  margin-top: 40px;

  .content {
    margin-bottom: 20px;
  }
}

.introduce.middle .small,
.introduce.mini .small {
  margin: auto;
}

.detail-base.middle,
.detail-base.mini {
  margin: auto;
}

.qr-base {
  display: grid;
  grid-template-columns: 1fr;
  width: auto;
  margin-top: 20px;
}

.qr-base.normal {
  grid-template-columns: 1fr 1fr;
}

.qr-base img {
  width: 80px;
  height: 80px;
}

.qr-code {
  height: 100px;
  display: grid;
  grid-template-rows: 1fr 1fr;
  text-align: center;
  align-items: center;
  justify-content: center;
}
</style>
