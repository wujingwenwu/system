<template>
<!--角色列表-->
 <div>
<el-table
    :data="roles"
    border
    style="width: 100%">
    <el-table-column
       type="index"
      :index="indexMethod"
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
const { mapState, mapActions } = userModule;
 export default {
   name:'',
   props:{

    },
   data () {
     return {

   }
   },
   components: {

   },
   methods: {
   ...mapActions(["getRoles"]),
     //获取下标
     indexMethod(index){
       return index*1+1
     },
   },
   mounted() {
   this.getRoles()
   },
   watch: {

   },
   computed: {
   ...mapState(["roles"])
   }
 }
</script>

<style scoped lang='scss'>

</style>