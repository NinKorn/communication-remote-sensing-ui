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
        .code{
          margin-left: 10px;
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
          <el-form-item label="活动名称">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="单位">
            <el-select v-model="form.region" placeholder="请选择单位">
              <el-option label="武汉大学" value="shanghai"></el-option>
              <el-option label="第二个" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="密码" prop="pass">
            <el-input type="password" v-model="form.pass" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="验证码">
            <el-input v-model="form.vfCode"></el-input>
            <!-- <el-button type="info">获取验证码</el-button> -->
            <div class="code" @click="refreshCode">
              <s-identify :identifyCode="identifyCode"></s-identify>
            </div>
          </el-form-item>
        </el-form>

        <div class="button">
          <el-button type="primary">登陆</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    return {
      identifyCodes: "1234567890",
      identifyCode: "",
      form: {
        name: "",
        region: "",
        pass: "",
        checkPass: "",
        vfCode: ""
      },
      rules: {
        pass: [{ validator: validatePass, trigger: "blur" }]
      }
    };
  },
  methods: {
    randomNum(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    },
    refreshCode() {
      this.identifyCode = "";
      this.makeCode(this.identifyCodes, 4);
    },
    makeCode(o, l) {
      for (let i = 0; i < l; i++) {
        this.identifyCode += this.identifyCodes[
          this.randomNum(0, this.identifyCodes.length)
        ];
      }
      console.log(this.identifyCode);
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    goReg() {
      this.$router.push("/loginReg/register");
    }
  }
};
</script>

