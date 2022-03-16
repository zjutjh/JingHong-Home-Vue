import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes = [
  // PC 端
  { path: '/', redirect: '/index' },
  { path: '/index', component: () => import('../views/pc/index.vue') },
  // 移动端
  { path: '/m', redirect: '/m/index' },
  { path: '/m/index', component: () => import('../views/mobile/index.vue') },

  // 404 
  { path: '/:pathMatch(.*)*', name: '404', redirect: '/index' },
]

export default createRouter(
  {
    history: createWebHistory(),
    routes,
  },
)