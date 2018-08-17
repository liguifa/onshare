<template>
	<div class="onshare-document">
		<img src="../assets/doc-txt.png" />
		<span>Chrome插件分享</span>
	</div>
</template>

<script>
export default {

}
</script>

<style>
	.onshare-document{
		width: 100px;
		height:120px;
		border-radius: 5px;
		background: url('http://memonotepad.com/img/paperfibers.png');
    	background-size: auto;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		overflow: hidden;
		text-overflow: ellipsis;
		cursor: pointer;
		user-select: none;
	}

	.onshare-document span{
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
		margin-top: 10px;
		width: 90%;
	}
</style>
