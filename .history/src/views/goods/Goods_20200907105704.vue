<template>
<!--商品列表-->
 <div>
 <div class="d-f m-t-20">
 <el-input
  placeholder="请输入搜索内容" class="input m-l-10"
  v-model="input"
  clearable>
</el-input>
<div class="m-l-20">
<el-button type="primary">添加商品</el-button>
</div>
 </div>

 </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const userModule = createNamespacedHelpers("goodser");
const { mapState, mapActions } = userModule;
 export default {
   name:'',
   props:{

    },
   data () {
     return {
     query:'',
     pagenum:'1',
     pagesize:'10',
     input: '',
   }
   },
   components: {

   },
   methods: {
 ...mapActions(["getGoods"]),
 //获取下标
    indexMethod(index) {
      return index * 1 + 1;
    },
   },
   mounted() {
    this.getGoods({
     query:this.query,
      pagenum:this.pagenum,
      pagesize:this.pagesize 
    })
   },
   watch: {

   },
   computed: {
    ...mapState(["goods"])
   }
 }
</script>

<style scoped lang='scss'>
.input{
  width: 300px;
}
</style>