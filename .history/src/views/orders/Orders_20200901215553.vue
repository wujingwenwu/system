<template>
  <!--订单列表-->
  <div></div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const userModule = createNamespacedHelpers("management");
const {   mapState: userState, mapActions: userActions } = userModule;
export default {
  name: "",
  props: {},
  data() {
    return {
      pagesize: 1,
      query: "",
      pagenum: 10,
      user_id: "",
      pay_status: "",
      is_send: "",
      order_fapiao_title: "",
      order_fapiao_company: "",
      order_fapiao_content: "",
      consignee_addr: ""
    };
  },
  components: {},
  methods: {
    
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