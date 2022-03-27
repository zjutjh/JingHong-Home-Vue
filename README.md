# 精弘首页

本项目使用：
- Golang
  - Gin 框架
  - Gorm 框架
  - Viper 配置载入框架
- Vue.js 3 前端框架
  - TypeScript
  - Vite 构建工具
  - Vue-router 路由管理
  - Pinia 全局状态管理
  - Vue-Echarts 数据可视化

# 项目目录：
本项目目录介绍
```
.
├── join-us-vue                                   # Vite 构建的Vue前端项目文件
│   ├── dist                                      # Vite 打包输出目录（ignored）
│   ├── index.html                                # 项目入口html文件
│   ├── node_modules                              # Node.js 依赖文件（ignored）
│   ├── package.json                              # 依赖
│   ├── package-lock.json                         #
│   ├── public                                    # 公共资源目录
│   │   ├── favicon.png                           # 图标
│   │   ├── font                                  # 字体
│   │   └── photo                                 # 照片
│   ├── src                                       # 源码
│   │   ├── apis                                  # 实现后端接口
│   │   │   ├── admin.ts                  
│   │   │   └── forms.ts
│   │   ├── App.vue                               # 入口vue文件
│   │   ├── assets                                # assets（没用）
│   │   │   └── logo.png            
│   │   ├── components                            # 可复用组件
│   │   │   ├── mobile                            # 移动端专用组
│   │   │   └── pc                                # 电脑端组件（部分组件通用）
│   │   ├── env.d.ts                              # Vue 自动生成 类型声明
│   │   ├── main.ts                               # 入口 Ts 文件
│   │   ├── router                                # 路由管理
│   │   ├── stores                                # 全局状态管理
│   │   ├── types                                 # 类型声明文件
│   │   ├── utils                                 # 工具
│   │   │   ├── const.ts                          # 常用常量
│   │   │   ├── device.ts                         # 设备检查
│   │   │   ├── request.ts                        # axios封装
│   │   │   └── valid.ts                          # 表单验证
│   │   └── views                                 # 页面
│   │       ├── mobile                            # 移动端页面
│   │       └── pc                                # PC端页面
│   ├── tsconfig.json
│   ├── tsconfig.node.json
│   └── vite.config.ts
├── LICENSE                                       # 证书
├── README.md                                     # 本文件
├── server                                        # 后端目录
│   ├── config                                    # 服务器配置
│   ├── controller                                # Controllers
│   ├── main                                      # 编译后的二进制文件
│   ├── main.go                                   # main 文件
│   ├── model                                     # Models
│   │   └── forms.go
│   ├── router                                    # 路由
│   │   ├── init.go
│   │   └── router.go
│   └── utility                                   # 工具
│       ├── email.go                              # 发送邮件工具
│       ├── initial                               # 初始化服务器
│       │   ├── config.go
│       │   ├── database.go
│       │   └── server.go
│       ├── middleware                            # 中间件
│       │   └── admin.go
│       └── response.go                           # 响应
└── tools                                         # 项目工具
    └── test_data_generator.py                    # 并发写入数据脚本
```

# 部署说明

## 后端部署：
**下述命令为经过ubuntu16.10配置测试**
1. 配置好Mysql环境（版本不应低于8.0），注册一个mysql用户，创建一个数据表。


2. **建议**在服务器编译。
   1. 配置Golang环境
   2. 墙内服务器建议配置goproxy: `export GOPROXY=https://proxy.golang.com.cn,direct`
   3. clone 本项目源码
   4. `cd server`
   5. `go mod tidy && go get`
   6. `go build main`

3. 修改配置
   *二进制文件同目录下应有../config/目录以存放配置文件*
   ```bash
   cd config
   cp config.example.yaml config.yaml
   vim config.yaml
   ```

4. 运行服务
    ```bash
    sudo chmod +x ./main
    screen -S jhhome
    nohup ./main &
    ```
    （使用screen管理会话）
5. 注意检查您配置的监听端口是否开放。

## 前端部署：
1. 安装依赖
```
npm install
```
2. 修改配置：`/join-us-vue/src/utils/const.ts`中`ENV`为`pro`进入生产模式。

3. 项目打包
```
npm run build
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

### 修改配置
clone仓库后
`cd config`

并且
`cp config.example.yaml config.yaml`

修改`config.yaml`文件。
**注意**：**不**要修改`.gitignore`文件避免错误上传`config`文件造成重要信息泄漏。

## API
### 数据对照表
#### gender
0 male

1 female

2 other

### 1. 招新季招新表
提交一个新的申请表。

url: `/api/new_normal`

method:`POST`

data:
- name : string
- stu_id: string
- gender: int
- college: string # 学院
- campus: string  # 专业
- phone: string
- qq: string
- region : string  # 校区
- want1: string
- want2: string
- profile: string
- feedback: string


### 2. 开发部长期招新表
url:`/api/new_develop`

method:`POST`

data:
- name : string 
- stu_id: string
- gender: int
- college: string
- campus: string
- phone: string
- qq: string
- region : string
- profile: string
- feedback: string
- ability_other: string     # 其他能力
- ability: {
    - api : bool            # 写api
    - front_end: bool       # 前端框架 
    - document: bool        # 写文档
    - git : bool            # 用git
    }

### 3. 后台操作: 获取所有报名表
在Header的Authorization中传规定的密钥。

url:`/api/get_forms/[?]`

? == normal 获取招新季报名表

? == develop 获取技术部报名表

method:`GET`

return:

是一个列表，内部结构同上述结构一致。
