import Vue from "vue";
import App from "./App.vue";
// import { Table, Input } from 'buefy'; // <-- Example of how to pull in individual buefy components
import "buefy/dist/buefy.css";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
