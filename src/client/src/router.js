import Vue from 'vue'
import Router from 'vue-router'
import store from "./store"
import Home from "./views/Home.vue"
import Editer from './views/Editer.vue'
import Login from './views/Login.vue'

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
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: Editer
    }
  ]
})

router.beforeEach((to, from, next) => {
	if(to.name != "login"){
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