<template>
<!--分类参数-->
 <div>
  <div class="background m-t-20">
   <el-alert
    title="警告提示的文案"
    type="warning"
    description="注意:只允许为第三级分类设置相关参数!"
    show-icon>
  </el-alert>
  <div class="d-f">
  <div>选择商品分类:</div>
   <el-cascader
    v-model="value"
    :options="options"
    @change="handleChange"></el-cascader>
  
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
    value:'',
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
.background{
  width: 1100px;
  height: 500px;
  box-shadow: 0 5px 5px #9999;
  border-radius: 5px;
  margin-left: 20px;
  margin-top: 10px;
}
</style>