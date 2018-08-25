<template>
	<div class="onshare-toolbar">
		<ul class="onshare-toolbar-ul">
			<Share />
		</ul>
	</div>
</template>

<script>
import Share from "../components/Share";
export default {
	components:{
		Share
	}
}
</script>

<style>
	.onshare-toolbar{
		position: fixed;
		bottom: 0px;
		left:0px;
		width: 100%;
		height: 60px;
		background: #000000;
		opacity: 0.6;
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	.onshare-toolbar-ul{
		margin: 0px;
		padding: 0px;
		list-style: none;
		display: flex;
		flex-direction: column;
	}

	.onshare-toolbar-ul-item{
		height: 40px;
		width: 40px;
	}
</style>

