# 精弘首页前端仓库

本项目使用：
- Vue.js 3 前端框架
  - TypeScript
  - Vite 构建工具
  - Vue-router 路由管理
  - Pinia 全局状态管理
  - Vue-Echarts 数据可视化
  - Sass

## 前端代码

- `src` 源代码目录
    - `apis` 和后端的API， 封装了axios
    - `App.vue` 根组件
    - `assets` 静态文件目录
    - `components` 组件
    - `router` 路由管理
    - `stores` 状态管理
    - `types` 类型管理
    - `utils` 工具/其他东西
    - `views` 页面
- `dist` 构建目录

## 前端部署：
1. 安装依赖
```
pnpm install
```
2. 修改配置：`/join-us-vue/src/utils/const.ts`中`ENV`为`pro`进入生产模式。

3. 项目打包
```
pnpm run build
```
4. 上传`/dist`目录到服务器

5. 配置静态资源服务器（以nginx为例）

```
	server {
		listen 8080;                                        #监听端口
		server_name jh-home;                                # 服务名称，可任选
		location / {                                          
			alias /www/jhhome/;
			index index.html;
			try_files $uri $uri/ /index.html;               # 神奇的一行
		}
	}
```
5. 注意检查您配置的监听端口是否开放。



