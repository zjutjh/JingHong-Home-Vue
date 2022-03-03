import { createApp } from 'vue'
import App from './App.vue'
import router from './routes/index'
import {createPinia} from 'pinia'
createApp(App).
use(router).
use(createPinia()).
mount('#app')