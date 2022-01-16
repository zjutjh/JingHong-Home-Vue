package controller

import (
	"zjutjh/Join-Us/model"
    "github.com/gin-gonic/gin"
    "zjutjh/Join-Us/utility"
    "zjutjh/Join-Us/utility/initial"
)

type NewNormalFormData struct {
    Name string `json:"name"`
    StuID string `json:"stu_id"`
    Gender uint8 `json:"gender"`
    College uint8 `json:"college"`
    Campus uint8 `json:"campus"`
    Phone string `json:"phone"`
    QQ string `json:"qq"`
    Region uint8 `json:"region"`
    Want1 uint8 `json:"want1"`
    Want2 uint8 `json:"want2"`
    Profile string `json:"profile"`
    Feedback string `json:"feedback"`
}

func NewNormalFormPost(c *gin.Context) {
    var postData NewNormalFormData
    err := c.ShouldBindJSON(&postData)
    if err != nil {
        utility.ResponseError(c, "Post Data Error")
    }
    normalForm := model.NormalForm{
        Name: postData.Name,
        StuID: postData.StuID,
        Gender: postData.Gender,
        College: postData.College,
        Campus: postData.Campus,
        Phone: postData.Phone,
        QQ: postData.QQ,
        Region: postData.Region,
        Want1: postData.Want1,
        Want2: postData.Want2,
        Profile: postData.Profile,
        Feedback: postData.Feedback,
    }
    res := initial.DB.Create(&normalForm)
    if res.RowsAffected == 0 {
        utility.ResponseError(c, "Database Error")
    } else {
        utility.ResponseSuccess(c, nil)
    }
}

