<template>
  <!--订单列表-->
  <div>
  <el-table
    :data="orderss"
    border
    style="width: 100%">
    <el-table-column
      type="index"
      :index="indexMethod" align="center"
      label="#" 
      width="180">
    </el-table-column>
    <el-table-column
      prop="order_number" align="center"
      label="订单编号"
      width="180">
    </el-table-column>
    <el-table-column
      prop="order_price" align="center"
      label="订单价格">
    </el-table-column>
     <el-table-column
      prop="pay_statuss" align="center"
      label="是否付款">
         <template slot-scope="scope">
        <el-tag
       
          :type="scope.row.pay_statuss === '未付款'? 'primary' : 'danger'"
          disable-transitions>{{scope.row.pay_statuss}}</el-tag>
      
     
      </template>
    </el-table-column>
    <el-table-column
      prop="is_send" align="center"
      label="是否发货">
    </el-table-column>
    <el-table-column
      prop="order_price" align="center"
      label="下单时间">
    </el-table-column>
     <el-table-column
       align="center"
      label="操作">
          <template slot-scope="scope">
        <el-button
          size="mini" icon="el-icon-edit" type="primary"
          @click="handleEdit(scope.$index, scope.row)"></el-button>
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
        <el-button
          size="mini" icon="el-icon-location-outline"
          type="success"
          @click="handleDelete(scope.$index, scope.row)"></el-button>
      </template>
    </el-table-column>
  </el-table>
  
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const userModule = createNamespacedHelpers("management");
const { mapState, mapActions } = userModule
export default {
  name: "",
  props: {},
  data() {
    return {
      pagesize: 27,
      query: "",
      pagenum: 1,
      user_id: "",
      pay_status: "",
      is_send: "",
      order_fapiao_title: "",
      order_fapiao_company: "",
      order_fapiao_content: "",
      consignee_addr: "",
         tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }]
    };
  },
  components: {},
  methods: {
      //获取下标
     indexMethod(index){
       return index*1+1
     },
       ...mapActions(['getOrderss']),
  },
  mounted() {
    this.getOrderss({
      pagesize: this.pagesize,
      // query: this.query,
      pagenum: this.pagenum,
      // user_id: this.user_id,
      // pay_status: this.pay_status,
      // is_send: this.is_send,
      // order_fapiao_title: this.order_fapiao_title,
      // order_fapiao_company: this.order_fapiao_company,
      // order_fapiao_content: this.order_fapiao_content,
      // consignee_addr: this.consignee_addr,
    });
  },
  watch: {},
  computed: {
    ...mapState(['orderss'])
  }
};
</script>

<style scoped lang='scss'>
</style>