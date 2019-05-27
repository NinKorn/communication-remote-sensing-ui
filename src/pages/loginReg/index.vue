<style lang="less" scope>
.login-reg {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  min-height: 100vh;
  background-color: #060427;

  .content {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;
    img {
      width: 100%;
    }
  }

  .login-footer {
    width: 100%;
    position: absolute;
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
export default {};
</script>


