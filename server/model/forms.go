package model

type NormalForm struct {
	// 招新季招新申请表
	Name     string `gorm:"not null" json:"name"`
	StuID    string `gorm:"primaryKey" json:"stu_id"`
	Gender   uint8  `gorm:"not null" json:"gender"`
	College  string `gorm:"not null" json:"college"`
	Campus   string `gorm:"not null" json:"campus"`
	Phone    string `gorm:"not null" json:"phone"`
	QQ       string `gorm:"not null" json:"qq"`
	Region   string `gorm:"not null" json:"region"`
	Want1    string `gorm:"not null" json:"want1"`
	Want2    string `gorm:"not null" json:"want2"`
	Profile  string `gorm:"not null" json:"profile"`
	Feedback string `gorm:"not null" json:"feedback"`
}

type DeveloperForm struct {
	// 开发部招新申请表
	Name     string `gorm:"not null" json:"name"`
	StuID    string `gorm:"primaryKey" json:"stu_id"`
	Gender   uint8  `gorm:"not null" json:"gender"`
	College  string `gorm:"not null" json:"college"`
	Campus   string `gorm:"not null" json:"campus"`
	Phone    string `gorm:"not null" json:"phone"`
	QQ       string `gorm:"not null" json:"qq"`
	Region   string `gorm:"not null" json:"region"`
	Profile  string `gorm:"not null" json:"profile"`
	Feedback string `gorm:"not null" json:"feedback"`
	// Ability  string `gorm:"not null" json:"ability"`
	AbilityOther string `gorm:"not null" json:"ability_other"`
	// AbilityID    int     `json:"-"`
	Ability Ability `json:"ability"`
}

type Ability struct {
	DeveloperFormID uint `json:"-"`
	Api             bool `json:"api"`
	FrontEnd        bool `json:"front_end"`
	Document        bool `json:"document"`
	Git             bool `json:"git"`
}
