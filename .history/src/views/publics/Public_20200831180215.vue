<template>
<div>
  <div class="d-f publics j-c-s-a m-t-20">
    <div>欢迎来到小爱后台系统</div>
    <div class="d-f">
    <div>  {{ nowDate + ' ' + nowTime + ' ' }}</div>
     <div class="d-f m-l-10">
     
    <img :src="img" alt="" class="img">
    <div class="m-l-10">{{weather.type}}</div>
    <div>最{{weather.high}}</div>
    <div class="m-l-10">最{{weather.low}}</div>
    <div class="m-l-20">亲爱的,{{user}}</div>
    <div class="m-l-10 color">退出</div>
    </div>
    </div>
  </div>
  <div class="d-f">
  <el-menu
      :default-active="$route.path"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose" unique-opened router>
       <el-menu-item index="/">
        <i class="el-icon-s-home"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-submenu :index="item.path" v-for="(item,index) in menus" :key="index" >
        <template slot="title">
         <i :class="item.icon"></i>
         <span>{{item.authName}}</span>
        </template>
        <el-menu-item-group v-for="(item1,index1) in item.children" :key="index1">
        
          <el-menu-item :index="item1.path"><i :class="item1.icon"></i>{{item1.authName}}</el-menu-item>
         
        </el-menu-item-group>
      </el-submenu>
      
    
     
    </el-menu>
    <div>
    <div class="show"></div>
    <div></div>
  <router-view></router-view>
  </div>
  </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const userModule = createNamespacedHelpers('publics')
const { mapState: userState, mapActions: userActions } = userModule
export default {
  name: "",
  props: {},
  data() {
    return {
      nowDate: "", // 当前日期
      nowTime: "", // 当前时间
      hous:'',
      weather:'',
      img:'',
      user:'',
      routes:''
    };
  },
  components: {},
  methods: {
    handleOpen(){

    },
    handleClose(){

    },
      ...userActions(['getMenus']),
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
    console.log(this.$router);
    this.routes=this.$router.options.routes
       this.getMenus()  
      this.currentTime();
      //获取天气
     this.$axios
      .get("http://wthrcdn.etouch.cn/weather_mini?city=成都")
      .then((res) =>{
        // console.log(res.data.data);
        this.weather=res.data.data.forecast[0]//获取到当天的天气
        // console.log(this.weather);
        if(this.weather.type=='多云'){
            this.img=require("../../image/90XB9(C7P}7EJ59[7O99%K5.png")
        }if(this.weather.type=='晴天'){
          this.img=require("../../image/{}BC(0D8R~BDMVK70GMGXYT.png")
        }

      })
      .catch((err) =>{
        console.log(err);
      });
    this.user=localStorage.getItem('user')
  },
   // 销毁定时器
    beforeDestroy: function() {
        if (this.getDate) {
            console.log("销毁定时器")
            clearInterval(this.getDate); // 在Vue实例销毁前，清除时间定时器
        }
    },
  watch: {},
  computed: {
     ...userState(['menus'])  
  }
};
</script>

<style scoped lang='scss'>
.img{
    width: 45px;
    height: 30px;
}
.color{
    color: rgb(31, 31, 231);
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
  .show{
    width: 1140px;
   height: 1px;
   background: #999;

  }
</style>