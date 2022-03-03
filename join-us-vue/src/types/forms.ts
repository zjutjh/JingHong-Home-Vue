export interface INormalForm {
    name: string;
    stu_id: string;
    gender: number;
    college : number;
    campus : number;
    phone : string;
    qq : string;
    region: string;
    want1: string;
    

}

// Name     string `gorm:"not null" json:"name"`
// 	StuID    string `gorm:"primaryKey" json:"stu_id"`
// 	Gender   uint8  `gorm:"not null" json:"gender"`
// 	College  uint8  `gorm:"not null" json:"college"`
// 	Campus   uint8  `gorm:"not null" json:"campus"`
// 	Phone    string `gorm:"not null" json:"phone"`
// 	QQ       string `gorm:"not null" json:"qq"`
// 	Region   uint8  `gorm:"not null" json:"region"`
// 	Want1    uint8  `gorm:"not null" json:"want1"`
// 	Want2    uint8  `gorm:"not null" json:"want2"`
// 	Profile  string `gorm:"not null" json:"profile"`
// 	Feedback string `gorm:"not null" json:"feedback"`