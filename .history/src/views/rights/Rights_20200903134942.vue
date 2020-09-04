<template>
<!--权限列表-->
 <div >
  <el-table
    :data="power" class="tableDatas"
    border
    style="width: 100%">
    <el-table-column 
      type="index"
      :index="indexMethod" align="center"
      label="#"
      width="180">
    </el-table-column>
    <el-table-column
      prop="authName" align="center"
      label="权限名称"
      width="180">
    </el-table-column>
    <el-table-column
      prop="levels" align="center" 
      label="权限等级">
          <template slot-scope="scope">
        <el-tag
        v-if="scope.row.levels === '一级'"
          :type="scope.row.levels === '一级'? 'primary' : 'success'"
          disable-transitions>{{scope.row.levels}}</el-tag>
           <el-tag
        v-if="scope.row.levels === '二级'"
          :type="scope.row.levels ==='二级'? 'success' : 'success'"
          disable-transitions>{{scope.row.levels}}</el-tag>
           <el-tag
        v-if="scope.row.levels === '三级'"
          :type="scope.row.levels == '三级'? 'danger' : 'success'"
          disable-transitions>{{scope.row.levels}}</el-tag>
      </template>
    </el-table-column>
  </el-table>
 </div>
</template>
<script>
import { createNamespacedHelpers } from "vuex";
const userModule = createNamespacedHelpers("jurisdiction");
const { mapState, mapActions } = userModule;
 export default {
   name:'',
   props:{

    },
   data () {
     return {
    type:'list',
    
   }
   },
   components: {

   },
   methods: {
    ...mapActions(['getPower']),
     //获取下标
     indexMethod(index){
       return index*1+1
     },
   },
   mounted() {
    this.getPower({
      type:this.type
    })
    console.log(this.getPower);
   },
   watch: {

   },
   computed: {
    ...mapState(['power'])
   }
 }
</script>

<style scoped lang='scss'>
.tableDatas{
  margin-top: 20px;
}
.el-table .cell{
  color: red;
  z-index: 999;
}
</style>