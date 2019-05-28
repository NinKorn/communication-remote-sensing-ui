<style lang="less" scope>
.login-reg {
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  min-height: 100vh;
  background-color: #F2F6FC;
  // background: linear-gradient(to bottom, #F2F6FC 0%, #ccc 100%);
  .login-footer {
    width: 100%;
  }
}
</style>
<template>
  <div class="login-reg">
      <router-view></router-view>
    <div class="login-footer">
      <footer-main></footer-main>
    </div>
  </div>
</template>
<script>
export default {};
</script>


