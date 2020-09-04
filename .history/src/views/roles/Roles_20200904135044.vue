<template>
  <!--角色列表-->
  <div>
  <el-dialog
  title="提示"
  :visible.sync="dialogVisible"
  width="30%"
  :before-close="handleClose">
  <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
  <el-form-item label="角色名" prop="name">
    <el-input v-model="ruleForm.name"></el-input>
  </el-form-item>
  <el-input v-model="value" label="角色描述"></el-input>
  </el-form>
  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="well">确 定</el-button>
  </span>
</el-dialog>
  <div class="button">
   <el-button  type="primary" @click="dialogVisible=true">添加角色</el-button>
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
       ruleForm: {
          name: '',
          },
          rules: {
          name: [
            { required: true, message: '请输入用户名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],},
          value:''
    };
  },
  components: {},
  methods: {
    ...mapActions(["getRoles","postAddrole"]),
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
      },
      //添加角色
      well(){
        this.postAddrole({
          roleName:this.ruleForm.name,roleDesc:this.value
        })
      },
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