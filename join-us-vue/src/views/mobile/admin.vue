<script setup lang="ts">
import { computed, ref } from 'vue';
import { GetDataTotal } from '../../apis/admin';
import { IFormsData, INormalForm } from '../../types/forms';
import JHLabel from '../../components/pc/JHLabel.vue';
import JHCard from '../../components/pc/JHCard.vue';
import JHDataPresent from '../../components/pc/JHDataPresent.vue';
import DepartmentsDataPresent from '../../components/pc/DepartmentsDataPresent.vue'
// import JHLabel1 from '../../components/pc/JHLabel.vue';
import VChart from 'vue-echarts';
import { use } from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers';
import { BarChart } from 'echarts/charts';
import { TitleComponent, TooltipComponent, LegendComponent } from 'echarts/components';
import 'echarts/lib/component/grid';
import DepartmentsData1 from '../../components/pc/DepartmentsDataPresent.vue';
// import echarts from 'echarts/dist/'
import { DepartmentsData } from '../../types/components';
use([CanvasRenderer,
  BarChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
]);
const pwd = ref("");
const data = ref(<IFormsData>{
  total: 0,
  total_today: 0,
  total_zh: 0,
  total_pf: 0,
  total_mgs: 0,
  bgs: {
    total: 0,
    today: 0,
    want1: 0,
    want2: 0,
    want1_zh: 0,
    want2_zh: 0,
    want1_pf: 0,
    want2_pf: 0,
    want1_mgs: 0,
    want2_mgs: 0,
  },
  msc: {
    total: 0,
    today: 0,
    want1: 0,
    want2: 0,
    want1_zh: 0,
    want2_zh: 0,
    want1_pf: 0,
    want2_pf: 0,
    want1_mgs: 0,
    want2_mgs: 0,
  },
  hdb: {
    total: 0,
    today: 0,
    want1: 0,
    want2: 0,
    want1_zh: 0,
    want2_zh: 0,
    want1_pf: 0,
    want2_pf: 0,
    want1_mgs: 0,
    want2_mgs: 0,
  },
  touch: {
    total: 0,
    today: 0,
    want1: 0,
    want2: 0,
    want1_zh: 0,
    want2_zh: 0,
    want1_pf: 0,
    want2_pf: 0,
    want1_mgs: 0,
    want2_mgs: 0,
  },
  xh: {
    total: 0,
    today: 0,
    want1: 0,
    want2: 0,
    want1_zh: 0,
    want2_zh: 0,
    want1_pf: 0,
    want2_pf: 0,
    want1_mgs: 0,
    want2_mgs: 0,
  },
  bj: {
    total: 0,
    today: 0,
    want1: 0,
    want2: 0,
    want1_zh: 0,
    want2_zh: 0,
    want1_pf: 0,
    want2_pf: 0,
    want1_mgs: 0,
    want2_mgs: 0,
  },
  sj: {
    total: 0,
    today: 0,
    want1: 0,
    want2: 0,
    want1_zh: 0,
    want2_zh: 0,
    want1_pf: 0,
    want2_pf: 0,
    want1_mgs: 0,
    want2_mgs: 0,
  },
  kfb: {
    total: 0,
    today: 0,
    want1: 0,
    want2: 0,
    want1_zh: 0,
    want2_zh: 0,
    want1_pf: 0,
    want2_pf: 0,
    want1_mgs: 0,
    want2_mgs: 0,
  },
  yb: {
    total: 0,
    today: 0,
    want1: 0,
    want2: 0,
    want1_zh: 0,
    want2_zh: 0,
    want1_pf: 0,
    want2_pf: 0,
    want1_mgs: 0,
    want2_mgs: 0,
  },
});

async function submitClicked() {
  const res = await GetDataTotal(pwd.value);
  // console.log(res);
  // alert(res.message);
  // data = res.data.data;
  data.value = res.data.data;
  // console.log(data);
}

var option = ref({
  legend: {
    data: ['第一志愿', '第二志愿'],
    selected: {
      '第一志愿': true,
      '第二志愿': false,
    }
  },
  tooltip: {},
  xAxis: {
    type: "category",
    data: ['办公室', '活动部', '秘书处', 'Touch产品部', '小弘工作室', '编辑工作室', '视觉影像部', '开发部', '易班文化工作站'],
    axisLabel: {
      rotate: 40,
      interval: 0,
    },
    grid: { bottom: 50 },
  },
  yAxis: { type: "value" },
  series: ref([
    {

      color: "red",
      name: "第一志愿",
      type: "bar",
      data: computed(() => {
        return [data.value.bgs.want1,
        data.value.hdb.want1,
        data.value.msc.want1,
        data.value.touch.want1,
        data.value.xh.want1,
        data.value.bj.want1,
        data.value.sj.want1,
        data.value.kfb.want1,
        data.value.yb.want1,]
      }),
      label: {
        show: true,
        position: 'top',
      },
      // data: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      // showBackground: true,
    },
    {
      color: "pink",
      name: "第二志愿",
      type: "bar",
      data: computed(() => {
        return [data.value.bgs.want2,
        data.value.hdb.want2,
        data.value.msc.want2,
        data.value.touch.want2,
        data.value.xh.want2,
        data.value.bj.want2,
        data.value.sj.want2,
        data.value.kfb.want2,
        data.value.yb.want2,
        ]
      }),
      label: {
        show: true,
        position: 'top',

      },
      // showBackground: true,
    },
  ])
})
const data_bgs = computed(() => {
  return <DepartmentsData>{
    want1: data.value.bgs.want1,
    want2: data.value.bgs.want2,
    want1_zh: data.value.bgs.want1_zh,
    want2_zh: data.value.bgs.want2_zh,
    want1_mgs: data.value.bgs.want1_mgs,
    want1_pf: data.value.bgs.want1_pf,
    want2_mgs: data.value.bgs.want2_mgs,
    want2_pf: data.value.bgs.want2_pf,
    total: data.value.bgs.total,
    today: data.value.bgs.today,
  };
})
const data_hdb = computed(() => {
  return <DepartmentsData>{
    want1: data.value.hdb.want1,
    want2: data.value.hdb.want2,
    want1_zh: data.value.hdb.want1_zh,
    want2_zh: data.value.hdb.want2_zh,
    want1_mgs: data.value.hdb.want1_mgs,
    want1_pf: data.value.hdb.want1_pf,
    want2_mgs: data.value.hdb.want2_mgs,
    want2_pf: data.value.hdb.want2_pf,
    total: data.value.hdb.total,
    today: data.value.hdb.today,
  };
})
const data_msc = computed(() => {
  return <DepartmentsData>{
    want1: data.value.msc.want1,
    want2: data.value.msc.want2,
    want1_zh: data.value.msc.want1_zh,
    want2_zh: data.value.msc.want2_zh,
    want1_mgs: data.value.msc.want1_mgs,
    want1_pf: data.value.msc.want1_pf,
    want2_mgs: data.value.msc.want2_mgs,
    want2_pf: data.value.msc.want2_pf,
    total: data.value.msc.total,
    today: data.value.msc.today,
  };
})
const data_touch = computed(() => {
  return <DepartmentsData>{
    want1: data.value.touch.want1,
    want2: data.value.touch.want2,
    want1_zh: data.value.touch.want1_zh,
    want2_zh: data.value.touch.want2_zh,
    want1_mgs: data.value.touch.want1_mgs,
    want1_pf: data.value.touch.want1_pf,
    want2_mgs: data.value.touch.want2_mgs,
    want2_pf: data.value.touch.want2_pf,
    total: data.value.touch.total,
    today: data.value.touch.today,
  };
})
const data_xh = computed(() => {
  return <DepartmentsData>{
    want1: data.value.xh.want1,
    want2: data.value.xh.want2,
    want1_zh: data.value.xh.want1_zh,
    want2_zh: data.value.xh.want2_zh,
    want1_mgs: data.value.xh.want1_mgs,
    want1_pf: data.value.xh.want1_pf,
    want2_mgs: data.value.xh.want2_mgs,
    want2_pf: data.value.xh.want2_pf,
    total: data.value.xh.total,
    today: data.value.xh.today,
  };
})
const data_bj = computed(() => {
  return <DepartmentsData>{
    want1: data.value.bj.want1,
    want2: data.value.bj.want2,
    want1_zh: data.value.bj.want1_zh,
    want2_zh: data.value.bj.want2_zh,
    want1_mgs: data.value.bj.want1_mgs,
    want1_pf: data.value.bj.want1_pf,
    want2_mgs: data.value.bj.want2_mgs,
    want2_pf: data.value.bj.want2_pf,
    total: data.value.bj.total,
    today: data.value.bj.today,
  };
})
const data_sj = computed(() => {
  return <DepartmentsData>{
    want1: data.value.sj.want1,
    want2: data.value.sj.want2,
    want1_zh: data.value.sj.want1_zh,
    want2_zh: data.value.sj.want2_zh,
    want1_mgs: data.value.sj.want1_mgs,
    want1_pf: data.value.sj.want1_pf,
    want2_mgs: data.value.sj.want2_mgs,
    want2_pf: data.value.sj.want2_pf,
    total: data.value.sj.total,
    today: data.value.sj.today,
  };
})
const data_kfb = computed(() => {
  return <DepartmentsData>{
    want1: data.value.kfb.want1,
    want2: data.value.kfb.want2,
    want1_zh: data.value.kfb.want1_zh,
    want2_zh: data.value.kfb.want2_zh,
    want1_mgs: data.value.kfb.want1_mgs,
    want1_pf: data.value.kfb.want1_pf,
    want2_mgs: data.value.kfb.want2_mgs,
    want2_pf: data.value.kfb.want2_pf,
    total: data.value.kfb.total,
    today: data.value.kfb.today,
  };
})
const data_yb = computed(() => {
  return <DepartmentsData>{
    want1: data.value.yb.want1,
    want2: data.value.yb.want2,
    want1_zh: data.value.yb.want1_zh,
    want2_zh: data.value.yb.want2_zh,
    want1_mgs: data.value.yb.want1_mgs,
    want1_pf: data.value.yb.want1_pf,
    want2_mgs: data.value.yb.want2_mgs,
    want2_pf: data.value.yb.want2_pf,
    total: data.value.yb.total,
    today: data.value.yb.today,
  };
})
</script>
<template>
  <div style="height:100px"></div>
  <div class="pwd">
    输入密码:
    <input v-model="pwd" />
    <button @click="submitClicked">刷新</button>
  </div>
  <JHLabel type="middle" style="font-size:3vw;">招新情况</JHLabel>
  <JHCard title="总览" type="large-m">
    <div class="cards">
      <JHDataPresent type="mob" title="报名总数">{{ data.total }}</JHDataPresent>
      <JHDataPresent type="mob" title="朝晖">{{ data.total_zh }}</JHDataPresent>
      <span />
      <JHDataPresent type="mob" title="屏峰">{{ data.total_pf }}</JHDataPresent>
      <JHDataPresent type="mob" title="今日增加">{{ data.total_today }}</JHDataPresent>
      <JHDataPresent type="mob" title="莫干山">{{ data.total_mgs }}</JHDataPresent>
    </div>
  </JHCard>
  <JHCard title="统计图" type="large-m">
    <v-chart class="chart" :option="option" id="chart" ref="chart" :autoresize="true" />
  </JHCard>
  <div class="cards">
    <JHCard title="办公室" type="small-m">
      <DepartmentsDataPresent :data="data_bgs" type="mob"></DepartmentsDataPresent>
    </JHCard>
    <JHCard title="活动部" type="small-m">
      <DepartmentsDataPresent :data="data_hdb" type="mob"></DepartmentsDataPresent>
    </JHCard>
    <JHCard title="秘书处" type="small-m">
      <DepartmentsDataPresent :data="data_msc" type="mob"></DepartmentsDataPresent>
    </JHCard>
    <JHCard title="Touch产品部" type="small-m">
      <DepartmentsDataPresent :data="data_touch" type="mob"></DepartmentsDataPresent>
    </JHCard>
    <JHCard title="小弘工作室" type="small-m">
      <DepartmentsDataPresent :data="data_xh" type="mob"></DepartmentsDataPresent>
    </JHCard>
    <JHCard title="编辑工作室" type="small-m">
      <DepartmentsDataPresent :data="data_bj" type="mob"></DepartmentsDataPresent>
    </JHCard>
    <JHCard title="视觉影像部" type="small-m">
      <DepartmentsDataPresent :data="data_sj" type="mob"></DepartmentsDataPresent>
    </JHCard>
    <JHCard title="开发部" type="small-m">
      <DepartmentsDataPresent :data="data_kfb" type="mob"></DepartmentsDataPresent>
    </JHCard>
    <JHCard title="易班文化工作站" type="small-m">
      <DepartmentsDataPresent :data="data_yb" type="mob"></DepartmentsDataPresent>
    </JHCard>
  </div>
</template>
<style scoped>
.cards {
  margin: 3vw;
  padding: 3vw;
  display: grid;
  grid-template-rows: repeat(10, 10%);
  grid-row-gap: 20px;
  grid-column-gap: 20px;
  padding-top: 10vw;
}
.chart {
  padding-top: 10vw;
  height: 400px;
}
</style>