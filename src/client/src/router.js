import Vue from 'vue'
import Router from 'vue-router'
import store from "./store"
import Home from "./views/Home.vue"
import Editer from './views/Editer.vue'
import Login from './views/Login.vue'
import Register from './views/Register.vue'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/editer',
      name: 'editer',
      component: Editer
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    }
  ]
})

router.beforeEach((to, from, next) => {
	if(to.name != "login" && to.name != "register"){
		if(!store.getters.username){
			next("/login")
		} else {
			next()
		}
	} else {
		next()
	}
})

export default router;