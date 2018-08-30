<template>
	<div class="onshare-toolbar">
		<ul class="onshare-toolbar-ul">
			<li class="onshare-toolbar-ul-item"><Share /></li>
			<li class="onshare-toolbar-ul-item"><Export /></li>
		</ul>
	</div>
</template>

<script>
import Share from "../components/Share";
import Export from "../components/Export";

export default {
	components:{
		Share,
		Export
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
		flex-direction: row;
	}

	.onshare-toolbar-ul-item{
		height: 40px;
		width: 40px;
	}
</style>

