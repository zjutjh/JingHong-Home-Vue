package controller

import "github.com/gin-gonic/gin"
type NewFormData struct {
    Name string `json:"name"`
    StuID string `json:"stu_id"`
    Gender uint8 `json:"gender"`
    Campus uint8 `json:"campus"`
    Phone string `json:"phone"`
    QQ string `json:"qq"`
    Region string `json:"region"`
    Want1 string `json:"want1"`
    Want2 string `json:"want2"`
    Profile string `json:"profile"`
    Feedback string `json:"feedback"`
}
func NewFormPost(c *gin.Context) {
    var postData NewFormData
    err := c.ShouldBindJSON(&postData)
    if err != nil {
        // TODO: response error
    }
}
