package main

import (
	"zjutjh/Join-Us/router"
	"zjutjh/Join-Us/utility"
)

func main() {
    utility.ConfigInit() // 配置文件初始化
    utility.DatabaseInit() // 数据库初始化
    router.Init() // 路由初始化
    utility.RunServer() // 运行服务器
}
