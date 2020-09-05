import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import VueApexCharts from "vue-apexcharts";

Vue.config.productionTip = false;

Vue.use(VueApexCharts);
Vue.component("apexchart", VueApexCharts);

Vue.filter("dateFormater", val => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ];
  const datetime = new Date(val);
  let formatted_date = `${
    months[datetime.getMonth()]
  } ${datetime.getDate()}, ${datetime.getFullYear()}`;
  return formatted_date;
});

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
