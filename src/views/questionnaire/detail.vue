<template>
  <div class="container">
    <div class="content">
       <table>
         <tr>
           <th v-for="item in tmpHead">{{item.title}}</th>
         </tr>
         <tr>
           <td>row 1, cell 1</td>
           <td>row 1, cell 2</td>
         </tr>
         <tr>
           <td>row 2, cell 1</td>
           <td>row 2, cell 2</td>
         </tr>
       </table>
    </div>
  </div>
</template>

<script setup lang="ts">
const tmpHead=[
  {
    title: 'Header 1',
  },
  {
    title: 'Header 2',
  }
]
const tmpData=[
  {
    data: 'row 1, cell 1',
  },

]
</script>

<style scoped>
.container{
  margin-top: 15%;
  background-color: rgb(239, 239, 239);
  width: 100vw;
  display: flex;
  justify-content: center;
}
.content{
  width: 70vw;
  background: white;
  border-radius: 30px;
}
.content table{
  width: 100%;
}
</style>