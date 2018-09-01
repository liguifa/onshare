<template>
	<div class="onshare-add">
		<i class="ivu-icon ivu-icon-md-add onshare-add-icon" @click="addDocument"></i>
		<Modal
			v-model="isAdd"
			title="新建文档"
			ok-text="确定"
			cancel-text="取消"
			@on-ok="save"
			@on-cancel="cancel">
			<Form>
				<FormItem label="标题" prop="name">
					<Input v-model="title" placeholder="文档标题" />
				</FormItem>
				<FormItem label="类型" prop="type">
					<Select v-model="type" placeholder="文档类型">
						<Option value="type.id" v-for="type in types" :key="type.id">{{type.name}}</Option>
					</Select>
				</FormItem>
			</Form>
		</Modal>
	</div>
</template>
<script>
    export default {
        data () {
            return {
				isAdd: false,
				title:"",
				type:""
            }
        },
        methods: {
			addDocument() {
				this.isAdd = true;
			},
            async save () {
				await this.http.post("/addDocument",{title:this.title,type:this.type});
				this.$Modal.success("添加成功");
				this.isAdd = false;
            },
            cancel () {
                this.isAdd = false;
            }
		},
		asyncComputed:{
			async types(){
				return await this.http.get("/types")
			}
		}
    }
</script>

<style>
	.onshare-add-add{
		position: absolute;
		right:15px;
		top:15px;
		line-height: 50px;
	}

	.onshare-add-icon{
		font-size: 20px;
		cursor: pointer;
		margin-left: 10px;
	}
</style>