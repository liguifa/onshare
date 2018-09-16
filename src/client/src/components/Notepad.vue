<template>
  <div class="onshare-notepad">
    <div class="onshare-notepad-title">
      <h2>{{title}}</h2>
    </div>
    <textarea v-if="model == 1" readonly class="onshare-notepad-body" v-model="text" :style="{fontFamily:font,height:height}"></textarea>
    <textarea v-if="model == 0" class="onshare-notepad-body" v-model="text" :style="{fontFamily:font,height:height}"></textarea>
    <div v-if="autograph" class="onshare-notepad-autograph">
        <p>{{autograph.name}}</p>
        <strong>{{autograph.time}}</strong>
    </div>
    <Contextmenu>
        <MenuItem title="属性"><Property @save="updateProperty" :font="font" :title="title" /></MenuItem>
    </Contextmenu>
  </div>
</template>

<script>
import Contentedit from "./Contentedit";
import Contextmenu from "../components/Contenxtmenu";
import MenuItem from "../components/MenuItem";
import Property from "../components/Property";

export default {
    props:{
        document:{
            type:Object,
            require:true
        },
        model:{
            type:Number
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
            title:"",
            font:"",
            autograph:null
        }
    },
    watch:{
        document(){
            this.text = this.document.content;
            this.title = this.document.title;
            this.font = this.document.font;
            this.autograph = this.document.autograph;
        },
        text(){
            if(this.content != this.text) {
                this.$emit("save",JSON.stringify({
                    title:this.title,
                    content:this.text,
                    font:this.font,
                    autograph:this.autograph
                }));
            }
        },
        content(){
            this.text = this.content;
        }
    },
    computed:{
        height(){
            return this.autograph ? "calc(100% - 130px)" : "calc(100% - 40px)";
        }
    },
    methods:{
        updateProperty(properties){
            this.font = properties.font;
            this.title = properties.title;
            this.$emit("save",JSON.stringify({
                title:this.title,
                content:this.text,
                font:this.font,
                autograph:this.autograph
            }));
            this.$store.state.isNav = properties.isNav;
            console.log(properties)
        },
        updateProperty(properties){
            this.font = properties.font;
            this.title = properties.title;
            this.$emit("save",JSON.stringify({
                title:this.title,
                content:this.text,
                font:this.font,
                autograph:this.autograph
            }));
            this.$store.state.isNav = properties.isNav;
            console.log(properties)
        }
    },
    components:{
        Contentedit,
        Contextmenu,
        MenuItem,
        Property
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
    height: calc(100% - 130px);
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

  .onshare-notepad-autograph{
      height: 100px;
      width: 100%;
      text-align: right;
      padding-right: 20px;
      box-sizing: border-box;
  }

  @font-face {
    font-family: 'xjsxt';
    src: url('../assets/信笺手写体.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
}

  .onshare-notepad-autograph p{
      font-family: '宋体';
      font-size: 40px;
  }
</style>
