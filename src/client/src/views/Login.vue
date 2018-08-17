<template>
  <div class="page">
    <div class="login">
      <h1>登录</h1>
      <Input class="login-item" v-model="username" placeholder="帐号" />
      <Input class="login-item" v-model="password" placeholder="密码" />
      <div class="login-item">
        <Checkbox v-model="remember">记住我</Checkbox>
        <a class="login-item-register" href="/register.html">没有帐号？</a>
      </div>
      <Button class="login-item" type="primary" @click="login">登录</Button>
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
        this.$store.dispatch("login",this.username)
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
.page{
  width:100%;
  height:100%;
  margin: 0px;
  padding: 0px;
}
.login{
  width: 400px;
  height: 275px;
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

.login-item{
  margin: 10px 0px;
  text-align: left;
}

.login-item-register{
  float:right;
}
</style>