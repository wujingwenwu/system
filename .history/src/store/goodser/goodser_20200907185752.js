import api from '../../components/http/api';
import dayjs from 'dayjs';
// import Vue from 'vue'
// import router from '../../router';
import {Message} from 'element-ui';

export default {
  // 开启命名空间 这个文件就是单独的一个vuex的模块
  namespaced: true,
  state: {
    goodser:[],
    list:[]
  },
  mutations: {
    setGoodser(state, data) {
        state.goodser = data
      },
      setList(state, data) {
        state.list = data
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
        commit('setGoodser', res.data.goods)
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
      async getList( {commit},{pagenum,pagesize}) {
        let res = await api.getList({
            pagenum,pagesize  
        })
        console.log(res);
        if (res.meta.status === 200) {
            commit('setList', res.data.result)
         
        };
      },
      //添加商品
      async postGoods( {dispatch},{ goods_name, goods_cat,goods_price,goods_number,goods_weight,query,pagenum,pagesize }) {
        let res = await api.postGoods({
          goods_name, goods_cat,goods_price,goods_number,goods_weight 
        })
        console.log(res);
        if (res.meta.status === 201) {
          dispatch('getGoodser',{
            query,pagenum,pagesize   
          });
         Message.success('创建商品成功')
        };
      },
  },
}