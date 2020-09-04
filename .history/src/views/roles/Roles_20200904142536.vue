<template>
  <!--角色列表-->
  <div>
  <!--添加用户-->
  <el-dialog
  title="提示"
  :visible.sync="dialogVisible"
  width="30%"
  :before-close="handleClose">
  <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
  <el-form-item label="角色名" prop="name">
    <el-input v-model="ruleForm.name"></el-input>
  </el-form-item>
 <el-form-item label="角色描述" prop="roles">
    <el-input v-model="value"></el-input>
  </el-form-item>
  </el-form>
  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="well">确 定</el-button>
  </span>
</el-dialog>
<!--编辑用户-->
  <el-dialog
  title="提示"
  :visible.sync="dialogVisibles"
  width="30%"
  :before-close="handleCloses">
  <el-form :model="ruleForms" :rules="ruless" ref="ruleForms" label-width="100px" class="demo-ruleForm">
  <el-form-item label="角色名" prop="name">
    <el-input v-model="ruleForms.name"></el-input>
  </el-form-item>
 <el-form-item label="角色描述" prop="roles">
    <el-input v-model="values"></el-input>
  </el-form-item>
  </el-form>
  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisibles = false">取 消</el-button>
    <el-button type="primary" >确 定</el-button>
  </span>
</el-dialog>
<!--内容开始-->
  <div class="button">
   <el-button  type="primary" @click="dialogVisible=true">添加角色</el-button>
  </div>
   
    <el-table :data="roles" border style="width: 100%">
      <el-table-column type="index" align="center" :index="indexMethod" label="#" width="180"></el-table-column>
      <el-table-column prop="roleName" align="center" label="职位" width="180"></el-table-column>
      <el-table-column prop="roleDesc" align="center" label="描述"></el-table-column>
      <el-table-column  align="center" label="操作">
        <template slot-scope="scope">
          <el-button size="mini" type="primary" @click="edit(scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.row)">删除</el-button>
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
      dialogVisibles:false,
       ruleForm: {
          name: '',
          },
          rules: {
          name: [
            { required: true, message: '请输入用户名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],},
           ruleForms: {
          name: '',
          },
          ruless: {
          name: [
            { required: true, message: '请输入用户名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],},
          value:'',
          values:'',
    };
  },
  components: {},
  methods: {
    ...mapActions(["getRoles","postAddrole","deleteRole"]),
    //获取下标
    indexMethod(index) {
      return index * 1 + 1;
    },
    //删除
    handleDelete( row) {
      console.log(row);
      this.deleteRole({
        id:row.id
      })
    },
    edit(row){
    console.log(row);
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
       handleCloses(done) {
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
        });
        this.dialogVisible=false,
        this.ruleForm.name='',
        this.value=''

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