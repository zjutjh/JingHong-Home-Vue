package utility

import "github.com/gin-gonic/gin"

func responseData(c *gin.Context, statusCode int, msg string, data gin.H) {
    c.JSON(statusCode, gin.H{
        "code" : statusCode,
        "msg" : msg,
        "data" : data,
    })
}

func ResponseSuccess(c *gin.Context, data gin.H){
    responseData(c, 200, "ok", data)
}

func ResponseError(c *gin.Context, error string){
    responseData(c, -1, error, nil)
}

