<template>
  <div class="onshare-notepad">
    <div class="onshare-notepad-title">
      <h2>{{title}}</h2>
    </div>
    <textarea v-if="model == 1" readonly class="onshare-notepad-body" v-model="text"></textarea>
    <textarea v-if="model == 0" class="onshare-notepad-body" v-model="text"></textarea>
  </div>
</template>

<script>
import Contentedit from "./Contentedit";

export default {
  props:{
    document:{
      type:Object,
      require:true
    },
    model:{
      type:Number
    },
    content:{
      type:String
    }
  },
  data(){
    return {
      text:this.content,
      title:""
    }
  },
  watch:{
    document(){
      this.text = this.document.content;
      this.title = this.document.title;
    },
    text(){
      if(this.content != this.text) {
        this.$emit("save",JSON.stringify({
          title:this.title,
          content:this.text
        }));
      }
    },
    content(){
      this.text = this.content;
    }
  },
  components:{
    Contentedit
  }
}
</script>

<style>
  .onshare-notepad{
    width: 100%;
    height: 100%;
  }

  .onshare-notepad-title{
    width: 100%;
    height: 40px;
    text-align: center;
    /* background: url('http://memonotepad.com/img/paperfibers.png'); */
    background-size: auto;
    padding: 14px;
  }

  .onshare-notepad-title h4{
    margin: 0px;
  }

  .onshare-notepad-body{
    width: 100%;
    height: calc(100% - 30px);
    background: #F7F7F7;
    /* background-color: #fff; */
    /* background-image: linear-gradient(rgba(53,85,131,0.1) 0%, rgba(255,255,255,0.2) 8%), url(http://memonotepad.com/img/paperfibers.png); */
    background-position: 0 -3px, 0 0;
    background-size: 100% 25px, 10% 10%;  
    font: 24px;
    line-height: 25px;
    outline: none;
    text-indent: 2em;
    border:none;
    resize: none;
  }
</style>
