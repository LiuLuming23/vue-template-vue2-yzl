import Vue from "vue";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;
//注册路由
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
