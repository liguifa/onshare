<template>
	<i class="ivu-icon ivu-icon-md-tablet-portrait onshare-android-icon" @click="download" />
</template>

<script>
export default {
	methods:{
		download(){
			location.href="https://www.onnotepad.cn/apk/墨子便签.apk";
		}
	}
}
</script>

<style>
	.onshare-android-icon{
		font-size: 20px;
		cursor: pointer;
		margin-top: 15px;
		margin-left: 10px;
	}
</style>
