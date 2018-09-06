<template>
  <div id="app" ref="app">
    <Menu />
    <div class="onshare-body">
      <router-view />
    </div>
    <Spin fix v-if="isLoading">
			<div class="loading">
				<svg width="135" height="135" viewBox="0 0 135 135" xmlns="http://www.w3.org/2000/svg" fill="#fff">
					<path d="M67.447 58c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10zm9.448 9.447c0 5.523 4.477 10 10 10 5.522 0 10-4.477 10-10s-4.478-10-10-10c-5.523 0-10 4.477-10 10zm-9.448 9.448c-5.523 0-10 4.477-10 10 0 5.522 4.477 10 10 10s10-4.478 10-10c0-5.523-4.477-10-10-10zM58 67.447c0-5.523-4.477-10-10-10s-10 4.477-10 10 4.477 10 10 10 10-4.477 10-10z">
						<animateTransform
							attributeName="transform"
							type="rotate"
							from="0 67 67"
							to="-360 67 67"
							dur="2.5s"
							repeatCount="indefinite"/>
					</path>
					<path d="M28.19 40.31c6.627 0 12-5.374 12-12 0-6.628-5.373-12-12-12-6.628 0-12 5.372-12 12 0 6.626 5.372 12 12 12zm30.72-19.825c4.686 4.687 12.284 4.687 16.97 0 4.686-4.686 4.686-12.284 0-16.97-4.686-4.687-12.284-4.687-16.97 0-4.687 4.686-4.687 12.284 0 16.97zm35.74 7.705c0 6.627 5.37 12 12 12 6.626 0 12-5.373 12-12 0-6.628-5.374-12-12-12-6.63 0-12 5.372-12 12zm19.822 30.72c-4.686 4.686-4.686 12.284 0 16.97 4.687 4.686 12.285 4.686 16.97 0 4.687-4.686 4.687-12.284 0-16.97-4.685-4.687-12.283-4.687-16.97 0zm-7.704 35.74c-6.627 0-12 5.37-12 12 0 6.626 5.373 12 12 12s12-5.374 12-12c0-6.63-5.373-12-12-12zm-30.72 19.822c-4.686-4.686-12.284-4.686-16.97 0-4.686 4.687-4.686 12.285 0 16.97 4.686 4.687 12.284 4.687 16.97 0 4.687-4.685 4.687-12.283 0-16.97zm-35.74-7.704c0-6.627-5.372-12-12-12-6.626 0-12 5.373-12 12s5.374 12 12 12c6.628 0 12-5.373 12-12zm-19.823-30.72c4.687-4.686 4.687-12.284 0-16.97-4.686-4.686-12.284-4.686-16.97 0-4.687 4.686-4.687 12.284 0 16.97 4.686 4.687 12.284 4.687 16.97 0z">
						<animateTransform
							attributeName="transform"
							type="rotate"
							from="0 67 67"
							to="360 67 67"
							dur="8s"
							repeatCount="indefinite"/>
					</path>
				</svg>
			</div>
		</Spin>
  </div>
</template>

<script>
import Menu from "./components/Menu";

export default {
  data(){
    return {
      isLoading:false
    }
  },
  components:{
    Menu
  },
  created(){
    this.http.interceptors(this);
  },
  mounted() {
    this.$refs.app.oncontextmenu = ()=>{
      window.event.returnValue=false;
      return false;
    }
  },
}
</script>


<style>
html,body,#app {
  width:100%;
  height: 100%;
  padding: 0px;
  margin: 0px;
  overflow: hidden;
  background: #F7F7F7;
  background-size: cover;
  background-repeat: no-repeat;
}

.onshare-body{
  height: calc(100% - 50px);
  width: 100%;
  position: absolute;
  top:50px;
}

::-webkit-scrollbar {
    width: 14px;
    height: 14px;
}

::-webkit-scrollbar-track {
    border: 5px solid transparent;
    box-shadow: 0px 0px 0px 5px rgba(0, 0, 0, 0.2) inset;
}

::-webkit-scrollbar-thumb {
    box-shadow: 0px 0px 0px 5px rgba(0, 0, 0, 0.2) inset;
    border: 5px solid transparent;
    border-radius: 20px;
}

.loading{
  width: 135px;
  height: 135px;
}

.loading path{
  fill: #0099FF;
}
</style>
