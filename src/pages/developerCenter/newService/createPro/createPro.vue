<style lang="less" scoped>
.creat-pro {
  width: 40%;
  margin: 20px auto;
  text-align: center;
  .iconfont {
    position: relative;
    font-size: 35px;
    animation: showicon 2s ease-out 0s infinite;
  }
  @keyframes showicon {
    0% {
      top: 0;
    }
    50% {
      top: 10px;
    }
    100% {
      top: 0px;
    }
  }
}
</style>
<template>
  <div class="creat-pro">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="名称">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="所属单位">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="所属单位">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="所属单位" v-show="isShow">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="所属单位" v-show="isShow">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="所属单位" v-show="isShow">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
    </el-form>
    <div class="button" v-show="isShow">
        <el-button type="primary">提交</el-button>
    </div>
    <span class="iconfont icon-Down-" v-show="!isShow" @click="isShow = !isShow" ></span>
    <!-- <span class="iconfont icon-Up-" v-show="isShow" @click="isShow = !isShow" ></span> -->
    
  </div>
</template>
<script>
export default {
  data() {
    return {
      isShow: false,
      form: {
        name: ""
      }
    };
  }
};
</script>


