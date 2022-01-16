package router

import "zjutjh/Join-Us/controller"

func SetRouter() {
    // TODO: routers list here
    Router.POST("/newnormalform", controller.NewNormalFormPost) // 招新季招新表单
}
