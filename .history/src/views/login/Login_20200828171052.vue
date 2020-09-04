<template>
 <div class="login">
  <div class="m-t-40">
  <div class="login1 d-f f-d-c a-i-c">
  <div class="f-w system m-t-20">欢迎来到小爱后台管理系统</div>
<div class="show m-t-10"></div>
<div class="m-t-20">
<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="150px" class="demo-ruleForm">
   <el-form-item label="请输入用户名" prop="name">
    <el-input v-model="ruleForm.name"></el-input>
  </el-form-item>
  <el-form-item label="请输入密码" prop="name">
    <el-input v-model="ruleForm.name"></el-input>
  </el-form-item>
</el-form>
</div>
<div class="m-t-10">特别提醒: 如果您是管理员,请使用管理员账号登录,如果不知道账号,请联系公司人事。</div>
<el-button type="primary" class="m-t-20">主要按钮</el-button>
  </div>
  </div>
 </div>
</template>

<script>
 export default {
   name:'',
   props:{

    },
   data () {
     return {
       ruleForm: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        rules: {
          name: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          region: [
            { required: true, message: '请选择活动区域', trigger: 'change' }
          ],
          date1: [
            { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
          ],
          date2: [
            { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
          ],
          type: [
            { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
          ],
          resource: [
            { required: true, message: '请选择活动资源', trigger: 'change' }
          ],
          desc: [
            { required: true, message: '请填写活动形式', trigger: 'blur' }
          ]
        }
   }
   },
   components: {

   },
   methods: {

   },
   mounted() {

   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>
.login{
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.login1{
  width: 600px;
  height: 400px;
   box-shadow: 0px 5px 10px #9999;
}
.system{
  font-size: 24px;
}
.show{
  width: 100%;
  height: 1px;
  background: #9999;
}
</style>