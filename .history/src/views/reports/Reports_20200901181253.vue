<template>
<!--数据报表-->
 <div>
  <el-card class="box-card">
      <div id="myChart" :style="{width: '100%', height: '400px'}"></div>
    </el-card>
 </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const userModule = createNamespacedHelpers('report')
const { mapState: userState, mapActions: userActions } = userModule
 export default {
   name:'',
   props:{

    },
   data () {
     return {
    reports:[]
   }
   },
   components: {

   },
   methods: {
   drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("myChart"));
      // 绘制图表
      myChart.setOption({
        // title: { text: "堆叠区域图" },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            label: {
              backgroundColor: "#6a7985"
            }
          }
        },
        legend: {
          data: ["邮件营销", "联盟广告", "视频广告", "直接访问", "搜索引擎"]
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
          }
        ],
        yAxis: [
          {
            type: "value"
          }
        ],
        series: 
      });
    },
        ...userActions(['getReports']),
   },
   mounted() {
    this.drawLine();
    this.getReports()
    console.log(this.data);
    
   },
   watch: {

   },
   computed: {
     ...userState(['data'])
      
   }
 }
</script>

<style scoped lang='scss'>

</style>