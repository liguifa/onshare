<template>
	<li @click.stop="menu" class="onshare-menuitem">
		<Icon :type="icon" />
		<span>{{title}}</span>
	</li>
</template>

<script>
export default {
	props:{
		icon:String,
		title:String
	},
	methods:{
		menu(e){
			this.$emit("menu");
		}
	}
}
</script>

<style>
	.onshare-menuitem > span{
		height: 22px;
		color: #444;
		line-height: 1.7;
		font-size: 14px;
	}
</style>
