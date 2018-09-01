<template>
	<div class="onshare-toolbar">
		<ul v-if="isTool" class="onshare-toolbar-ul">
			<li class="onshare-toolbar-ul-item"><IM /></li>
			<li class="onshare-toolbar-ul-item"><Share /></li>
			<li class="onshare-toolbar-ul-item"><Export /></li>
		</ul>
	</div>
</template>

<script>
import Share from "../components/Share";
import Export from "../components/Export";
import IM from "../components/IM";

export default {
	data(){
		return {
			isIcon:false,
			isTool:true
		}
	},
	methods:{
		openTools(){
			this.isIcon = false;
			this.isTool = true;
		}
	},
	components:{
		Share,
		Export,
		IM
	}
}
</script>

<style>
	.onshare-toolbar{
		width: 100%;
		height: 50px;
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
		justify-content: center;
		z-index: 999;
	}
</style>

