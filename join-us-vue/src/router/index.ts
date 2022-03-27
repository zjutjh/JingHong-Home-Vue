import { createRouter, createWebHistory, createWebHashHistory } from "vue-router";
import NavBarPC from "../components/pc/NavBar.vue"
import NavBarMob from "../components/mobile/NavBar.vue"
import { usePageStore } from "../stores/pages";
import store from "../stores/store";
import { isMobile } from "../utils/device";

const pageStore = usePageStore(store);
// NavBarPC.displayName = 'NavbarPc';
// NavBarMob.displayName = 'NavBarMob';

const routes = [
  {
    path: '/index',
    name: 'index',
    components: {
      default: () => import('../views/pc/index.vue'),
      navbar: () => import('../components/pc/NavBar.vue'),
    }
  },
  {
    path: '/story',
    name: 'story',
    components: {
      default: () => import('../views/pc/story.vue'),
      navbar: () => import('../components/pc/NavBar.vue'),
    }
  },
  {
    path: '/product',
    name: 'product',
    components: {
      default: () => import('../views/pc/product.vue'),
      navbar: () => import('../components/pc/NavBar.vue'),
    }
  },
  {
    path: '/department',
    name: 'department',
    components: {
      default: () => import('../views/pc/department.vue'),
      navbar: () => import('../components/pc/NavBar.vue'),
    },
  },
  {
    path: '/department/changwu',
    name: 'changwu',
    components: {
      default: () => import('../views/pc/departments/changwu.vue'),
      navbar: () => import('../components/pc/NavBar.vue'),
    },
  },
  {
    path: '/department/jishu',
    name: 'jishu',
    components: {
      default: () => import('../views/pc/departments/jishu.vue'),
      navbar: () => import('../components/pc/NavBar.vue'),
    },
  },
  {
    path: '/department/yunying',
    name: 'yunying',
    components: {
      default: () => import('../views/pc/departments/yunying.vue'),
      navbar: () => import('../components/pc/NavBar.vue'),
    },
  },
  {
    path: '/department/sheji',
    name: 'sheji',
    components: {
      default: () => import('../views/pc/departments/sheji.vue'),
      navbar: () => import('../components/pc/NavBar.vue'),
    },
  },
  {
    path: '/department/xinmeiti',
    name: 'xinmeiti',
    components: {
      default: () => import('../views/pc/departments/xinmeiti.vue'),
      navbar: () => import('../components/pc/NavBar.vue'),
    },
  },
  {
    path: '/department/yiban',
    name: 'yiban',
    components: {
      default: () => import('../views/pc/departments/yiban.vue'),
      navbar: () => import('../components/pc/NavBar.vue'),
    },
  },
  {
    path: '/join',
    name: 'join',
    components: {
      default: () => import('../views/pc/join.vue'),
      navbar: () => import('../components/pc/NavBar.vue'),
    }
  },
  {
    path: '/recruit',
    name: 'recruit',
    components: {
      default: () => import('../views/pc/join/recruit.vue'),
      navbar: () => import('../components/pc/NavBar.vue'),
    }
  },
  {
    path: '/recruit_long',
    name: 'recruit_long',
    components: {
      default: () => import('../views/pc/join/recruitLong.vue'),
      navbar: () => import('../components/pc/NavBar.vue'),
    }
  },
  {
    path: '/recruit_develop',
    name: 'recruit_develop',
    components: {
      default: () => import('../views/pc/join/recruitDevelop.vue'),
      navbar: () => import('../components/pc/NavBar.vue'),
    }
  },

  {
    path: '/admin',
    name: 'admin',
    components: {
      default: () => import('../views/pc/admin.vue'),
      navbar: () => import('../components/pc/NavBar.vue'),
    }
  },



  // 移动端
  { path: '/m', redirect: '/m/index' },

  {
    path: '/m/index',
    name: 'm_index',
    components: {
      default: () => import('../views/mobile/index.vue'),
      navbar: () => import('../components/mobile/NavBar.vue'),
    },
  },
  {
    path: '/m/join',
    name: 'm_join',
    components: {
      default: () => import('../views/mobile/join.vue'),
      navbar: () => import('../components/mobile/NavBar.vue'),
    },
  },

  {
    path: '/m/story',
    name: 'm_story',
    components: {
      default: () => import('../views/mobile/story.vue'),
      navbar: () => import('../components/mobile/NavBar.vue'),
    }
  },
  {
    path: '/m/product',
    name: 'm_product',
    components: {
      default: () => import('../views/mobile/product.vue'),
      navbar: () => import('../components/mobile/NavBar.vue'),
    }
  },
  {
    path: '/m/department',
    name: 'm_department',
    components: {
      default: () => import('../views/mobile/department.vue'),
      navbar: () => import('../components/mobile/NavBar.vue'),
    }
  },
  {
    path: '/m/department/changwu',
    name: 'm_changwu',
    components: {
      default: () => import('../views/mobile/departments/changwu.vue'),
      navbar: () => import('../components/mobile/NavBar.vue'),
    }
  },
  {
    path: '/m/department/jishu',
    name: 'm_jishu',
    components: {
      default: () => import('../views/mobile/departments/jishu.vue'),
      navbar: () => import('../components/mobile/NavBar.vue'),
    }
  },
  {
    path: '/m/department/sheji',
    name: 'm_sheji',
    components: {
      default: () => import('../views/mobile/departments/sheji.vue'),
      navbar: () => import('../components/mobile/NavBar.vue'),
    }
  },
  {
    path: '/m/department/xinmeiti',
    name: 'm_xinmeiti',
    components: {
      default: () => import('../views/mobile/departments/xinmeiti.vue'),
      navbar: () => import('../components/mobile/NavBar.vue'),
    }
  },
  {
    path: '/m/department/yiban',
    name: 'm_yiban',
    components: {
      default: () => import('../views/mobile/departments/yiban.vue'),
      navbar: () => import('../components/mobile/NavBar.vue'),
    }
  },
  {
    path: '/m/department/yunying',
    name: 'm_yunying',
    components: {
      default: () => import('../views/mobile/departments/yunying.vue'),
      navbar: () => import('../components/mobile/NavBar.vue'),
    }
  },
  {
    path: '/m/recruit',
    name: 'm_recruit',
    components: {
      default: () => import('../views/mobile/join/recruit.vue'),
      navbar: () => import('../components/mobile/NavBar.vue'),
    },
  },
  {
    path: '/m/recruit_long',
    name: 'm_recruite_long',
    components: {
      default: () => import('../views/mobile/join/recruitLong.vue'),
      navbar: () => import('../components/mobile/NavBar.vue'),
    },
  },
  {
    path: '/m/recruit_develop',
    name: 'm_recruit_develop',
    components: {
      default: () => import('../views/mobile/join/recruitDevelop.vue'),
      navbar: () => import('../components/mobile/NavBar.vue'),
    },
  },
  {
    path: '/m/admin',
    name: 'm_admin',
    components: {
      default: () => import('../views/mobile/admin.vue'),
      navbar: () => import('../components/mobile/NavBar.vue'),
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
  window.scrollTo(0, 0);
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
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