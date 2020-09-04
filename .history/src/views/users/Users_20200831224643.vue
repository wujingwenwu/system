<template>
 <div >
  <Encapsulation @change="change(index,row)" @click="click"></Encapsulation>
 </div>
</template>

<script>
import Encapsulation from '../../components/encapsulation/Encapsulation'
 export default {
   name:'',
   props:{

    },
   data () {
     return {

   }
   },
   components: {
   Encapsulation
   },
   methods: {
   change(index,row){
     this.value===false,
     console.log(index, row);
   },
   click(){
     alert("11111")
   }
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

</style>