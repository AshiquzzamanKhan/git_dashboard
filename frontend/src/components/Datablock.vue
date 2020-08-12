<template>
    <div class="col-md-8">
        <h4>Language Proficiency Across All repos</h4>
        <apexchart width="380" type="donut" :options="options" :series="series"></apexchart>
        <hr>
        <h4>Recent 10 repos</h4>
        <div class="list-group text-left">
          <a :href="repo.url" class="list-group-item list-group-item-action" v-for="(repo, index) in repos" :key="index">
            {{repo.name}}
            {{repo.createdAt | dateFormater}}
            
            {{repo.languages.nodes}}
          </a>
        </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: 'Datablock',
  data () {
    return {
      options: {},
      series: [44, 55, 41, 17, 15]

    }
  },
  computed: {
    ...mapGetters(["repos"])
  },
}
</script>

<style scoped>
.list-group-item:hover {
  cursor: pointer;
  background-color: #e2e2e2;
}
</style>
