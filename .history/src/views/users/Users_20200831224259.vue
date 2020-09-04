<template>
 <div >
  <Encapsulation @change="change(index,)"></Encapsulation>
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
   change(){
     this.value===false
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