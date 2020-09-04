import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Public from '../views/publics/Public'
Vue.use(VueRouter);

const routes = [
  {
    path: '/home',
    redirect: '/'
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import("../views/login/Login"),
      
  },
  {
    path: "/",
    name: "Public",
    component: Public,
      children:[
        {
          path: "/users",
          name: "Users",
          component: () =>import("../views/users/Users")
        
      }    
      ]
  },
  {
    path: "/",
    name: "Public",
    component: Public,
    meta: {
      title: "用户管理",
      parentPath: '/goods'
    },
      children:[
        {
          path: "",
          name: "Home",
          component: Home
        
      }    
      ]
  },

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
