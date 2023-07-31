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
  {
    path: '/join/recruit',
    name: 'join/recruit',
    components: {
      default: () => import('../views/join/recruit.vue'),
      navbar: () => import('../components/NavBar.vue'),
    }
  },
  {
    path: '/admin',
    name: 'admin',
    components: {
      default: () => import('@/views/admin.vue'),
      navbar: () => import('@/components/NavBarAdmin.vue'),
    },
  },
  {
    path: '/admin/total',
    name: 'admin/total',
    components: {
      default: () => import('../views/admin/total.vue'),
      navbar: () => import('../components/NavBarAdmin.vue'),
    },
  },
  {
    path: '/admin/detail',
    name: 'admin/detail',
    components: {
      default: () => import('../views/admin/detail.vue'),
      navbar: () => import('../components/NavBarAdmin.vue'),
    }
  },
  {
    path: '/questionnaire',
    name: 'questionnaire',
    components: {
      default: () => import('../views/questionnaire.vue'),
      navbar: () => import('../components/NavBarQuestionnaire.vue'),
    }
  },
  {
    path: '/questionnaire/draft',
    name: 'questionnaire/draft',
    components: {
      default: () => import('../views/questionnaire/draft.vue'),
      navbar: () => import('../components/NavBarQuestionnaire.vue'),
    }
  },
  {
    path: '/questionnaire/create',
    name: 'questionnaire/create',
    components: {
      default: () => import('../views/questionnaire/create.vue'),
      navbar: () => import('../components/NavBarQuestionnaire.vue'),
    }
  },
  {
    path: '/questionnaire/data',
    name: 'questionnaire/data',
    components: {
        default: () => import('../views/questionnaire/data.vue'),
        navbar: () => import('../components/NavBarQuestionnaire.vue'),
    }
  },
  {
    path: '/questionnaire/detail',
    name: 'questionnaire/detail',
    components: {
      default: () => import('../views/questionnaire/detail.vue'),
      navbar: () => import('../components/NavBarQuestionnaire.vue'),
    }
  },
  {
    path: '/questionnaire/survey',
    name: 'questionnaire/survey',
    components: {
      default: () => import('../views/questionnaire/survey.vue'),
    }
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
    document.title = "精弘首页";
  }
  else if (to.fullPath == '/story') {
    pageStore.pageNow = 1;
    document.title = "我们的故事";
  } else if (to.fullPath == '/product') {
    pageStore.pageNow = 2;
    document.title = "我们的产品";
  } else if (to.fullPath.split('/')[1] == 'join') {
    pageStore.pageNow = 4;
    document.title = "加入我们";
  } else if (to.fullPath.split('/')[1] == 'department') {
    pageStore.pageNow = 3;
    document.title = "我们的部门";
  } else if (to.fullPath == '/admin') {
    pageStore.pageNow = 4;
    document.title = "管理页面";
  }
})

export default router;