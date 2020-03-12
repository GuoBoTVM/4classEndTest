import Vue from 'vue'
import Router from 'vue-router'
import indexPage from '@/page/index'
import loginPage from '@/page/loginPage'
import registerPage from '@/page/registerPage'
import adminPage from '@/page/adminPage'


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
      component: loginPage
    },{
      path: '/reg',
      name: 'registerPage',
      component: registerPage
    },{
      path: '/admin',
      name: 'adminPage',
      component: adminPage
    },
  ]
})
