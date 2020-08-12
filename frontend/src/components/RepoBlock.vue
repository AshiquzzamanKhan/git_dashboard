<template>
  <div class="row" v-if="check_valid_user">
    <h6>Most Recent Repos</h6>
    <div class="accordion" id="accordionExample" v-for="repo in repos" :key="repo.createdAt">
      <div class="card">
        <div class="card-header" id="headingOne">
          <h2 class="mb-0">
            <button
              class="btn btn-link link-secondary btn-block text-left text-truncate"
              type="button"
              data-toggle="collapse"
              :aria-controls="repo.name"
            >{{repo.name}}</button>
          </h2>
        </div>

        <div
          id="repo.name"
          class="collapse show"
          aria-labelledby="headingOne"
          data-parent="#accordionExample"
        >
          <div class="card-body">
            <div v-if="repo.languages.nodes.length > 0">
              <span class="lead">Language used:</span>
              <span
                v-for="(language, index) in repo.languages.nodes"
                :key="index"
                class="badge bg-secondary p-1 m-1"
              >{{language.name}}</span>
            </div>

            <div v-if="repo.description">
              <hr />
              <span>Description:</span>
              {{repo.description}}
            </div>
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
    ...mapGetters(["check_valid_user", "repos"]),
  },
};
</script>

<style lang="scss" scoped>
</style>