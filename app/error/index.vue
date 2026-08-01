<script setup lang="ts">
import type { NuxtError } from "#app";

defineProps<{
  error: NuxtError;
}>();

const handleClearError = () => {
  try {
    clearError({ redirect: "/" });
  } catch (error) {
    console.error("[Error Page] Failed to clear error:", error);
    window.location.href = "/";
  }
};
</script>

<template>
  <div>
    <PageTop />
    <JhCard title="页面出错了" type="large">
      <h1 class="error-code">{{ error.status || 500 }}</h1>
      <p class="error-message">
        {{ error.message || "发生了一个错误" }}
      </p>

      <DevOnly>
        <details v-if="error.stack" class="error-stack">
          <summary>查看错误堆栈</summary>
          <pre>{{ error.stack }}</pre>
        </details>
      </DevOnly>

      <div class="actions">
        <JhButton type="middle" @click="handleClearError">返回首页</JhButton>
        <JhButton type="middle" @click="useRouter().back()"> 返回上一页 </JhButton>
      </div>
    </JhCard>
    <PageFooter />
  </div>
</template>

<style scoped lang="scss">
.error-code {
  margin: 1rem 0;
  color: var(--primary-color);
  font-size: 5rem;
}

.error-message {
  margin: 1rem 0 2rem;
  color: var(--text-content);
  font-size: 1.25rem;
}

.error-stack {
  margin: 2rem 0;
  text-align: left;

  summary {
    cursor: pointer;
    padding: 0.5rem;
    color: var(--accent-color);

    &:hover {
      color: var(--primary-color);
    }
  }

  pre {
    margin-top: 0.5rem;
    border-radius: var(--radius-md);
    background: var(--card-bg-secondary);
    padding: 1rem;
    overflow-x: auto;
    color: var(--muted);
    font-size: 0.875rem;
  }
}

.actions {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
}
</style>
