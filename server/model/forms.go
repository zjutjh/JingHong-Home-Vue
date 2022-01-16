package model

type NormalForm struct {
    // 招新季招新申请表
    Name string
    ID string `gorm: "primaryKey"`
    Gender uint8
    School uint8
    Department uint8
    Phone string
    QQ string
    Region uint8
    Want1 uint8
    Want2 uint8
    Profile string
    Feedback string
}

type DeveloperForm struct {
    // 开发部招新申请表
    Name string
    ID string `gorm: "primaryKey"`
    Gender uint8
    School uint8
    Department uint8
    Phone string
    QQ string
    Region uint8
    Profile string
    Feedback string
    Ability string
    // ? How to restroe a array? Maybe JSON?
    AbilityOther string
}
