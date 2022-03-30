package controller

import (
	"fmt"
	"time"
	"zjutjh/Join-Us/model"
	"zjutjh/Join-Us/utility"
	"zjutjh/Join-Us/utility/initial"

	"github.com/gin-gonic/gin"
)

func NewNormalForm(c *gin.Context) {
	postData := model.NormalForm{}
	err := c.ShouldBindJSON(&postData)
	fmt.Println(postData)
	if err != nil {
		fmt.Println(err)
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
	res := initial.DB.Save(&normalForm)
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

type departmentsData struct {
	Total    int `json:"total"`
	Today    int `json:"today"`
	Want1    int `json:"want1"`
	Want2    int `json:"want2"`
	Want1Zh  int `json:"want1_zh"`
	Want2Zh  int `json:"want2_zh"`
	Want1Pf  int `json:"want1_pf"`
	Want2Pf  int `json:"want2_pf"`
	Want1Mgs int `json:"want1_mgs"`
	Want2Mgs int `json:"want2_mgs"`
}
type FormsDataTotal struct {
	Total      int             `json:"total"`
	TotalToday int             `json:"total_today"`
	TotalZH    int             `json:"total_zh"`
	TotalPF    int             `json:"total_pf"`
	TotalMGS   int             `json:"total_mgs"`
	Bgs        departmentsData `json:"bgs"`
	Hdb        departmentsData `json:"hdb"`
	Msc        departmentsData `json:"msc"`
	Touch      departmentsData `json:"touch"`
	Xh         departmentsData `json:"xh"`
	Bj         departmentsData `json:"bj"`
	Sj         departmentsData `json:"sj"`
	Kfb        departmentsData `json:"kfb"`
	Yb         departmentsData `json:"yb"`
}

func GetFormsTotal(c *gin.Context) {

	// nm 我这辈子没写过这么丑陋的代码
	// I never typed this ugly code...

	forms := []model.NormalForm{}
	initial.DB.Find(&forms)
	f := FormsDataTotal{}
	f.Total = len(forms)
	// fmt.Println(forms)
	today := time.Date(time.Now().Year(), time.Now().Month(), time.Now().Day(), 0, 0, 0, 0, time.Local)

	for i := 0; i < len(forms); i++ {
		var isToday bool = false
		if forms[i].UpdatedAt.Unix() >= today.Unix() {
			f.TotalToday += 1
			isToday = true
		}

		switch forms[i].Want1 {
		case "办公室":
			f.Bgs.Total += 1
			if isToday {
				f.Bgs.Today += 1
			}
			f.Bgs.Want1 += 1
			if forms[i].Region == "朝晖" {
				f.Bgs.Want1Zh += 1
			} else if forms[i].Region == "屏峰" {
				f.Bgs.Want1Pf += 1
			} else if forms[i].Region == "莫干山" {
				f.Bgs.Want1Mgs += 1
			}
			break
		case "活动部":
			f.Hdb.Total += 1
			if isToday {
				f.Hdb.Today += 1
			}
			f.Hdb.Want1 += 1
			if forms[i].Region == "朝晖" {
				f.Hdb.Want1Zh += 1
			} else if forms[i].Region == "屏峰" {
				f.Hdb.Want1Pf += 1
			} else if forms[i].Region == "莫干山" {
				f.Hdb.Want1Mgs += 1
			}
			break
		case "秘书处":
			f.Msc.Total += 1
			if isToday {
				f.Msc.Today += 1
			}
			f.Msc.Want1 += 1
			if forms[i].Region == "朝晖" {
				f.Msc.Want1Zh += 1
			} else if forms[i].Region == "屏峰" {
				f.Msc.Want1Pf += 1
			} else if forms[i].Region == "莫干山" {
				f.Msc.Want1Mgs += 1
			}
			break
		case "Touch产品部":
			f.Touch.Total += 1
			if isToday {
				f.Touch.Today += 1
			}
			f.Touch.Want1 += 1
			if forms[i].Region == "朝晖" {
				f.Touch.Want1Zh += 1
			} else if forms[i].Region == "屏峰" {
				f.Touch.Want1Pf += 1
			} else if forms[i].Region == "莫干山" {
				f.Touch.Want1Mgs += 1
			}
			break
		case "小弘工作室":
			f.Xh.Total += 1
			if isToday {
				f.Xh.Today += 1
			}
			f.Xh.Want1 += 1
			if forms[i].Region == "朝晖" {
				f.Xh.Want1Zh += 1
			} else if forms[i].Region == "屏峰" {
				f.Xh.Want1Pf += 1
			} else if forms[i].Region == "莫干山" {
				f.Xh.Want1Mgs += 1
			}
			break
		case "编辑工作室":
			f.Bj.Total += 1
			if isToday {
				f.Bj.Today += 1
			}
			f.Bj.Want1 += 1
			if forms[i].Region == "朝晖" {
				f.Bj.Want1Zh += 1
			} else if forms[i].Region == "屏峰" {
				f.Bj.Want1Pf += 1
			} else if forms[i].Region == "莫干山" {
				f.Bj.Want1Mgs += 1
			}
			break
		case "视觉影像部":
			f.Sj.Total += 1
			if isToday {
				f.Sj.Today += 1
			}
			f.Sj.Want1 += 1
			if forms[i].Region == "朝晖" {
				f.Sj.Want1Zh += 1
			} else if forms[i].Region == "屏峰" {
				f.Sj.Want1Pf += 1
			} else if forms[i].Region == "莫干山" {
				f.Sj.Want1Mgs += 1
			}
			break
		case "开发部":
			f.Kfb.Total += 1
			if isToday {
				f.Kfb.Today += 1
			}
			f.Kfb.Want1 += 1
			if forms[i].Region == "朝晖" {
				f.Kfb.Want1Zh += 1
			} else if forms[i].Region == "屏峰" {
				f.Kfb.Want1Pf += 1
			} else if forms[i].Region == "莫干山" {
				f.Kfb.Want1Mgs += 1
			}
			break
		case "易班文化工作站":
			f.Yb.Total += 1
			if isToday {
				f.Yb.Today += 1
			}
			f.Yb.Want1 += 1
			if forms[i].Region == "朝晖" {
				f.Yb.Want1Zh += 1
			} else if forms[i].Region == "屏峰" {
				f.Yb.Want1Pf += 1
			} else if forms[i].Region == "莫干山" {
				f.Yb.Want1Mgs += 1
			}
			break
		}

		switch forms[i].Want2 {
		case "办公室":
			f.Bgs.Total += 1
			if isToday {
				f.Bgs.Today += 1
			}
			f.Bgs.Want2 += 1
			if forms[i].Region == "朝晖" {
				f.Bgs.Want2Zh += 1
			} else if forms[i].Region == "屏峰" {
				f.Bgs.Want2Pf += 1
			} else if forms[i].Region == "莫干山" {
				f.Bgs.Want2Mgs += 1
			}
			break
		case "活动部":
			f.Hdb.Total += 1
			if isToday {
				f.Hdb.Today += 1
			}
			f.Hdb.Want2 += 1
			if forms[i].Region == "朝晖" {
				f.Hdb.Want2Zh += 1
			} else if forms[i].Region == "屏峰" {
				f.Hdb.Want2Pf += 1
			} else if forms[i].Region == "莫干山" {
				f.Hdb.Want2Mgs += 1
			}
			break
		case "秘书处":
			f.Msc.Total += 1
			if isToday {
				f.Msc.Today += 1
			}
			f.Msc.Want2 += 1
			if forms[i].Region == "朝晖" {
				f.Msc.Want2Zh += 1
			} else if forms[i].Region == "屏峰" {
				f.Msc.Want2Pf += 1
			} else if forms[i].Region == "莫干山" {
				f.Msc.Want2Mgs += 1
			}
			break
		case "Touch产品部":
			f.Touch.Total += 1
			if isToday {
				f.Touch.Today += 1
			}
			f.Touch.Want2 += 1
			if forms[i].Region == "朝晖" {
				f.Touch.Want2Zh += 1
			} else if forms[i].Region == "屏峰" {
				f.Touch.Want2Pf += 1
			} else if forms[i].Region == "莫干山" {
				f.Touch.Want2Mgs += 1
			}
			break
		case "小弘工作室":
			f.Xh.Total += 1
			if isToday {
				f.Xh.Today += 1
			}
			f.Xh.Want2 += 1
			if forms[i].Region == "朝晖" {
				f.Xh.Want2Zh += 1
			} else if forms[i].Region == "屏峰" {
				f.Xh.Want2Pf += 1
			} else if forms[i].Region == "莫干山" {
				f.Xh.Want2Mgs += 1
			}
			break
		case "编辑工作室":
			f.Bj.Total += 1
			if isToday {
				f.Bj.Today += 1
			}
			f.Bj.Want2 += 1
			if forms[i].Region == "朝晖" {
				f.Bj.Want2Zh += 1
			} else if forms[i].Region == "屏峰" {
				f.Bj.Want2Pf += 1
			} else if forms[i].Region == "莫干山" {
				f.Bj.Want2Mgs += 1
			}
			break
		case "视觉影像部":
			f.Sj.Total += 1
			if isToday {
				f.Sj.Today += 1
			}
			f.Sj.Want2 += 1
			if forms[i].Region == "朝晖" {
				f.Sj.Want2Zh += 1
			} else if forms[i].Region == "屏峰" {
				f.Sj.Want2Pf += 1
			} else if forms[i].Region == "莫干山" {
				f.Sj.Want2Mgs += 1
			}
			break
		case "开发部":
			f.Kfb.Total += 1
			if isToday {
				f.Kfb.Today += 1
			}
			f.Kfb.Want2 += 1
			if forms[i].Region == "朝晖" {
				f.Kfb.Want2Zh += 1
			} else if forms[i].Region == "屏峰" {
				f.Kfb.Want2Pf += 1
			} else if forms[i].Region == "莫干山" {
				f.Kfb.Want2Mgs += 1
			}
			break

		case "易班文化工作站":
			f.Yb.Total += 1
			if isToday {
				f.Yb.Today += 1
			}
			f.Yb.Want2 += 1
			if forms[i].Region == "朝晖" {
				f.Yb.Want2Zh += 1
			} else if forms[i].Region == "屏峰" {
				f.Yb.Want2Pf += 1
			} else if forms[i].Region == "莫干山" {
				f.Yb.Want2Mgs += 1
			}
			break
		}
	}

	f.Total = f.Bgs.Total + f.Hdb.Total + f.Msc.Total + f.Touch.Total + f.Xh.Total + f.Bj.Total + f.Sj.Total + f.Kfb.Total + f.Yb.Total
	f.TotalToday = f.Bgs.Today + f.Hdb.Today + f.Msc.Today + f.Touch.Today + f.Xh.Today + f.Bj.Today + f.Sj.Today + f.Kfb.Today + f.Yb.Today

	f.TotalZH = f.Bgs.Want1Zh + f.Hdb.Want1Zh + f.Msc.Want1Zh + f.Touch.Want1Zh + f.Xh.Want1Zh + f.Bj.Want1Zh + f.Sj.Want1Zh + f.Kfb.Want1Zh + f.Yb.Want1Zh +
		f.Bgs.Want2Zh + f.Hdb.Want2Zh + f.Msc.Want2Zh + f.Touch.Want2Zh + f.Xh.Want2Zh + f.Bj.Want2Zh + f.Sj.Want2Zh + f.Kfb.Want2Zh + f.Yb.Want2Zh
	f.TotalPF = f.Bgs.Want1Pf + f.Hdb.Want1Pf + f.Msc.Want1Pf + f.Touch.Want1Pf + f.Xh.Want1Pf + f.Bj.Want1Pf + f.Sj.Want1Pf + f.Kfb.Want1Pf + f.Yb.Want1Pf +
		f.Bgs.Want2Pf + f.Hdb.Want2Pf + f.Msc.Want2Pf + f.Touch.Want2Pf + f.Xh.Want2Pf + f.Bj.Want2Pf + f.Sj.Want2Pf + f.Kfb.Want2Pf + f.Yb.Want2Pf
	f.TotalMGS = f.Bgs.Want1Mgs + f.Hdb.Want1Mgs + f.Msc.Want1Mgs + f.Touch.Want1Mgs + f.Xh.Want1Mgs + f.Bj.Want1Mgs + f.Sj.Want1Mgs + f.Kfb.Want1Mgs + f.Yb.Want1Mgs +
		f.Bgs.Want2Mgs + f.Hdb.Want2Mgs + f.Msc.Want2Mgs + f.Touch.Want2Mgs + f.Xh.Want2Mgs + f.Bj.Want2Mgs + f.Sj.Want2Mgs + f.Kfb.Want2Mgs + f.Yb.Want2Mgs
	f.Total /= 2
	f.TotalToday /= 2
	f.TotalZH /= 2
	f.TotalPF /= 2
	f.TotalMGS /= 2

	utility.ResponseSuccess(c, gin.H{
		"data": f,
	})
}
