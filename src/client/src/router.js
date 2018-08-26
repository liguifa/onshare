import Vue from 'vue'
import Router from 'vue-router'
import store from "./store"
const Home = resolve => require(['./views/Home.vue'], resolve);
const Editer = resolve => require(['./views/Editer.vue'], resolve);
const Login = resolve => require(['./views/Login.vue'], resolve);
const Register = resolve => require(['./views/Register.vue'], resolve);
const Share = resolve => require(['./views/Share.vue'], resolve);

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
      path: '/editer/:id',
      name: 'editer',
      component: Editer
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/share/:id',
      name: 'share',
      component: Share
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