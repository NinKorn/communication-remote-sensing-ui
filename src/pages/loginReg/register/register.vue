<style lang="less">
.register {
  margin-top: 50px;
  min-height: 500px;
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
      padding: 10px 20px;
      // color: #fff;
      .go-login {
        position: absolute;
        cursor: pointer;
        right: 0;
        top: 50%;
        font-size: 12px;
        color: #409eff;
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
  <div class="register">
    <h3>通导遥一站式服务平台</h3>
    <div class="from">
      <div class="title">
        <h2>注册</h2>
        <span class="go-login" @click="goLogin">立即登陆</span>
      </div>
      <div class="from-content">
        <el-form
          :model="form"
          status-icon
          :rules="rules"
          ref="form"
          size="mini"
          label-width="100px"
          class="demo-ruleForm"
        >
          <el-form-item prop="name" label="用户名">
            <el-input v-model="form.name"></el-input>
          </el-form-item>

          <el-form-item label="单位" prop="deptName">
            <el-select v-model="form.deptName" placeholder="请选择单位">
              <el-option
                v-for="item in deptNames"
                :label="item.name"
                :value="item.name"
                :key="item.id"
              ></el-option>
            </el-select>
          </el-form-item>

          <el-form-item prop="email" label="邮箱">
            <el-input v-model="form.email "></el-input>
          </el-form-item>

          <el-form-item prop="mobile" label="手机号">
            <el-input v-model="form.mobile "></el-input>
          </el-form-item>

          <el-form-item prop="realName" label="真实姓名">
            <el-input v-model="form.realName"></el-input>
          </el-form-item>

          <el-form-item prop="idNum" label="身份证">
            <el-input v-model="form.idNum "></el-input>
          </el-form-item>

          <el-form-item label="密码" prop="password">
            <el-input type="password" v-model="form.password" autocomplete="off"></el-input>
          </el-form-item>

          <el-form-item label="确认密码" prop="checkPass">
            <el-input type="password" v-model="form.checkPass" autocomplete="off"></el-input>
          </el-form-item>

          <el-form-item prop="vfCode" label="验证码">
            <el-input v-model="form.vfCode"></el-input>
            <!-- <el-button type="info">获取验证码</el-button> -->
            <div class="code" @click="refreshCode">
              <s-identify :identifyCode="identifyCode"></s-identify>
            </div>
          </el-form-item>
        </el-form>
        <div class="button">
          <el-button type="primary" @click="register('form')">注册</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    // 验证用户名
    var checkName = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("用户名不能为空"));
      } else {
        callback();
      }
    };
    // 验证真实名
    var checkRealName = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("请填写您的真实姓名"));
      } else {
        callback();
      }
    };
    // 验证单位选择
    var checkRegion = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("请选择单位"));
      } else {
        callback();
      }
    };
    // 验证邮箱
    var checkEmail = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("邮箱不能为空"));
      } else {
        const reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((.[a-zA-Z0-9_-]{2,3}){1,2})$/;
        console.log(reg.test(value));
        if (reg.test(value)) {
          callback();
        } else {
          return callback(new Error("请输入正确的邮箱"));
        }
      }
    };
    // 验证密码
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
    // 验证重新输入的密码
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.form.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    // 验证电话号码
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
    // 验证验证码
    var checkVfCode = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("请输入验证码"));
      } else {
        if (value === this.identifyCode) {
          callback();
        } else {
          return callback(new Error("请输入正确的验证码"));
        }
      }
    };
    // 验证身份证
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
      identifyCodes: "1234",
      identifyCode: "",
      deptNames: [],
      form: {
        name: "", //用户名
        deptName: "", //单位
        email: "",
        mobile: "",
        idNum: "", //身份证
        realName: "", //真实姓名
        password: "", //密码
        checkPass: "", //重新输入密码
        vfCode: "" //验证码
      },
      rules: {
        name: [{ validator: checkName, trigger: "blur" }],
        realName: [{ validator: checkRealName, trigger: "blur" }],
        deptName: [{ validator: checkRegion, trigger: "blur" }],
        email: [{ validator: checkEmail, trigger: "blur" }],
        password: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
        mobile: [{ validator: checkPhone, trigger: "blur" }],
        vfCode: [{ validator: checkVfCode, trigger: "blur" }],
        idNum: [{ validator: checkIdNum, trigger: "blur" }]
      }
    };
  },
  created() {
    this.refreshCode();
    this.getDeptAll();
  },
  methods: {
    // 跳转到登陆页面
    goLogin() {
      this.$router.push("/loginReg/login");
    },
    // 随机验证码
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
    // 随机验证码结束
    // 注册
    register(form) {
      this.$refs[form].validate(valid => {
        if (valid) {
          // console.log("验证成功");
          let userInfo = {
            name: this.form.name,
            deptName: this.form.deptName,
            email: this.form.email,
            mobile: this.form.mobile,
            idNum: this.form.idNum,
            realName: this.form.realName,
            password: this.form.password
          };
          console.log(userInfo);
          //请求注册
          this.$api.register.register(userInfo).then(res => {
            console.log(res);
            if (res.data.code == 200) {
              this.$notify.success({
                title: "注册成功",
                message: '跳转登陆'
              });
            }else {
              this.$notify.info({
                title: res.data.msg
              });
            }
          });
        } else {
          return false;
        }
      });
    },
    // 获取单位列表
    getDeptAll() {
      this.$api.register.deptAll().then(res => {
        console.log(res, "aaa");
        this.deptNames = res.data.data;
      });
    }
  }
};
</script>

