package initial

import (
	"log"

	"github.com/spf13/viper"
)

type server struct {
	Port string `mapstructure:"port"`
}

type database struct {
	Username string `mapstructure:"username"`
	Password string `mapstructure:"password"`
	Address  string `mapstructure:"address"`
	DbName   string `mapstructure:"db_name"`
}

type email struct {
	Sender   string `mapstructure:"sender"`
	Receiver string `mapstructure:"receiver"`
	Pwd      string `mapstructure:"pwd"`
	SmtpAddr string `mapstructure:"smtp_addr"`
	SmtpPort int    `mapstructure:"smtp_port"`
}
type ConfigData struct {
	Server   server   `mapstructure:"server"`
	Database database `mapstructure:"database"`
	Secret   string   `mapstructure:"secret"`
	Email    email    `mapstructure:"email"`
	Env      string   `mapstructure:"env"`
}

var Config ConfigData

func ConfigInit() {
	var config = viper.New()
	// 配置文件初始化函数
	config.SetConfigName("config")
	config.SetConfigType("yaml")
	config.AddConfigPath("./config")
	err := config.ReadInConfig()
	if err != nil {
		log.Fatalln("Config Error: ", err)
		panic(err)
	}
	config.Unmarshal(&Config)
}
