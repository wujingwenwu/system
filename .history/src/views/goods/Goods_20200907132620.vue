<template>
  <!--商品列表-->
  <div>
    <!--编辑商品-->
    <el-dialog title="提示" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
      <!--编辑商品的input-->
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="商品名称" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="商品价格" prop="price">
          <el-input-number v-model="ruleForm.price" controls-position="right" class="inputs"></el-input-number>
        </el-form-item>
        <el-form-item label="商品数量" prop="num">
          <el-input-number v-model="ruleForm.num" controls-position="right" class="inputs"></el-input-number>
        </el-form-item>
        <el-form-item label="商品重量" prop="weight">
          <el-input-number v-model="ruleForm.weight" controls-position="right" class="inputs"></el-input-number>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
    <div class="d-f m-t-20">
      <el-input placeholder="请输入搜索内容" class="input m-l-10" v-model="input" clearable></el-input>
      <div class="m-l-20">
        <el-button type="primary">添加商品</el-button>
      </div>
    </div>
    <el-table :data="goodser" style="width: 100%">
      <el-table-column type="index" :index="indexMethod" label="#" width="180"></el-table-column>
      <el-table-column prop="goods_name" label="商品名称" width="300"></el-table-column>
      <el-table-column prop="goods_price" label="商品价格(元)"></el-table-column>
      <el-table-column prop="goods_weight" label="商品重量"></el-table-column>
      <el-table-column prop="add_time" label="创建时间"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            type="primary"
            size="mini"
            icon="el-icon-edit-outline" @click="edits(scope.row)"
          ></el-button>
          <el-button type="danger" size="mini" icon="el-icon-delete"></el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const userModule = createNamespacedHelpers("goodser");
const { mapState, mapActions } = userModule;
export default {
  name: "",
  props: {},
  data() {
    return {
      query: "",
      pagenum: "1",
      pagesize: "10",
      input: "",
      dialogVisible: false,
      ruleForm: {
        name: "",
        num: "",
        price: "",
        weight: ""
      },
      rules: {
        name: [{ required: true, message: "请输入商品名称", trigger: "blur" }],
        price: [
          { required: true, message: "商品价格不能为空", trigger: "blur" }
        ],
        num: [{ required: true, message: "商品数量不能为空", trigger: "blur" }],
        weight: [
          { required: true, message: "商品重量不能为空", trigger: "blur" }
        ]
      }
    };
  },
  components: {},
  methods: {
    ...mapActions(["getGoodser"]),
    //获取下标
    indexMethod(index) {
      return index * 1 + 1;
    },
    //关闭按钮
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
    //编辑
    edits(row) {
      this.dialogVisible = true;
      console.log(row);
      this.ruleForm.name=row.goods_name,
      this.ruleForm.price=row.goods_price,
      this.ruleForm.num=row.goods_number,
      this.ruleForm.weight=row.
    }
  },
  mounted() {
    this.getGoodser({
      query: this.query,
      pagenum: this.pagenum,
      pagesize: this.pagesize
    });
  },
  watch: {},
  computed: {
    ...mapState(["goodser"])
  }
};
</script>

<style scoped lang='scss'>
.input {
  width: 300px;
}
.inputs {
  width: 315px;
}
</style>