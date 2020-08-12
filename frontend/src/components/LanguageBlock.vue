<template>
  <div class="card">
    <div class="card-header">Language Expertise</div>
    <div class="card-body">
      <apexchart type="bar" height="130" :options="chartOptions" :series="series"></apexchart>
    </div>
  </div>
</template>

<script>
export default {
  name: "LanguageBlock",
  data() {
    return {
      series: [
        {
          name: "Python",
          data: [44],
        },
        {
          name: "JavaScript",
          data: [53],
        },
        {
          name: "HTML5",
          data: [12],
        },
        {
          name: "CSS3",
          data: [9],
        },
        {
          name: "GraphQL",
          data: [25],
        },
      ],
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
          categories: ["Top"],
          labels: {
            show: false,
          },
        },
        tooltip: {
          y: {
            formatter: function (val) {
              return val + "K";
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
};
</script>

<style lang="scss" scoped>
</style>