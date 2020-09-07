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

   }
   },
   components: {

   },
   methods: {
 ...mapActions(["getGoods"]),
   },
   mounted() {
    this.getGoods()
   },
   watch: {

   },
   computed: {
    ...mapState(["roles","rights"])
   }
 }
</script>

<style scoped lang='scss'>

</style>