<template>
  <!-- 组件内容 -->
  <div class="content" id="content">
    <div class="start" id="start">
      <div class="start-img"></div>
      <div class="start-content">
        <div class="content1">精弘网络,取精用弘</div>
        <div class="content2">
          <div>向下滑动</div>

          <div>探索精弘</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
/* 样式 */
.start {
  height: 100vh;
  overflow: hidden;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(/photo/index/shouji.jpg) no-repeat;
  background-size: cover;
  background-position: 0 0;
  border-radius: 0;
  justify-content: center;
  align-items: center;
  display: flex;
}
.content1 {
  font-size: 6vw;
  color: white;
  letter-spacing: 1vw;
  padding: 10px;
  font-family: song;
}
.content2 {
  height: 60px;
  margin: auto;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: song;
}
.content2 div {
  text-indent: 1em;
  font-size: 2.5vw;
  color: white;
  letter-spacing: 25px;

  float: left;
}
.start-img {
  position: absolute;
  left: 50%;
  bottom: 5rem;
  transform: translate(-50%);
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  background-color: #d20001;
  margin: auto;
  background-image: url(/photo/svg/下箭头.svg);
  background-size: 80%;
  background-position: center;
  background-repeat: no-repeat;
}
</style>