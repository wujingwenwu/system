<template>
 <div class="login">
  <div class="m-t-40">
  <div class="login1 d-f f-d-c a-i-c">
  <div class="f-w system m-t-20">欢迎来到小爱后台管理系统</div>
<div class="show"></div>
  </div>
  </div>
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

   },
   mounted() {

   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>
.login{
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.login1{
  width: 500px;
  height: 400px;
   box-shadow: 0px 5px 10px #9999;
}
.system{
  font-size: 24px;
}
.show{
  width: 100%;
  height: 1px;
  background: #9999;
}
</style>