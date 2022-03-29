<script setup lang="ts">
import Footer from '../../components/pc/Footer.vue';
import { usePageStore } from '../../stores/pages';
import { useRouter } from 'vue-router';
import { onMounted } from 'vue';
import JHCard from '../../components/pc/JHCard.vue';
import { ENV } from '../../utils/const';
const store = usePageStore();
const router = useRouter();
function To_recruit() {
  router.push('/recruit');
  // let route = router.resolve("/recruit");
  // window.open(route.href, "_blank");

}

function To_long() {
  if (ENV == 'dev') {
    router.push('/recruit_long');
  } else {
    return false;
  }
}

onMounted(() => {
  store.pageNow = 4;
})
</script>
<template>
  <JHCard title="加入我们" type="large" style="margin-top:20vh">
    <div style="display: flex; margin-top: 10vh;">
      <div style="width: 60vw;">
        <div class="join_poster"></div>
        <div style="margin: auto;">
          <div class="join_label">最新动态</div>
          <div class="join_code_outlines">
            <div class="join_code-outline">
              <div class="join_code" style="background: url(/photo/product/11.png) center/cover"></div>
              <div>精弘网络</div>
            </div>
            <div class="join_code_outline">
              <div class="join_code" style="background: url(/photo/product/10.png) center/cover"></div>
              <div>精小弘在线</div>
            </div>
          </div>
        </div>
      </div>
      <div style="width: 45%;">
        <div class="join_open_button" @click="To_recruit">
          <div class="join_button">招新季报名</div>
          <div class="join_button_hint">（点击报名）</div>
        </div>
        <div class="join_close_button">
          <div class="join_button" @click="To_long">长期招新报名</div>
          <div class="join_button_hint">（暂未开放）</div>
        </div>
        <div style="height: 50px;"></div>
        <div class="join_content">
          <div class="join_label">线下摆摊</div>
          <div style="text-align: left;margin-left: 20px;">
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
        <div class="join_content">
          <div class="join_label">招新宣讲</div>
          <div style="text-align: left;margin-left: 20px;">
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
        </div>
        <div class="join_content">
          <div class="join_label">招新群号</div>
          <div style="text-align: left;margin-left: 20px;">
            <span>715270127</span>
            <br />
          </div>
        </div>
      </div>
    </div>
  </JHCard>

  <JHCard title="部门结构一览图" type="large">
    <img src="/photo/haibao/structPc.png" style="width:75vw" />
  </JHCard>
  <Footer />
</template>


<style>
template {
  min-width: 900px;
}
.des_box {
  width: 80vw;
  background-color: white;
  margin: auto;
  margin-top: 10vh;
  margin-bottom: 40px;
  padding: 30px;
  border-radius: 10px;

  box-shadow: -5px 5px 5px #bbbbbb;
}
.join_poster {
  width: calc(65vw * 0.6);
  min-width: 346px;
  /* width: 100%; */
  height: calc(65vw * 0.6 * 645 / 445);
  min-height: 501px;
  /* height: 645px; */
  background-color: aqua;
  margin: 0px auto 20px;
  background: url(/photo/haibao/diannao.jpg) center/cover;
}
.join_label {
  width: 8vw;
  height: 3vh;
  border-radius: 4px;
  background-color: #d20001;
  color: white;
  font-size: 1vw;

  margin: 10px 0;
}

.join_code_outlines {
  width: 100%;
  display: flex;
  justify-content: start;
  padding-inline: 10vw;
  margin: 0 10px;
  margin-top: 20px;
}

/* 二维码外框 */
.join_code {
  width: 100px;
  height: 100px;
  background-color: #d20001;
  margin-bottom: 5px;
}

.join_open_button,
.join_close_button {
  width: 180px;
  height: 80px;
  margin: 30px auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: normal;
  color: white;
}
.join_button {
  width: 180px;
  height: 50px;
  background-color: #d20001;

  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.join_open_button .join_button_hint {
  color: #d20001;
}
.join_close_button .join_button {
  color: white;
  background-color: #aaaaaa;
}
.join_close_button .join_button_hint {
  color: #aaaaaa;
}

.join_content {
  width: 300px;
  height: 200px;
  /* background-color: bisque; */
  margin-left: 50px;
}

.department_structure_overview_diagram {
  width: 694px;
  height: 229px;
  margin: 20px auto;
  background: url(/photo/haibao/structPc.png) center/cover;
  background-color: aqua;
}
</style>
