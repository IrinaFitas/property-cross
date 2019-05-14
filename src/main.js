import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import { store } from "./store/store.js"; 
import { routes } from "./routes.js";
Vue.config.productionTip = false;

Vue.use(VueRouter);
const router = new VueRouter({
  routes,
  mode: "history"
});

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
