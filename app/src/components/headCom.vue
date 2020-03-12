<template>
  <div class="my_header">
      <img class="header_img" src="@/assets/logo.png">

      <div class="header_right">
          <div class="item" @click="jumpTo('/')">首页</div>
          <div class="item" @click="jumpTo('/login')" v-if="!userData.userName">登陆</div>
          <div class="item" @click="jumpTo('/reg')" v-if="!userData.userName">注册</div>
          <div class="item" v-if="userData.userName">欢迎使用:{{userData.userName}}!</div>

          <i-button class="warn_button" type="warning" @click="logoutFun()" v-if="userData.userName">退出登陆</i-button>
      </div>
  </div>
</template>

<script>
export default {
    name:'headCom',
    methods:{
        //路由跳转
        jumpTo(name){
            if(this.$route.path == name)return
            this.$router.push(name)
        },
        logoutFun(){
            let obj={
                item:false,
                userName:'',
            }
            this.$store.commit('userLogout',obj)
        }
    },
    computed:{
        userData(){
            return this.$store.state.userDataStore
        }
    }
}
</script>

<style lang='less'>
.my_header{
    width: 100%;
    height: 100px;
    background: #3399ff;
    display: flex;
    .header_img{
        height: 100px;
        width: 100px;
    }
    .header_right{
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        .item{
            margin:0 10px;
            font-size: 18px;
            color: white;
            cursor: pointer;
        }
        .warn_button{
            margin: 0 20px;
        }
    }
}
</style>