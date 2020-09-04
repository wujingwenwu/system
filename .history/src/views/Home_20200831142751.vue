<template>
 <div>
    
 
 </div>
</template>

<script>

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
   ...userActions(['getMenus']),
   },
   mounted() {
   this.getMenus()
   },
   watch: {

   },
   computed: {
   ...userState(['menus'])
   }
 }
</script>

<style scoped lang='scss'>
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
</style>
