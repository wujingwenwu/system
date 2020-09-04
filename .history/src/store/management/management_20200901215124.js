import api from '../../components/http/api';
// import router from '../../router';
// import {Message} from 'element-ui';

export default {
  // 开启命名空间 这个文件就是单独的一个vuex的模块
  namespaced: true,
  state: {
    orderss:[]
  },
  mutations: {
    setOrderss(state, data) {
        state.orderss = data
    },
  },
  actions: {
    // 所有的请求都写在actions里面
    // action里面的方法可以传两个参数 第一个参数是整个store(vuex对象) 第二个参数是请求的参数
  
    async getOrderss({ commit }, {query,pagenum,pagesize,user_id,pay_status,is_send,order_fapiao_title,order_fapiao_company,order_fapiao_content,consignee_addr}) {
      
      let res = await api.getOrderss({
        query,pagenum,pagesize,user_id,pay_status,is_send,order_fapiao_title,order_fapiao_company,order_fapiao_content,consignee_addr
      })
      if (res.meta.status === 200) {
        // 存储信息
        commit('setOrderss', res.data.goods)
       console.log(res.data);
      } 
    }
  },
}