<template>
  <div class="onshare-csv">
    <div class="onshare-csv-title">
      <h2>{{title}}</h2>
    </div>
   <Table border ref="selection" :columns="columns" :data="data"></Table>
  </div>
</template>

<script>
import Contentedit from "./Contentedit";

export default {
	props:{
		document:{
			type:Object,
			require:true
		}
	},
	data() {
		return {
			title:this.document.title,
			columns: [
				{
					type: 'selection',
					width: 45,
					align: 'center'
				},{
					title: 'Name',
					key: '1'
				}
			],
			data: [
				{
					1: 'John Brown'
				}
			]
		}
	},
	methods: {
		save(){
			this.$emit("save",JSON.stringify({
				title:this.title,
				content:this.text
			}));	
		}
	},
	components:{
		Contentedit
  	}
}
</script>

<style>
  .onshare-csv{
    width: 100%;
    height: 100%;
  }

  .onshare-csv-title{
    width: 100%;
    height: 40px;
    text-align: center;
    /* background: url('http://memonotepad.com/img/paperfibers.png'); */
    background-size: auto;
    padding: 14px;
  }

  .onshare-csv-title h4{
    margin: 0px;
  }

  .onshare-csv-body{
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
  }
</style>
