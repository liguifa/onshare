<template>
  <div class="onshare-login">
    <div class="onshare-login-form">
      <h1>登录</h1>
      <Input class="onshare-login-form-item" v-model="username" placeholder="帐号" />
      <Input class="onshare-login-form-item" type="password" v-model="password" placeholder="密码" />
      <div class="onshare-login-form-code">
        <Input class="onshare-login-form-item onshare-login-form-item-code" type="text" v-model="code" placeholder="验证码" />
        <img class="onshare-login-form-item-img" src="http://localhost:3001/getVerificationCode" />
      </div>
      <div class="onshare-login-form-item">
        <Checkbox v-model="remember">记住我</Checkbox>
        <router-link class="onshare-login-form-item-register" :to="'/register'" replace>没有帐号？</router-link>
      </div>
      <Button class="onshare-login-form-item onshare-login-form-item-btn" type="primary" @click="login">登录</Button>
    </div>
  </div>
</template>

<script>


export default {
  name: 'app',
  data() {
    return {
      username:"",
      password:"",
      remember:false,
      isLoading:false
    }
  },
  methods:{
    async login(){
      let result = await this.http.post("/login/",{username:this.username,password:this.password});
      if(result.isSuccess){
        this.$store.dispatch("login",{username:this.username, remember:this.remember})
        this.$router.push("/")
      } else {
        this.$Message.error({
          content:"登录失败，用户名或密码错误."
        })
      }
    }
  }
}
</script>

<style>
html,body{
  height: 100%;
  width: 100%;
  overflow: hidden;
  margin: 0px;
  padding: 0px;
}

.onshare-login{
  width:100%;
  height:100%;
  margin: 0px;
  padding: 0px;
}

.onshare-login-form{
  width: 400px;
  height: 325px;
  display: flex;
  flex-direction: column;
  align-self: center;
  justify-content: center;
  background: #ffffff;
  border: 1px solid #d1dbe5;
  box-shadow: 0 2px 4px 0 rgba(0,0,0,.12), 0 0 6px 0 rgba(0,0,0,.04);
  padding: 20px 20px 20px 20px;
  position: fixed;
  top:0px;
  left: 0px;
  bottom:0px;
  right:0px;
  margin: auto;
  border-radius: 5px;
  text-align: center;
}

.onshare-login-form-item{
  margin: 10px 0px;
  text-align: left;
}

.onshare-login-form-item-btn{
  margin: 10px 0px;
  text-align: center;
}

.onshare-login-form-item-register{
  float:right;
}

.onshare-login-form-code{
  display: flex;
  flex-direction: row;
  justify-content:space-between;
  padding-bottom: 10px;
}

.onshare-login-form-item-code{
  width: 58%;
}

.onshare-login-form-item-img{
  height: 32px;
  width: 38%;
  margin-top: 5px;
}
</style>