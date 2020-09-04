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
      prop="create_time" align="center"
      label="下单时间">
    </el-table-column>
     <el-table-column
       align="center"
      label="操作">
          <template>
        <el-button
          size="mini" icon="el-icon-edit" type="primary"
          @click="dialogVisible = true">
          
          </el-button>
          <el-dialog
  title="编辑地址"
  :visible.sync="dialogVisible"
  width="30%"
  :before-close="handleClose">

<el-cascader
    v-model="value"
    :options="citys"
    @change="handleChange"></el-cascader>

  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
  </span>
</el-dialog>
        <el-button
          size="mini" icon="el-icon-location-outline"
          type="success" @click="dialogVisibles = true"
          ></el-button>
          <el-dialog
  title="提示"
  :visible.sync="dialogVisibles"
  width="30%"
  :before-close="handleClose">
    <el-timeline :reverse="reverse">
    <el-timeline-item
      v-for="(activity, index) in activities"
      :key="index"
      :timestamp="activity.timestamp">
      {{activity.content}}
    </el-timeline-item>
  </el-timeline>
  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisibles = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisibles = false">确 定</el-button>
  </span>
</el-dialog>
      </template>
    </el-table-column>
  </el-table>
  
  </div>
</template>

<script>
import city from '../../citydata'
import { createNamespacedHelpers } from "vuex";
const userModule = createNamespacedHelpers("management");
const { mapState, mapActions } = userModule
export default {
  name: "",
  props: {},
  data() {
    return {
      reverse: true,
      dialogVisibles:'',
      citys:'',
      value: [],
      dialogVisible: false,
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
       
    };
  },
  components: {},
  methods: {
        handleChange(value) {
        console.log(value);
      },
      
      //获取下标
     indexMethod(index){
       return index*1+1
     },
     handleClose(done) {
        this.$confirm('确认关闭？')
          .then((res) => {
            console.log(res);
            done();
          })
          .catch((err) => {
            console.log(err);
          });
      },
       ...mapActions(['getOrderss','getLogistics']),
  },
  mounted() {
    this.getLogistics({id:1106975712662})
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

this.citys=city
// console.log(this.citys);
  },
  watch: {},
  computed: {
    ...mapState(['orderss'])
  }
};
</script>

<style scoped lang='scss'>
</style>