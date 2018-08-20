<template>
	<div class="onshare-home">
		<div class="onshare-home-name"><h2>{{username}}</h2></div>
		<ul>
			<li v-for="document in documents" :key="document.id"><Document /></li>
		</ul>
	</div>
</template>

<script>
import Document from "../components/Document.vue";

export default {
	data(){
		return {
			
		}
	},
	asyncComputed:{
		async documents(){
			console.log(this);
			return await this.http.get("/documents");
		},
		username(){
			console.log(this);
			return this.$store.getters.username;
		}
	},
	components:{
		Document
	}
}
</script>

<style>
	.onshare-home{
		padding-top: 15px;
		padding-left: 15px;
	}

	.onshare-home-name{
		color:#fff;
	}

	.onshare-home ul{
		margin: 0px;
		padding: 0px;
		list-style: none;
	}

	.onshare-home ul li{
		float: left;
		margin-right: 15px;
		margin-bottom: 15px;
	}
</style>
