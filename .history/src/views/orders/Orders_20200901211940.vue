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

   }
   },
   components: {

   },
   methods: {
   ...userActions(['getReports']),
   },
   mounted() {

   },
   watch: {

   },
   computed: {
   ...userActions(['getReports']),
   }
 }
</script>

<style scoped lang='scss'>

</style>