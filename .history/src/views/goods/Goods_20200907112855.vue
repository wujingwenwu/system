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
   <el-table
      :data="goodser"
      style="width: 100%">
      <el-table-column
        type="index"
        :index="indexMethod"
        label="#"
        width="180">
      </el-table-column>
      <el-table-column
        prop="goods_name"
        label="商品名称"
        width="180">
      </el-table-column>
      <el-table-column
        prop="goods_price"
        label="商品价格(元)">
      </el-table-column>
       <el-table-column
        prop="goods_weight"
        label="商品重量">
      </el-table-column>
       <el-table-column
        prop="add_time"
        label="创建时间">
      </el-table-column>
        <el-table-column
        
        label="操作">
      </el-table-column>
    </el-table>
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
 ...mapActions(["getGoodser"]),
 //获取下标
    indexMethod(index) {
      return index * 1 + 1;
    },
   },
   mounted() {
    this.getGoodser({
     query:this.query,
      pagenum:this.pagenum,
      pagesize:this.pagesize 
    })
   },
   watch: {

   },
   computed: {
    ...mapState(["goodser"])
   }
 }
</script>

<style scoped lang='scss'>
.input{
  width: 300px;
}
</style>