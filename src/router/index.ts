import { createRouter, createWebHistory } from 'vue-router';
import { usePageStore } from '../stores/pages';

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
  {
    path: '/department',
    name: 'department',
    components: {
      default: () => import('../views/department.vue'),
      navbar: () => import('../components/NavBar.vue'),
    }
  },
  {
    path: '/department/changwu',
    name: 'department/changwu',
    components: {
      default: () => import('../views/department/changwu.vue'),
      navbar: () => import('../components/NavBar.vue'),
    }
  },
  {
    path: '/department/jishu',
    name: 'department/jishu',
    components: {
      default: () => import('../views/department/jishu.vue'),
      navbar: () => import('../components/NavBar.vue'),
    }
  },

  {
    path: '/department/sheji',
    name: 'department/sheji',
    components: {
      default: () => import('../views/department/sheji.vue'),
      navbar: () => import('../components/NavBar.vue'),
    }
  },
  {
    path: '/department/xinmeiti',
    name: 'department/xinmeiti',
    components: {
      default: () => import('../views/department/xinmeiti.vue'),
      navbar: () => import('../components/NavBar.vue'),
    }
  },
  {
    path: '/department/yiban',
    name: 'department/yiban',
    components: {
      default: () => import('../views/department/yiban.vue'),
      navbar: () => import('../components/NavBar.vue'),
    }
  },
  {
    path: '/join',
    name: 'join',
    components: {
      default: () => import('../views/join.vue'),
      navbar: () => import('../components/NavBar.vue'),
    }
  },
  // {
  //   path: '/join/recruit',
  //   name: 'join/recruit',
  //   components: {
  //     default: () => import('../views/join/recruit.vue'),
  //     navbar: () => import('../components/NavBar.vue'),
  //   }
  // },
  // {
  //   path: '/join/long',
  //   name: 'join/long',
  //   components: {
  //     default: () => import('../views/join/recruitLong.vue'),
  //     navbar: () => import('../components/NavBar.vue'),
  //   },
  // },
  // {
  //   path: '/join/develop',
  //   name: 'join/develop',
  //   components: {
  //     default: () => import('../views/join/recruitDevelop.vue'),
  //     navbar: () => import('../components/NavBar.vue'),
  //   },
  // },
  // {
  //   path: '/admin',
  //   name: 'admin',
  //   components: {
  //     default: () => import('../views/admin.vue'),
  //     navbar: () => import('../components/NavBarAdmin.vue'),
  //   },
  // },
  {
    path: '/join/acm',
    name: 'join/acm',
    components: {
      default: () => import('../views/join/acm.vue'),
      navbar: () => import('../components/NavBar.vue'),
    },
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/index'
  }
]

const router = createRouter(
  {
    history: createWebHistory(),
    routes,
  },
);

router.beforeEach((to, from) => {
  const pageStore = usePageStore();
  console.log(to.fullPath.split('/'));
  window.scrollTo({ top: 0 })
  if (to.fullPath == '/index') {
    pageStore.pageNow = 0;
    document.title = "????????????";
  }
  else if (to.fullPath == '/story') {
    pageStore.pageNow = 1;
    document.title = "???????????????";
  } else if (to.fullPath == '/product') {
    pageStore.pageNow = 2;
    document.title = "???????????????";
  } else if (to.fullPath.split('/')[1] == 'join') {
    pageStore.pageNow = 4;
    document.title = "????????????";
  } else if (to.fullPath.split('/')[1] == 'department') {
    pageStore.pageNow = 3;
    document.title = "???????????????";
  } else if (to.fullPath == '/admin') {
    pageStore.pageNow = 4;
    document.title = "????????????";
  }
})

export default router;