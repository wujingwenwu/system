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
        <div v-if="active===0">
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
              <el-input-number
                :disabled="ruleForm.name===''?true:false"
                v-model="ruleForm.plices"
                controls-position="right"
                class="input"
              ></el-input-number>
            </el-form-item>
            <el-form-item label="商品重量" prop="weights">
              <el-input-number
                :disabled="ruleForm.plices==0 ?true:false"
                v-model="ruleForm.weights"
                controls-position="right"
                class="input"
              ></el-input-number>
            </el-form-item>
            <el-form-item label="商品数量" prop="number">
              <el-input-number
                :disabled="ruleForm.weights===0?true:false"
                v-model="ruleForm.number"
                controls-position="right"
                class="input"
              ></el-input-number>
            </el-form-item>
            <el-form-item label="商品分类" prop="classification">
              <el-cascader
                :disabled="ruleForm.number===0?true:false"
                v-model="value"
                :props="props"
                :options="list"
              ></el-cascader>
            </el-form-item>
          </el-form>
          <el-button type="success" v-if="value !==''" @click="nextStep">下一步</el-button>
        </div>
        <div v-if="active===1" class="m-l-20">
          <el-button type="success" v-if="value !==''" @click="nextStepa">下一步</el-button>
        </div>
        <div v-if="active===2" class="m-l-20">
          <div>暂无属性</div>
          <el-button type="success" v-if="value !==''" @click="nextSteps">下一步</el-button>
        </div>
        <div v-if="active===3">
          <el-upload
            class="upload-demo"
            drag
            action="https://jsonplaceholder.typicode.com/posts/"
            multiple
          >
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">
              将文件拖到此处，或
              <em>点击上传</em>
            </div>
            <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
          </el-upload>
          <el-button type="success" @click="nextStepd">下一步</el-button>
        </div>
        <div v-if="active===4">
          <div id="main">
            <mavon-editor v-model="values" />
            <el-button type="success" @click="nextStepf">提交</el-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const userModule = createNamespacedHelpers("goodser");
const { mapState, mapActions } = userModule;
export default {
  name: "",
  props: {
    goodser: {
      type: Array
    }
  },
  data() {
    return {
      values:'',
      props: {
        value: "cat_id",
        label: "cat_name"
      },
      active: 0,
      pagenum: 1,
      pagesize: 10,
      value: "",
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
        plices: [{ required: true, message: "请输入价格", trigger: "blur" }],
        weights: [{ required: true, message: "请输入重量", trigger: "blur" }],
        number: [{ required: true, message: "请输入数量", trigger: "blur" }]
      },
      query:'',
      pagenums:1,
      pagesizes:10,

    };
  },
  components: {},
  methods: {
    ...mapActions(["getList","postGoods"]),
    click(index) {
      console.log(index);
      this.actives = index;
    },
    //下一步
    nextStep() {
      this.active = 1;
      this.actives = 1;
    },
    nextStepa() {
      this.active = 2;
      this.actives = 2;
    },
    nextSteps() {
      this.active = 3;
      this.actives = 3;
    },
    nextStepd(){
      this.active = 4;
      this.actives = 4;
    },
    //提交
    nextStepf(){
      console.log(this.ruleForm.name);
       console.log(this.value.join(','));
        console.log(this.ruleForm.plices);
         console.log(this.ruleForm.number);
          console.log(this.ruleForm.weights);
    this.postGoods({
        goods_name:this.ruleForm.name,
         goods_cat:this.value.join(','),
         goods_price:this.ruleForm.plices,
         goods_number:this.ruleForm.number,
         goods_weight:this.ruleForm.weights,
       query:this.query,
       pagenum:this.pagenum,
       pagesize:this.pagesize 
    }
    )
    },
  },
  mounted() {
    console.log(this.goodser);
    this.getList({
      pagenum: this.pagenum,
      pagesize: this.pagesize
    });
  },
  watch: {},
  computed: {
    ...mapState(["list"])
  }
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