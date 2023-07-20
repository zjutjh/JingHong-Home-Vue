
<template>
    <div  class="card-container" >
      <div class="text-container">
        <div class="text">
          + 创建新问卷
        </div>
      </div>
      <div class="bar">
        <div>
          发布
        </div>
        <div>
          数据
        </div>
        <div>
          编辑
        </div>
        <div>
          删除
        </div>
      </div>
    </div>
</template>

<style scoped>
.card-container{
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 35vh;
  width: 35vw;
  margin-top: 8%;
  border-radius: 20px;
  box-shadow: 4px 4px 4px 4px rgba(0, 0, 0, 0.3);
}
.text-container {
  display: block;
  height: 60%;
  width: 100%;
  margin-top: 5%;
}
.text {
  font-size: 2em;
  text-align: center;
}
.bar {
    margin-top: 5vh;
  display: flex;
  width: 80%;
  justify-content: space-around;
  height: 9vh;
}
</style>

<script setup>
</script>