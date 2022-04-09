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
  {
    path: '/product',
    name: 'product',
    components: {
      default: () => import('../views/product.vue'),
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
  else if (to.fullPath == '/story') {
    pageStore.pageNow = 1;
    document.title = "我们的故事";
  } else if (to.fullPath == '/product') {
    pageStore.pageNow = 2;
    document.title = "我们的产品";
  } else if (to.fullPath == '/department') {
    pageStore.pageNow = 3;
    document.title = "我们的部门";
  } else if (to.fullPath == '/join') {
    pageStore.pageNow = 4;
    document.title = "加入我们";
  }
})
export default router;