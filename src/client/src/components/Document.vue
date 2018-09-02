<template>
	<div class="onshare-document" @click="notepad">
		<img v-if="type==1" src="../assets/doc-txt.png" />
		<img v-if="type==2" src="../assets/doc-csv.png" />
		<span>{{title}}</span>
		<Contextmenu>
			<MenuItem title="下载" @menu="download" />
			<MenuItem title="重命名" />
		　　<MenuItem title="删除" @menu="removeDoc" />
		</Contextmenu>
	</div>
</template>

<script>
import Contextmenu from "../components/Contenxtmenu";
import MenuItem from "../components/MenuItem";
const docs =　["doc-txt.png","doc-csv.png"];

export default {
	props:{
		id:{
			type:Number,
			require:true
		},
		title:{
			type:String,
			require:true
		},
		type:{
			type:Number,
			require:true
		}
	},
	methods:{
		notepad(){
			this.$router.push(`/editer/${this.id}`)
		},
		download(){
			location.href=`http://127.0.0.1:3001/api/export?id=${this.id}`;
		},
		removeDoc(){
			this.$Modal.confirm({
				title:"警告",
				content:"删除之后不可恢复，你确认要删除吗？",
				onOk:async ()=>{
					let result = await this.http.post(`/document/delete`,{id:this.id});
					if(result.isSuccess){
						this.$store.dispatch("getDocuments");
					}
				}
			});
			
		}
	},
	components:{
		Contextmenu,
		MenuItem
	}
}
</script>

<style>
	.onshare-document{
		width: 100px;
		height:120px;
		border-radius: 5px;
		/* background: url('http://memonotepad.com/img/paperfibers.png'); */
		/* background: #ffffff; */
    	background-size: auto;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		overflow: hidden;
		text-overflow: ellipsis;
		cursor: pointer;
		user-select: none;
		position: relative;
	}

	.onshare-document:hover{
		background-color: #bbbbbb;
	}

	.onshare-document:hover > span{
		color: #ffffff;
	}

	.onshare-document > span{
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
		margin-top: 10px;
		width: 90%;
		text-align: center;
	}

	@media screen and (max-width:992px) {
		.onshare-document{
			width: calc(100% - 15px);
			background: #fff;
    		box-shadow: 0 2px 8px 0 rgba(0,0,0,0.1);
    		border-radius: 2px;
		}
	}
</style>
