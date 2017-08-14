import Vue from "vue";
import VueFire from "vuefire";
import VueMaterialCore from "vue-material/dist/components/mdCore";
import VueMaterialIcon from "vue-material/dist/components/mdIcon";
import App from "./App";
import router from "./router";

Vue.config.productionTip = false;
Vue.use(VueFire);
Vue.use(VueMaterialCore);
Vue.use(VueMaterialIcon);

new Vue({
	el: "#app",
	router,
	template: "<App/>",
	components: { App }
});
