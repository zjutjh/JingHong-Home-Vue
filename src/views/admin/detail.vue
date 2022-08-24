<template>
  <PageTop />
  <div class="buttons">
    <JHButton type="small" @click="handelFlush">刷新</JHButton>
    <JHButton type="small" @click="handelExport">导出所有数据</JHButton>
  </div>
  <JHNotice :show="showDetail" type="mob" @cancel="showDetail = false" @change-show="showDetail = false">
    <div class="detail">
      <div class="item">
        <label>姓名</label>
        {{ detailForm!.name }}
      </div>
      <div class="item">
        <label>学号</label>
        {{ detailForm!.stu_id }}
      </div>
      <div class="item">
        <label>性别</label>
        {{ detailForm!.gender == '0' ? '男' : '女' }}
      </div>
      <div class="item">
        <label>学院</label>
        {{ detailForm!.campus }}
      </div>
      <div class="item">
        <label>校区</label>
        {{ regions[detailForm!.region] }}
      </div>
      <div class="item">
        <label>专业</label>
        {{ detailForm!.college }}
      </div>
      <div class="item">
        <label>电话</label>
        {{ detailForm!.phone }}
      </div>
      <div class="item">
        <label>QQ</label>
        {{ detailForm!.qq }}
      </div>
      <div class="item">
        <label>第一志愿</label>
        {{ departments[detailForm!.want1] }}
      </div>
      <div class="item">
        <label>第二志愿</label>
        {{ departments[detailForm!.want2] }}
      </div>
      <div class="item">
        <label>自我介绍</label>
        {{ detailForm!.profile }}
      </div>
      <div class="item">
        <label>反馈</label>
        {{ detailForm!.feedback }}
      </div>
    </div>
  </JHNotice>
  <div class=" table">
    <div class="line head">
      <div class="item 1">姓名</div>
      <div class="item 2">学号</div>
      <div class="item 3">校区</div>
      <div class="item 4">第一志愿</div>
      <div class="item 5">第二志愿</div>
      <div class="item 6">查看详情</div>
    </div>
    <div class="line" v-for="(form, index) in briefForms">
      <div class="item 1">{{ form.name }}</div>
      <div class="item 2">{{ form.stu_id }}</div>
      <div class="item 3">{{ regions[form.region] }}</div>
      <div class="item 4">{{ departments[form.want1] }}</div>
      <div class="item 5">{{ departments[form.want2] }}</div>
      <div class="item 6"><button @click="handelShowDetail(form.stu_id)">...</button></div>
    </div>
  </div>
  <!-- {{ detailForm }} -->
  <div style="height: 50vh"></div>
  <Footer />
</template>
<style lang="scss" scoped>
.buttons {
  width: 80%;
  display: flex;
  margin: auto;
}

.table {
  max-width: fit-content;
  width: 80%;
  display: flex;
  flex-direction: column;
  margin: auto;
  margin-top: 50px;
  overflow: scroll;

  .line {
    display: grid;
    grid-template-columns: 50px 200px 100px 150px 150px 80px;

    .item {
      border: 1px solid black;
    }


    &.head .item {
      font-size: large;
      border-bottom: 4px solid black
    }

  }
}

.detail {
  width: fit-content;
  display: flex;
  flex-direction: column;

  .item {
    // width: fit-content;
    width: fit-content;
    max-width: 600px;

    label {
      font-size: large;
      font-weight: bold;
    }
  }
}
</style>
<script setup lang="ts">
import PageTop from '@/components/PageTop.vue';
import Footer from '@/components/Footer.vue';
import JHNotice from '@/components/JHNotice.vue';
import JHButton from '@/components/JHButton.vue';
import { INormalFormBrief, INormalForm } from '@/types/forms'
import { onMounted, ref } from 'vue';
import { GetAllNormalFormsBrief, GetNormalForm, GetExportAllForms } from '@/apis/forms';
import { usePageStore } from '@/stores/pages';
import { departments, regions } from '@/utils/const';
import { abort } from 'process';
const briefForms = ref<INormalFormBrief[]>();
const detailForm = ref<INormalForm>();
const pageStore = usePageStore();
const showDetail = ref<boolean>(false);
async function handelFlush() {
  var res = (await GetAllNormalFormsBrief(pageStore.token))
  console.log(res)
  if (res.message != "ok") {
    alert(res.message)
    return;
  }
  briefForms.value = res.data.data
}
async function handelShowDetail(stu_id: string) {
  detailForm.value = (await GetNormalForm(pageStore.token, stu_id)).data.data
  showDetail.value = true;
}
async function handelExport() {
  await GetExportAllForms(pageStore.token)
}
onMounted(() => {
  handelFlush();
})
</script>