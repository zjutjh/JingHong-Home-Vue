import { createApp } from 'vue'
import router from './router/index'
import App from './App.vue'
import store from './stores/store';
const app = createApp(App);
app.use(store);
app.use(router);
app.mount('#app');
