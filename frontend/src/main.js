import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import VueApexCharts from "vue-apexcharts";

Vue.config.productionTip = false;

Vue.use(VueApexCharts);
Vue.component("apexchart", VueApexCharts);

Vue.filter("dateFormater", val => {
  const event = new Date(val);
  return event.toDateString();
});

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
