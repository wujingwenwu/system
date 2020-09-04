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
    pagesize:1
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
   ...userActions(['getOrderss']),
   }
 }
</script>

<style scoped lang='scss'>

</style>