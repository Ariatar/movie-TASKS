import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import Loader from "@/components/Loader";
import dateFilter from "@/filters/dateFilter";
import VueResource from "vue-resource";

Vue.use(VueResource);
Vue.config.productionTip = false;

Vue.config.productionTip = false;
Vue.component("Loader", Loader);
Vue.filter("date", dateFilter);

new Vue({
   router,
   store,
   vuetify,
   render: h => h(App)
}).$mount("#app");
