<template>
<!--商品列表-->
 <div>
 <div class="d-f m-t-20">
 <el-input
  placeholder="请输入搜索内容" class="input"
  v-model="input"
  clearable>
</el-input>
<el-button type="primary">添加商品</el-button>
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