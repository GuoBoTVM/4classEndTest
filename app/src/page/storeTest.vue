<template>
  <div>
      <h3>这是练习store的页面</h3>
      {{gettersCount}}
      <br />
      <button @click="countPlus">点击增加</button>
  </div>
</template>

<script>
//引入getters等
import { mapGetters , mapMutations , mapActions } from 'vuex';
export default {
    name:"storePage",
    computed:{
        // 混入参数
        ...mapGetters([
            'gettersCount'
        ])
    },
    methods:{
        countPlus(){
            let obj={
                like:'39'
            }
            this.mutationsCount(obj);
            //或者  this.actionCount();
        },
        // 混入方法
        ...mapMutations([
            'mutationsCount'
        ]),
        ...mapActions([
            'actionCount'
        ])
    }
}
</script>

<style>

</style>