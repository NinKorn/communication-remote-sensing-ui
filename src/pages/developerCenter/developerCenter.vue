<style lang="less" scoped>
.developer-center {
  .img-title {
    position: relative;
    width: 100%;
    height: 299px;
    overflow: hidden;
    img {
      width: 100%;
      height: 300px;
      display: block;
      vertical-align: bottom;
    }
    .title {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      h2 {
        color: #fff;
      }
      .border {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: -15px;
        height: 2px;
        width: 60%;
        background-color: #fff;
        &::after {
          position: absolute;
          transform: translate(80%, -50%);
          top: -50%;
          right: 0;
          content: "";
          width: 15px;
          height: 15px;
          border-radius: 50%;
          background-color: #fff;
        }
        &::before {
          position: absolute;
          transform: translate(200%, -100%);
          top: -200%;
          right: 0;
          content: "";
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background-color: #fff;
          animation: after 10s ease 0s infinite;
        }
      }
      @keyframes after {
        0% {
          opacity: 0.9;
        }
        50% {
          opacity: 0.3;
        }

        100% {
          opacity: 0.7;
        }
      }
    }
  }
  .nav {
    width: 100%;
    padding: 0 50px;
    background-color: rgba(0, 0, 0, 1);
    .el-menu.el-menu--horizontal {
      background: none;
      border: none;
      .el-menu-item {
        height: 40px;
        line-height: 40px;
        color: #fff;
      }
      .el-menu-item.is-active {
        background: none;
        height: 40px;
        line-height: 40px;
        color: #fff;
        // background: linear-gradient(to right bottom, #7ee1ff 0%, #637dff 100%);
        background-color: rgba(255, 255, 255, 0.2);
      }
      .el-menu-item:not(.is-disabled):hover {
        // background: linear-gradient(to right bottom, #7ee1ff 0%, #637dff 100%);
        background-color: rgba(255, 255, 255, 0.2);
        color: #fff;
      }
    }
  }
  .child-title {
    position: relative;
    width: 100%;
    padding: 30px 10px 10px;
    h2 {
      text-align: center;
    }
    .border {
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 80px;
      height: 2px;
      background-color: #409eff;
    }
  }
}
</style>
<template>
  <div class="developer-center">
    <div class="img-title">
      <img src="@/assets/developer-center-bgc.jpg" alt>
      <div class="title">
        <h2>开发者中心</h2>
        <div class="border"></div>
      </div>
    </div>
    <div class="nav">
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
      >
        <el-menu-item index="resourceDown">资源下载</el-menu-item>
        <el-menu-item index="newService">在线服务</el-menu-item>
        <el-menu-item index="3">开发者文档</el-menu-item>
        <el-menu-item index="4">我的服务</el-menu-item>
      </el-menu>
    </div>
    <div class="child-title">
      <h2>{{ activeName }}</h2>
      <div class="border"></div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "resourceDown",
      activeName: "资源下载"
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      if (key == 3 || key == 4) return;
      switch (key) {
        case "resourceDown":
          this.activeName = "资源下载";
          break;
        case "newService":
          this.activeName = "在线服务";
          break;
        default:
          break;
      }

      this.$router.push("/gateway/developerCenter/" + key);
    }
  }
};
</script>


