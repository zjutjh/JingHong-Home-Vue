package controller

import (
	"zjutjh/Join-Us/model"
	"zjutjh/Join-Us/utility"
	"zjutjh/Join-Us/utility/initial"

	"github.com/gin-gonic/gin"
)

// tmd 这真的是我写的代码？
// type NewNormalFormData struct {
// 	Name     string `json:"name"`
// 	StuID    string `json:"stu_id"`
// 	Gender   uint8  `json:"gender"`
// 	College  uint8  `json:"college"`
// 	Campus   uint8  `json:"campus"`
// 	Phone    string `json:"phone"`
// 	QQ       string `json:"qq"`
// 	Region   uint8  `json:"region"`
// 	Want1    uint8  `json:"want1"`
// 	Want2    uint8  `json:"want2"`
// 	Profile  string `json:"profile"`
// 	Feedback string `json:"feedback"`
// }

func NewNormalForm(c *gin.Context) {
	postData := model.NormalForm{}
	err := c.ShouldBindJSON(&postData)
	if err != nil {
		utility.ResponseError(c, "Post Data Error")
	}
	normalForm := model.NormalForm{
		Name:     postData.Name,
		StuID:    postData.StuID,
		Gender:   postData.Gender,
		College:  postData.College,
		Campus:   postData.Campus,
		Phone:    postData.Phone,
		QQ:       postData.QQ,
		Region:   postData.Region,
		Want1:    postData.Want1,
		Want2:    postData.Want2,
		Profile:  postData.Profile,
		Feedback: postData.Feedback,
	}
	res := initial.DB.Create(&normalForm)
	if res.RowsAffected == 0 {
		utility.ResponseError(c, "Database Error")
	} else {
		utility.ResponseSuccess(c, nil)
	}
}

type ability struct {
	Api      bool `json:"api"`
	FrontEnd bool `json:"front_end"`
	Document bool `json:"document"`
	Git      bool `json:"git"`
}
type DeveloperFormApi struct {
	model.DeveloperForm
	Ability ability `json:"ability"`
}

func NewDevelopForm(c *gin.Context) {
	// data := DeveloperFormApi{}
	data := model.DeveloperForm{}
	err := c.ShouldBindJSON(&data)
	// fmt.Println(data)
	if err != nil {
		utility.ResponseError(c, "Json error")
		// fmt.Println(err)
	}
	aff := initial.DB.Create(&data)
	if aff.RowsAffected == 0 {
		utility.ResponseError(c, "Had been Posted")
	} else {
		utility.ResponseSuccess(c, nil)
	}
}

func GetAllNormalForms(c *gin.Context) {
	forms := []model.NormalForm{}
	initial.DB.Find(&forms)
	utility.ResponseSuccess(c, gin.H{
		"forms": forms,
	})
}

func GetAllDevelopForms(c *gin.Context) {
	// res := []DeveloperFormApi{}
	dev := []model.DeveloperForm{}
	// abi := []model.Ability{}
	initial.DB.Preload("Ability").Find(&dev)
	// initial.DB.Find(&abi)
	utility.ResponseSuccess(c, gin.H{
		"forms": dev,
	})
}
