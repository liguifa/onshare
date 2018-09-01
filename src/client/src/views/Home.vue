<template>
	<div class="onshare-home">
		<ul>
			<li v-for="document in documents" :key="document.id">
				<Document :id="document.id" :title="document.title" />
			</li>
		</ul>
	</div>
</template>

<script>
import Document from "../components/Document";

export default {
	data(){
		return {
		}
	},
	asyncComputed:{
		async documents(){
			return await this.http.post("/documents");
		}
	},
	components:{
		Document
	},
	mounted() {
		this.$store.dispatch("changeModel",1);
	},
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
