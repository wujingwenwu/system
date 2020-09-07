import api from '../../components/http/api';
// import Vue from 'vue'
// import router from '../../router';
// import {Message} from 'element-ui';

export default {
  // 开启命名空间 这个文件就是单独的一个vuex的模块
  namespaced: true,
  state: {
    goodser:[]
  },
  mutations: {
    setGoodser(state, data) {
        state.goodser = data
      },
  },
  actions: {
    // 所有的请求都写在actions里面
    // action里面的方法可以传两个参数 第一个参数是整个store(vuex对象) 第二个参数是请求的参数
    async getGoodser( {commit},{query,pagenum,pagesize}) {
      console.log(commit);
      let res = await api.getGoodser({
        query,pagenum,pagesize
      })
      console.log(res);
      if (res.meta.status === 200) {
        commit('setGoodser', res.data)
       
      } 
     
    },
    
 
  
   
   
  
  },
}