<template>
<div>
 <div>
 <div class="d-f m-t-20 m-l-20">
 <el-input
  placeholder="请输入搜索内容"
  v-model="input" class="input" @change="inputChange"
  clearable>
</el-input>
 <el-button type="primary" class="buttons" @click="dialogVisible = true">添加用户</el-button>
 <el-dialog
  title="添加用户"
  :visible.sync="dialogVisible"
  width="30%"
  :before-close="handleClose">
 <el-form
            :model="ruleForm"
            :rules="rules"
            ref="ruleForm"
            label-width="80px"
            class="demo-ruleForm"
          >
            <el-form-item label="用户名" prop="username" placeholder="请输入用户名">
              <el-input v-model="ruleForm.username"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
              <el-input v-model="ruleForm.password" show-password placeholder="请输入密码"></el-input>
            </el-form-item>
            <el-form-item label="邮箱" prop="email">
              <el-input v-model="ruleForm.email"  placeholder="请输入邮箱"></el-input>
            </el-form-item>
            <el-form-item label="电话" prop="phone">
              <el-input v-model="ruleForm.phone"  placeholder="请输入电话"></el-input>
            </el-form-item>
          </el-form>
  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="querys" >确 定</el-button>
  </span>
</el-dialog>
 </div>
  <el-table
    :data="userList" 
    border
    style="width: 100%" class="m-t-20">
    <el-table-column
      type="index"
      :index="indexMethod"
      label="#" align="center"
      width="180">
    </el-table-column>
    <el-table-column
      prop="username"
      label="姓名" align="center"
      width="180"> 
    </el-table-column>
    <el-table-column
      prop="role_name" align="center"
      label="角色">
    </el-table-column>
    <el-table-column
      prop="create_time" align="center"
      label="电话">
    </el-table-column>
     <el-table-column
      prop="email" align="center"
      label="邮箱">
    </el-table-column>
     <el-table-column
      prop="state" align="center"
      label="状态" >
      <template slot-scope="scope">
   <el-switch
  v-model="scope.row.mg_state"
  active-color="#13ce66"
  inactive-color="#ff4949" @change="change(scope.row)">
</el-switch>
</template >
    </el-table-column>
     <el-table-column
      prop="operation" align="center"
      label="操作" width="180">
      <div class="d-f" slot-scope="scope">
        <div class="">
        
        <el-button type="primary" icon="el-icon-edit" size="mini" @click=" modify(scope.row)"></el-button>
        
        </div>
        <el-dialog
  title="提示"
  :visible.sync="dialogVisibles"
  width="30%"
  :before-close="handleCloses">
   <el-form
            :model="ruleForms"
            :rules="ruless"
            ref="ruleForm"
            label-width="80px"
            class="demo-ruleForm"
          >
            <el-form-item label="用户名" prop="user" placeholder="请输入用户名">
              <el-input v-model="ruleForm.username"></el-input>
            </el-form-item>
            <el-form-item label="邮箱" prop="emails">
              <el-input v-model="ruleForms.emails"  placeholder="请输入邮箱"></el-input>
            </el-form-item>
            <el-form-item label="电话" prop="phones">
              <el-input v-model="ruleForms.phones"  placeholder="请输入电话"></el-input>
            </el-form-item>
          </el-form>
  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisibles = false">取 消</el-button>
    <el-button type="primary" @click=" determine">确 定</el-button>
  </span>
</el-dialog>
    <div >
      <el-button type="danger" icon="el-icon-delete" size="mini" @click="deletes(scope.row)"></el-button>
      </div>
      <div>
      <el-button type="warning" icon="el-icon-setting" size="mini" @click="click"></el-button>
      </div>
    
    </el-table-column>
  </el-table>
  <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[5, 10, 15, 20]"
      :page-size="5"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total">
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
       id:'',
       dialogVisibles:false,
           ruleForm: {
        password: "",
        username: "",
        email:'',
        phone:'',
        
      },
          ruleForms: {
        usernames: "",
        emails:'',
        phones:'',
        
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名称", trigger: "blur" },
          { min: 3, max: 8, message: "长度在 3 到 8 个字符", trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 3, max: 8, message: "长度在 3 到 8 个字符", trigger: "blur" }
        ],
        email:[{ required: true, message: '请输入邮箱地址', trigger: 'blur' },
      { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
      ],
       phone: [
          { required: true, message: "请输入手机号", trigger: "blur" },
          { min: 11, max: 11, message: "请输入正确的手机号", trigger: "blur" }
        ],
      },
       ruless: {
        emails:[{ type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
      ],
       phones: [
          { min: 11, max: 11, message: "请输入正确的手机号", trigger: "blur" }
        ],
      },
       pagenum:1,
       pagesize:5,
       dialogVisible: false,
       query:'',
       currentPage: 1,
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
     //搜索
     inputChange(){
     console.log(this.input);
     this.getUserList(
    { pagenum:this.pagenum,
      pagesize:this.pagesize,
      query:this.input
    
    }
   )
     },
     //修改用户
     modify(row){
     this.dialogVisibles = true
     console.log(row);
     this.id=row.id
     this.ruleForms.emails=row.email
     this.ruleForms.usernames=row.username
     this.ruleForms.phones=row.create_time
 
     },
     determine(){
       this.dialogVisibles = false
        this.getAmend({
       id:this.id,
       email:this.ruleForms.emails,
       mobile:this.ruleForms.phones,
        pagenum:this.pagenum,
      pagesize:this.pagesize,
      query:this.query,
     })
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
     //删除用户
     deletes(row){
     console.log(row);
     this.getDelete({
       id:row.id,
       pagenum:this.pagenum,
      pagesize:this.pagesize,
      query:this.query
     })
     },
    //添加用户
     querys(){
       this.dialogVisible = false 
       this.getParty({
         username:this.ruleForm.username,
         password:this.ruleForm.password,
         email:this.ruleForm.email,
         mobile:this.ruleForm.phone,
          pagenum:this.pagenum,
           pagesize:this.pagesize,
            query:this.query 
       })
       this.ruleForm.username='',
        this.ruleForm.password='',
         this.ruleForm.email='',
          this.ruleForm.phone=''
     },
     //关闭弹框
     handleClose(done) {
        this.$confirm('确认关闭？')
          .then((res)=> {
            
           done()
            console.log(res);
          })
          .catch((err)=> {
            console.log(err);
          });
      },
     ...mapActions(['getUserList','getState','getParty','getDelete','getAmend']),
     handleSizeChange(val) {
          this.currentPage = val;
          this.getUserList(
         { pagenum:this.pagenum,
      pagesize:val,
      query:this.query
    
    }
   )
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        this.currentPage = val;
          this.getUserList(
         { pagenum:val,
      pagesize:this.pagesize,
      query:this.query
    
    }
   )
        console.log(`当前页: ${val}`);
      },
     //修改状态
     change(row){
    this.getState({
     uId: row.id,
       type: row.mg_state,
      pagenum:this.pagenum,
      pagesize:this.pagesize,
      query:this.query  
    }) 
      this.$emit('change'); 
     },
     //获取下标
     indexMethod(index){
       return index*1+1
     },
     click(){
      this.$emit('click');
     },
   },
   mounted() {
   this.getUserList(
    { pagenum:this.pagenum,
      pagesize:this.pagesize,
      query:this.query
    
    }
   )
   
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