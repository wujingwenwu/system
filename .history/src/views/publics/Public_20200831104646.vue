<template>
  <div class="d-f publics j-c-s-a">
    <div>欢迎来到小爱后台系统</div>
    <div>
    <div>  {{ nowDate + ' ' + nowTime + ' ' }}</div>
     <div class="d-f">
     
    <img :src="img" alt="">
    <div>{{weather.type}}</div>
    </div>
    </div>
    
   
  </div>
</template>

<script>

export default {
  name: "",
  props: {},
  data() {
    return {
      nowDate: "", // 当前日期
      nowTime: "", // 当前时间
      hous:'',
      weather:'',
      img:''
    };
  },
  components: {},
  methods: {
      //获取当前时间
    currentTime() {
            setInterval(this.getDate, 500);
        },
        getDate: function() {
            var _this = this;
            let yy = new Date().getFullYear();
            let mm = new Date().getMonth() + 1;
            let dd = new Date().getDate();
            let hh = new Date().getHours();
            this.hous=new Date().getHours()
            let mf =
                new Date().getMinutes() < 10
                    ? "0" + new Date().getMinutes()
                    : new Date().getMinutes();
               let my =
                new Date().getSeconds() < 10
                    ? "0" + new Date().getSeconds()
                    : new Date().getSeconds();
            _this.nowTime = hh + ":" + mf +":"+ my;
            _this.nowDate = yy + "/" + mm + "/" + dd;
        },
    
  },
  mounted() {
      this.currentTime();
      //获取天气
     this.$axios
      .get("http://wthrcdn.etouch.cn/weather_mini?city=成都")
      .then((res) =>{
        console.log(res.data.data);
        this.weather=res.data.data.forecast[0]//获取到当天的天气
        console.log(this.weather);
        if(this.weather.type=='多云'){
            this.img=require("../../image/90XB9(C7P}7EJ59[7O99%K5.png")
        }

      })
      .catch((err) =>{
        console.log(err);
      });

  },
   // 销毁定时器
    beforeDestroy: function() {
        if (this.getDate) {
            console.log("销毁定时器")
            clearInterval(this.getDate); // 在Vue实例销毁前，清除时间定时器
        }
    },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>