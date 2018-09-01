<template>
	<i class="ivu-icon ivu-icon-md-arrow-back onshare-back-icon" @click="back"></i>
</template>

<script>
export default {
	methods:{
    	back(){
      		this.$router.push("/");
    	}	
	}
}
</script>

<style>
	.onshare-back-icon{
		font-size: 20px;
		margin-top:15px;
		cursor: pointer;
	}
</style>
