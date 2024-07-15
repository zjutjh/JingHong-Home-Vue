<script setup lang="ts">
import { onMounted } from "vue";
import JHLabel from "../../components/JHLabel.vue";
import JHCard from "../../components/JHCard.vue";
import Footer from "../../components/Footer.vue";
import { useRouter } from "vue-router";
import CarouselPicturesBig from "../../components/CarouselPicturesBig.vue";
const router = useRouter();
onMounted(() => {
  document.title = "新媒体中心";
});
const imgs1 = [
  "https://img.lonesome.cn/jhwl/home/photo/department/xinmeiti/shijue/1.webp",
  "https://img.lonesome.cn/jhwl/home/photo/department/xinmeiti/shijue/2.webp",
  "https://img.lonesome.cn/jhwl/home/photo/department/xinmeiti/shijue/3.webp",
];
const imgs2 = [
  "https://img.lonesome.cn/jhwl/home/photo/department/xinmeiti/bianji/1.webp",
  "https://img.lonesome.cn/jhwl/home/photo/department/xinmeiti/bianji/2.webp",
  "https://img.lonesome.cn/jhwl/home/photo/department/xinmeiti/bianji/3.webp",
  "https://img.lonesome.cn/jhwl/home/photo/department/xinmeiti/bianji/4.webp",
];
</script>
<style scoped>
img {
  width: 80%;
  object-fit: cover;
}
.content {
  font-size: 20px;
  width: 80%;
  margin: auto;
  text-align: start;
  text-indent: 2em;
}
</style>
<template>
  <div style="height: 100px"></div>
  <JHLabel type="big">新媒体中心</JHLabel>
  <JHCard type="large" title="视觉影像部" :isTitle="true">
    <CarouselPicturesBig :imgs="imgs1" />
    <JHLabel type="small">部门介绍</JHLabel>
    <div class="content">
      视觉影像部门是工大的记录者，我们专注于拍摄校园生活、校园美景以及学校的大型活动，并以照片或视频的方式为同学们呈现最美工大景，我们主要负责照片拍摄与修图、视频拍摄与剪辑。视觉影像期待用用心制作给您带来最高级的视听盛宴！欢迎关注B站：485566103、微信视频号：精小弘在线。
    </div>
    <JHLabel type="small">招新宣言</JHLabel>
    <div class="content">
      对面的帅哥美女看过来！这里是精弘网络视觉影像部！无论你是喜欢策划还是运营；无论你是醉心摄影或是摄像；无论你是擅长拍底片亦或精修剪辑，都尽情考虑我们吧！我们有专属公众号，视频媒体账号，能给予你充分的平台去展示自己的优秀作品！当然啦部长们卓尔不群，有趣貌美，以后都是一起学习的伙伴！
    </div>
  </JHCard>
  <JHCard type="large" title="编辑工作室" :isTitle="true">
    <CarouselPicturesBig :imgs="imgs2" />
    <JHLabel type="small">部门介绍</JHLabel>
    <div class="content">
      负责公众号“浙工大微学工”与“浙江工业大学精弘网络“的主要运营。主要工作是微信公众号推文的撰写和排版，致力于将脑海中的奇思妙想与生活点滴相结合，用图片和文字书写不一样的工大故事
    </div>
    <JHLabel type="small">招新宣言</JHLabel>
    <div class="content">
      如果你对公众号运营有好奇、如果你对推送时常关注、如果你脑海中有各色各样的灵感想找一个平台来实现、如果你略懂排版抑或是擅长文字撰写，编辑工作室绝对是你的不二之选。只要你有兴趣，我们包教包会！加入我们，你可以获得作品的最大曝光、有料的成长回报、天马行空想法的落地以及无与伦比的成就感与归属感。别犹豫啦，我们期待与你们一起碰撞灵魂，产生共鸣！
    </div>
  </JHCard>
  <img
    src="https://img.lonesome.cn/jhwl/home/photo/department/fork.webp"
    style="width: 80px; height: 80px; margin-top: 50px; cursor: pointer"
    @click="router.push('/department')"
  />
  <Footer />
</template>
