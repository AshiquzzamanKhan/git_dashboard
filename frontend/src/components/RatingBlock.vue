<template>
  <div class="card" v-if="check_valid_user">
    <div class="card-header">Overall Rating</div>
    <div class="card-body">
      <div class="row">
        <div class="col-md-7 m-auto">
          <h6 class="card-text">Total public Repos: {{profile.repositories.totalCount}}</h6>
          <h6>Total stars : {{profile.starredRepositories.totalCount}}</h6>
          <h6>Total commits (Last 12 Months): {{profile.contributionsCollection.contributionCalendar.totalContributions}}</h6>
          <h6>Total Pull Req: {{profile.pullRequests.totalCount}}</h6>
          <h6>Total Issues: {{profile.issues.totalCount}}</h6>
          <h6>Total contributions to Other Repo: {{profile.repositoriesContributedTo.totalCount}}</h6>
        </div>
        <div class="col-md-5 m-auto">
          <apexchart
            width="300"
            type="radialBar"
            :options="rating_gauge_options"
            :series="rating_gauge_series"
          ></apexchart>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "RatingBlock",
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
  computed: {
    ...mapGetters(["check_valid_user", "profile"]),
  },
};
</script>

<style lang="scss" scoped>
</style>