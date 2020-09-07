<template>
  <!--角色列表-->
  <div>
    <!--添加用户-->
    <el-dialog title="提示" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
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
    <el-dialog title="提示" :visible.sync="dialogVisibles" width="30%" :before-close="handleCloses">
      <el-form
        :model="ruleForms"
        :rules="ruless"
        ref="ruleForms"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="角色名" prop="name">
          <el-input v-model="ruleForms.name"></el-input>
        </el-form-item>
        <el-form-item label="角色描述" prop="roles">
          <el-input v-model="values"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisibles = false">取 消</el-button>
        <el-button type="primary" @click="compiles">确 定</el-button>
      </span>
    </el-dialog>
    <!--分配权限-->
    <el-dialog
  title="提示"
  :visible.sync="visible"
  width="30%"
  :before-close="hand">
  <template>
<el-tree
  :data="rights"
  show-checkbox
  node-key="id"
  ref="tree"
  default-expanded-all
  :default-checked-keys="[]"
  :props="defaultProps">
</el-tree>
  </template>
  <span slot="footer" class="dialog-footer">
    <el-button @click="visible = false">取 消</el-button>
    <el-button type="primary" @click="getCheckedKeys">确 定</el-button>
  </span>
</el-dialog>
    <!--内容开始-->
    <div class="button">
      <el-button type="primary" @click="dialogVisible=true">添加角色</el-button>
    </div>

    <el-table :data="roles" border style="width: 100%">
    <el-table-column type="expand">
    <template slot-scope="props">
        <el-form label-position="left" inline class="demo-table-expand">
          <el-form-item label="">
<template v-for="item in props.row.children">
                <div :key="item.id" class="d-f show">
                  <div style="margin-right:40px" class="a-i-c d-f">
                    <el-tag  closable @close="close">{{item.authName}}</el-tag>
                    <i class="el-icon-caret-right m-l-10"></i>
                  </div>
                  <div class=" f-d-c d-f m-l-20">
                    <div v-for="item1 in item.children" :key="item1.id" class="d-f">
                      <div class="a-l-c  m-t-10" style="margin-right:40px">
                        <el-tag
                          type="success"
                          closable
                          @close="close"
                        >{{item1.authName}}</el-tag>
                        <i class="el-icon-caret-right m-l-10"></i>
                      </div>
                      <div class="d-f f-w-w m-l-20">
                        <div
                          v-for="(item2,index) in item1.children"
                          :key="item2.id"
                          class="m-t-10"
                          :class="{'right':index<item1.children.length-1}"
                        >
                          <el-tag
                            type="warning"
                            closable
                            @close="close"
                          >{{item2.authName}}</el-tag>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </template>
            

          
          </el-form-item>
        </el-form>
       </template>
</el-table-column>
      <el-table-column type="index" align="center" :index="indexMethod" label="#" width="180">
      
      </el-table-column>
      <el-table-column prop="roleName" align="center" label="职位" width="180"></el-table-column>
      <el-table-column prop="roleDesc" align="center" label="描述"></el-table-column>
      <el-table-column align="center" label="操作">
        <template slot-scope="scope">
          <el-button size="mini" type="primary" @click="edit(scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.row)">删除</el-button>
          <el-button size="mini" type="warning" @click="jurisdiction(scope.row)">分配权限</el-button>
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
         defaultProps: {
          children: 'children',
          label: 'authName'
        },
      visible:false,
      dialogVisible: false,
      dialogVisibles: false,
      ruleForm: {
        name: ""
      },
      rules: {
        name: [
          { required: true, message: "请输入用户名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ]
      },
      ruleForms: {
        name: ""
      },
      ruless: {
        name: [
          { required: true, message: "请输入用户名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ]
      },
      value: "",
      values: "",
      id: "",
      type:'tree'
    };
  },
  components: {},
  methods: {
    ...mapActions(["getRoles", "postAddrole", "deleteRole", "editRole","getRights"]),
    handleCheckChange(){

    },
    //获取下标
    indexMethod(index) {
      return index * 1 + 1;
    },
    close(){

    },
    //默认选中
    getCheckedKeys(){
      let arr=this.$refs.tree.getCheckedKeys();
      this.visible = false
      console.log(arr);
      this.getRoles({
        
      })
    },
    //删除
    handleDelete(row) {
      console.log(row);
      this.deleteRole({
        id: row.id
      });
    },
    //打开编辑页面
    edit(row) {
      console.log(row);
      this.dialogVisibles = true;
      this.values = row.roleDesc, 
      this.ruleForms.name = row.roleName
      this.id = row.id;
    },
    //编辑成功
    compiles() {
      console.log(this.id);
      this.editRole({
        roleName: this.ruleForms.name,
        roleDesc: this.values,
        id: this.id
      });
       this.dialogVisibles = false;
    },
    //打开分配权限
    jurisdiction( row) {
      console.log( row);
      this.visible=true
    },
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(res => {
          done();
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    },
    handleCloses(done) {
      this.$confirm("确认关闭？")
        .then(res => {
          done();
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    },
    hand(done){
     this.$confirm("确认关闭？")
        .then(res => {
          done();
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    },
    //添加角色
    well() {
      this.postAddrole({
        roleName: this.ruleForm.name,
        roleDesc: this.value
      });
      (this.dialogVisible = false),
        (this.ruleForm.name = ""),
        (this.value = "");
    }
  },
  mounted() {
    this.getRoles();
    this.getRights({
      type:this.type
    })
  },
  watch: {},
  computed: {
    ...mapState(["roles","rights"])
  }
};
</script>

<style scoped lang='scss'>
.button {
  padding: 20px 20px;
}
.right{
  margin-right: 10px;
}
.show{
  padding: 5px;
}
</style>