<template>
	<div class="onshare-im">
		<div class="onshare-im-btn" @click="start">
			<img src="../assets/logo.png" />
			<span>交流</span>
		</div>
		<div v-if="isStart" class="onshare-im-window">
			<div class="onshare-im-window-content">
				<div class="onshare-im-window-content-message"></div>
				<div class="onshare-im-window-content-input" contenteditable></div>
				<div class="onshare-im-window-content-send">
					<Button type="primary">发&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;送</Button>
				</div>
			</div>
			<div class="onshare-im-window-users">
				<div class="onshare-im-window-users-current">
					<img src="../assets/default.jpg" />
					<div>
						<h4>2013　年工作总结</h4>
						<span>admin</span>
						<span>最后发言于17分钟前</span>
					</div>
				</div>
				<ul class="onshare-im-window-users-other">
					<li>
						<img src="../assets/default.jpg" />
						<div>
							<h4>admin</h4>
							<span>最后发言于17分钟前</span>
						</div>
					</li>
					<li>
						<img src="../assets/default.jpg" />
						<div>
							<h4>admin</h4>
							<span>最后发言于17分钟前</span>
						</div>
					</li>
					<li>
						<img src="../assets/default.jpg" />
						<div>
							<h4>admin</h4>
							<span>最后发言于17分钟前</span>
						</div>
					</li>
					<li>
						<img src="../assets/default.jpg" />
						<div>
							<h4>admin</h4>
							<span>最后发言于17分钟前</span>
						</div>
					</li>
					<li>
						<img src="../assets/default.jpg" />
						<div>
							<h4>admin</h4>
							<span>最后发言于17分钟前</span>
						</div>
					</li>
					<li>
						<img src="../assets/default.jpg" />
						<div>
							<h4>admin</h4>
							<span>最后发言于17分钟前</span>
						</div>
					</li>
					<li>
						<img src="../assets/default.jpg" />
						<div>
							<h4>admin</h4>
							<span>最后发言于17分钟前</span>
						</div>
					</li>
					<li>
						<img src="../assets/default.jpg" />
						<div>
							<h4>admin</h4>
							<span>最后发言于17分钟前</span>
						</div>
					</li>
					<li>
						<img src="../assets/default.jpg" />
						<div>
							<h4>admin</h4>
							<span>最后发言于17分钟前</span>
						</div>
					</li>
					<li>
						<img src="../assets/default.jpg" />
						<div>
							<h4>admin</h4>
							<span>最后发言于17分钟前</span>
						</div>
					</li>
					<li>
						<img src="../assets/default.jpg" />
						<div>
							<h4>admin</h4>
							<span>最后发言于17分钟前</span>
						</div>
					</li>
					<li>
						<img src="../assets/default.jpg" />
						<div>
							<h4>admin</h4>
							<span>最后发言于17分钟前</span>
						</div>
					</li>
					<li>
						<img src="../assets/default.jpg" />
						<div>
							<h4>admin</h4>
							<span>最后发言于17分钟前</span>
						</div>
					</li>
					<li>
						<img src="../assets/default.jpg" />
						<div>
							<h4>admin</h4>
							<span>最后发言于17分钟前</span>
						</div>
					</li>
					<li>
						<img src="../assets/default.jpg" />
						<div>
							<h4>admin</h4>
							<span>最后发言于17分钟前</span>
						</div>
					</li>
					<li>
						<img src="../assets/default.jpg" />
						<div>
							<h4>admin</h4>
							<span>最后发言于17分钟前</span>
						</div>
					</li>
					<li>
						<img src="../assets/default.jpg" />
						<div>
							<h4>admin</h4>
							<span>最后发言于17分钟前</span>
						</div>
					</li>
				</ul>
			</div>
			<span class="onshare-im-window-close" @click="close">x</span>
		</div>
	</div>
</template>

<script>
export default {
	data(){
		return {
			isStart:false
		}
	},
	methods:{
		start(){
			this.isStart = true;
		},
		close(){
			this.isStart = false;
		}
	}
}
</script>

<style>
	.onshare-im-btn{
		height: 60px;
		width: 200px;
		background: #ffffff;
		position: fixed;
		bottom: 0px;
		right: 0px;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		user-select: none;
		cursor: pointer;
	}

	.onshare-im-btn img{
		height: 60px;
	}

	.onshare-im-btn span{
		font-size: 40px;
		margin-top:10px;
	}

	.onshare-im-window{
		width: 862px;
		height: 552px;
		position: fixed;
		bottom: 0px;
		right: 0px;
		background: #ffffff;
		padding: 0px;
		display: flex;
		flex-direction: row;
		border: 1px solid #e8eaec;
	}

	.onshare-im-window-content{
		border-right: 1px solid #e8eaec;
		width: 600px;
		height: 100%;
		display: flex;
		flex-direction: column;

	}

	.onshare-im-window-content-message{
		height: calc(100% - 108px);
		width: 100%;
	}

	.onshare-im-window-content-input{
		height: 68px;
		width: 100%;
		padding: 10px;
		box-sizing: border-box;
		border-top: 1px solid #e8eaec;
		outline: none;
		text-overflow: clip;
		overflow: hidden;
	}

	.onshare-im-window-content-send{
		height: 30px;
		width:100%;
		text-align: right;
		padding-right: 20px;
		padding-top:5px;
	}

	.onshare-im-window-users{
		display: flex;
		flex-direction: column;
		width: calc(100% - 600px);
	}

	.onshare-im-window-users-current{
		height: 100px;
		width: 100%;
		border-bottom: 1px solid #e8eaec;
		display: flex;
		flex-direction: row;
		align-items: center;
		padding: 0px 10px;
		flex-shrink: 0;
	}

	.onshare-im-window-users-current img{
		height: 80px;
		border-radius: 50%;
	}

	.onshare-im-window-users-current div{
		padding: 30px 0px 0px 10px;
		box-sizing: border-box;
	}

	.onshare-im-window-users-other{
		list-style: none;
		padding: 0px;
		width: 100%;
		overflow: auto;
	}

	.onshare-im-window-users-other li{
		height: 52px;
		width: 100%;
		border-bottom: 1px solid #e8eaec;
		display: flex;
		flex-direction: row;
	}
	
	.onshare-im-window-users-other li img{
		height: 46px;
		width: 46px;
		border-radius: 50%;
		padding: 3px 3px;
	}

	.onshare-im-window-users-other li div{
		padding-top:8px;
		padding-left: 10px;
		box-sizing: border-box;
	}

	.onshare-im-window-close{
		position: absolute;
		right: 10px;
		top:10px;
		font-size: 20px;
		cursor: pointer;
		user-select: none;
	}
</style>
