<style lang="less" scoped>
.resource-down {
  padding: 10px 50px;
  .resource-box {
    .child-title {
      padding: 10px 0;
      h3 {
        font-weight: 500;
      }
    }
    //   sdk
    .sdk-box {
      display: flex;
      justify-content: space-between;
      width: 100%;
      padding: 10px;
      //   background-color: #ccc;
      .box {
        position: relative;
        width: 20%;
        background-color: #fff;
        .boder {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 3px;
          background: linear-gradient(to right, #8bedda 0%, #1688c4 100%);
          transition: all 2s;
        }
        .box-content {
          width: 100%;
          border-left: 1px solid #ebeef5;
          border-right: 1px solid #ebeef5;
          border-bottom: 1px solid #ebeef5;
          min-height: 150px;
        }
        &:hover {
          .boder {
            transform: rotateY(180deg);
            // background: linear-gradient(to right, #7ee1ff 0%, #b23aff 100%);
            background: linear-gradient(to right, #1688c4 0%, #1688c4 100%);
            // background-color: #1688c4;
          }
        }
      }
    }
    //   项目模板
    .model-box {
      display: flex;
      justify-content: space-between;
      width: 100%;
      padding: 10px;
      .box {
        position: relative;
        width: 20%;
        min-height: 200px;
        background-color: #fff;
        box-shadow: 0 0 5px rgba(110, 235, 208, .7);
        border: 1px solid #fff;
        transition: all 1s;
        &:hover{
            box-shadow: 0 0 5px rgba(0,50,255,0.4),0 0 7px rgba(0,0,0,0.2);
            border: 1px solid #409eff;
        }
      }
    }
  }
}
</style>

<template>
  <div class="resource-down">
    <div class="resource-box">
      <div class="child-title">
        <h3>空间信息服务SDK</h3>
      </div>
      <div class="sdk-box">
        <div class="box">
          <div class="boder"></div>
          <div class="box-content"></div>
        </div>
        <div class="box">
          <div class="boder"></div>
          <div class="box-content"></div>
        </div>
        <div class="box">
          <div class="boder"></div>
          <div class="box-content"></div>
        </div>
        <div class="box">
          <div class="boder"></div>
          <div class="box-content"></div>
        </div>
      </div>
    </div>
    <div class="resource-box">
      <div class="child-title">
        <h3>项目模板</h3>
      </div>
      <div class="model-box">
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
      </div>
    </div>
  </div>
</template>
