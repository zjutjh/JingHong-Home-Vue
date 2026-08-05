<script lang="ts" setup>
import { useScroll, watchThrottled } from "@vueuse/core";

const route = useRoute();
const pageStore = usePageStore();
const { lock: lockScroll, unlock: unlockScroll } = useScrollLock();
const hide = ref(false);
const mobileColumnMenuDisplay = ref(false);
const previousScrollPosition = ref(0);

// MARK: 滚动相关参数
const pageTopBufferSize = 300;
const scrollReactThreshold = 25;

const { y: scrollY } = useScroll(window);
const isAtTop = computed(() => Math.max(0, scrollY.value) < pageTopBufferSize);

watch(
  () => route.meta.pageNo,
  () => {
    if (mobileColumnMenuDisplay.value) listBtnClicked();
  }
);

watch(
  () => pageStore.pageSize,
  (newSize) => {
    if (mobileColumnMenuDisplay.value && newSize === PageSize.normal) listBtnClicked();
  }
);

onUnmounted(() => {
  if (mobileColumnMenuDisplay.value) listBtnClicked();
});

// MARK: 页面滚动处理
watchThrottled(
  scrollY,
  () => {
    const currentScrollPosition = Math.max(0, scrollY.value);
    const scrollDiff = Math.abs(currentScrollPosition - previousScrollPosition.value);
    if (scrollDiff > scrollReactThreshold) {
      hide.value = currentScrollPosition > previousScrollPosition.value;
    }
    previousScrollPosition.value = currentScrollPosition;
  },
  { throttle: 100 }
);

function listBtnClicked() {
  mobileColumnMenuDisplay.value = !mobileColumnMenuDisplay.value;
  if (mobileColumnMenuDisplay.value) lockScroll();
  else unlockScroll();
}

// MARK: 栏目配置项
const menuColumns = [
  { name: "首页", link: "/" },
  { name: "我们的故事", link: "/story" },
  { name: "我们的产品", link: "/product" },
  { name: "我们的部门", link: "/department" },
  { name: "我们的活动", link: "/activity" },
  { name: "加入我们", link: "/join" }
];
</script>

<template>
  <nav
    role="navigation"
    :class="[
      pageStore.pageSize,
      !mobileColumnMenuDisplay && isAtTop && route.meta.pageNo === 0 ? 'atCover' : 'notAtCover',
      !mobileColumnMenuDisplay && !isAtTop && hide ? 'hide' : ''
    ]"
    @touchmove.prevent
  >
    <NuxtLink to="/" class="logo" :class="pageStore.pageSize">
      <NuxtImg src="common/logo.webp" alt="Logo" style="width: 100%; object-fit: contain" />
    </NuxtLink>

    <template v-if="pageStore.pageSize === PageSize.normal">
      <div
        v-for="(l, index) in menuColumns"
        :key="l.link"
        class="link"
        :class="index === route.meta.pageNo ? 'select' : 'notSelect'"
      >
        <NuxtLink :to="l.link">{{ l.name }}</NuxtLink>
      </div>
    </template>
    <template v-else>
      <div
        class="listButton"
        :class="mobileColumnMenuDisplay ? 'mobileColumnMenuDisplay' : 'mobileColumnMenuHidden'"
        @click="listBtnClicked"
      />

      <!-- MARK: 移动设备下拉菜单 -->
      <Teleport to="#__nuxt">
        <Transition name="slide">
          <div v-show="mobileColumnMenuDisplay" class="list" :class="pageStore.pageSize">
            <div
              v-for="(l, index) in menuColumns"
              :key="l.link"
              class="listItem"
              :class="index === route.meta.pageNo ? 'select' : 'notSelect'"
              @click="listBtnClicked"
            >
              <NuxtLink :to="l.link">
                <div style="width: 100%">
                  {{ l.name }}
                </div>
              </NuxtLink>
            </div>
          </div>
        </Transition>
      </Teleport>
    </template>
  </nav>
</template>

<style lang="scss" scoped>
// MARK: 动画
.slide-enter-active,
.slide-leave-active {
  transition:
    transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1),
    opacity 0.4s ease;
  will-change: transform, opacity;
}

.slide-enter-from {
  transform: translateY(-100%);
  opacity: 0;
}

.slide-enter-to {
  transform: translateY(0);
  opacity: 1;
}

.slide-leave-from {
  transform: translateY(0);
  opacity: 1;
}

.slide-leave-to {
  transform: translateY(-100%);
  opacity: 0;
}

// MARK: 全局样式
* {
  font-family: "ZLY-song", sans-serif;
}

a {
  color: white;
  font-size: large;
  text-decoration: none;
}

// MARK: 背景状态
.atCover {
  background: transparent;
}

.notAtCover {
  box-shadow: var(--shadow-sm);
  background-color: var(--primary-color);
}

// MARK: 导航栏基础样式
nav {
  display: grid;
  position: fixed;
  top: 0;
  align-items: center;
  z-index: 4;
  transition:
    top linear 0.4s,
    background linear 0.2s;
  width: 100%;
  color: white;

  &.normal {
    grid-template-columns: 30% repeat(v-bind("menuColumns.length"), 1fr);
    height: 90px;
  }

  &.middle {
    grid-template-columns: 1fr 60px;
    height: 90px;
  }

  &.mini {
    grid-template-columns: 1fr 60px;
    height: 50px;
  }

  // 隐藏状态
  &.hide {
    top: -100px;
  }
}

// MARK: Logo样式
.logo {
  &.normal,
  &.middle {
    transform: scale(0.8);
    width: 200px;
  }

  &.mini {
    transform: scale(0.8);
    width: 120px;
  }
}

// MARK: 导航链接
.link {
  &.select {
    transition: background-color 0.5s;
    border-radius: var(--radius-xl);
    background-color: white;
    padding: 5px;

    a {
      color: var(--primary-color);
    }

    &::after {
      display: block;
      position: relative;
      top: 20px;
      border-bottom: 3px solid white;
      width: 100%;
      content: "";
    }
  }

  &.notSelect a {
    color: white;
  }
}

// MARK: 列表按钮
.listButton {
  width: 40px;
  height: 40px;

  &.mobileColumnMenuDisplay {
    background: url("#{$cubeBaseURL}ui/close.svg") no-repeat center;
  }

  &.mobileColumnMenuHidden {
    background: url("#{$cubeBaseURL}ui/list.svg") no-repeat center;
  }
}

// MARK: 下拉列表
.list {
  position: fixed;
  align-items: center;
  justify-items: center;
  z-index: 3;
  background-color: var(--card-bg);
  width: 100%;
  height: 100vh;
  overflow-y: auto;
  overscroll-behavior: contain;
  -webkit-overflow-scrolling: touch;

  &.mini {
    top: 50px;
    height: calc(100vh - 50px);
  }

  &.middle {
    top: 90px;
    height: calc(100vh - 90px);
  }

  .listItem {
    margin: auto;
    margin-top: 20px;
    border: 2px solid;
    border-color: var(--primary-color);
    border-radius: var(--radius-lg);
    padding: 5px;
    width: 40%;

    &.select {
      background-color: var(--primary-color);
      color: white;
    }

    &.notSelect {
      background-color: var(--card-bg);

      a {
        color: var(--primary-color);
      }
    }
  }
}
</style>
