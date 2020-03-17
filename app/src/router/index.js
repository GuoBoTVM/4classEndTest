import Vue from 'vue'
import Router from 'vue-router'
import indexPage from '@/page/index'
import loginPage from '@/page/loginPage'
import registerPage from '@/page/registerPage'
import adminPage from '@/page/adminPage'
import storePage from '@/page/storeTest'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'indexPage',
      component: indexPage
    },{
      path: '/login',
      name: 'loginPage',
      component: loginPage,
      meta:{
        logoutRequire:true,
      }
    },{
      path: '/reg',
      name: 'registerPage',
      component: registerPage,
      meta:{
        logoutRequire:true,
      }
    },{
      path: '/admin',
      name: 'adminPage',
      component: adminPage,
      meta:{
        loginRequire:true,
      }
    },
    {
      path:'/storetest',
      name:storePage,
      component:storePage,
    }
  ]
})
