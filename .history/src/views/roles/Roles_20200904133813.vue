<template>
  <!--角色列表-->
  <div>
  <el-dialog
  title="提示"
  :visible.sync="dialogVisible"
  width="30%"
  :before-close="handleClose">
  <span>这是一段信息</span>
  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
  </span>
</el-dialog>
  <div class="button">
   <el-button  type="primary" >添加角色</el-button>
  </div>
   
    <el-table :data="roles" border style="width: 100%">
      <el-table-column type="index" align="center" :index="indexMethod" label="#" width="180"></el-table-column>
      <el-table-column prop="roleName" align="center" label="职位" width="180"></el-table-column>
      <el-table-column prop="roleDesc" align="center" label="描述"></el-table-column>
      <el-table-column  align="center" label="操作">
        <template slot-scope="scope">
          <el-button size="mini" type="primary" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          <el-button size="mini" type="warning" @click="jurisdiction(scope.$index, scope.row)">分配权限</el-button>
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
  name: "",
  props: {},
  data() {
    return {
      dialogVisible:false,
    };
  },
  components: {},
  methods: {
    ...mapActions(["getRoles"]),
    //获取下标
    indexMethod(index) {
      return index * 1 + 1;
    },
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
    jurisdiction(index, row) {
      console.log(index, row);
    },
       handleClose(done) {
        this.$confirm('确认关闭？')
          .then((res) => {
            done();
            console.log(res);
          })
          .catch((err)=> {
            console.log(err);
          });
      }
  },
  mounted() {
    this.getRoles();
  },
  watch: {},
  computed: {
    ...mapState(["roles"])
  }
};
</script>

<style scoped lang='scss'>
.button{
  padding: 20px 20px;
}
</style>