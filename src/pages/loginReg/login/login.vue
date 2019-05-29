<style lang="less">
.login {
  min-height: 500px;
  margin-top: 50px;
  padding: 50px 0;
  h3 {
    font-size: 18px;
    font-weight: 600;
    padding: 10px;
  }
  .from {
    padding: 10px 50px 30px;
    width: 550px;
    background-color: #fff;
    .title {
      position: relative;
      padding: 10px 20px 20px;
      .go-register {
        position: absolute;
        cursor: pointer;
        right: 0;
        top: 50%;
        font-size: 12px;
        color: #409eff;
        // transform: translateY(-50%);
      }
      h2 {
        text-align: center;
      }
    }
    .from-content {
      .el-form-item__label {
        // color: #fff;
      }
      .el-form-item__content {
        display: flex !important;
        .el-select {
          width: 100%;
        }
        .code {
          margin-left: 10px;
          // width: 60%;
          img {
            width: 100%;
          }
          .s-canvas {
            height: 34px;
          }
        }
        .el-button--info {
          margin-left: 10px;
        }
      }
      .button {
        width: 100%;
        padding-left: 100px;
        .el-button--primary {
          width: 100%;
        }
      }
    }
  }
}
</style>

<template>
  <div class="login">
    <h3>通导遥一站式服务平台</h3>
    <div class="from">
      <div class="title">
        <h2>登陆</h2>
        <span class="go-register" @click="goReg">立即注册</span>
      </div>
      <div class="from-content">
        <el-form
          :model="form"
          status-icon
          :rules="rules"
          ref="form"
          size="small"
          label-width="100px"
          class="demo-ruleForm"
        >
          <el-form-item label="用户名" prop="account">
            <el-input v-model="form.account"></el-input>
          </el-form-item>

          <!-- <el-form-item label="单位">
            <el-select v-model="form.region" placeholder="请选择单位">
              <el-option label="武汉大学" value="shanghai"></el-option>
              <el-option label="第二个" value="beijing"></el-option>
            </el-select>
          </el-form-item>-->

          <el-form-item label="密码" prop="password">
            <el-input type="password" v-model="form.password" autocomplete="off"></el-input>
          </el-form-item>

          <el-form-item label="验证码" prop="captcha">
            <el-input v-model="form.captcha"></el-input>
            <div class="code" @click="refreshCode">
              <s-identify :identifyCode="identifyCode"></s-identify>
              <!-- <img :src="base64Url"> -->
            </div>
          </el-form-item>
        </el-form>
        <div class="button">
          <el-button type="primary" @click="login('form')">登陆</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    // 验证用户名
    var validateName = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入用户名"));
      } else {
        callback();
      }
    };
    // 验证密码
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        callback();
      }
    };
    // 验证验证码
    var validateVfCode = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入验证码"));
      } else {
        if (value === this.identifyCode) {
          callback();
        } else {
          callback(new Error("验证码输入错误"));
        }
      }
    };
    return {
      identifyCodes: "1234567890",
      identifyCode: "",
      base64Url: "",
      form: {
        account: "",
        password: "",
        captcha: ""
      },
      rules: {
        account: [{ validator: validateName, trigger: "blur" }],
        password: [{ validator: validatePass, trigger: "blur" }],
        captcha: [{ validator: validateVfCode, trigger: "blur" }]
      }
    };
  },
  created() {
    this.getCaptcha();
  },
  methods: {
    // 生成随机验证码
    randomNum(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    },
    makeCode(o, l) {
      for (let i = 0; i < l; i++) {
        this.identifyCode += this.identifyCodes[
          this.randomNum(0, this.identifyCodes.length)
        ];
      }
      console.log(this.identifyCode);
    },
    // 从新获取验证码
    refreshCode() {
      this.identifyCode = "";
      this.makeCode(this.identifyCodes, 4);
      // this.getCaptcha();
    },
    // 跳转注册页面
    goReg() {
      this.$router.push("/loginReg/register");
    },
    // 登陆
    login(form) {
      this.$refs[form].validate(valid => {
        if (valid) {
          console.log("验证成功");
          let data = {
            account: this.form.account,
            password: this.form.password
          };
          console.log(data);
          this.$api.login.login(data).then(res => {
            console.log(res, "登陆成功");
            if (res.data.code == 200) {
              this.$store.commit("setPerms", res.data.data);
              localStorage.setItem("token", res.data.data.token);
              this.$notify.success({
                message: '登陆成功'
              });
            } else {
              this.$notify.info({
                message: res.data.data.msg
              });
            }
          });
        } else {
          return false;
        }
      });
      console.log(this.form);
      // this.$refs[form].validateField('name');
    },
    // 获取验证码
    getCaptcha() {
      this.$api.login.captcha().then(res => {
        console.log(res.data, "验证码");
        let imgUrl =
          "data:image/png;base64," +
          btoa(
            new Uint8Array(res.data).reduce(
              (data, byte) => data + String.fromCharCode(byte),
              ""
            )
          );
        this.base64Url = imgUrl;
      });
    }

    // 表单重置
    // resetForm(formName) {
    //   this.$refs[formName].resetFields();
    // },
  }
};
</script>

