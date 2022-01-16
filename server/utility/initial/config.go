package initial

import (
	"log"
    "github.com/spf13/viper"
)
var Config = viper.New()

func ConfigInit() {
    // 配置文件初始化函数
    Config.SetConfigName("config")
    Config.SetConfigType("yaml")
    Config.AddConfigPath("./config")
    err := Config.ReadInConfig()
    if err != nil {
        log.Fatalln("Config Error: ", err)
        panic(err)
    }
}
