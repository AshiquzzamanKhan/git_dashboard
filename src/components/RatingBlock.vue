<template>
  <v-container>
    <v-card>
      <v-card-title class="grey lighten-3">Overall Rating</v-card-title>
      <v-list-item class="ml-5" v-if="is_valid">
        <v-list-item-content>
          <div class="overline mb-4">
            <v-icon class="pr-2" color="primary">mdi-backup-restore</v-icon>Total Commits (2020):
          </div>
          <div class="overline mb-4">
            <v-icon class="pr-2" color="primary">mdi-star-outline</v-icon>Total Stars:
          </div>
          <div class="overline mb-4">
            <v-icon class="pr-2" color="primary">mdi-information-outline</v-icon>Issues:
          </div>
          <div class="overline mb-4">
            <v-icon class="pr-2" color="primary">mdi-code-braces</v-icon>Contributions:
          </div>
        </v-list-item-content>
        <apexchart
          width="300"
          type="radialBar"
          :options="rating_gauge_options"
          :series="rating_gauge_series"
        ></apexchart>
      </v-list-item>
      <v-list-item class="text-center" v-else>
        <v-list-item-content>
          <div class="headline mb-4">...</div>
        </v-list-item-content>
      </v-list-item>
    </v-card>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "RatingBlock",
  props: ["is_valid"],
  data() {
    return {
      rating_gauge_series: [67],
      rating_gauge_options: {
        colors: ["#20E647"],
        plotOptions: {
          radialBar: {
            hollow: {
              margin: 0,
              size: "60%",
              background: "#293450",
            },
            track: {
              dropShadow: {
                enabled: true,
                top: 2,
                left: 0,
                blur: 4,
                opacity: 0.15,
              },
            },
            dataLabels: {
              name: {
                show: false,
              },
              value: {
                color: "#fff",
                fontSize: "30px",
                show: true,
              },
            },
          },
        },
        fill: {
          type: "gradient",
          gradient: {
            shade: "dark",
            type: "vertical",
            gradientToColors: ["#87D4F9"],
            stops: [0, 100],
          },
        },
        stroke: {
          lineCap: "round",
        },
      },
    };
  },
  computed: {},
};
</script>

<style lang="scss" scoped></style>
