import { createRouter, createWebHistory, RouteLocationNormalized, RouteRecordRaw } from "vue-router";
import NavBarPC from "../components/pc/NavBar.vue"
import NavBarMob from "../components/mobile/NavBar.vue"
import { usePageStore } from "../stores/pages";
import store from "../stores/store";
import { isMobile } from "../utils/device";
const pageStore = usePageStore(store);
const paths = [
  '/index',
  '/join',
  '/m/index',
]
const routes = [
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
  {
    path: '/product',
    components: {
      default: () => import('../views/pc/product.vue'),
      navbar: () => NavBarPC,
    }
  },
  {
    path: '/department',
    components: {
      default: () => import('../views/pc/department.vue'),
      navbar: () => NavBarPC,
    },
  },
  {
    path: '/department/changwu',
    components: {
      default: () => import('../views/pc/departments/changwu.vue'),
      navbar: () => NavBarPC,
    },
  },
  {
    path: '/department/jishu',
    components: {
      default: () => import('../views/pc/departments/jishu.vue'),
      navbar: () => NavBarPC,
    },
  },
  {
    path: '/department/yunying',
    components: {
      default: () => import('../views/pc/departments/yunying.vue'),
      navbar: () => NavBarPC,
    },
  },
  {
    path: '/department/sheji',
    components: {
      default: () => import('../views/pc/departments/sheji.vue'),
      navbar: () => NavBarPC,
    },
  },
  {
    path: '/department/xinmeiti',
    components: {
      default: () => import('../views/pc/departments/xinmeiti.vue'),
      navbar: () => NavBarPC,
    },
  },
  {
    path: '/department/yiban',
    components: {
      default: () => import('../views/pc/departments/yiban.vue'),
      navbar: () => NavBarPC,
    },
  },
  {
    path: '/join',
    components: {
      default: () => import('../views/pc/join.vue'),
      navbar: () => NavBarPC,
    }
  },
  {
    path: '/recruit',
    components: {
      default: () => import('../views/pc/join/recruit.vue'),
      navbar: () => NavBarPC,
    }
  },
  {
    path: '/recruit_long',
    components: {
      default: () => import('../views/pc/join/recruitLong.vue'),
      navbar: () => NavBarPC,
    }
  },
  {
    path: '/recruit_develop',
    components: {
      default: () => import('../views/pc/join/recruitDevelop.vue'),
      navbar: () => NavBarPC,
    }
  },




  // 移动端
  { path: '/m', redirect: '/m/index' },

  {
    path: '/m/index',
    components: {
      default: () => import('../views/mobile/index.vue'),
      navbar: () => NavBarMob,
    },
  },
  {
    path: '/m/join',
    components: {
      default: () => import('../views/mobile/join.vue'),
      navbar: () => NavBarMob,
    },
  },

  {
    path: '/m/story',
    components: {
      default: () => import('../views/mobile/story.vue'),
      navbar: () => NavBarMob,
    }
  },
  {
    path: '/m/product',
    components: {
      default: () => import('../views/mobile/product.vue'),
      navbar: () => NavBarMob,
    }
  },
  {
    path: '/m/department',
    components: {
      default: () => import('../views/mobile/department.vue'),
      navbar: () => NavBarMob,
    }
  },
  {
    path: '/m/department/changwu',
    components: {
      default: () => import('../views/mobile/departments/changwu.vue'),
      navbar: () => NavBarMob,
    }
  },
  {
    path: '/m/department/jishu',
    components: {
      default: () => import('../views/mobile/departments/jishu.vue'),
      navbar: () => NavBarMob,
    }
  },
  {
    path: '/m/department/sheji',
    components: {
      default: () => import('../views/mobile/departments/sheji.vue'),
      navbar: () => NavBarMob,
    }
  },
  {
    path: '/m/department/xinmeiti',
    components: {
      default: () => import('../views/mobile/departments/xinmeiti.vue'),
      navbar: () => NavBarMob,
    }
  },
  {
    path: '/m/department/yiban',
    components: {
      default: () => import('../views/mobile/departments/yiban.vue'),
      navbar: () => NavBarMob,
    }
  },
  {
    path: '/m/department/yunying',
    components: {
      default: () => import('../views/mobile/departments/yunying.vue'),
      navbar: () => NavBarMob,
    }
  },
  {
    path: '/m/recruit',
    components: {
      default: () => import('../views/mobile/join/recruit.vue'),
      navbar: () => NavBarMob,
    },
  },
  {
    path: '/m/recruit_long',
    components: {
      default: () => import('../views/mobile/join/recruitLong.vue'),
      navbar: () => NavBarMob,
    },
  },
  {
    path: '/m/recruit_develop',
    components: {
      default: () => import('../views/mobile/join/recruitDevelop.vue'),
      navbar: () => NavBarMob,
    },
  },
  // 404 
  { path: '/:pathMatch(.*)*', name: '404', redirect: '/index', }
]

const router = createRouter(
  {
    history: createWebHistory(),
    routes,
  },
);

// 全局导航守卫
router.beforeEach((to, from, next) => {

  if (isMobile()) {
    pageStore.isMobile = true;
  } else {
    pageStore.isMobile = false;
  }

  if (to.path == '/') {
    if (pageStore.isMobile) {
      next("/m/index");
    } else {
      next("/index")
    }
  } else {
    if (pageStore.isMobile) {
      if (to.path.split('/')[1] != 'm') {
        next("/m" + to.path);
      } else {
        next();
      }
    } else {
      if (to.path.split('/')[1] == 'm') {
        next("/" + to.path[2]);
      } else {
        next();
      }
    }
  }
});


export default router;