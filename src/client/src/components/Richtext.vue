<template>
	<div class="onshare-richtext">
		<div class="onshare-richtext-title">
     		<h2>{{title}}</h2>
		</div>
		<Richtext v-if="model == 0" v-model="text" />
		<div class="quillWrapper" v-if="model == 1" v-html="text"></div>
  </div>
  </div>	
</template>

<script>
import { VueEditor as Richtext } from "vue2-editor";

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
			console.log(this.text)
      		this.$emit("save",JSON.stringify({
        		title:this.title,
        		content:this.text
      		}));
    	}
	},
	methods:{
		change(delta, oldDelta, source){
			console.log(source)
		}
	},
	components:{
		Richtext
	}
}
</script>

<style>
	.onshare-richtext{
    	width: 100%;
    	height: 100%;
  	}

  	.onshare-richtext-title{
    	width: 100%;
    	height: 40px;
    	text-align: center;
    	/* background: url('http://memonotepad.com/img/paperfibers.png'); */
    	background-size: auto;
    	padding: 14px;
  	}

  	.onshare-richtext-title h4{
    	margin: 0px;
  	}

	.quillWrapper{
		width: 100%;
		height: calc(100% - 30px);
  	}
</style>
'