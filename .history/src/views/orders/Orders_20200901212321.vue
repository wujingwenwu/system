<template>
<!--订单列表-->
 <div>

 </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const userModule = createNamespacedHelpers('management')
const { mapState, mapActions: userActions } = userModule
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
   ...userActions(['geTorderss']),
   },
   mounted() {
    this.geTorderss()
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