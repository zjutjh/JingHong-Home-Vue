import { defineConfig } from 'vite'
import path from 'path';
import vue from '@vitejs/plugin-vue'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, "src"),
    }
  },
     server: {
        proxy: {
            '/api': { // 代理前缀
                target: 'http://localhost:3000', // 代理目标地址
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, '') // 将 /api 重写为空
        }
     }
}
}
)
