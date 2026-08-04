import { defineNuxtConfig } from "nuxt/config";

const cubeBaseURL = process.env.CUBE_BASE_URL || "https://img.phlin.cn/files/homepage/";

export default defineNuxtConfig({
  compatibilityDate: "2026-01-01",
  devtools: { enabled: true },
  modules: ["@pinia/nuxt", "@nuxt/image", "@nuxtjs/seo", "@nuxt/eslint"],
  eslint: { config: { standalone: false } },
  routeRules: { "/": { prerender: true } },
  css: ["assets/css/main.scss"],
  sitemap: { zeroRuntime: true },

  site: {
    url: "https://www.myzjut.org",
    name: "浙江工业大学精弘网络",
    defaultLocale: "zh-CN"
  },

  components: [
    {
      path: "~/components",
      pathPrefix: false
    }
  ],

  runtimeConfig: {
    public: {
      cubeBaseURL,
      lastUpdateYear: new Date().getFullYear(),
      contact: {
        email: "jhwl2002@zjut.edu.cn",
        github: "https://github.com/zjutjh",
        wechat: {
          jxhzx: "gh_30765353fa78",
          jhwl: "zjutjh"
        }
      }
    }
  },

  vite: {
    optimizeDeps: {
      include: ["@vueuse/core"]
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `$cubeBaseURL: "${cubeBaseURL}";`
        }
      }
    }
  },

  image: {
    domains: [new URL(cubeBaseURL).hostname, "open.weixin.qq.com", "open-api.cli.im"],
    provider: "cubeImage",
    providers: {
      cubeImage: {
        name: "cubeImage",
        provider: "~/providers/cube-image",
        options: {
          baseURL: cubeBaseURL
        }
      },
      wechatOpen: {
        name: "wechatOpen",
        provider: "~/providers/wechat-open"
      },
      cliQR: {
        name: "cliQR",
        provider: "~/providers/cli-qr"
      }
    }
  },

  schemaOrg: {
    identity: {
      type: "Organization",
      name: "浙江工业大学精弘网络",
      logo: "/favicon.png",
      sameAs: ["https://github.com/zjutjh", "https://space.bilibili.com/485566103"]
    }
  },

  app: {
    head: {
      meta: [
        { charset: "utf-8" },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1, viewport-fit=cover"
        },
        { name: "theme-color", content: "#d20001" },
        { name: "mobile-web-app-capable", content: "yes" },
        {
          name: "apple-mobile-web-app-status-bar-style",
          content: "black-translucent"
        }
      ],
      link: [
        { rel: "icon", type: "image/png", href: "/favicon.png" },
        { rel: "apple-touch-icon", href: "/favicon.png" },
        { rel: "shortcut icon", href: "/favicon.png" },
        { rel: "bookmark", href: "/favicon.png" },
        {
          rel: "preconnect",
          href: `//${new URL(cubeBaseURL).hostname}`,
          crossorigin: "anonymous"
        },
        {
          rel: "preload",
          href: `${cubeBaseURL}fonts/AlibabaSans-Regular.woff2`,
          as: "font",
          type: "font/woff2",
          crossorigin: "anonymous"
        },
        {
          rel: "preload",
          href: `${cubeBaseURL}fonts/subset-ZoomlaYasong.woff2`,
          as: "font",
          type: "font/woff2",
          crossorigin: "anonymous"
        },
        { rel: "dns-prefetch", href: "//open.weixin.qq.com" },
        { rel: "dns-prefetch", href: "//open-api.cli.im" }
      ]
    }
  },
  typescript: {
    // customize tsconfig.app.json
    tsConfig: {
      include: ["../constants/*.ts"]
    },
    // customize tsconfig.shared.json
    sharedTsConfig: {
      // ...
    },
    // customize tsconfig.node.json
    nodeTsConfig: {
      // ...
    }
  },
  nitro: {
    typescript: {
      // customize tsconfig.server.json
      tsConfig: {
        // ...
      }
    }
  }
});
