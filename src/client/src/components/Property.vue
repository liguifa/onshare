<template>
	<Modal v-model="isShow" title="属性" @on-ok="save">
        <Form :label-width="80">
            <FormItem label="标题">
                <Input v-model="properies.title" placeholder="输入标题"></Input>
            </FormItem>
            <FormItem label="字体">
                <Select v-model="properies.font">
                    <Option v-for="font in fonts" :value="font.value" :key="font.label">{{font.label}}</Option>
                </Select>
            </FormItem>
            <FormItem label="显示导航栏">
                <i-switch v-model="properies.isNav" size="large">
                    <span slot="open">是</span>
                    <span slot="close">否</span>
                </i-switch>
            </FormItem>
        </Form>
    </Modal>
</template>

<script>
export default {
    props:{
        title:String,
        font:String,
        isNav:Boolean
    },
    data(){
        return {
            isShow:true,
            properies:{
                title:this.title,
                font:this.font,
                isNav:!this.isNav
            }
        }
    },
    methods:{
        save(){
            this.$emit("save", this.properies);
        }
    },
    computed:{
        fonts(){
            return [
                {label:"黑体",value:"SimHei"}, 
                {label:"宋体",value:"SimSun"}, 
                {label:"新宋体",valaue:"NSimSun"}, 
                {label:"仿宋",value:"FangSong"}, 
                {label:"楷体",value:"KaiTi"},
                {label:"仿宋_GB2312",value:"FangSong_GB2312"}, 
                {label:"楷体_GB2312",value:"KaiTi_GB2312"},
                {label:"微软雅黑体",value:"Microsoft YaHei"},
                {label:"隶书",value:"LiSu"},
                {label:"幼圆",value:"YouYuan"},
                {label:"华文细黑",value:"STXihei"},
                {label:"华文楷体",value:"STKaiti"},
                {label:"华文宋体",value:"STSong"},
                {label:"华文中宋",value:"STZhongsong"},
                {label:"华文仿宋",value:"STFangsong"}
            ]
        }
    }
}
</script>

<style>

</style>
