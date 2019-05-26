<style lang="less" scoped>
.footer {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  background-color: #fff;
  padding: 20px;
  .border {
    width: 60%;
    height: 1px;
    background: -moz-linear-gradient(left, #fff 0%, #000 50%, #fff 100%);
    background: -webkit-gradient(
      linear,
      left,
      right,
      color-stop(0%, #fff),
      color-stop(50%, #000),
      color-stop(100%, #fff)
    );
    background: -webkit-linear-gradient(left, #fff 0%, #000 50%, #fff 100%);
    background: -o-linear-gradient(left, #fff 0%, #000 50%, #fff 100%);
    background: -ms-linear-gradient(left, #fff 0%, #000 50%, #fff 100%);
    background: linear-gradient(to right, #fff 0%, #000 50%, #fff 100%);
  }
  .text {
      font-size: 12px;
      color: #999;
      height: 40px;
      line-height: 40px;
  }
}
</style>

<template>
  <div class="footer">
    <div class="border"></div>
    <!-- <div class="text"> -->
      <p class="text">CopyRight &copy; 中国电子科技集团有限公司 All Rights Reserved</p>
    <!-- </div> -->
  </div>
</template>

<script>
export default {};
</script>
