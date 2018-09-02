import Vue from 'vue'
import Vuex from 'vuex'
import Cookie from "cookie-browser"
import http from "./api/http";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
	model:1,
	documents:[]
  },
  getters:{
		username(){
			return Cookie.get("username")
		}
	},
  mutations:{
		login(state,user){
			if(user.remember)
			{
				Cookie.set("username",user.username,Infinity);
			} else {
				Cookie.set("username",user.username);
			}
		},
		changeModel(state,model){
			state.model = model;
		},
		async getDocuments(state,args){
			state.documents = await http.post("/documents", args);
		}
	},
	actions:{
		login(context,user){
			context.commit("login",user);
		},
		changeModel(context,model){
			context.commit("changeModel",model);
		},
		getDocuments(context, args){
			context.commit("getDocuments", args);
		}	
	}
})
