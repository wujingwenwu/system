import Vue from "vue";
import Vuex from "vuex";
import login from './login/login';
import publics from './publics/publics'
Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    login,
    publics
  }
});
