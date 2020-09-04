import api from '../../components/http/api';
// import router from '../../router';
// import {Message} from 'element-ui';

export default {
  // 开启命名空间 这个文件就是单独的一个vuex的模块
  namespaced: true,
  state: {
   data:[],
   legend:[],
   xAxis:[]
  },
  mutations: {
    setData(state, data) {
      state.data = data
    },
    setLegend(state, data) {
        state.legend = data
      },
      setXAxis(state, data) {
        state.xAxis = data
      }
  },
  actions: {
    // 所有的请求都写在actions里面
    // action里面的方法可以传两个参数 第一个参数是整个store(vuex对象) 第二个参数是请求的参数
  
    async getReports( {commit}) {
      console.log(commit);
      let res = await api.getReports({
     
      })
      if (res.meta.status === 200) {
          this.data = res.data.series
          commit('setData', res.data.series)
          commit('setXAxis', res.data.xAxis[0].data)
          commit('setLegend', res.data.legend.data)
        console.log(res.data);
      } 
    }
   
  },
}