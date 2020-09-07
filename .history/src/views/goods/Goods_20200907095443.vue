<template>
<!--商品列表-->
 <div>
 <div>
 <el-input
  placeholder="请输入内容"
  v-model="input"
  clearable>
</el-input>
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
     pagesize:'10'
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

</style>