import { createRouter, createWebHistory } from 'vue-router';
import { usePageStore } from '../stores/pages';
import store from "../stores/store";

const routes = [
  {
    path: '/', redirect: '/index'
  },
  {
    path: '/index',
    name: 'index',
    components: {
      default: () => import('../views/index.vue'),
      navbar: () => import('../components/NavBar.vue'),
    }
  },
  {
    path: '/story',
    name: 'story',
    components: {
      default: () => import('../views/story.vue'),
      navbar: () => import('../components/NavBar.vue'),
    }
  },
]

const router = createRouter(
  {
    history: createWebHistory(),
    routes,
  },
);
router.beforeEach((to, from) => {
  const pageStore = usePageStore();
  console.log(to.fullPath, pageStore.pageNow)
  window.scrollTo({ top: 0 })
  if (to.fullPath == '/index') {
    pageStore.pageNow = 0;
    document.title = "精弘首页";
  }
  if (to.fullPath == '/story') {
    pageStore.pageNow = 1;
    document.title = "我们的故事";
  }
})
export default router;