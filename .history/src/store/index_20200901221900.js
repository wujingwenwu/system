import Vue from "vue";
import Vuex from "vuex";
import login from './login/login';
import publics from './publics/publics';
import report from './report/report';
import management  from './management/management';
import jurisdiction from './jurisdiction/jurisdiction'
Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    login,
    publics,
    report,
    management,
    jurisdiction
  }
});
