<template>
	<div class="onshare-share">
		<Button class="onshare-toolbar-ul-item" shape="circle" icon="md-share-alt" @click="shareDocument" />
		<Modal
			v-if="isShare"
			v-model="isShare"
			title="分享文档"
			ok-text="确定"
			cancel-text="取消"
			@on-ok="save"
			@on-cancel="cancel">
			<Form>
				<FormItem label="模式" prop="model">
					<RadioGroup v-model="model">
        				<Radio label="只读" value="0"></Radio>
        				<Radio label="编辑" value="1"></Radio>
    				</RadioGroup>
				</FormItem>
				<FormItem label="编号" prop="number">
					<Input v-model="number" readonly />
				</FormItem>
				<FormItem label="密码" prop="password">
					<Input v-model="password" readonly />
				</FormItem>
				<FormItem label="密码" prop="link">
					<a href="/#/share/1" target="_blank">http://localhost:8080/#/share/1</a>
				</FormItem>
			</Form>
		</Modal>
	</div>
</template>

<script>
export default {
	data(){
		return {
			model:0,
			number:"",
			password:"",
			isShare:false
		}
	},
	methods:{
		shareDocument(){
			this.isShare = true;
		},
		save(){
			this.http.post("/share",{
				model:this.model,
				number:this.number,
				password:this.password
			});
		},
		cancel(){
			this.isShare = false;
		}
	},
	mounted() {
		this.number = parseInt((Math.random() * 10000));
		this.password = parseInt((Math.random() * 10000));
	},
}
</script>
