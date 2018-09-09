import Vue from 'vue'
import Vuex from 'vuex'
import Cookie from "cookie-browser"
import http from "./api/http";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
	model:1,
	documents:[],
	username:null
  },
  getters:{
		username(state){
			let username = state.username || Cookie.get("username");
			return username != "undefined" ? username : null; 
		}
	},
  mutations:{
		login(state,user){
			if(user.remember)
			{
				Cookie.set("username",user.username,Infinity);
				state.username = user.username;
			} else {
				Cookie.set("username",user.username);
				state.username = user.username;
			}
		},
		outlogin(state){
			state.username = null;
			Cookie.set("username",null, -1);
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
		outlogin(context){
			context.commit("outlogin");
		},
		changeModel(context,model){
			context.commit("changeModel",model);
		},
		getDocuments(context, args){
			context.commit("getDocuments", args);
		}	
	}
})
