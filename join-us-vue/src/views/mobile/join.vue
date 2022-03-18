<script setup lang="ts">
import { useRouter } from "vue-router";
const router = useRouter();
function To_recruit() {
  router.push("/m/recruit");
}
function To_long() {
  router.push("/m/recruit_long");
}

</script>
<template>
  <div style="margin-top: 90px;"></div>
  <div class="mob_box">
    <Des_label2 content="加入我们"></Des_label2>
    <div style="margin-top: 20px;"></div>

    <div class="mob_join_poster">
      <img src="/photo/haibao/shouji.jpg" />
    </div>

    <div style="display: flex;width: 100%;">
      <div class="mob_join_open_button" @click="To_recruit">
        <div class="mob_join_button">招新季报名</div>
        <div class="mob_join_button_hint">（点击报名）</div>
      </div>
      <div class="mob_join_close_button" @click="To_long">
        <div class="mob_join_button">长期招新报名</div>
        <div class="mob_join_button_hint">（暂未开放）</div>
      </div>
    </div>
    <div class="mob_join_content">
      <div class="mob_join_label">线下摆摊</div>
      <div>
        <span>屏峰：20212021年9月15日至16日</span>
        <br />
        <span>地点：支干路</span>
        <br />
        <br />
        <span>朝晖：2021年9月15日至16日</span>
        <br />
        <span>地点：上塘河畔</span>
        <br />
      </div>
    </div>
    <div class="mob_join_content">
      <div class="mob_join_label">招新宣讲</div>

      <span>屏峰：2021年9月10日晚6：30</span>
      <br />
      <span>地点：广知C 301</span>
      <br />
      <br />
      <span>朝晖：2021年9月11日晚6：30</span>
      <br />
      <span>地点：新教 201</span>
      <br />
    </div>
    <div class="mob_join_content">
      <div class="mob_join_label">招新群号</div>

      <span>715270127</span>
      <br />
    </div>

    <div class="mob_join_label">最新动态</div>
    <div class="mob_join_code_outlines">
      <div class="mob_join_code_outline">
        <div class="mob_join_code" style="background: url(/photo/product/11.png) center/cover"></div>
        <div>精弘网络</div>
      </div>
      <div class="mob_join_code_outline">
        <div class="mob_join_code" style="background: url(/photo/product/10.png) center/cover"></div>
        <div>精小弘在线</div>
      </div>
    </div>
  </div>

  <div class="mob_box">
    <Des_label2 content="部门结构一览图"></Des_label2>
    <!-- <div>
      <img src="/photo/product/10.png" />
    </div>-->

    <div class="mob_department_structure_overview_diagram"></div>
  </div>

  <Footer></Footer>
</template>
<style>
.mob_box {
  width: 90%;
  background-color: white;
  margin: auto;
  margin-bottom: 40px;

  box-sizing: border-box;
  padding: 30px;
  border-radius: 10px;

  box-shadow: -5px 5px 5px #bbbbbb;
}
.mob_join_poster {
  width: 100%;
}
.mob_join_poster img {
  width: 100%;
  height: auto;
}
.mob_join_label {
  width: 100px;
  height: 26px;
  line-height: 26px;
  border-radius: 4px;

  background-color: #d20001;
  color: white;
  font-size: 15px;

  margin: 10px auto;
}

.mob_join_code_outlines {
  width: 100%;
  /* display: flex; */
  justify-content: center;

  margin-top: 20px;
}

.mob_join_code_outline {
  width: 100px;
  margin: 10px auto;
  /* display: flex;
    justify-content: center; */
}
/* 二维码外框 */
.mob_join_code {
  width: 100px;
  height: 100px;
  background-color: #d20001;
  margin-bottom: 5px;
}

.mob_join_open_button,
.mob_join_close_button {
  /* width: 180px; */
  /* height: 80px; */
  margin: 30px auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: normal;
  color: white;
  font-size: 4vw;
}
.mob_join_button {
  width: 30vw;
  height: 10vw;
  background-color: #d20001;

  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.mob_join_open_button .mob_join_button_hint {
  color: #d20001;
}
.mob_join_close_button .mob_join_button {
  color: white;
  background-color: #aaaaaa;
}
.mob_join_close_button .mob_join_button_hint {
  color: #aaaaaa;
}

.mob_join_content {
  width: 100%;
  margin: 30px auto;
  /* height: 170px; */
  /* background-color: bisque; */
  /* margin-left: 50px; */
}

.mob_department_structure_overview_diagram {
  width: 310px;
  height: 310px;
  margin: 20px auto;
  background: url(/photo/haibao/structMob.png) center/cover;
  background-color: aqua;
}
</style>
