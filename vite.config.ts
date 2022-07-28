import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // server: {
  //   cors: true,
  //   proxy: {
  //     '/acm_api': {
  //       target: 'http://zhangjinhong.top:8081',
  //       changeOrigin: true,
  //       rewrite: (path) => path.replace(/^\/acm_api/, '')
  //     }
  //   }
  // }
})
