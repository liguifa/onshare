<template>
	<div class="onshare-menu">
		<div>
			<img src="../assets/logo.png" />
			<h1>墨子便签</h1>	
		</div>
		<div>
			<Search v-if="model == 1" />
			<Back v-if="model == 2" />
			<Toolbar v-if="model == 2" />
			<Android />
			<User />
		</div>
	</div>
</template>

<script>
import Back from "../components/Back";
import User from "../components/User";
import Android from "../components/Android";
import Toolbar from "../components/Toolbar";
import Search from "../components/Search";

export default {
	computed:{
		model(){
			return this.$store.state.model;
		}
	},
	components:{
		Back,
		User,
		Toolbar,
		Android,
		Search
	}
}
</script>

<style>
	.onshare-menu{
		height: 50px;
		width: 100%;
		background: #ffffff;
		box-shadow: 0 2px 3px 0 rgba(100,100,100,0.15);
		position: absolute;
		top:0px;
		left: 0px;
		z-index: 999;
	}

	.onshare-menu > div{
		display: flex;
		flex-direction: row;
		line-height: 50px;
		float: left;
	}

	.onshare-menu > div > img{
		height: 46px;
		width: 46px;
	}

	.onshare-menu > div > h1{
		color: #41464b;
		font-size: 22px;
		margin-top: 4px;
	}

	.onshare-menu > div:last-child{
		float: right;
		margin-right: 10px;
		height: 50px;
		line-height: 50px !important;
	}
</style>
