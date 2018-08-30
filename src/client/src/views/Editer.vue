<template>
  <div class="onshare-editer">
    <Button class="onshare-editer-back" shape="circle" icon="md-arrow-round-back" @click="back" />
      <Notepad :document="document" @save="save" />
    <Toolbar />
  </div>
</template>

<script>
import Notepad from "../components/Notepad.vue";
import Socket from 'socket.io-client'
import Toolbar from "../components/Toolbar";

export default {
  data(){
    return {
      title:"",
      content:""
    }
  },
  components: {
    Notepad,
    Toolbar
  },
  asyncComputed:{
    async document(){
      return await this.http.get(`/document`,{id:this.$route.params.id});
    },
  },
  methods:{
    save(content){
      this.io.emit("update",content);
    },
    back(){
      this.$router.push("/");
    }
  },
  mounted() {
    this.io = Socket("ws://localhost:3002");
  },
}
</script>

<style>
  .onshare-editer{
    width: 100%;
    height: 100%;
    position: relative;
  }

  .onshare-editer-back{
    position: absolute;
    top:2px;
    left: 2px;
  }
</style>
