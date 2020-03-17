<template>
  <div>
      <headCom />
      <h1>登陆成功!</h1>
      {{userData.userName}}你接下来进行什么操作?
  </div>
</template>

<script>
export default {
    computed:{
        userData(){
            return this.$store.state.userDataStore;
        }
    }
}
</script>

<style>

</style>