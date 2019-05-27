<style lang="less" scoped>
.chang-pass {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  .from-content {
    position: relative;
    width: 40%;
    padding: 40px 20px;
    margin: 100px auto;
    border: 1px solid #ccc;
    border-radius: 10px;
    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 50px;
      height: 50px;
      background-color: #ffff;
      border-top: 1px solid #ccc;
      z-index: 9;
      transform: rotate(-45deg) translateY(27%);
    }
    &::after {
      content: "修改";
      position: absolute;
      top: 0;
      left: 0;
      width: 50px;
      height: 50px;
      line-height: 50px;
      border-radius: 50%;
      text-align: center;
      background-color: #1e4c6e;
      color: #fff;
      transform: translate(-30%, -30%);
      transform-origin: 50%;
    }
    .border {
      position: absolute;
      top: 0;
      left: 0;
      width: 50px;
      height: 50px;
      line-height: 50px;
      // text-align: center;
      color: #000;
      z-index: 9;
      transform: translate(50%);
    }
    .user {
        position: absolute;
        top: 0;
        right: 0;
        padding: 10px 20px;
        // background-color: pink;
        transform: translateY(-100%);
        span:nth-child(2n-1){
            padding: 0 10px;
            color: #3a8ee6;
        }
        
        span:nth-child(2) {
            display: inline-block;
            width: 1px;
            height: 7px;
            background-color: #ccc;
        }
        span:nth-child(3) {
            cursor: pointer;
            
        }
    }
    .button {
      // margin-left: 100px;
      display: flex;
      justify-content: center;
    }
  }
}
</style>
<template>
  <div class="chang-pass">
    <div class="from-content">
      <div class="user">
        <span>user</span>
        <span></span>
        <span>返回</span>
      </div>
      <div class="border">密码</div>
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="旧密码" prop="oldPass">
          <el-input type="password" v-model="ruleForm.oldPass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="新密码" prop="pass">
          <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="确认新密码" prop="checkPass">
          <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
        </el-form-item>
        <div class="button">
          <el-button type="primary" round>确认修改</el-button>
        </div>
      </el-form>
    </div>
    <footer-main></footer-main>
  </div>
</template>

<script>
export default {
  data() {
    var validateOldPass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入旧密码"));
      } else {
        if (this.ruleForm.pass !== "") {
          this.$refs.ruleForm.validateOldPass("pass");
        }
        callback();
      }
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else if (value == this.ruleForm.oldPass) {
        callback(new Error("新密码与旧密码一样!"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        oldPass: "",
        pass: "",
        checkPass: ""
      },
      rules: {
        oldPass: [{ validator: validateOldPass, trigger: "blur" }],
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }]
      }
    };
  }
};
</script>
