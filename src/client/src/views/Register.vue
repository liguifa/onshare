<template>
  <div class="onshare-register">
    <div class="onshare-register-form">
      <h1>注册</h1>
      <Input class="onshare-register-form-item" v-model="username" placeholder="帐号" />
      <Input class="onshare-register-form-item" type="password" v-model="password" placeholder="密码" />
      <Input class="onshare-register-form-item" type="password" v-model="rePassword" placeholder="确认密码" />
      <Button class="onshare-register-form-item" type="primary" @click="register">注册</Button>
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
      rePassword:false
    }
  },
  methods:{
    async register(){
      let result = await this.http.post("/register/",{username:this.username,password:this.password,rePassword: this.rePassword});
      if(result.isSuccess){
        this.$store.dispatch("login",this.username)
        this.$router.push("/")
      } else {
        this.$Message.error({
          content:"注册失败"
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

.onshare-register{
  width:100%;
  height:100%;
  margin: 0px;
  padding: 0px;
}

.onshare-register-form{
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

.onshare-register-form-item{
  margin: 10px 0px;
  text-align: center;
}
</style>