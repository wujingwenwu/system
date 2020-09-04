<template>
<!--角色列表-->
 <div>
<el-table
    :data="roles"
    border
    style="width: 100%">
    <el-table-column
       type="index" align="center"
      :index="indexMethod"
      label="#"
      width="180">
    </el-table-column>
    <el-table-column
      prop="roleName" align="center"
      label="职位"
      width="180">
    </el-table-column>
    <el-table-column
      prop="roleDesc" align="center"
      label="描述">
    </el-table-column>
     <el-table-column
      prop="roleDesc" align="center"
      label="描述">
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