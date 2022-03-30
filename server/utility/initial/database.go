package initial

import (
	"fmt"
	"log"
	"zjutjh/Join-Us/model"

	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

var DB *gorm.DB

func DatabaseInit() {
	username := Config.Database.Username
	password := Config.Database.Password
	address := Config.Database.Address
	dbname := Config.Database.DbName
	dsn := fmt.Sprintf("%v:%v@tcp(%v)/%v?charset=utf8mb4&parseTime=True&loc=Local", username, password, address, dbname)
	var err error
	DB, err = gorm.Open(mysql.Open(dsn), &gorm.Config{})
	if err != nil {
		log.Fatalln("Database Connection Error!")
		panic(err)
	}
	//Auto Mirage
	// TODO: Insert more list
	err = DB.AutoMigrate(&model.DeveloperForm{}, &model.Ability{}, &model.NormalForm{})
	if err != nil {
		log.Fatalln("Database Create Lists Error!")
		panic(err)
	}
}
