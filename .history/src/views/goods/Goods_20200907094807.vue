<template>
<!--商品列表-->
 <div>
 goods
 </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const userModule = createNamespacedHelpers("goodser");
const { mapState, mapActions } = userModule;
 export default {
   name:'',
   props:{

    },
   data () {
     return {
     
     pagenum:'1',
     pagesize:'10'
   }
   },
   components: {

   },
   methods: {
 ...mapActions(["getGoods"]),
   },
   mounted() {
    this.getGoods({
   
      pagenum:this.pagenum,
      pagesize:this.pagesize 
    })
   },
   watch: {

   },
   computed: {
    ...mapState(["goods"])
   }
 }
</script>

<style scoped lang='scss'>

</style>