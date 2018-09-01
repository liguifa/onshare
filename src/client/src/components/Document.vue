<template>
	<div class="onshare-document" @click="notepad">
		<img src="../assets/doc-txt.png" />
		<span>{{title}}</span>
	</div>
</template>

<script>
export default {
	props:{
		id:{
			type:Number,
			require:true
		},
		title:{
			type:String,
			require:true
		}
	},
	methods:{
		notepad(){
			this.$router.push(`/editer/${this.id}`)
		}
	}
}
</script>

<style>
	.onshare-document{
		width: 100px;
		height:120px;
		border-radius: 5px;
		/* background: url('http://memonotepad.com/img/paperfibers.png'); */
		/* background: #ffffff; */
    	background-size: auto;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		overflow: hidden;
		text-overflow: ellipsis;
		cursor: pointer;
		user-select: none;
	}

	.onshare-document:hover{
		background-color: #bbbbbb;
	}

	.onshare-document:hover span{
		color: #ffffff;
	}

	.onshare-document span{
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
		margin-top: 10px;
		width: 90%;
		text-align: center;
	}
</style>
