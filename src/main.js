import Vue from "vue";
import App from "./App.vue";

// import { Table, Input } from 'buefy'; // <-- Example of how to pull in individual buefy components
import Buefy from "buefy";
import "buefy/dist/buefy.css";

import router from "./router";

Vue.config.productionTip = false;

Vue.use(Buefy);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
