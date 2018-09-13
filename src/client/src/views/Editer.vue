<template>
  <div class="onshare-editer">
      <Notepad v-if="type == 1" :document="document" @save="save" :model="model" :content="content" />
      <Richtext v-if="type == 2" :document="document" @save="save" :model="model" :content="content" />
  </div>
</template>

<script>
import Notepad from "../components/Notepad";
import Richtext from "../components/Richtext";
import CSV from "../components/CSV";
import Socket from 'socket.io-client';
import config from "../config";

export default {
  data(){
    return {
      title:"",
      content:"",
      model:0,
      type:1,
    }
  },
  components: {
    Notepad,
    CSV,
    Richtext
  },
  asyncComputed:{
    async document(){
      let doc = await this.http.get(`/document`,{id:this.$route.params.id});
      this.model = doc.permissions == 2 ? 1 : 0;
      this.type = doc.typeId;
      return doc;
    }
  },
  methods:{
    save(content){
      this.io.emit("update",content);
    }
  },
  mounted() {
    this.io = Socket(config.socket.url);
    this.io.emit("join", this.$route.params.id);
    this.io.on("update", message => {
      this.content = message;
    });
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
