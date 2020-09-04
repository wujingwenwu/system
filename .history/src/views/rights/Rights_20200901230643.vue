<template>
<!--权限列表-->
 <div >
  <el-table
    :data="tableData" class="tableDatas"
    border
    style="width: 100%">
    <el-table-column 
      prop="date" align="center"
      label="#"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name" align="center"
      label="权限名称"
      width="180">
    </el-table-column>
    <el-table-column
      prop="address" align="center"
      label="权限等级">
    </el-table-column>
  </el-table>
 </div>
</template>
<script>
import { createNamespacedHelpers } from "vuex";
const userModule = createNamespacedHelpers("jurisdiction");
const { mapState, mapActions } = userModule
 export default {
   name:'',
   props:{

    },
   data () {
     return {
    type:'list',
     tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }]
   }
   },
   components: {

   },
   methods: {
    ...mapActions(['getPower']),
    
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
    ...mapState(['orderss'])
   }
 }
</script>

<style scoped lang='scss'>
.tableDatas{
  margin-top: 20px;
}
</style>