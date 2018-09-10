<template>
	<li @click.stop="menu" :class="{'onshare-menuitem onshare-menuitem-disabled':disabled,'onshare-menuitem':!disabled,}">
		<Icon :type="icon" />
		<span>{{title}}</span>
		<slot v-if="isShow"></slot>
	</li>
</template>

<script>
export default {
	props:{
		icon:String,
		title:String,
		disabled:Boolean,
		component:Object
	},
	data(){
		return {
			isShow:false,
		}
	},
	methods:{
		menu(e){
			this.$emit("menu");
			this.isShow = true;
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

	.onshare-menuitem-disabled > span{
		color: #868695;
	}

	.onshare-menuitem-disabled:hover > span{
		color: #868695 !important;
	}

	.onshare-menuitem-disabled:hover{
		background: #ffffff !important;
	}
</style>
