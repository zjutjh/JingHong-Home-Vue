import { createRouter, createWebHistory } from 'vue-router';
import { usePageStore } from '../stores/pages';
import store from "../stores/store";
const pageStore = usePageStore(store);
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
  }
]

const router = createRouter(
  {
    history: createWebHistory(),
    routes,
  },
);

// function handleResize() {
//   let width = document.body.clientWidth;
//   console.log(width);
//   if (width > 768) {
//     pageStore.pageType = 'normal';
//     document.querySelector('body')?.setAttribute('style', 'min-width: 1440px')
//   } else if (width > 425) {
//     pageStore.pageType = 'middle';
//     document.querySelector('body')?.setAttribute('style', 'min-width: 768px')
//   } else {
//     pageStore.pageType = 'mini';
//     document.querySelector('body')?.setAttribute('style', 'min-width: 500px')
//   }
// }
// router.beforeEach((to, from) => {
//   window.addEventListener('resize', handleResize);
//   return true;
// })
export default router;