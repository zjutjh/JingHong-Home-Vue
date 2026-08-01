import type { RouterConfig } from "@nuxt/schema";

export default {
  routes: (_routes) => {
    return [..._routes, { path: "/index", redirect: "/" }];
  },
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition;
    const routeAllowsScrollToTop =
      typeof to.meta.scrollToTop === "function"
        ? to.meta.scrollToTop(to, from)
        : to.meta.scrollToTop;
    if (routeAllowsScrollToTop === false) return false;
    if (to.path.replace(/\/$/, "") === from.path.replace(/\/$/, "")) return false;
    return { left: 0, top: 0 };
  }
} satisfies RouterConfig;
