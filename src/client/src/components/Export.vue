<template>
	<div class="onshare-export">
		<i class="ivu-icon ivu-icon-md-arrow-down onshare-export-icon" @click="exportFile"></i>
	</div>
</template>

<script>
export default {
	methods:{
		exportFile(){
			let id = this.$route.params.id;
			location.href=`http://127.0.0.1:3001/export?id=${id}`;
		}
	}
}
</script>

<style>
	.onshare-export-icon{
		font-size: 20px;
		cursor: pointer;
		margin-left: 10px;
	}
</style>
