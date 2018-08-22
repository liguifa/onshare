<template>
	<div class="onshare-home">
		<div class="onshare-home-name">
			<h2>{{username}}</h2>
			<Add />
		</div>
		<ul>
			<li v-for="document in documents" :key="document.id">
				<Document :id="document.id" :title="document.title" />
			</li>
		</ul>
	</div>
</template>

<script>
import Document from "../components/Document";
import Add from "../components/Add";

export default {
	data(){
		return {
		}
	},
	asyncComputed:{
		async documents(){
			return await this.http.post("/documents");
		},
		username(){
			return this.$store.getters.username;
		}
	},
	methods:{
		add(){
			
		}
	},
	components:{
		Document,
		Add
	}
}
</script>

<style>
	.onshare-home{
		padding-top: 15px;
		padding-left: 15px;
		position: relative;
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
