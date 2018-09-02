<template>
	<Input v-model="searchKey" class="onshare-search" search @on-search="search" placeholder="Search document name" />
</template>

<script>
export default {
	data(){
		return {
			searchKey:""
		}
	},
	methods:{
		search(){
			this.$store.dispatch("getDocuments",{searchKey:this.searchKey});
		}
	}
}
</script>

<style>
	.onshare-search{
		margin-top:10px;
	}
</style>
