<template>
<!--订单列表-->
 <div>

 </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const userModule = createNamespacedHelpers('management')
const { mapState, mapActions } = userModule
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
   ...userActions(['getorderss']),
   },
   mounted() {
    this.getorderss()
   },
   watch: {

   },
   computed: {
   ...userActions(['getorderss']),
   }
 }
</script>

<style scoped lang='scss'>

</style>