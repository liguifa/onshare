import Vue from 'vue'
import Vuex from 'vuex'
import Cookie from "cookie-browser"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

  },
  getters:{
		username(){
			return Cookie.get("username")
		}
	},
  mutations:{
		login(state,username){
			Cookie.set("username",username)
		}
	},
	actions:{
		login(context,username){
			context.commit("login",username)
		}
	}
})
