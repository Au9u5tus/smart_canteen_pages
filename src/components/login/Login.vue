<template>
  <div class="login-container">
    <el-card class="login-card">
      <template #header>
        <div class="card-header">用户登录</div>
      </template>
      <el-form :model="loginForm" :rules="loginRules" ref="loginFormRef" label-width="80px">
        <el-form-item label="用户名" prop="username">
          <el-input v-model="loginForm.username" size="mini"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="loginForm.password" size="mini"></el-input>
        </el-form-item>
        <el-form-item label="角色" >
          <el-select v-model="loginForm.role" size="mini">
            <el-option v-for="item in roleList" :key="item.dictionaryKey" :value="item.dictionaryKey" :label="item.dictionaryValue" ></el-option>

          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleLogin"  size="mini">登录</el-button>
          <el-button @click="resetForm" size="mini">重置</el-button>
          <el-button @click="register" type="info" size="mini">注册</el-button>
        </el-form-item>
      </el-form>
    </el-card>
    <el-dialog append-to-body :visible.sync="registerDialogVisible" title="用户注册" width="30%">
      <register></register>
    </el-dialog>
  </div>
</template>

<script>
import request from '@/js/request'
import Register from "./Register";
export default {
  name:'login',
  created() {
    // this.$axios.post('/api/smart-canteen/user/login')
    //     .then(response=>console.log(response))
    //     .catch(error=>console.log(error))

  },
  components:{
    Register
  },
  data() {
    return {
      registerDialogVisible:false,
      loginForm: {
        username: '',
        password: '',
        role:'1'
      },
      loginRules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      },
      roleList:[
        {dictionaryKey:'1',dictionaryValue:'学生'},
        {dictionaryKey:'2',dictionaryValue:'食堂管理员'}
      ]
    };
  },
  methods: {
    handleLogin() {
      this.$refs.loginFormRef.validate((valid) => {
        if (valid) {
          // 这里可以添加登录请求的逻辑
          console.log('登录成功，用户名：', this.loginForm.username);
          request.post('/canteen/user/login',
              {
                username:this.loginForm.username,
                password:this.loginForm.password
              }).then(response=>{
                localStorage.setItem("token",response.data);
                this.$router.push({path:'/index'});
              }).catch(error=>{
                console.log(error)
          });
        } else {
          console.log('验证失败');
          return false;
        }
      });
    },
    register(){
      this.registerDialogVisible=true;
    },
    resetForm() {
      this.$refs.loginFormRef.resetFields();
    }
  }
};
</script>

<style scoped>
#login-container {

}

.login-card {
  width: 350px;
}

.card-header {
  text-align: center;
  font-size: 20px;
  font-weight: bold;
}
</style>