<template>
  <div class="card">
    <div class="card-header">Language competency based on public repos</div>
    <div class="card-body">
      <apexchart type="bar" height="130" :options="chartOptions" :series="get_bar_series"></apexchart>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "LanguageBlock",
  data() {
    return {
      chartOptions: {
        chart: {
          stacked: true,
          stackType: "100%",
        },
        plotOptions: {
          bar: {
            horizontal: true,
          },
        },
        stroke: {
          width: 1,
          colors: ["#fff"],
          lineCap: "round",
        },
        xaxis: {
          categories: ["100 %"],
          labels: {
            show: false,
          },
        },
        tooltip: {
          y: {
            formatter: function (val) {
              return val + "% used";
            },
          },
        },
        fill: {
          opacity: 1,
        },
        legend: {
          position: "top",
          horizontalAlign: "center",
        },
      },
    };
  },
  computed: {
    ...mapGetters(["get_bar_series"]),
  },
};
</script>

<style lang="scss" scoped>
</style>