<template>
<div>
 <div>
 <div class="d-f m-t-20 m-l-20">
 <el-input
  placeholder="请输入搜索内容"
  v-model="input" class="input"
  clearable>
</el-input>
 <el-button type="primary" class="buttons">添加用户</el-button>
 </div>
  <el-table
    :data="tableData" 
    border
    style="width: 100%" class="m-t-20">
    <el-table-column
      prop="date"
      label="#" align="center"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名" align="center"
      width="180"> 
    </el-table-column>
    <el-table-column
      prop="address" align="center"
      label="角色">
    </el-table-column>
    <el-table-column
      prop="phone" align="center"
      label="电话">
    </el-table-column>
     <el-table-column
      prop="mailbox" align="center"
      label="邮箱">
    </el-table-column>
     <el-table-column
      prop="state" align="center"
      label="状态">
      <template slot-scope="scope">
   <el-switch
  v-model="value"
  active-color="#13ce66"
  inactive-color="#ff4949" @change="change(scope.$index, scope.row)" validate-event="true">
  
</el-switch>
</template>
    </el-table-column>
     <el-table-column
      prop="operation" align="center"
      label="操作" width="180">
      <div class="d-f">
        <el-button type="primary" icon="el-icon-edit" size="mini"></el-button>
      <el-button type="danger" icon="el-icon-delete" size="mini"></el-button>
      <el-button type="warning" icon="el-icon-setting" size="mini" @click="click"></el-button>
      </div>
    
    </el-table-column>
  </el-table>
  <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400">
    </el-pagination>
 </div>
 
 </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const userModule = createNamespacedHelpers('publics')
const { mapState, mapActions } = userModule
 export default {
   name:'',
   props:{

    },
   data () {
     return {
       currentPage4: 4,
       value: true,
       input:'',
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }]
   }
   },
   components: {

   },
   methods: {
     handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
     //状态
     change(index, row){
       console.log(index, row);
      // this.value===false
      this.$emit('change', index, row);
      console.log(this.value);
     },
     click(){
      this.$emit('click');
     },
//    tableRowClassName({row, rowIndex}) {
//         if (rowIndex === 1) {
//           return 'warning-row';
//         } else if (rowIndex === 3) {
//           return 'success-row';
//         }
//         return '';
//       }
   },
   mounted() {

   },
   watch: {

   },
   computed: {
   ...mapState(['userList','total']) 
   }
 }
</script>

<style scoped lang='scss'>
 .el-table .warning-row {
    background: oldlace;
  }

  .el-table .success-row {
    background: #f0f9eb;
    }
.button{
  width: 20px;
  height: 20px;
  z-index: 9999;
}
.input{
  width: 320px;
}
.buttons{
  margin-left: 20px;
}
</style>