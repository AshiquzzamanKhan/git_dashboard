<template>
  <div class="row">
    <h6>Most Recent Repos</h6>
    <div class="accordion" id="accordionExample" v-for="repo in repos" :key="repo.createdAt">
      <div class="card">
        <div class="card-header" id="headingOne">
          <h2 class="mb-0">
            <button
              class="btn btn-link btn-block text-left"
              type="button"
              data-toggle="collapse"
              data-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >{{repo.name}}</button>
          </h2>
        </div>

        <div
          id="collapseOne"
          class="collapse show"
          aria-labelledby="headingOne"
          data-parent="#accordionExample"
        >
          <div class="card-body">
            <span
              v-for="(language, index) in repo.languages.nodes"
              :key="index"
              class="d-inline-flex p-1"
            >{{language.name}}</span>

            <hr v-if="repo.description" />
            {{repo.description}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "RepoBlock",
  computed: {
    ...mapGetters(["validity", "repos"]),
  },
};
</script>

<style lang="scss" scoped>
</style>