<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { departments } from '../../utils/const'
</script>
<template>
  <div id="body" ref="pronbit">
    <div class="title-style">我们的部门</div>
    <div class="department">
      <router-link class="department-item" v-for="item, index in departments" :to="item.href">
        <div class="img" :style="{ 'background-image': 'url(' + item.img + ')' }"></div>
        <div class="name">{{ item.name }}</div>
        <div
          v-if="index !== 5"
          style="width: 100%;height:0.3rem;background-color: #D20001; margin-top: 10px;"
        ></div>
      </router-link>
    </div>
  </div>
</template>

<style scoped>
* {
  text-align: center;
}
a {
  text-decoration: none;
  color: black;
}
body {
  margin: 0;
}
#body {
  padding: 4rem 0 1rem;
  background-color: #efefef;
}
.title-style {
  width: 45%;
  height: 1.5rem;
  font-size: 10rpx;
  padding: 0.7rem 0;
  margin: 3% 7.5% 3%;
  background-color: #d20001;
  border-radius: 2.5rem;
  color: white;
  box-shadow: 0 1px 5px #999999;
}

.department {
  width: 80%;
  margin: auto;
  padding: 1rem 0;
  background-color: white;
  box-shadow: 0 1px 5px #999999;
  border-radius: 1rem;
}
.department-item {
  margin: 15px 10%;
  /* margin: 1rem auto; */
  width: 85%;
  /* height: 7rem; */
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: Center;
}
.department .img {
  width: 25vw;
  height: 25vw;
  border-radius: 50%;
  background-color: white;
  background-size: 60%;
  background-position: center;
  background-repeat: no-repeat;
  box-shadow: 0 1px 5px #999999;
}
path {
  fill: white;
}
.name {
  width: 37vw;
  height: 2rem;
  line-height: 2rem;
  font-size: 4vw;
  border: 0.1rem solid #d20001;
  color: #d20001;
}

#nav * {
  border-radius: 0;
}
.img {
  float: left;
}
.button-on {
  position: relative;
  float: right;
  top: 1rem;
  right: 1rem;
  height: 2rem;
  width: 2rem;
  background-image: url(/photo/svg/mulu.svg);
  background-repeat: no-repeat;
  background-position: center;
  background-size: 90%;
}
.button-off {
  position: relative;
  float: right;
  top: 1rem;
  right: 1rem;
  height: 2rem;
  width: 2rem;
  background-image: url(/photo/svg/关闭.svg);
  background-repeat: no-repeat;
  background-position: center;
  background-size: 90%;
}
#nav img {
  height: 100%;
  float: left;
  transform: scale(0.8);
}
.topshow {
  position: fixed;
  left: 0;
  top: 0rem;
  width: 100%;
  height: 4rem;
  background: #d20001;
  transition: top linear 0.3s;
  z-index: 1000000;
  box-shadow: 0 1px 5px #999999;
}
.tophide {
  position: fixed;
  left: 0;
  top: -8rem;
  width: 100%;
  height: 4rem;
  background: #d20001;
  transition: top linear 0.3s;
  box-shadow: 0 1px 5px #999999;
}
.Nav-hide {
  position: fixed;
  left: 0;
  top: -100%;
  width: 100%;
  height: 100%;
  background: white;
  transition: left linear 0.3s;
}
.Nav-show {
  position: fixed;
  left: 0rem;
  top: 0;
  width: 100%;
  height: 100%;
  background: white;
  transition: left linear 0.3s;
  z-index: 1000001;
}

.nav-list {
  margin: 4rem 4%;
  width: 92%;
  height: 45%;
}
.nav-list div {
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  margin: 0;
  border-bottom: 0.1rem solid #efefef;
}

.footer {
  width: 100%;
  font-size: xx-small;
  background-color: white;
  height: 2.2rem;
  line-height: 2rem;
  border-radius: 0;
  box-shadow: 0 -0.5px 5px #999999;
}
</style>