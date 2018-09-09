<template>
	<div class="onshare-person" @click.stop="showMenu">
		<ul v-if="isShow" class="onshare-person-menu">
			<li :title="username"><span>{{username}}</span></li>
			<li @click.stop="outlogin"><span>退出登录</span></li>
		</ul>
	</div>
</template>

<script>
import Fingerprint2 from "fingerprintjs2"

export default {
	data(){
		return {
			isShow:false,
		}
	},
	asyncComputed:{
		async username(){
			let finger = await new Promise((resolve,reject) => {
				new Fingerprint2().get((finger, components) => {
					resolve(finger);
				});
			});
			if(this.$store.getters.username == finger) {
				return `指纹用户(${finger})`;
			} else {
				return this.$store.getters.username;
			}
		}
	},
	methods:{
		showMenu(e){
			e.preventDefault();
			this.isShow = true;
			return false;
		},
		outlogin(){
			this.isShow = false;
			this.$store.dispatch("outlogin");
			this.$router.push("/login/1");
		}
	},
	mounted(){
		document.addEventListener("click",()=>{
			this.isShow = false;
		});
	},
}
</script>

<style>
	.onshare-person{
		position: absolute;
		top:0px;
		left: 0px;
		width: 100%;
		height: 100%;
		cursor: pointer;
	}

	.onshare-person-menu{
		width: 220px;
		outline: none;
    	margin: 0;
    	padding: 5px 0;
    	list-style: none;
    	background: #fff;
    	box-shadow: 0 2px 8px 0 rgba(0,0,0,0.1);
    	border-radius: 2px;
		position: absolute;
		z-index: 999;
		top:60px;
		right: -10px;
	}

	.onshare-person-menu li{
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
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.onshare-person-menu li:hover{
		background: #777
	}

	.onshare-person-menu li:hover span{
		color:#ffffff;
	}
</style>
