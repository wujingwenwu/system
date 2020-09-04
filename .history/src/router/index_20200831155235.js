import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Public from '../views/publics/Public'
Vue.use(VueRouter);

const routes = [
  {
    path: '/Home',
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
    name: "首页",
    component: Public,
      children:[
        {
          path: "",
          name: "Home",
          component: Home,
          meta: {
            title: "首页",
            icon:'el-icon-s-home'
          },
         
        
      }     
      ]
  },
  {
    path: "users/user",
    name: "Public",
    component: Public,
    meta: {
      title: "用户管理",
      icon:'el-icon-user-solid',
    },
      children:[
        {
          path: "users/users",
          name: "Users",
          component: () =>import("../views/users/Users"),
          meta: {
            title: "用户列表",
            icon:'el-icon-folder-opened'
          }, 
      }  
         
      ]
  },
  {
    path: "/",
    name: "Public",
    component: Public,
    meta: {
      title: "权限管理",
      icon:'el-icon-folder'
    },
      children:[
        {
          path: "/rights/roles",
          name: "Roles",
          component: () =>import("../views/roles/Roles"),
          meta: {
            title: "角色列表",
            icon:'el-icon-setting'
          }, 
      }, 
      {
        path: "rights/rights",
        name: "Roles",
        component: () =>import("../views/rights/Rights"),
        meta: {
          title: "权限列表",
          icon:'el-icon-c-scale-to-original'
        }, 
    },  
      ]
  },
  {
    path: "/",
    name: "Public",
    component: Public,
    meta: {
      title: "商品管理",
      icon:'el-icon-shopping-bag-2'
    },
      children:[
        {
          path: "/goods",
          name: "Goods",
          component: () =>import("../views/goods/Goods"),
          meta: {
            title: "商品列表",
            icon:'el-icon-bangzhu'
          }, 
      }, 
      {
        path: "/params",
        name: "Params",
        component: () =>import("../views/params/Params"),
        meta: {
          title: "分类参数",
          icon:'el-icon-bell'
        }, 
    }, 
    {
      path: "/categories",
      name: "Categories",
      component: () =>import("../views/categories/Categories"),
      meta: {
        title: "商品分类",
        icon:'el-icon-date'
      }, 
  }, 
      ]
  },
  {
    path: "/",
    name: "Public",
    component: Public,
    meta: {
      title: "订单管理",
      icon:'el-icon-s-order'
    },
      children:[
        {
          path: "/orders",
          name: "Orders",
          component: () =>import("../views/orders/Orders"),
          meta: {
            title: "订单列表",
            icon:'el-icon-folder-add'
          }, 
      }  
         
      ]
  },
  {
    path: "/",
    name: "Public",
    component: Public,
    meta: {
      title: "数据统计",
      icon:'el-icon-message'
    },
      children:[
        {
          path: "/reports",
          name: "Reports",
          component: () =>import("../views/reports/Reports"),
          meta: {
            title: "数据报表",
            icon:'el-icon-position'
          }, 
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
