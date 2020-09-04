<template>
<!--权限列表-->
 <div>

 </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const userModule = createNamespacedHelpers("jurisdiction");
const { mapState, mapActions } = userModule
 export default {
   name:'',
   props:{

    },
   data () {
     return {
    type:'list'
   }
   },
   components: {

   },
   methods: {
    ...mapActions(['getPower']),
   },
   mounted() {
    this.getPower({
      type:this.type
    })
    console.log(this.getPower);
   },
   watch: {

   },
   computed: {
    ...mapState(['orderss'])
   }
 }
</script>

<style scoped lang='scss'>

</style>