<template>
  <PageTop />
  <JHLabel type="big">招新情况</JHLabel>
  <JHButton type="small" @click="submitClicked">刷新</JHButton>
  <JHCard title="统计图" type="large" :is-title="true">
    <v-chart class="chart" :option="option" id="chart" ref="chart" :autoresize="true" />
    （点击图例切换显示）
  </JHCard>
  <div class="cards" :class="pageStore.pageType">
    <JHCard title="办公室" type="small" :is-title="true">
      <DepartmentsDataPresent :data="data![1]" type="mob"></DepartmentsDataPresent>
    </JHCard>
    <JHCard title="活动部" type="small" :is-title="true">
      <DepartmentsDataPresent :data="data![2]" type="mob"></DepartmentsDataPresent>
    </JHCard>
    <JHCard title="秘书处" type="small" :is-title="true">
      <DepartmentsDataPresent :data="data![3]" type="mob"></DepartmentsDataPresent>
    </JHCard>
    <JHCard title="Touch产品部" type="small" :is-title="true">
      <DepartmentsDataPresent :data="data![4]" type="mob"></DepartmentsDataPresent>
    </JHCard>
    <JHCard title="小弘工作室" type="small" :is-title="true">
      <DepartmentsDataPresent :data="data![5]" type="mob"></DepartmentsDataPresent>
    </JHCard>
    <JHCard title="编辑工作室" type="small" :is-title="true">
      <DepartmentsDataPresent :data="data![6]" type="mob"></DepartmentsDataPresent>
    </JHCard>
    <JHCard title="视觉影像部" type="small" :is-title="true">
      <DepartmentsDataPresent :data="data![7]" type="mob"></DepartmentsDataPresent>
    </JHCard>
    <JHCard title="技术部" type="small" :is-title="true">
      <DepartmentsDataPresent :data="data![8]" type="mob"></DepartmentsDataPresent>
    </JHCard>
    <JHCard title="易班文化工作站" type="small" :is-title="true">
      <DepartmentsDataPresent :data="data![9]" type="mob"></DepartmentsDataPresent>
    </JHCard>
  </div>
  <div style="height: 50px"></div>
  <JHButton type="small" @click="router.push('/admin/detail')">查看详情（需要高级管理员密钥）</JHButton>
  <Footer />
</template>
<style scoped>
.cards {
  display: grid;
  grid-template-rows: repeat(10, 10%);
  grid-row-gap: 20px;
  grid-column-gap: 20px;
  width: 90%;
  margin: auto;
}

.cards.normal {
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 50px;
  grid-column-gap: 100px;
  grid-template-rows: none;
}

.chart {
  height: 400px;
}
</style>

<script setup lang="ts">
import { computed, onBeforeMount, onMounted, ref } from "vue";
import { GetDataTotal } from "../../apis/admin";
import { IFormsData, INormalForm } from "../../types/forms";
import JHLabel from "../../components/JHLabel.vue";
import JHCard from "../../components/JHCard.vue";
import JHDataPresent from "../../components/JHDataPresent.vue";
import DepartmentsDataPresent from "../../components/DepartmentsDataPresent.vue";
import VChart from "vue-echarts";
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { BarChart } from "echarts/charts";
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
} from "echarts/components";
import "echarts/lib/component/grid";
import { DepartmentsData } from "../../types/components";
import { usePageStore } from "../../stores/pages";
import PageTop from "../../components/PageTop.vue";
import JHButton from "@/components/JHButton.vue";
import Footer from "@/components/Footer.vue";
import { useRouter } from "vue-router";
use([
  CanvasRenderer,
  BarChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
]);
const pageStore = usePageStore();
const data = ref<IFormsData>([
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
]);
const router = useRouter()
async function submitClicked() {
  const res = await GetDataTotal(pageStore.token);
  data.value = res.data.data;
}
submitClicked()
var option = ref({
  legend: {
    data: ["第一志愿", "第二志愿"],
    selected: {
      第一志愿: true,
      第二志愿: false,
    },
  },
  tooltip: {},
  xAxis: {
    type: "category",
    data: [
      "办公室",
      "活动部",
      "秘书处",
      "Touch产品部",
      "小弘工作室",
      "编辑工作室",
      "视觉影像部",
      "技术部",
      "易班文化工作站",
    ],
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
        if (data.value == undefined) return []
        var res: number[] = [];
        for (var i = 1; i <= 9; i++) {
          res.push(data.value![i][0]);
        }
        return res
      }),
      label: {
        show: true,
        position: "top",
      },
    },
    {
      color: "pink",
      name: "第二志愿",
      type: "bar",
      data: computed(() => {
        if (data.value == undefined) return []
        var res: number[] = [];
        for (var i = 1; i <= 9; i++) {
          res.push(data.value![i][4]);
        }
        return res
      }),
      label: {
        show: true,
        position: "top",
      },
    },
  ]),
});
onBeforeMount(() => { submitClicked() })

</script>