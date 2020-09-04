<template>
  <div class="d-f publics j-c-s-a">
    <div>欢迎来到小爱后台系统</div>
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
      
    };
  },
  components: {},
  methods: {
    currentTime() {
            setInterval(this.getDate, 500);
        },
        getDate: function() {
            var _this = this;
            let yy = new Date().getFullYear();
            let mm = new Date().getMonth() + 1;
            let dd = new Date().getDate();
            let hh = new Date().getHours();
            let mf =
                new Date().getMinutes() < 10
                    ? "0" + new Date().getMinutes()
                    : new Date().getMinutes();
         
            _this.nowTime = hh + ":" + mf;
            _this.nowDate = yy + "/" + mm + "/" + dd;
        }

  },
  mounted() {
        this.currentTime();
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>