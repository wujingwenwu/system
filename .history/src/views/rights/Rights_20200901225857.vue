<template>
<!--权限列表-->
 <div>
  <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      prop="date"
      label="日期"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="180">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址">
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
     resetDateFilter() {
        this.$refs.filterTable.clearFilter('date');
      },
      clearFilter() {
        this.$refs.filterTable.clearFilter();
      },
      // formatter(row, column) {
      //   return row.address;
      // },
      // filterTag(value, row) {
      //   return row.tag === value;
      // },
      // filterHandler(value, row, column) {
      //   const property = column['property'];
      //   return row[property] === value;
      // }
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

</style>