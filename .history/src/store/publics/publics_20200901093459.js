import api from '../../components/http/api';
import router from '../../router';
import Vue from 'vue'
// import {Message} from 'element-ui';

export default {
    // 开启命名空间 这个文件就是单独的一个vuex的模块
    namespaced: true,
    state: {
        menus: [],
        users:[]
    },
    mutations: {
        setMenus(state, data) {
            state.menus = data
        }
    },
    mutations: {
        setUsers(state, data) {
            state.users = data
        }
    },
    actions: {
        async getMenus({ commit }) {
            let res = await api.getMenus()
            if (res.meta.status === 200) {
                // 提交mutation
                commit('setMenus', res.data)
                console.log(res.data);
            }
            res.data.map(item => {
                item.children.map(item1 => {
                    item1.path = `/${item.path}/${item1.path}`
                })
            })
            res.data.map(item => {
                item.path = `/${item.path}`
            })
            res.data.map(item1 => {
                router.options.routes.map(item2 => {
                    if (item1.path === item2.path) {
                        Vue.set(item1, 'icon', item2.meta.icon)
                        item1.children.map(child1 => {
                            item2.children.map(child2 => {
                                if (child1.path === child2.meta.path) {
                                    Vue.set(child1, 'icon', child2.meta.icon)
                                }
                            })
                        })
                    }
                })
            });
        },
    },
    async getUserList( {commit},{pagenum,pagesize,query}) {
       kry {
        console.log(commit);
        let res = await api.getUserList({
            pagenum,pagesize,query
        })
        if (res.meta.status === 200) {
          console.log(res);
        } 
       } catch(err){
        console.log(err);
       }
      }
}