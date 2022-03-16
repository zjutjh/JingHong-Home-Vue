package controller

import (
	"zjutjh/Join-Us/model"
	"zjutjh/Join-Us/utility"
	"zjutjh/Join-Us/utility/initial"

	"github.com/gin-gonic/gin"
)

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
	raw_data := model.DeveloperForm{}
	raw_data.StuID = data.StuID
	initial.DB.Where("stu_id = ?", data.StuID).First(&raw_data)
	if (raw_data == model.DeveloperForm{}) {
		initial.DB.Save(&data)
	} else {
		aff := initial.DB.Create(&data)

		if aff.RowsAffected == 0 {
			utility.ResponseError(c, "Had been Posted")
		} else {
			utility.SendEmail(initial.Config.Email.Receiver)
			utility.ResponseSuccess(c, nil)
		}
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
