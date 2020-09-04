<template>
<!--订单列表-->
 <div>

 </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const userModule = createNamespacedHelpers('management')
const {  mapActions: userActions } = userModule
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
   ...userActions(['geTorderss']),
   },
   mounted() {
    this.geTorderss({
      pagesize:this.pagesize
    })
   },
   watch: {

   },
   computed: {
   ...userActions(['geTorderss']),
   }
 }
</script>

<style scoped lang='scss'>

</style>