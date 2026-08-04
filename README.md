<div align="center">

# 精弘首页

[**浙江工业大学精弘网络主页代码仓库**](https://github.com/zjutjh/JingHong-Home-Vue)

[![Version](https://img.shields.io/github/package-json/v/zjutjh/JingHong-Home-Vue.svg)](package.json)
[![Nuxt](https://img.shields.io/badge/Nuxt-4.4.8-00DC82.svg)](https://nuxt.com)
[![Vue](https://img.shields.io/badge/Vue-3.5-4FC08D.svg)](https://vuejs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6.svg)](https://www.typescriptlang.org)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fzjutjh%2FJingHong-Home-Vue)

</div>

## ✨ 简介

[精弘网络](https://www.myzjut.org)主页，展示团队风采、产品服务和招新信息。

## 🚀 技术栈

- **框架**: Nuxt 4 + Vue 3
- **语言**: TypeScript
- **状态管理**: Pinia
- **样式**: Sass

## 📁 项目结构

```text
jh-homepage/
├── app/                          # 应用源代码
│   ├── app.vue                   # 应用入口组件
│   ├── router.options.ts         # 路由配置
│   ├── assets/                   # 样式资源
│   │   └── css/                  # 全局样式
│   ├── components/               # 组件库
│   ├── layouts/                  # 页面布局
│   ├── pages/                    # 页面路由
│   ├── stores/                   # Pinia 状态管理
│   ├── plugins/                  # Nuxt 插件
│   └── providers/                # 服务提供者
├── constants/                    # 全局配置常量
│   ├── activity.ts               # 活动常量
│   ├── department.ts             # 部门常量
│   ├── product.ts                # 产品常量
│   ├── recruitment.ts            # 招新常量
│   ├── story.ts                  # 故事常量
│   └── index.ts                  # 首页常量
├── public/                       # 公共静态资源
├── nuxt.config.ts                # Nuxt 配置文件
├── tsconfig.json                 # TypeScript 配置
├── package.json                  # 项目依赖配置
└── pnpm-lock.yaml                # 依赖锁定文件
```

## 🚦 快速开始

### 安装依赖

```bash
pnpm install
```

### 本地开发

```bash
pnpm dev
```

启动后访问 <http://localhost:3000>

## ⚙️ 配置说明

### 图片服务

在 `nuxt.config.ts` 中配置 `cubeBaseURL`，图片服务基于 [精弘立方储存](https://github.com/zjutjh/Cube-Go) 实现。

## 📐 响应式页面尺寸

项目通过 `usePageStore().pageSize` 全局追踪当前响应式断点。`app/app.vue` 监听窗口宽度并写入该值，各组件再据此切换布局或样式。

类型与常量定义在 `app/stores/pages.ts`：

| 常量              | 字符串值   | 触发条件              | 含义        |
| ----------------- | ---------- | --------------------- | ----------- |
| `PageSize.normal` | `"normal"` | `width >= 1024`       | 桌面宽屏    |
| `PageSize.middle` | `"middle"` | `768 <= width < 1024` | 平板 / 中屏 |
| `PageSize.mini`   | `"mini"`   | `width < 768`         | 手机窄屏    |

使用方式：

```ts
// 逻辑判断
if (pageStore.pageSize === PageSize.normal) {
  /* ... */
}

// 模板中作为 CSS 类名直接绑定（与上述字符串值一一对应）
// <div :class="pageStore.pageSize" />
```

> ⚠️ 该值同时作为 CSS 类名使用（`.normal` / `.middle` / `.mini`），因此字符串值不可随意更改。代码中请通过 `PageSize.normal` 等命名常量访问，避免散落字符串字面量。
>
> 注意：`JhButton` 的 `type` 属性（`"mini" | "small" | "middle"`）是按钮尺寸，与页面尺寸无关，不要混淆。

## 📄 License

本项目基于 [MIT License](LICENSE) 开源。

---

<div align="center">

Made with ❤️ by [精弘网络](https://github.com/zjutjh)

</div>
