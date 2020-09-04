import api from '../../components/http/api';
import Vue from 'vue'
// import router from '../../router';
import {Message} from 'element-ui';

export default {
  // 开启命名空间 这个文件就是单独的一个vuex的模块
  namespaced: true,
  state: {
    power: [],
    roles:[]
  },
  mutations: {
    setPower(state, data) {
      state.power = data
    },
    setRoles(state, data) {
      state.roles = data
    },
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
       console.log(res.data);
      } 
      res.data.map(item=>{
          if(item.level==='0'){
            Vue.set(item, 'levels','一级')
          }if(item.level==='1'){
            Vue.set(item, 'levels','二级')  
          }if(item.level==='2'){
            Vue.set(item, 'levels','三级')   
          }
      })
    },
    //角色列表
    async getRoles( {commit}) {
      console.log(commit);
      let res = await api.getRoles(
      )
      console.log(res);
      if (res.meta.status === 200) {
        commit('setRoles', res.data)
       console.log(res);
      } 
    },
    //添加角色
    async postAddrole( {dispatch},{roleName,roleDesc}) {
      let res = await api.postAddrole({
        roleName,roleDesc
      }
      )
      if (res.meta.status === 200) {
        dispatch('getRoles',
        )
        Message.success('添加用户成功')
       console.log(res);
      } 
    },
  },
}