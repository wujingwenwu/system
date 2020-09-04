<template>
 <div >
  <Encapsulation @change="change(index,row)"></Encapsulation>
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
     this.value===false
     console.log(index, row);
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