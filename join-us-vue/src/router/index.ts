import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import NavBarPC from "../components/pc/NavBar.vue"

const routes = [
  // PC 端
  { path: '/', redirect: '/index' },
  // { path: '/index', component: () => import('../views/pc/index.vue') },
  {
    path: '/index',
    components: {
      default: () => import('../views/pc/index.vue'),
      navbar: () => NavBarPC,
    }
  },
  {
    path: '/story',
    components: {
      default: () => import('../views/pc/story.vue'),
      navbar: () => NavBarPC,
    }
  },
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