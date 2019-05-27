<style lang="less" scoped>
.user-center {
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
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: absolute;
      width: 100%;
      height: 100%;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      .border {
        position: absolute;
        transform: translate(-50%, -50%);
        top: 50%;
        left: 50%;
        width: 60%;
        height: 1px;
        background: linear-gradient(
          to right,
          #000 0%,
          rgba(255, 255, 255, 0.7) 50%,
          #000 100%
        );
      }
      .user-img {
        position: absolute;
        transform: translate(-50%, -50%);
        top: 50%;
        left: 50%;
        padding: 10px;
        background-color: #fff;
        border-radius: 50%;
        z-index: 9;
        .el-icon-user-solid {
          font-size: 45px;
        }
      }
      .user-name {
        position: absolute;
        transform: translate(-50%, 20%);
        top: 50%;
        left: 50%;
        padding: 10px;
        color: #fff;
        text-align: center;
        h3 {
          padding: 10px;
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
  .img-nav {
    width: 100%;
    .img {
      position: relative;
      width: 50%;
      margin: 40px auto;
      img {
        display: block;
        width: 100%;
        height: 300px;
      }
      .nav-content {
        display: flex;
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        li {
          position: relative;
          flex: 1;
          transition: all 2s;
          &:nth-child(2n) {
            background: linear-gradient(
              to bottom,
              rgba(0, 50, 100, 0.3) 0%,
              rgba(255, 255, 255, 0.3) 100%
            );
            &:hover {
              background: linear-gradient(
                to bottom,
                rgba(0, 50, 100, 0.6) 0%,
                rgba(255, 255, 255, 0.3) 70%,
                rgba(255, 255, 255, 0.5) 100%
              );
            }
          }
          &:nth-child(2n-1) {
            background: linear-gradient(
              to top,
              rgba(0, 50, 100, 0.3) 0%,
              rgba(255, 255, 255, 0.3) 100%
            );
            &:hover {
              background: linear-gradient(
                to top,
                rgba(0, 50, 100, 0.7) 0%,
                rgba(0, 50, 100, 0.3) 30%,
                rgba(255, 255, 255, 0.3) 100%
              );
            }
          }
          h3 {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            text-align: center;
            font-size: 18px;
            color: #fff;
          }
          .el-button {
            position: absolute;
            bottom: 20px;
            left: 50%;
            transform: translateX(-50%);
            background: none;
            color: #fff;
            opacity: 0;
            transition: all 0.5s ease-in-out;
          }
          &:hover {
            .el-button {
              opacity: 1;
              bottom: 40px;
            }
          }
        }
      }
    }
  }
}
</style>
<template>
  <div class="user-center">
    <div class="img-title">
      <img src="@/assets/user-content-img.jpg" alt>
      <div class="title">
        <div class="border"></div>
        <div class="user-img">
          <i class="el-icon-user-solid"></i>
        </div>
        <div class="user-name">
          <h3>user</h3>
          <p>武汉大学</p>
        </div>
      </div>
    </div>
    <!-- <div class="nav">
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
      >
        <el-menu-item index="resourceDown">我的服务</el-menu-item>
        <el-menu-item index="newService">我的云盘</el-menu-item>
        <el-menu-item index="3">开发者文档</el-menu-item>
        <el-menu-item index="4">我的服务</el-menu-item>
      </el-menu>
    </div>-->
    <div class="img-nav">
      <div class="img">
        <img src="@/assets/img-nav.png" alt>
        <ul class="nav-content">
          <li>
            <h3>我的服务</h3>
            <el-button plain>查看详情</el-button>
          </li>
          <li>
            <h3>我的云盘</h3>
            <el-button plain>查看详情</el-button>
          </li>
          <li>
            <h3>我的资源</h3>
            <el-button plain>查看详情</el-button>
          </li>
          <li>
            <h3>修改密码</h3>
            <el-button plain @click="goChangPass">点击修改</el-button>
          </li>
        </ul>
      </div>
    </div>
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
    handleSelect() {},
    goChangPass(){
        this.$router.push('/changPass');
    }
  }
};
</script>
