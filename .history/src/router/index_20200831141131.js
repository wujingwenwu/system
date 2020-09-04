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
          path: "",
          name: "Home",
          component: Home
        
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
          path: "/users",
          name: "Users",
          component: () =>import("../views/users/Users"),
          meta: {
            title: "用户列表",
            parentPath: '/users'
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
      parentPath: '/rights'
    },
      children:[
        {
          path: "/roles",
          name: "Roles",
          component: () =>import("../views/roles/Roles"),
          meta: {
            title: "角色列表",
            parentPath: '/roles'
          }, 
      }, 
      {
        path: "/rights",
        name: "Roles",
        component: () =>import("../views/rights/Rights"),
        meta: {
          title: "权限列表",
          parentPath: '/rights'
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
      parentPath: '/rights'
    },
      children:[
        {
          path: "/goods",
          name: "Goods",
          component: () =>import("../views/goods/Goods"),
          meta: {
            title: "商品列表",
            parentPath: '/goods'
          }, 
      }, 
      {
        path: "/params",
        name: "Params",
        component: () =>import("../views/params/Params"),
        meta: {
          title: "分类参数",
          parentPath: '/params'
        }, 
    }, 
    {
      path: "/categories",
      name: "Categories",
      component: () =>import("../views/categories/Categories"),
      meta: {
        title: "商品分类",
        parentPath: '/categories'
      }, 
  }, 
      ]
  },
  {
    path: "/",
    name: "Public",
    component: Public,
    meta: {
      title: "数据统计",
      parentPath: '/goods'
    },
      children:[
        {
          path: "/users",
          name: "Users",
          component: () =>import("../views/users/Users"),
          meta: {
            title: "用户列表",
            parentPath: '/users'
          }, 
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
          path: "/users",
          name: "Users",
          component: () =>import("../views/users/Users"),
          meta: {
            title: "用户列表",
            parentPath: '/users'
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
