package router

import (
    "github.com/gin-contrib/cors"
    "github.com/gin-gonic/gin"
)
var Router *gin.Engine

func Init() {
    Router = gin.Default()
    corsConfig := cors.DefaultConfig()
    // corsConfig.AllowHeaders = append(corsConfig.AllowHeaders)
    corsConfig.AllowAllOrigins = true
    Router.Use(cors.New(corsConfig))
    SetRouter()
}
