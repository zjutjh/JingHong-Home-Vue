<template>
  <div class="start" id="start">
    <div class="start-content">
      <div class="content1">精弘网络,取精用弘</div>
      <div class="content2">
        <div>向下滑动</div>
        <div class="start-img"></div>
        <div>探索精弘</div>
      </div>
    </div>
  </div>
</template>

<style>
.start {
  height: 63vw;
  overflow: hidden;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(/index/diannao.jpg) no-repeat;
  background-size: contain;
  background-position: 0 0;
  max-width: 100%;
  max-height: 100%;
  border-radius: 0;
  display: flex;
  justify-content: center;
  align-items: center;
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
  width: 4vw;
  height: 4vw;
  border-radius: 50%;

  background-color: #d20001;
  background-size: 80%;
  background-image: url(/svg/下箭头.svg);
  background-repeat: no-repeat;
  background-position: center;
}
</style>