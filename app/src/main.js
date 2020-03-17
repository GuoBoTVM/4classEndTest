// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

//引入iview
import iview from 'iview'
import 'iview/dist/styles/iview.css'
Vue.use(iview)
//引入store
import store from '@/store/index.js'
//引入所有组件
import cpts from  '@/components/index.js'
Vue.use(cpts)

Vue.config.productionTip = false

router.beforeEach((to , from , next)=>{
  if(to.meta.loginRequire){
    if(store.state.userDataStore.userName){
      next()
    }else{
      next({path:'/login'})
    }
  }else if (to.meta.logoutRequire){

    if(store.state.userLogin){
      next({path:from.path})
    }else{
      next()
    }
  }else{
    next()
  } 
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
