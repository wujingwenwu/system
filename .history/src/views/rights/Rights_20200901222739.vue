<template>
<!--权限列表-->
 <div>
rights
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

   }
   },
   components: {

   },
   methods: {
    ...mapActions(['getPower']),
   },
   mounted() {
    this.getPower({
      type:list
    })
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