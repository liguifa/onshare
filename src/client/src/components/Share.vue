<template>
	<div class="onshare-share">
		<i class="ivu-icon ivu-icon-md-share-alt onshare-share-icon" @click="shareDocument"></i>
		<Modal
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
				<FormItem label="加密" prop="type">
					<RadioGroup v-model="type">
        				<Radio label="加密" value="0"></Radio>
        				<Radio label="公开" value="1"></Radio>
    				</RadioGroup>
				</FormItem>
				<FormItem　v-if="typeValue==0" label="密码" prop="password">
					<Input v-model="password" readonly />
				</FormItem>
			</Form>
		</Modal>
		<Modal
			v-model="isSuccess"
			title="分享成功"
			ok-text="确定"
			cancel-text="取消"
			@on-ok="save"
			@on-cancel="cancel">
			<Form>
				<FormItem label="密码" prop="link">
					<a :href="'/#/share/'+id" target="_blank">http://localhost:8080/#/share/{{id}}</a>
				</FormItem>
				<FormItem label="密码" prop="password">
					<Input v-model="password" readonly />
				</FormItem>
			</Form>
		</Modal>
	</div>
</template>

<script>
export default {
	data(){
		return {
			model:'只读',
			modelValue:0,
			type:"加密",
			typeValue:0,
			number:"",
			password:"",
			isShare:false,
			isSuccess:false,
			id:0,
		}
	},
	methods:{
		shareDocument(){
			this.isShare = true;
		},
		async save(){
			let result = await this.http.post("/share",{
				model:this.modelValue,
				number:this.number,
				password:this.password,
				documentId:this.$route.params.id,
				type:this.typeValue
			});
			if(result.isSuccess){
				this.isShare = false;
				this.isSuccess = true;
				this.id = result.id;
			} else {
				this.isShare = false;
				this.isSuccess = false;
				this.$Modal.error("分享失败!");

			}
		},
		cancel(){
			this.isShare = false;
			this.isSuccess = false;
		}
	},
	watch:{
		model(){
			this.modelValue = this.model == '只读' ? 0:1;
		},
		type(){
			this.typeValue = this.type == '加密' ? 0:1;
		}
	},
	mounted() {
		this.number = parseInt((Math.random() * 10000));
		this.password = parseInt((Math.random() * 10000));
	},
}
</script>

<style>
	.onshare-share-icon{
		font-size: 20px;
		cursor: pointer;
		margin-left: 10px;
	}
</style>
