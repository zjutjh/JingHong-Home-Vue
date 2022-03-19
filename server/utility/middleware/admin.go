package middleware

import (
	"zjutjh/Join-Us/utility"
	"zjutjh/Join-Us/utility/initial"
	"github.com/gin-gonic/gin"
)

func IsAdmin(c *gin.Context) {
	Secret := c.GetHeader("Authorization")
	if Secret == initial.Config.Secret {
		c.Next()
	} else {
		utility.ResponseError(c, "You are not admin")
		c.Abort()
	}
}
