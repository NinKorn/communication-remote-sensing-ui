<style lang="less" scoped>
.new-service {
  padding: 10px 50px;
 .nav{
     display: flex;
     justify-content: center;
     justify-items: center;
     .nav-box{
         padding: 10px 20px;
         font-size: 16px;
         &.active{
             border-bottom: 2px solid #1688c4;
         }
     }
 }
}
</style>
<template>
  <div class="new-service">
    <div class="nav">
        <div :class="name=='createPro'?'nav-box active':'nav-box'" @click="checkTitle('createPro')" >项目创建</div>
        <div :class="name=='serviceUpgrade'?'nav-box active':'nav-box'" @click="checkTitle('serviceUpgrade')">服务升级</div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
    data() {
        return {
            name:'createPro',
        }
    },
    methods: {
        checkTitle(name){
            this.name = name;
            this.$router.push('/gateway/developerCenter/newService/'+name);
        }
    },
};
</script>
