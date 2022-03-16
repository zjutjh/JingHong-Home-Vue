package router

import (
	"zjutjh/Join-Us/controller"
	"zjutjh/Join-Us/utility/middleware"
)

func SetRouter() {
	// TODO: routers list here
	Router.POST("/api/new_normal", controller.NewNormalForm)   // 招新季招新表单
	Router.POST("/api/new_develop", controller.NewDevelopForm) //
	Router.GET("/api/get_forms/develop", middleware.IsAdmin, controller.GetAllDevelopForms)
	Router.GET("/api/get_forms/normal", middleware.IsAdmin, controller.GetAllNormalForms)
}
