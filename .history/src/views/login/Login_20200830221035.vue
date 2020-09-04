<template>
  <div class="login">
    <div class="m-t-40">
      <div class="login1 d-f f-d-c a-i-c">
        <div class="f-w system m-t-20">欢迎来到小爱后台管理系统</div>
        <div class="show m-t-10"></div>
        <div class="m-t-20">
          <el-form
            :model="ruleForm"
            :rules="rules"
            ref="ruleForm"
            label-width="150px"
            class="demo-ruleForm"
          >
            <el-form-item label="用户名" prop="username" placeholder="请输入用户名">
              <el-input v-model="ruleForm.username"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
              <el-input v-model="ruleForm.password" show-password placeholder="请输入密码"></el-input>
            </el-form-item>
          </el-form>
        </div>
        <div class="m-t-10">特别提醒: 如果您是管理员,请使用管理员账号登录,如果不知道账号,请联系公司人事。</div>
        <div class="m-t-20">
          <el-button type="primary" @click="click(ruleForm)">立即登录</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  data() {
    return {
      ruleForm: {
        password: "123456",
        username: "admin"
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名称", trigger: "blur" },
          { min: 3, max: 8, message: "长度在 3 到 8 个字符", trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 3, max: 8, message: "长度在 3 到 8 个字符", trigger: "blur" }
        ]
      }
    };
  },
  components: {},
  methods: {
    //登录
    click(ruleForm) {
       this.$refs[ruleForm].validate((valid) => {
          if (valid) {
              this.$store.dispatch("login/login", {
      
        username: this.ruleForm.username,
        password: this.ruleForm.password,
      });
          } else {
            console.log('error submit!!');
            return false;
          }
        });


     
     
    }
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang="scss">
.login {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.login1 {
  width: 600px;
  height: 400px;
  box-shadow: 0px 5px 10px #9999;
}
.system {
  font-size: 24px;
}
.show {
  width: 100%;
  height: 1px;
  background: #9999;
}
</style>