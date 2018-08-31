<template>
  <div class="onshare-share">
    <div class="onshare-share-form">
      <h1>分享</h1>
      <!-- <Input class="onshare-share-form-item" v-model="number" placeholder="编号" /> -->
      <Input class="onshare-share-form-item" type="password" v-model="password" placeholder="密码" />
      <Button class="onshare-share-form-item onshare-share-form-item-btn" type="primary" @click="save">查看</Button>
    </div>
  </div>
</template>

<script>
export default {
	data(){
		return {
			number:this.$route.params.id,
			password:""
		}
	},
	methods:{
		async save(){
			let result = await this.http.post("/share/watch",{
				number: this.number,
				password: this.password
			});
			if(result.isSuccess){
				this.$router.push("/editer/1");
			} else {
        this.$Modal.error("查看失败，密码错误!");
      }
		}
  },
  async mounted(){
    let share = await this.http.get("/share/get",{id:this.$route.params.id});
    if(share.type == 1){
      this.save();
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

.onshare-share{
  width:100%;
  height:100%;
  margin: 0px;
  padding: 0px;
}

.onshare-share-form{
  width: 400px;
  height: 215px;
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

.onshare-share-form-item{
  margin: 10px 0px;
  text-align: left;
}

.onshare-share-form-item-btn{
  margin: 10px 0px;
  text-align: center;
}
</style>