import api from '../../components/http/api';
// import router from '../../router';
// import {Message} from 'element-ui';

export default {
  // 开启命名空间 这个文件就是单独的一个vuex的模块
  namespaced: true,
  state: {
    power: []
  },
  mutations: {
    setPower(state, data) {
      state.power = data
    }
  },
  actions: {
    // 所有的请求都写在actions里面
    // action里面的方法可以传两个参数 第一个参数是整个store(vuex对象) 第二个参数是请求的参数
  
    async getPower( {commit},{type}) {
      console.log(commit);
      let res = await api.getPower({
        type
      })
      if (res.meta.status === 200) {
        commit('setPower', res.data)
       console.log(res);
      } 
    }
  },
}