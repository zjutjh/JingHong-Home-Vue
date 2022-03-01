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
	username := Config.GetString("database.username")
	password := Config.GetString("database.password")
	address := Config.GetString("database.address")
	dbname := Config.GetString("database.dbname")
	dsn := fmt.Sprintf("%v:%v@tcp(%v)/%v?charset=utf8mb4&parseTime=True&loc=Local", username, password, address, dbname)
	var err error
	DB, err = gorm.Open(mysql.Open(dsn), &gorm.Config{})
	if err != nil {
		log.Fatalln("Database Connection Error!")
		panic(err)
	}
	//Auto Mirage
	// TODO: Insert more list
	err = DB.AutoMigrate(&model.NormalForm{})
	if err != nil {
		log.Fatalln("Database Create Lists Error!")
		panic(err)
	}
}
