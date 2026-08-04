<script lang="ts" setup>
import { indexStoryContent } from "~~/constants/index";

definePageMeta({ pageNo: 0 });
useSeoMeta({
  description:
    "成立于2002年5月，精弘的名字取自工大学风“取精用弘”，是浙江工业大学的学术网络组织。精弘网络秉承着自由、共享、团结、创新的精神，全心全意为在校师生提供优质的服务和交流平台，收到了广泛好评。",
  ogImage: `${useRuntimeConfig().public.cubeBaseURL}groupPhoto/2025.webp`
});
defineArticle({ image: `${useRuntimeConfig().public.cubeBaseURL}groupPhoto/2025.webp` });
</script>

<template>
  <div>
    <Cover />
    <Introduce />
    <History v-if="usePageStore().pageSize === PageSize.normal" />
    <template v-else>
      <Timeline />
      <JhCard title="我们的故事" type="large">
        <div class="story-content">{{ indexStoryContent[0] }}</div>
        <div class="story-content">{{ indexStoryContent[1] }}</div>
        <NuxtImg
          src="common/story.webp"
          style="width: 60%; height: 60%; border-radius: var(--radius-lg)"
          alt="我们的故事"
        />
        <NextPage @click="navigateTo('/story')"> 我们的故事 </NextPage>
      </JhCard>
    </template>
    <Contact />
  </div>
</template>

<style scoped lang="scss">
.story-content {
  font-size: 24px;
  line-height: 1.8;
}
</style>
