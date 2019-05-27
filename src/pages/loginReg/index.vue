<style lang="less" scope>
.login-reg {
  display: flex;
  align-items: center;
  justify-items: center;
  min-height: 100vh;
  background-color: #060427;
  .content {
    position: relative;
    width: 100%;
    img {
      width: 100%;
    }
    
  }
  .login-footer {
    width: 100%;
    position: fixed;
    bottom: 0;
  }
}
</style>
<template>
  <div class="login-reg">
    <div class="content">
      <img src="../../assets/login.png" alt>
      <router-view></router-view>
    </div>
    <div class="login-footer">
      <footer-main></footer-main>
    </div>
  </div>
</template>
<script>
export default {
  
};
</script>


