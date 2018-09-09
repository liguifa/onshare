<template>
	<div class="onshare-user">
		<img src="../assets/default.jpg" />
		<Person />
	</div>
</template>

<script>
import Person from "./Person"

export default {
	components:{
		Person
	}
}
</script>

<style>
	.onshare-user{
		position: relative;
	}

	.onshare-user img{
		height:20px !important;
		width: 20px !important;
		border-radius: 50%;
		margin-top: 15px;
		margin-left: 10px;
	}
</style>
