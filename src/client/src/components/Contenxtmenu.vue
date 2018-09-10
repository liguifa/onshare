<template>
	<div class="onshare-contextmenu" @contextmenu="showMenu">
		<ul :style="{left:x+'px',top:y+'px'}" v-if="isShow" class="onshare-contextmenu-menu">
			<slot></slot>
		</ul>
	</div>
</template>

<script>
export default {
	data(){
		return {
			isShow:false,
			x:0,
			y:0
		}
	},
	methods:{
		showMenu(e){
			e.preventDefault();
			this.x = e.clientX;
			this.y = e.clientY;
			this.isShow = true;
		}
	},
	mounted() {
		document.addEventListener("click",()=>{
			if(!this.$store.state.isWindow){
				this.isShow = false;
			}
		});
	},
}
</script>

<style>
	.onshare-contextmenu{
		position: absolute;
		top:0px;
		left: 0px;
		width: 100%;
		height: 100%;
	}

	.onshare-contextmenu-menu{
		width: 220px;
		outline: none;
    	margin: 0;
    	padding: 5px 0;
    	list-style: none;
    	background: #fff;
    	box-shadow: 0 2px 8px 0 rgba(0,0,0,0.1);
    	border-radius: 2px;
		position: fixed;
		z-index: 999;
	}

	.onshare-contextmenu-menu li{
		padding: 4px 45px 4px 20px;
    	height: 30px;
    	box-sizing: border-box;
		color: #666;
		font-size: 12px;
		font-weight: normal;
		line-height: 1.7;
		cursor: pointer;
		-webkit-transition: all 0.3s;
		transition: all 0.3s;
		white-space: nowrap;
		width: 100%;
		box-sizing: border-box;
		margin: 0px;
	}

	.onshare-contextmenu-menu li:hover{
		background: #777
	}

	.onshare-contextmenu-menu li:hover span{
		color:#ffffff;
	}
</style>
