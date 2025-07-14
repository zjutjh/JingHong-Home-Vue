<script setup lang="ts">
import { onMounted } from "vue";
import JHLabel from "../../components/JHLabel.vue";
import JHCard from "../../components/JHCard.vue";
import Footer from "../../components/Footer.vue";
import { useRouter } from "vue-router";
import CarouselPicturesBig from "../../components/CarouselPicturesBig.vue";
const router = useRouter();
onMounted(() => {
  document.title = "干事培训中心";
});
const img1 = [
  "https://qiuniu.phlin.cn/bucket/20250714233516860.webp",
  "https://qiuniu.phlin.cn/bucket/20250714233516861.webp",
  "https://qiuniu.phlin.cn/bucket/20250714233516862.webp"
]
</script>
<style scoped>
img {
  width: 40%;
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
  <JHLabel type="big">干事培训中心</JHLabel>
  <JHCard type="large" title="常务处" :isTitle="true">
    <CarouselPicturesBig :imgs="img1"></CarouselPicturesBig>
    <JHLabel type="small">部门介绍</JHLabel>
    <div class="content">
      Hello大家好！这里是精弘网络常务处——组织的核心纽带，团队高效运转的强力保障！
    </div>
    <div class="content">
      我们活跃在学校的三个校区，始终是精弘网络最坚实的后盾。
    </div>
    <div class="content">
      我们的工作主要分为两大板块：
    </div>
    <div class="content">
      日常运营：会议记录与跟进、跨部门协调与资源整合、重要文书起草与管理
    </div>
    <div class="content">
      活动支持：从创意策划到落地执行，从物资筹备到后勤保障，我们全程护航每一场精彩活动！
    </div>
    <div class="content">
      同时，我们还肩负着外联沟通的重要使命。既要脑洞大开设计趣味方案，又要化身谈判达人争取优质资源。在这里，你不仅能收获全方位的技能成长，更能遇见一群温暖又有趣的灵魂！
    </div>
    <div class="content">
      工作认真，玩得更嗨！我们的团建清单永远充满惊喜：深夜海底捞、凌晨追日出、通宵KTV......在常务处，我们誓要做既能扛事又会搞事的超级团队！
    </div>

    <JHLabel type="small">招新宣言</JHLabel>
    <div class="content">
      亲爱的学弟学妹们～欢迎加入常务处的温暖小窝！我们不仅是高效运转的团队，更是彼此陪伴的家人！
    </div>
    <div class="content">
      在这里，例会从不枯燥——它是每周一次的欢乐聚会！
    </div>
    <div class="content">
      在这里，你的生日绝不会被遗忘——全员的祝福，仪式感拉满！
    </div>
    <div class="content">
      在这里，学长学姐24小时在线——学习、生活、情感……任何问题，我们随时“捞”你！
    </div>
    <div class="content">
      常务处，不只是一个部门——
    </div>
    <div class="content">
      它是你大学生活的“第一站温暖”，是随时可以回来的“家”！
    </div>
    <div class="content">
      让我们一起期待在常务处的每一个明天！！！
    </div>
  </JHCard>
  <img
    src="https://img.lonesome.cn/jhwl/home/photo/department/fork.webp"
    style="width: 80px; height: 80px; margin-top: 50px; cursor: pointer"
    @click="router.push('/department')"
  />
  <Footer />
</template>
