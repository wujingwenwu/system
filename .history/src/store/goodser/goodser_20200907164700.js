import api from '../../components/http/api';
import dayjs from 'dayjs'
import { Message } from 'element-ui';
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
    async getGoodser( {commit},{pagenum,pagesize}) {
      console.log(commit);
      let res = await api.getGoodser({
        pagenum,pagesize
      })
      console.log(res);
      if (res.meta.status === 200) {
        commit('setGoodser', res.data.result)
      };
      res.data.goods.map(item=>{
          item.add_time=dayjs(item.add_time).format('YYYY-MM-DD HH-mm-ss')
      })
    },
    //编辑提交分类
    async getCategories( {dispatch},{id,cat_name,query,pagenum,pagesize}) {
        let res = await api.getCategories({
            id,cat_name
        })
        console.log(res);
        if (res.meta.status === 200) {
          dispatch('getGoodser',{
            query,pagenum,pagesize   
          });
          Message.success('修改用户成功')
        };
      },
         //删除分类
    async deleteOut( {dispatch},{id,query,pagenum,pagesize}) {
        let res = await api.deleteOut({
            id
        })
        console.log(res);
        if (res.meta.status === 200) {
          dispatch('getGoodser',{
            query,pagenum,pagesize   
          });
         
        };
      },
    
 
  
   
   
  
  },
}