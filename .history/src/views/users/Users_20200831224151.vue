<template>
 <div >
  <Encapsulation @click="click"></Encapsulation>
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
   click(){
    //  this.value===false
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