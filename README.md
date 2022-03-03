# Join-Us
The repository of Join Us page.

“加入我们”页面仓库。

## API
### 数据对照表
#### gender
0 male
1 female
2 other
#### region
0 朝晖校区
1 屏峰校区
2 莫干山校区

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
method:'GET`
return:
是一个列表，内部结构同上述结构一致。