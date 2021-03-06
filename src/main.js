// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import routes from './router'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import './assets/public.css'

Vue.config.productionTip = false

Vue.use(VueRouter);
Vue.use(Mint);

const router = new VueRouter({
    routes
});

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	components: { App },
	template: '<App/>'
})