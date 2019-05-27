<style lang="less">
.register {
  .from {
    width: 450px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 0px 30px 20px 0;
    border-radius: 10px;
    background: linear-gradient(
      to bottom right,
      rgba(0, 0, 0, 0.7) 0%,
      rgba(255, 255, 255, 0.1) 100%
    );
    .title {
      position: relative;
      padding: 10px 20px;
      color: #fff;
      .go-login {
        position: absolute;
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
        color: #fff;
      }
      .el-form-item__content {
        display: flex !important;
        .el-select {
          width: 100%;
        }
        .el-button--small {
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
  <div class="register">
    <div class="from">
      <div class="title">
        <h2>注册</h2>
        <span class="go-login">立即登陆</span>
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
          <el-form-item label="用户名">
            <el-input v-model="form.name"></el-input>
          </el-form-item>

          <el-form-item label="单位">
            <el-select v-model="form.region" placeholder="请选择单位">
              <el-option label="武汉大学" value="shanghai"></el-option>
              <el-option label="第二个" value="beijing"></el-option>
            </el-select>
          </el-form-item>

          <el-form-item
            prop="email"
            label="邮箱"
            :rules="[
                    { required: false, message: '请输入邮箱地址', trigger: 'blur' },
                    { type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur'}
                    ]"
          >
            <el-input v-model="form.email"></el-input>
          </el-form-item>

          <el-form-item prop="phone" label="手机号">
            <el-input v-model="form.phone "></el-input>
          </el-form-item>

          <el-form-item prop="idNum" label="身份证">
            <el-input v-model="form.idNum "></el-input>
          </el-form-item>

          <el-form-item label="密码" prop="pass">
            <el-input type="password" v-model="form.pass" autocomplete="off"></el-input>
          </el-form-item>

          <el-form-item label="确认密码" prop="checkPass">
            <el-input type="password" v-model="form.checkPass" autocomplete="off"></el-input>
          </el-form-item>

          <el-form-item label="验证码">
            <el-input v-model="form.vfCode"></el-input>
            <el-button type="info">获取验证码</el-button>
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
        if (this.form.checkPass !== "") {
          this.$refs.form.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.form.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    var checkPhone = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("手机号不能为空"));
      } else {
        const reg = /^1[3|4|5|7|8][0-9]\d{8}$/;
        console.log(reg.test(value));
        if (reg.test(value)) {
          callback();
        } else {
          return callback(new Error("请输入正确的手机号"));
        }
      }
    };
    var checkIdNum = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("身份证号不能为空"));
      } else {
        const reg = /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;
        console.log(reg.test(value));
        if (reg.test(value)) {
          callback();
        } else {
          return callback(new Error("请输入正确的身份证号"));
        }
      }
    };
    return {
      form: {
        name: "",
        region: "",
        email: "",
        phone: "",
        idNum: "",
        pass: "",
        checkPass: "",
        vfCode: ""
      },
      rules: {
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
        phone: [{ validator: checkPhone, trigger: "blur" }],
        idNum: [{ validator: checkIdNum, trigger: "blur" }]
      }
    };
  },
  methods: {}
};
</script>

