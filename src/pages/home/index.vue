<style lang="less" scoped>
.home {
  .swiper-slide {
    width: 100%;
    img {
      width: 100%;
      height: 300px;
    }
  }
  // 内容区域
  .main {
    width: 100%;
    padding-bottom: 20px;
    background-color: #f8f8f9;
    .main-item {
      width: 100%;
      background-color: #fff;
      padding-bottom: 20px;
      margin-bottom: 30px;
      .title {
        display: flex;
        justify-content: center;
        padding: 20px 0;
        .title-text {
          text-align: center;
          padding: 10px;
        }
      }
      .main-box {
        margin: 0 auto;
        width: 80%;
        display: flex;
        justify-content: space-between;
        // 应用示范
        .demonstration-box {
          display: flex;
          padding: 10px;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 20%;
          transition: all 2s ease-out;
          i {
            font-size: 45px;
          }
          .title {
          }
          .info {
            p {
              color: #999;
            }
          }
          .href {
            padding: 10px;
            a {
              color: #007aff;
            }
          }
          &:hover {
            box-shadow: 0 0 7px #ccc, 0 0 4px #007aff;
            i {
              color: #007aff;
            }
            .info {
              p {
                color: rgb(121, 121, 121);
              }
            }
          }
        }
        // 最新数据
        .new-data-box {
          display: flex;
          padding: 10px;
          justify-content: center;
          align-items: center;
          width: 100%;
          .data-img-content {
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex: 9;
            .data-img-box {
              position: relative;
              width: 18%;

              img {
                width: 100%;
              }
              .box-info {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-color: rgba(0, 0, 0, 0.3);
                z-index: 9;
                p {
                  position: absolute;
                  padding: 10px;
                  color: #fff;
                  transition: all 1s;
                }
                .el-button {
                  position: absolute;
                  bottom: 0;
                  transform: translateY(-25px);
                  opacity: 0;
                  background-color: transparent;
                  padding: 7px 20px;
                  color: #409eff;
                  transition: all 1s;
                }
                &:hover {
                  p {
                    transform: translateY(-20px);
                  }
                  .el-button {
                    opacity: 1;
                  }
                }
              }
            }
          }
          .data-more-box {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            flex: 1;
            height: 100%;
            // background-color: #ccc;
            i {
              position: relative;
              transform: translateX(-5px);
              font-size: 30px;
              color: #007aff;
              animation: iconx 2s ease-out 0s infinite;
            }
            p {
              color: #007aff;
            }
            @keyframes iconx {
              0% {
                transform: translateX(-5px);
              }
              50% {
                transform: translateX(5px);
              }
              100% {
                transform: translateX(-5px);
              }
            }
            //  Firefox
            @-moz-keyframes iconx {
              0% {
                transform: translateX(-5px);
              }
              50% {
                transform: translateX(5px);
              }
              100% {
                transform: translateX(-5px);
              }
            }
            // /* Safari 和 Chrome */
            @-webkit-keyframes iconx {
              0% {
                transform: translateX(-5px);
              }
              50% {
                transform: translateX(5px);
              }
              100% {
                transform: translateX(-5px);
              }
            }
            // /* Opera */
            @-o-keyframes iconx {
              0% {
                transform: translateX(-5px);
              }
              50% {
                transform: translateX(5px);
              }
              100% {
                transform: translateX(-5px);
              }
            }
          }
        }
      }
      // 在线服务
      .service-content {
        display: flex;
        justify-content: center;
        margin: 0 auto;
        width: 60%;
        height: 200px;
        .service-box {
          width: 200px;
          background-color: #ccc;
        }
      }
    }
  }
}
</style>

<template>
  <div class="home">
    <!-- 轮播图 -->
    <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide>
        <img src="@/assets/banner-1.png" alt>
      </swiper-slide>
      <swiper-slide>
        <img src="@/assets/banner-1.png" alt>
      </swiper-slide>
      <swiper-slide>
        <img src="@/assets/banner-1.png" alt>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
    <!-- 内容区域 -->
    <div class="main">
      <!-- 应用示范 -->
      <div class="main-item">
        <div class="title">
          <span class="title-text">
            <h2>应用示范</h2>
          </span>
        </div>
        <div class="main-box">
          <div class="demonstration-box">
            <i class="el-icon-truck"></i>
            <div class="title">
              <h3>物流示范</h3>
            </div>
            <div class="info">
              <p>用户选择传感器、采集时间等属性信息或行政区划、绘制范围、经纬度、导入shape等空间信息，可对影像数据进行数据查询和结果导出，并提供数据订购和下载功能</p>
            </div>
            <div class="href">
              <a href="#">了解更多</a>
            </div>
          </div>
          <div class="demonstration-box">
            <i class="el-icon-truck"></i>
            <div class="title">
              <h3>资源审计</h3>
            </div>
            <div class="info">
              <p>用户选择传感器、采集时间等属性信息或行政区划、绘制范围、经纬度、导入shape等空间信息，可对影像数据进行数据查询和结果导出，并提供数据订购和下载功能</p>
            </div>
            <div class="href">
              <a href="#">了解更多</a>
            </div>
          </div>
          <div class="demonstration-box">
            <i class="el-icon-truck"></i>
            <div class="title">
              <h3>减灾示范</h3>
            </div>
            <div class="info">
              <p>用户选择传感器、采集时间等属性信息或行政区划、绘制范围、经纬度、导入shape等空间信息，可对影像数据进行数据查询和结果导出，并提供数据订购和下载功能</p>
            </div>
            <div class="href">
              <a href="#">了解更多</a>
            </div>
          </div>
        </div>
      </div>
      <!-- 最新数据 -->
      <div class="main-item">
        <div class="title">
          <span class="title-text">
            <h2>最新数据</h2>
          </span>
        </div>
        <div class="main-box">
          <div class="new-data-box">
            <div class="data-img-content">
              <div class="data-img-box">
                <img src="@/assets/data-img.jpg" alt>
                <div class="box-info">
                  <p>数据一</p>
                  <el-button plain>查看详情</el-button>
                </div>
              </div>
              <div class="data-img-box">
                <img src="@/assets/data-img.jpg" alt>
                <div class="box-info">
                  <p>数据二</p>
                  <el-button plain>查看详情</el-button>
                </div>
              </div>
              <div class="data-img-box">
                <img src="@/assets/data-img.jpg" alt>
                <div class="box-info">
                  <p>数据三</p>
                  <el-button plain>查看详情</el-button>
                </div>
              </div>
              <div class="data-img-box">
                <img src="@/assets/data-img.jpg" alt>
                <div class="box-info">
                  <p>数据四</p>
                  <el-button plain>查看详情</el-button>
                </div>
              </div>
            </div>
            <div class="data-more-box">
              <i class="el-icon-d-arrow-right"></i>
              <p>更多</p>
            </div>
          </div>
        </div>
      </div>
      <!-- 在线服务 -->
      <div class="main-item">
        <div class="title">
          <span class="title-text">
            <h2>在线服务</h2>
          </span>
        </div>
        <div class="service-content">
          <div class="service-box">服务升级</div>
          <div class="service-box">创建项目</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      swiperOption: {
        autoplay: {
          delay: 10000, //自动切换的时间间隔，单位ms
          disableOnInteraction: true //用户操作swiper之后，是否禁止autoplay。
        },
        navigation: {
          nextEl: ".swiper-button-next", //前进按钮的css选择器或HTML元素。
          prevEl: ".swiper-button-prev", //后退按钮的css选择器或HTML元素。
          disabledClass: "my-button-disabled", //前进后退按钮不可用时的类名。
          hiddenClass: "my-button-hidden" //按钮隐藏时的Class
        },
        pagination: {
          el: ".swiper-pagination",
          type: "bullets",
          progressbarOpposite: true, //使进度条分页器与Swiper的direction参数相反
          bulletElement: "li", //设定分页器指示器（小点）的HTML标签。
          dynamicBullets: true, //动态分页器，当你的slide很多时，开启后，分页器小点的数量会部分隐藏。
          hideOnClick: true, //默认分页器会一直显示。这个选项设置为true时点击Swiper会隐藏/显示分页器。
          clickable: true //此参数设置为true时，点击分页器的指示点分页器会控制Swiper切换。
        }
      }
    };
  }
};
</script>
