<template>
	<div class="onshare-home">
		<Contextmenu>
			<MenuItem title="新建便签"><Add /></MenuItem>
		</Contextmenu>
		<ul>
			<li v-for="document in documents" :key="document.id">
				<Document :permission="document.permissions" :id="document.id" :title="document.title" :type="document.typeId" />
			</li>
		</ul>
		
	</div>
</template>

<script>
import Document from "../components/Document";
import Add from "../components/Add";
import Contextmenu from "../components/Contenxtmenu";
import MenuItem from "../components/MenuItem";

export default {
	data(){
		return {
		}
	},
	asyncComputed:{
		async documents(){
			return this.$store.state.documents;
		}
	},
	components:{
		Document,
		Add,
		Contextmenu,
		MenuItem
	},
	mounted() {
		this.$store.dispatch("changeModel",1);
		this.$store.dispatch("getDocuments");
	},
}
</script>

<style>
	.onshare-home{
		padding-top: 15px;
		padding-left: 15px;
		width: 100%;
		height: 100%;
		position: relative;
	}

	.onshare-home-name{
		color:#fff;
	}

	.onshare-home > ul{
		margin: 0px;
		padding: 0px;
		list-style: none;
	}

	.onshare-home > ul > li{
		float: left;
		margin-right: 0px;
		margin-left: 7px;
		margin-bottom: 15px;
	}

	@media screen and (max-width:992px) {
		.onshare-home > ul > li{
			width: 100%;
			margin-left: 0px;
		}
	}
</style>
