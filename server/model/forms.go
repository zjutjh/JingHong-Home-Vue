package model

type NormalForm struct {
	// 招新季招新申请表
	Name     string `gorm:"not null" json:"name"`
	StuID    string `gorm:"primaryKey" json:"stu_id"`
	Gender   uint8  `gorm:"not null" json:"gender"`
	College  uint8  `gorm:"not null" json:"college"`
	Campus   uint8  `gorm:"not null" json:"campus"`
	Phone    string `gorm:"not null" json:"phone"`
	QQ       string `gorm:"not null" json:"qq"`
	Region   uint8  `gorm:"not null" json:"region"`
	Want1    uint8  `gorm:"not null" json:"want1"`
	Want2    uint8  `gorm:"not null" json:"want2"`
	Profile  string `gorm:"not null" json:"profile"`
	Feedback string `gorm:"not null" json:"feedback"`
}

type DeveloperForm struct {
	// 开发部招新申请表
	Name     string `gorm:"not null" json:"name"`
	StuID    string `gorm:"primaryKey" json:"stu_id"`
	Gender   uint8  `gorm:"not null" json:"gender"`
	College  uint8  `gorm:"not null" json:"college"`
	Campus   uint8  `gorm:"not null" json:"campus"`
	Phone    string `gorm:"not null" json:"phone"`
	QQ       string `gorm:"not null" json:"qq"`
	Region   uint8  `gorm:"not null" json:"region"`
	Profile  string `gorm:"not null" json:"profile"`
	Feedback string `gorm:"not null" json:"feedback"`
	// Ability  string `gorm:"not null" json:"ability"`
	// ? How to restore a array? Maybe JSON?
	AbilityOther string `gorm:"not null" json:"ability_other"`
}

type Ability struct {
	StuID    string `gorm:"primaryKey"`
	Api      bool   `gorm:"api"`
	FrontEnd bool   `json:"front_end"`
	Document bool   `json:"document"`
	Git      bool   `json:"git"`
}
