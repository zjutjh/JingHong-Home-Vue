# Join-Us
The repository of Join Us page.

“加入我们”页面仓库。
## 使用后端代码进行测试
### 配置环境
1. `golang`环境
2. `mysql`环境：需要新建一个用户，给予其一定的权限，新建一个数据库。

### 修改配置
clone仓库后
`cd config`

并且
`cp config.example.yaml config.yaml`

修改`config.yaml`文件。
**注意**：**不**要修改`.gitignore`文件避免错误上传`config`文件造成重要信息泄漏。

### 启动服务
在根目录下执行：`go run main.go`
如果您正确配置了环境以及`config`，服务器将在指定的端口正常运行。
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