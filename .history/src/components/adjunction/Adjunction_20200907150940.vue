<template>
 <div class="back ">
  <div class="add">添加商品信息</div>
  <div class="m-t-20">
  <el-steps :space="200" :active="active" finish-status="success" align-center>
  <el-step title="基本信息"></el-step>
  <el-step title="商品参数"></el-step>
  <el-step title="商品属性"></el-step>
  <el-step title="商品图片"></el-step>
  <el-step title="商品内容"></el-step>
  <el-step title="完成"></el-step>
</el-steps>
  </div>
  <div class="m-t-20 d-f m-l-20">
  <div class="d-f">
  <div>
    <div v-for="(item,index) in arr" :key="index">
   <div class="d-f">
  <div class="m-t-10">{{item.name}}</div>
  <div class="show1 m-l-10"></div>
  </div>
  </div>
  </div>

  <div class="m-l-10 show m-t-10"></div>
  </div>
  </div>
 </div>
</template>

<script>
 export default {
   name:'',
   props:{

    },
   data () {
     return {
     active:0,
     arr:[{
         name:'基本信息'
     },
     {
         name:'商品参数'
     },
     {
         name:'商品属性'
     },
     {
         name:'商品图片'
     },
     {
         name:'商品内容'
     },
     ]
   }
   },
   components: {

   },
   methods: {

   },
   mounted() {

   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>
.back{
    width: 1100px;
    height: 600px;
    box-shadow: 0px 5px 5px #9999;
    margin-left: 30px;
    margin-top: 20px;
}
.add{
    width: 800px;
    height: 30px;
    background: rgba(226, 223, 223, 0.6);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    margin-top: 20px;
    margin-left: 100px;
}
.show{
    width: 1px;
    height: 150px;
    background: #9999;
}
.show1{
    width: 1px;
    height: 30px;
    background: rgb(63, 63, 224);
    
}
</style>