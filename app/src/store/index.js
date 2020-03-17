import Vue from 'vue';
import Vuex from 'vuex'
Vue.use(Vuex)

//先取本地数据,如果有,那么就给data赋值,没有,就|| 或操作赋一个初始值
let data = localStorage.getItem('userInfo')
if(data){
    data = JSON.parse(data)
}

export default new Vuex.Store({
    state:{
        userLogin:false,
        userDataStore: data ||  {userName:""},
        count:0,
    },
    getters:{
        getUserLogin(state){
            return state.userLogin
            console.log(state.userLogin)
        },
        gettersCount(state){
            return state.count
        }
    },
    mutations:{
        userLoginFun(state,{item,userName}){
            state.userLogin=item;
            state.userDataStore.userName=userName;
            localStorage.setItem('userInfo', JSON.stringify(state.userDataStore))
        },
        userLogout(state,{item,userName}){
            state.userLogin=item;
            state.userDataStore.userName=userName;
            localStorage.removeItem('userInfo')
        },
        mutationsCount(state , item){
            state.count++;
            console.log(item)
        }

    },
    actions:{
        actionCount(state){
            let obj={
                name:'tom',
                age:'9'
            }
            state.commit('mutationsCount',obj)
        }
    }
})