<style lang="less" scoped>
.header-main {
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  width: 100%;
  padding: 0 30px;
  top: 0;
  left: 0;
  z-index: 999;
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
    display: flex;
    justify-content: flex-end;
    flex: 1;
    p {
      cursor: pointer;
      color: #fff;
    }
    i {
      font-size: 20px;
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
        <el-menu-item index="home">主页</el-menu-item>
        <el-menu-item index="服务市场">服务市场</el-menu-item>
        <el-menu-item index="数据中心">数据中心</el-menu-item>
        <el-menu-item index="数据工厂">数据工厂</el-menu-item>
        <el-menu-item index="developerCenter">开发者中心</el-menu-item>
        <el-menu-item index="资源中心">资源中心</el-menu-item>
        <el-menu-item index="示范应用">示范应用</el-menu-item>
        <el-menu-item index="系统管理">系统管理</el-menu-item>
      </el-menu>
    </div>
    <div class="user-info">
      <!-- <img src="" alt=""> -->
      <!-- <p @click="goUserCenter" >用户中心</p>
      -->
      <el-row class="block-col-2">
        <el-col :span="12">
          <el-dropdown>
            <span class="el-dropdown-link">
              <i class="el-icon-user-solid"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>用户中心</el-dropdown-item>
              <el-dropdown-item>退出登陆</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeIndex: "home"
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      if (key == "home" || key == "developerCenter") {
        this.$router.push("/gateway/" + key);
      }
    },
    goUserCenter() {
      this.$router.push("/gateway/userCenter");
    }
  }
};
</script>

