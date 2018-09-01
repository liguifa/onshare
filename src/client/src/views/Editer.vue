<template>
  <div class="onshare-editer">
      <Notepad :document="document" @save="save" />
  </div>
</template>

<script>
import Notepad from "../components/Notepad.vue";
import Socket from 'socket.io-client'

export default {
  data(){
    return {
      title:"",
      content:"",
      model:2
    }
  },
  components: {
    Notepad
  },
  asyncComputed:{
    async document(){
      return await this.http.get(`/document`,{id:this.$route.params.id});
    },
  },
  methods:{
    save(content){
      this.io.emit("update",content);
    }
  },
  mounted() {
    this.io = Socket("ws://localhost:3002");
    this.$store.dispatch("changeModel",2);
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
