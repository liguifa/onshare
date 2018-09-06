<template>
	<div class="onshare-im">
		<i class="ivu-icon ivu-icon-ios-chatbubbles onshare-im-icon" @click="start" />
		<div v-if="isStart" class="onshare-im-window">
			<div class="onshare-im-window-content">
				<div ref="messageDiv" class="onshare-im-window-content-message">
					<ul>
						<li v-for="message in messages" :key="message.id" :class="{'onshare-im-window-content-message-current':message.isCurrent}">
							<img src="../assets/default.jpg" />
							<div>
								<span>{{message.username}}  {{message.time}}</span>
								<span>{{message.content}}</span>
							</div>
						</li>
					</ul>
				</div>
				<textarea class="onshare-im-window-content-input" @keyup.enter="send" v-model="current"></textarea>
				<div class="onshare-im-window-content-send">
					<Button type="primary" @click="send">发&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;送</Button>
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
import Contentedit from "../components/Contentedit";

export default {
	data(){
		return {
			isStart:false,
			current:"",
			messages:[],
			i:1
		}
	},
	methods:{
		start(){
			this.isStart = true;
		},
		close(){
			this.isStart = false;
		},
		send(){
			if(this.current != ""){
				this.messages.push({
					content:this.current,
					username:"admin",
					time:"7-15 20:18",
					userid:1,
					isCurrent:this.i%3==0,
					id:this.i
				})
			}
			this.current =　"";
			this.i++;
		}
	},
	watch:{
		messages(){
			setTimeout(() => {
				this.$refs.messageDiv.scrollTop = this.$refs.messageDiv.scrollHeight; 
			}, 100);
		}
	},
	components:{
		Contentedit
	}
}
</script>

<style>
	.onshare-im-icon{
		font-size: 20px;
		cursor: pointer;
		margin-left: 10px;
	}

	.onshare-im-window{
		width: 862px;
		height: 552px;
		position: fixed;
		margin: auto;
		top:0px;
		left: 0px;
		right: 0px;
		bottom: 0px;
		background: #ffffff;
		padding: 0px;
		display: flex;
		flex-direction: row;
		border: 1px solid #e8eaec;
		box-shadow: 2px 2px 2px 2px rgba(100,100,100,0.15);
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
		padding: 10px;
		box-sizing: border-box;
		overflow: auto;
	}

	.onshare-im-window-content-input{
		height: 68px;
		width: 100%;
		padding: 10px;
		box-sizing: border-box;
		border: none;
		border-top: 1px solid #e8eaec;
		outline: none;
		text-overflow: clip;
		overflow: hidden;
		resize: none;
		font-size: 14px;
		line-height: 14px;
	}

	.onshare-im-window-content-send{
		/* height: 30px; */
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
		height: 80px !important;
		width: 80px !important;
		border-radius: 50%;
	}

	.onshare-im-window-users-current div{
		padding: 30px 0px 0px 10px;
		box-sizing: border-box;
	}

	.onshare-im-window-users-current div h4{
		height: 20px;
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
		margin-top:4px;
	}

	.onshare-im-window-users-other li div{
		padding-top:0px;
		padding-left: 10px;
		box-sizing: border-box;
		margin-top: -5px;
	}

	.onshare-im-window-users-other li div h4{
		height: 20px;
	}

	.onshare-im-window-close{
		position: absolute;
		right: 10px;
		top:0px;
		font-size: 20px;
		cursor: pointer;
		user-select: none;
	}

	.onshare-im-window-content-message ul{
		padding: 0px;
		margin: 0px;
		list-style: none;
		overflow: auto;
	}

	.onshare-im-window-content-message ul li{
		margin-bottom: 10px;
		display: flex;
		flex-direction: row;
		width: 100%;
	}

	.onshare-im-window-content-message ul li img {
		height: 46px;
		width: 46px;
		border-radius: 50%;
		padding: 3px 3px;
		margin-right: 10px;
	}

	.onshare-im-window-content-message ul li div span:first-child{
		width: 500px;
		line-height: 24px;
		font-size: 12px;
		white-space: nowrap;
		color: #999;
		text-align: left;
		font-style: normal;
	}

	.onshare-im-window-content-message ul li div span:last-child{
		display: block;
    	font-size: 14px;
		line-height: 22px;
    	padding: 8px 15px;
    	background-color: #e2e2e2;
    	border-radius: 3px;
    	color: #333;
    	word-break: break-all;
		box-sizing: border-box;
		flex-shrink: 0;
		flex-grow: 0;
		margin-top: -14px;
	}

	.onshare-im-window-content-message-current{
		float: right;
		display: flex;
		flex-direction: row-reverse !important;
	}

	.onshare-im-window-content-message-current img{
		margin-left: 10px;
	}

	.onshare-im-window-content-message-current div{
		text-align: right;
	}

	.onshare-im-window-content-message-current div span:last-child{
		background-color: #5FB878 !important;
		color: #ffffff !important;
	}
</style>
