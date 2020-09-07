<template>
  <div class="back">
    <div class="add">添加商品信息</div>
    <div class="m-t-20">
      <el-steps :space="200" :active="active" finish-status="success" align-center>
        <el-step title="基本信息"></el-step>
        <el-step title="商品参数"></el-step>
        <el-step title="商品属性"></el-step>
        <el-step title="商品图片"></el-step>
        <el-step title="商品内容"></el-step>
        <el-step title="完成"></el-step>
      </el-steps>
    </div>
    <div class="m-t-20 d-f m-l-20">
      <div class="d-f">
        <div>
          <div v-for="(item,index) in arr" :key="index">
            <div class="d-f" @click="click(index)">
              <div class="m-t-10" :class="[actives==index?'activeer':'']">{{item.name}}</div>
              <div class="m-t-10">
                <div class="show1" :class="[actives==index?'show2':'']"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="m-l-10 show m-t-10"></div>
        <div>
          <el-form
            :model="ruleForm"
            :rules="rules"
            ref="ruleForm"
            label-width="100px"
            class="demo-ruleForm"
          >
            <el-form-item label="商品名称" prop="name">
              <el-input v-model="ruleForm.name" class="input"></el-input>
            </el-form-item>
            <el-form-item label="商品价格" prop="plices">
              <el-input-number :disabled="ruleForm.name===''?true:false"  v-model="ruleForm.plices" controls-position="right" class="input"></el-input-number>
            </el-form-item>
            <el-form-item label="商品重量" prop="weights">
              <el-input-number :disabled="ruleForm.plices==0 ?true:false" v-model="ruleForm.weights" controls-position="right" class="input"></el-input-number>
            </el-form-item>
            <el-form-item label="商品数量" prop="number">
              <el-input-number :disabled="ruleForm.weights===0?true:false" v-model="ruleForm.number" controls-position="right" class="input"></el-input-number>
            </el-form-item>
            <el-form-item label="商品分类" prop="classification">
              <el-cascader :disabled="ruleForm.number===0?true:false" v-model="ruleForm.classification" :options="goodser"></el-cascader>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
      goodser:{
          type:Array
      }
  },
  data() {
    return {
        
      active: 0,
      arr: [
        {
          name: "基本信息"
        },
        {
          name: "商品参数"
        },
        {
          name: "商品属性"
        },
        {
          name: "商品图片"
        },
        {
          name: "商品内容"
        }
      ],
      actives: 0,
      ruleForm: {
        name: "",
        plices: "",
        weights: "",
        number: ""
      },
      rules: {
        name: [{ required: true, message: "请输入基本内容", trigger: "blur" }],
        plices: [
          { required: true, message: "请输入价格", trigger: "blur" }
        ],
        weights: [
          { required: true, message: "请输入基本内容", trigger: "blur" }
        ],
        number: [{ required: true, message: "请输入基本内容", trigger: "blur" }]
      }
    };
  },
  components: {},
  methods: {
    click(index) {
      console.log(index);
      this.actives = index;
    }
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.back {
  width: 1100px;
  height: 600px;
  box-shadow: 0px 5px 5px #9999;
  margin-left: 30px;
  margin-top: 20px;
}
.add {
  width: 800px;
  height: 30px;
  background: rgba(226, 223, 223, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  margin-top: 20px;
  margin-left: 100px;
}
.show {
  width: 1px;
  height: 150px;
  background: #9999;
}
.show1 {
  width: 1px;
  height: 30px;

  position: absolute;
  margin-left: 10px;
}
.activeer {
  color: rgb(63, 63, 224);
}
.show2 {
  background: rgb(63, 63, 224);
}
.input {
  width: 800px;
}
</style>