<script lang="ts" setup>
import JHLabel from "../components/JHLabel.vue";
import JHCard from "../components/JHCard.vue";
import Footer from "../components/Footer.vue";
import { usePageStore } from "../stores/pages";
import CarouselPictures from "../components/CarouselPicturesBig.vue";
// import { Picture } from '../components/CarouselPictures.vue';
import CarouselCards from "../components/CarouselCards.vue";
import JHButton from "../components/JHButton.vue";
import { useRouter } from "vue-router";
import PageTop from "../components/PageTop.vue";
const router = useRouter();
const pageStore = usePageStore();
const yixingImgs = [
  "https://download.tooc.xlj0.com/uploads/22/jhhome/public/photo/yixing/1.jpg",
  "https://download.tooc.xlj0.com/uploads/22/jhhome/public/photo/yixing/2.jpg",
  "https://download.tooc.xlj0.com/uploads/22/jhhome/public/photo/yixing/3.jpg",
];
const yurenImgs = [
  "https://download.tooc.xlj0.com/uploads/22/jhhome/public/photo/yuren/1.jpg",
  "https://download.tooc.xlj0.com/uploads/22/jhhome/public/photo/yuren/2.jpg",
  "https://download.tooc.xlj0.com/uploads/22/jhhome/public/photo/yuren/3.jpg",
  "https://download.tooc.xlj0.com/uploads/22/jhhome/public/photo/yuren/4.jpg",
  "https://download.tooc.xlj0.com/uploads/22/jhhome/public/photo/yuren/5.jpg",
];
const persons = [
  {
    img: "https://download.tooc.xlj0.com/uploads/22/jhhome/public/photo/story/jiyu/小树.jpg",
    introduction:
      "小树\n\n前精弘设计总监\n2022年毕业于浙工大\n现就读于浙江工业大学",
    content:
      "大三的时候加入精弘，是我纠结了很久做的一个决定，现在想想倒觉得很庆幸。光是能够遇见你们，就已经很美好 了。\n       没有当客服的经验，从新生群同意每一个新生宝宝的入群验证到后来与他们的见面，对我来说都是新奇的体验。在很多新生的身上，我都能看到刚收到录取通知书时我的样子。不耐烦的回答一个个问题，也是希望她们能少走弯路。\n       深入接触后，发现精弘网络其实是一个很温暖的组织，可以说很多人都是“为爱发电”，有着很强的责任心。\n        希望大家在精弘的日子里可以收获到属于自己的美好。",
  },
  {
    img: "https://download.tooc.xlj0.com/uploads/22/jhhome/public/photo/story/jiyu/小花仙.jpg",
    introduction:
      "小花仙\n\n前精弘技术部副部\n2021年毕业于浙工大\n现工作于腾讯(深圳)IEG技术运营部",
    content:
      "在技术部，我认识了许多好朋友，和自己喜欢的男孩子在一起，并且找到了自己理想的工作。希望大家能记得自己进入精弘的初心，并且为之努力，每个人都有自己的理想，进入精弘可能是你实现理想中的某一个很小的步骤，但是也⼗分的重要，在精弘希望大家都可以好好提升自己，并且能够对精弘做出一些贡献~",
  },
  {
    img: "https://download.tooc.xlj0.com/uploads/22/jhhome/public/photo/story/jiyu/周依佳.jpg",
    introduction:
      "大可爱\n\n前精弘屏峰校区副会长兼常务总监\n2020年毕业于浙工大\n现就读于中国人民大学",
    content:
      "在精弘的两年半时光里，是我大学里最珍贵和幸福的回忆。在这里，我提升了各方面的能力，并收获了美好的友谊，真的很值得怀念。这里有温暖的人，温暖的事，希望大家都能在这里有所成长，有所收获，和精弘一起越来越好！",
  },
  {
    img: "https://download.tooc.xlj0.com/uploads/22/jhhome/public/photo/product/3.jpg",
    introduction:
      "寒假\n\n2017届新媒体总监\n2019年毕业于浙工大\n现工作于华安证券",
    content:
      "转眼已经从精弘“毕业”好多年，从大一的办公室干事，到大二的活动部部长，再到大三的新媒体总监，在精弘，你会遇见一群最青春可爱的人，拥有最深刻独特的集体归属感，也会发掘自己无限的可能性。精弘大家庭欢迎你的到来！",
  },
];
function toProduct() {
  router.push("/product");
}
</script>
<style scoped lang="scss">
.shiming-base.normal {
  width: 80%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: auto;
  grid-column-gap: 10%;
  align-items: center;
}

.shiming-base.middle {
  width: 80%;
  display: grid;
  grid-template-rows: 10% 1fr;
  margin: auto;
  grid-row-gap: 50px;
}

.shiming-base.mini {
  width: 80%;
  display: grid;
  grid-template-rows: 10% 1fr;
  margin: auto;
  grid-row-gap: 5px;
  align-items: center;
  padding: 10px;
}

.shiming-imgs {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 10%;
}

.shiming-imgs-img {
  width: 100%;
  /* min-width: 64px; */
}

.shiming-base .shiming-img {
  width: 80%;
  min-width: 200px;
  margin-bottom: 10%;
}

.shiming {
  text-align: start;
  align-items: center;
  padding-left: 10%;
  border-left: 5px solid #d20001;
  height: fit-content;
}

.shiming.mini {
  border-left: none;
  padding-left: 0;
  font-size: small;
}

.shiming h2 {
  border-bottom: 3px solid #d20001;
}

.jiyu {
  margin-top: 20px;
}

.yixing-content {
  text-align: start;
  text-decoration: none;
  font-size: 24px;
  text-indent: 48px;
  width: 80%;
  margin: auto;
}

.yixing-content.mini {
  font-size: 15px;
  text-indent: 30px;
}

.shenghuo {
  width: 90%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: auto;

  #img1,
  #img2,
  #img3 {
    // height: 300px;
    width: 60%;
    margin: auto;
  }
  .shenghuo-imgs {
    display: flex;
    flex-direction: row;
    gap: 20px;
    margin: auto;
    width: 80%;
    img {
      width: 50%;
    }
  }
  .content {
    font-size: 20px;
  }
  &.mini .content {
    font-size: 15px;
  }
}

.shenghuo .content {
  font-size: 20px;
}
</style>
<template>
  <PageTop />
  <JHLabel type="title">我们的故事</JHLabel>
  <JHCard type="large" title="我们的使命" :isTitle="true">
    <div class="shiming-base" :class="pageStore.pageType">
      <img
        class="shiming-img"
        src="https://download.tooc.xlj0.com/uploads/22/jhhome/public/photo/index/shiming.png"
        v-if="pageStore.pageType == 'normal'"
      />
      <div
        class="shiming-imgs"
        v-if="pageStore.pageType == 'mini' || pageStore.pageType == 'middle'"
      >
        <img class="shiming-imgs-img" src="https://download.tooc.xlj0.com/uploads/22/jhhome/public/photo/index/shiming1.png" />
        <img class="shiming-imgs-img" src="https://download.tooc.xlj0.com/uploads/22/jhhome/public/photo/index/shiming2.png" />
        <img class="shiming-imgs-img" src="https://download.tooc.xlj0.com/uploads/22/jhhome/public/photo/index/shiming3.png" />
        <img class="shiming-imgs-img" src="https://download.tooc.xlj0.com/uploads/22/jhhome/public/photo/index/shiming4.png" />
      </div>
      <div class="shiming" :class="pageStore.pageType">
        <h2>相关平台 | Related Platform</h2>
        精弘网络采用朝晖、屏峰、莫干山三个校区共同建制
        <br />目前运营和维护的平台包括但不仅限
        <br />浙江工业大学精弘网络微信服务号、
        <br />浙工大微学工微信服务号、微精弘微信小程序、
        <br />浙工大易班官方机构号、知乎官方机构号、
        <br />邮件系统(https://mail.zjut.edu.cn/)、
        <br />浙工大精弘网络b站账号、精弘直播等。
      </div>
    </div>
  </JHCard>
  <JHCard type="large" title="精弘毅行" :isTitle="true">
    <CarouselPictures :imgs="yixingImgs"></CarouselPictures>
    <div class="yixing-content" :class="pageStore.pageType">
      毅行，顾名思义，就是考验毅力的徒步活动。参与毅行活动并走完全程对很多人来讲都是一种挑战，但是有很多人也正是因为毅行的体验，才发觉自己也会有无限可能。
    </div>
    <div class="yixing-content" :class="pageStore.pageType">
      每年一度的"精弘毅行"始于2012年，是浙江工业大学的一次盛会，超过8000位师生校友从学校出发，徒步行走十公里或以上的路程后回到学校。“精弘毅行"鼓励工大学子暂离网络，走出宿舍，以最原始的徒步行走的方式亲近自然，感受青春的活力和朝气。因此，精弘毅行也是每届精弘人必要经历的一次挑战。
    </div>
  </JHCard>
  <JHCard type="large" title="网络育人" :isTitle="true">
    <CarouselPictures :imgs="yurenImgs"></CarouselPictures>
    <div class="yixing-content" :class="pageStore.pageType">
      为深入贯彻落实习近平总书记在全国网络安全和信息化工作会议上的重要讲话精神、增强广大师生安全意识和网络素质、营造安全健康文明的网络环境，积极响应国家网络安全的号召，结合我校实际情况，于全校开展“网络安全宣传教育月”系列活动。由浙江工业大学精弘网络参与承办，通过技术分享会、线下游园活动，人物访谈和拍摄防范网络诈骗微电影等方式达到宣传网络安全知识的目的。
    </div>
  </JHCard>
  <JHCard type="large" title="生活社交" :isTitle="true">
    <div class="shenghuo" :class="pageStore.pageType">
      <img src="https://download.tooc.xlj0.com/uploads/22/jhhome/public/photo/story/shenghuo/shenghuo1.jpg" id="img1" />
      <div class="content">
        精弘还定期举行素质拓展，各种小游戏需要每一位成员的通力合作，在游戏中互相了解，感受精弘大家庭的温暖。
      </div>
      <img src="https://download.tooc.xlj0.com/uploads/22/jhhome/public/photo/story/shenghuo/shenghuo2.jpg" id="img2" />
      <div class="content">
        在每年一度的年会上，精弘网络的每个部门都准备了具有特色的节目，既是对过去工作生活的总结，也是对来年生活的美好祝愿。
      </div>
      <img src="https://download.tooc.xlj0.com/uploads/22/jhhome/public/photo/story/shenghuo/shenghuo3.jpg" id="img3" />
      <div class="shenghuo-imgs">
        <img src="https://download.tooc.xlj0.com/uploads/22/jhhome/public/photo/story/shenghuo/shenghuo4.jpg" id="img4" />
        <img src="https://download.tooc.xlj0.com/uploads/22/jhhome/public/photo/story/shenghuo/shenghuo5.jpg" id="img5" />
      </div>
      <div class="content">
        在各个部门内还有各式各样的轰趴活动，聚餐、唱K或是游西湖。在精弘，绝不是只有工作，还有数不清的快乐。
      </div>
    </div>
  </JHCard>

  <div class="jiyu">
    <JHLabel type="title">前辈寄语</JHLabel>
    <div class="jiyu-base" :class="pageStore.pageType">
      <CarouselCards :card="persons" :type="pageStore.pageType"></CarouselCards>
    </div>
    <div
      class="jiyu-base"
      :class="pageStore.pageType"
      v-if="pageStore.pageType != 'normal'"
    ></div>
  </div>

  <div style="height: 200px"></div>
  <JHButton type="middle" @click="toProduct">
    我们的产品
    <img
      src="https://download.tooc.xlj0.com/uploads/22/jhhome/public/photo/svg/rightArrow.svg"
      style="width: 20px; margin-left: 20px"
    />
  </JHButton>
  <Footer />
</template>
