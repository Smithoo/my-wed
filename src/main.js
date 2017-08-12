import Vue from "vue";
import VueFire from "vuefire";
import VueMaterial from "vue-material";
import App from "./App";
import router from "./router";

Vue.config.productionTip = false;
Vue.use(VueFire);
Vue.use(VueMaterial.MdCore);
Vue.use(VueMaterial.MdIcon);

new Vue({
	el: "#app",
	router,
	template: "<App/>",
	components: { App }
});
