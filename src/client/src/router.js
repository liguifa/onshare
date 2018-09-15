import Vue from 'vue'
import Router from 'vue-router'
import store from "./store"
import iView from "iview"
const Home = resolve => require(['./views/Home.vue'], resolve);
const Editer = resolve => require(['./views/Editer.vue'], resolve);
const Login = resolve => require(['./views/Login.vue'], resolve);
const Register = resolve => require(['./views/Register.vue'], resolve);
const Share = resolve => require(['./views/Share.vue'], resolve);

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/:id?',
      name: 'home',
      component: Home
    },
    {
      path: '/login/:auto',
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
  iView.LoadingBar.start();
	if(to.name != "login" && to.name != "register"){
		if(!store.getters.username){
			next("/login/0")
		} else {
			next()
		}
	} else {
		next()
	}
})

router.afterEach(route => {
  iView.LoadingBar.finish();
});

export default router;