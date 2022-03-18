import { createApp } from 'vue'
import router from './router/index'
import App from './App.vue'
import store from './stores/store';

// createApp(App)
//   .use(createPinia())
//   .use(router)
//   .mount('#app')

const app = createApp(App);
app.use(store);
app.use(router);
router.isReady().then(() => {
  app.mount('#app');
})
