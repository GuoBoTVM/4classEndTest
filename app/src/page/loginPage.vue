<template>
  <div class="login_page">
      <headCom />
      <div class="login_box">
          <img class="login_icon" src="@/assets/logo.png">
          <i-input size="large" class="my_input" v-model="userData.userName" placeholder="请输入用户名" style="width: 80%">
              <Icon type="ios-person-outline" slot="prepend"></Icon>
          </i-input>
          <i-input size="large" class="my_input" v-model="userData.password" placeholder="请输入密码" style="width: 80%">
              <Icon type="ios-checkmark" slot="prepend"></Icon>
          </i-input>
          <i-button class="my_button" type="primary" @click="loginFun()">登陆</i-button>
          {{userLogin}}
          {{userDataStore}}
          {{getUserLogin}}
      </div>
  </div>
</template>

<script>
import { mapGetters,mapMutations } from "vuex"
export default {
    name:'loginPage',
    components:{
    },
    data(){
        return{
            userData:{
                userName:'',
                password:'',
            },
        }
    },
    methods:{
        loginFun(){
            let obj={
                item:true,
                userName:this.userData.userName,
            }
            this.$store.commit('userLoginFun',obj)
            this.$router.push('/admin')
        },
    },
    computed:{
        ...mapGetters([
            'getUserLogin',
        ]),
        userLogin(){
            return this.$store.state.userLogin
        },
        userDataStore(){
            return this.$store.state.userDataStore
        }
    }
}
</script>

<style lang='less'>
.login_page{
    width: 100%;
    display: flex;
    flex-direction: column;
    .login_box{
        display: flex;
        flex-direction: column;
        width: 50%;
        margin: 0 auto;
        margin-top: 50px;
        .login_icon{
            width:200px;
            height: 200px;
            margin: 0 auto;
            margin-bottom: 40px;
            animation: mymoveout .5s linear;
            animation-fill-mode:forwards;
            &:hover{
                animation: mymovein .5s linear;
                animation-fill-mode:forwards;
            }
            @keyframes mymovein{
                from{
                    transform: rotate(0deg);
                }
                to{
                    transform: rotate(-90deg);
                }
            }
            @keyframes mymoveout{
                from{
                    transform: rotate(-90deg);
                }
                to{
                    transform: rotate(0deg);
                }
            }
        }
        .my_input{
            margin: 20px auto;
        }
        .my_button{
            width: 80%;
            margin: 20px auto;;
        }
    }
}
</style>