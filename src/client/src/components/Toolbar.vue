<template>
	<div class="onshare-toolbar">
		<div v-if="isTool" class="onshare-toolbar-model"></div>
		<ul v-if="isTool" class="onshare-toolbar-ul">
			<li class="onshare-toolbar-ul-item"><Share /></li>
			<li class="onshare-toolbar-ul-item"><Export /></li>
		</ul>
		<!-- <div v-if="isIcon" class="onshare-toolbar-icon" @click="openTools">
			<img src="../assets/logo.png" />
		</div> -->
	</div>
</template>

<script>
import Share from "../components/Share";
import Export from "../components/Export";

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
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	.onshare-toolbar-model{
		position: absolute;
		top:0px;
		left: 0px;
		background: #000000;
		opacity: 0.6;
		width: 100%;
		height: 100%;
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

	.onshare-toolbar-ul-item{
		height: 40px;
		width: 40px;
	}

	.onshare-toolbar-icon{
		height: 40px;
		width: 40px;
		position: fixed;
		right: 50px;
		bottom: 50px;
		background: #ffffff;
		border-radius: 50%;
		cursor: pointer;
	}

	.onshare-toolbar-icon img{
		height: 40px;
	}
</style>

