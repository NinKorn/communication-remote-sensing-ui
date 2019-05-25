<style lang="less" scoped>
.header-main {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.5);
  .img {
    flex: 2;
  }
  .header-navigat {
    flex: 7;
    .el-menu {
      background: none !important;
    }
    .el-menu--horizontal {
      border-bottom: none;
      .el-menu-item {
        height: 40px;
        line-height: 40px;
        color: #fff;
        &.is-active {
          background: none !important;
        }
        &:not(.is-disabled):hover {
          background: none;
          border-bottom: 2px solid #409eff !important;
        }
      }
    }
  }
  .user-info {
    flex: 1;
    p {
      color: #fff;
    }
  }
}
</style>
<template>
  <div class="header-main">
    <div class="img">图片</div>
    <div class="header-navigat">
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
      >
        <el-menu-item index="主页">主页</el-menu-item>
        <el-menu-item index="服务市场">服务市场</el-menu-item>
        <el-menu-item index="数据中心">数据中心</el-menu-item>
        <el-menu-item index="数据工厂">数据工厂</el-menu-item>
        <el-menu-item index="开发者中心">开发者中心</el-menu-item>
        <el-menu-item index="资源中心">资源中心</el-menu-item>
        <el-menu-item index="示范应用">示范应用</el-menu-item>
        <el-menu-item index="系统管理">系统管理</el-menu-item>
      </el-menu>
    </div>
    <div class="user-info">
      <!-- <img src="" alt=""> -->
      <p>用户中心</p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeIndex: "主页"
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

