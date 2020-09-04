<template>
<!--订单列表-->
 <div>

 </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const userModule = createNamespacedHelpers('management')
const { mapState: userState, mapActions: userActions } = userModule
 export default {
   name:'',
   props:{

    },
   data () {
     return {
    pagesize:1,
    query:'',pagenum:'',pagesize:'',user_id,pay_status:'',is_send:'',order_fapiao_title:'',order_fapiao_company:'',order_fapiao_content:'',consignee_addr:'',
   }
   },
   components: {

   },
   methods: {
   ...userActions(['getOrderss']),
   },
   mounted() {
    this.getOrderss({
      pagesize:this.pagesize
    })
   },
   watch: {

   },
   computed: {
   ...userState(['orderss'])
   }
 }
</script>

<style scoped lang='scss'>

</style>