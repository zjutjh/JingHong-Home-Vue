package main

import (
	"zjutjh/Join-Us/router"
	"zjutjh/Join-Us/utility/initial"
)

func main() {
	initial.ConfigInit()             // 配置文件初始化
	initial.DatabaseInit()           // 数据库初始化
	router.Init()                    // 路由初始化
	initial.RunServer(router.Router) // 运行服务器
}
