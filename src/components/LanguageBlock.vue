<template>
  <v-container>
    <v-card>
      <v-card-title class="grey lighten-3">Overall Languages Usage</v-card-title>

      <v-list-item>
        <v-list-item-content>
          <apexchart type="bar" height="130" :options="chartOptions" :series="get_bar_series"></apexchart>
        </v-list-item-content>
      </v-list-item>
    </v-card>
  </v-container>
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
            // startingShape: "rounded",
            // endingShape: "rounded",
          },
        },
        stroke: {
          width: 1,
          colors: ["#fff"],
          // lineCap: "round",
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

<style lang="scss" scoped></style>
