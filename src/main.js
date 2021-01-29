import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import GmapCustomMarker from "vue2-gmap-custom-marker";
import VStickyElement from "vue-sticky-element";
Vue.config.productionTip = false;
Vue.use(GmapCustomMarker);
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);
Vue.use(VStickyElement);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
