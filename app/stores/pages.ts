/**
 * 响应式页面尺寸
 *
 * 全局共享的响应式断点标识。由 `app/app.vue` 监听窗口宽度写入
 * `usePageStore().pageSize`，组件再据此适配布局或样式。
 *
 * | 取值            | 触发条件                  | 含义         |
 * | --------------- | ------------------------- | ------------ |
 * | `PageSize.normal` | `width >= 1024`           | 桌面宽屏     |
 * | `PageSize.middle` | `768 <= width < 1024`     | 平板 / 中屏  |
 * | `PageSize.mini`   | `width < 768`             | 手机窄屏     |
 *
 * 该值同时作为 CSS 类名使用（如 `:class="pageStore.pageSize"`），
 * 因此字符串值与样式选择器（`.normal` / `.middle` / `.mini`）一一对应，
 * 不可随意更改。
 *
 * 组件中请通过 `PageSize.normal` 等命名常量访问，避免散落字符串字面量。
 */
export enum PageSize {
  normal = "normal",
  middle = "middle",
  mini = "mini"
}

export const usePageStore = defineStore("page", {
  state: (): { pageSize: PageSize } => ({ pageSize: PageSize.normal })
});
