<template>
	<div class="onshare-export">
		<Button class="onshare-toolbar-ul-item" shape="circle" icon="md-download" @click="exportFile" />
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

</style>
