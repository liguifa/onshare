import Vue from 'vue'
import VueAsyncComputed from "vue-async-computed"
import iView from "iview"
import App from './App.vue'
import router from './router'
import store from './store'
import Http from "./api/http"
import 'iview/dist/styles/iview.css'

Vue.config.productionTip = false

Vue.use(VueAsyncComputed)
Vue.use(iView)

Vue.mixin({
  data(){
    return {
      http:Http
    }
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
