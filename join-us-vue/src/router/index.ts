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
  // 404 
  { path: '/:pathMatch(.*)*', name: '404', redirect: '/index', }
]

const router = createRouter(
  {
    history: createWebHistory(),
    routes,
  },
)

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