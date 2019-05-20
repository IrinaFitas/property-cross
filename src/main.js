import Vue from "vue";
import App from "./App.vue";
import Antd from "ant-design-vue";
import VueRouter from "vue-router";
import { store } from "./store/store.js"; 
import { routes } from "./routes.js";
import "ant-design-vue/dist/antd.css";
Vue.config.productionTip = false;

Vue.use(Antd);

Vue.use(VueRouter);
const router = new VueRouter({
	routes,
	mode: "history"
});

export const vm = new Vue({
	render: h => h(App),
	store,
	router,
	beforeCreate() {
		this.$store.commit("initialiseStore");
	}
}).$mount('#app')