<template>
  <div class="row mt-2" v-if="check_valid_user">
    <h6 class="text-center">Most Recent public Repos</h6>
    <div class="accordion" id="accordionExample">
      <div class="card" v-for="(repo, index) in repos" :key="index">
        <div class="card-header" id="headingOne">
          <h2 class="mb-0">
            <button
              class="btn btn-block text-left text-truncate text-success"
              type="button"
              data-toggle="collapse"
              :data-target="`#collapse` + index"
              :aria-controls="`collapse` + index"
              @click="expansion"
            >
              {{ repo.name }}
              <span class="badge bg-light text-dark">{{
                repo.createdAt | dateFormater
              }}</span>
            </button>
          </h2>
        </div>

        <div
          :id="`collapse` + index"
          :ref="`collapse` + index"
          class="collapse"
          aria-labelledby="headingOne"
          data-parent="#accordionExample"
        >
          <div class="card-body">
            <div v-if="repo.languages.nodes.length > 0">
              <span class="text-muted">Language used:</span>
              <span
                v-for="(language, index) in repo.languages.nodes"
                :key="index"
                class="badge bg-secondary pl-1 ml-1"
                >{{ language.name }}</span
              >
            </div>

            <div v-if="repo.description">
              <span class="text-muted">Description:</span>
              {{ repo.description }}
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
  methods: {
    expansion(event) {
      let _c = this.$refs[event.target.getAttribute("aria-controls")][0];

      Object.keys(this.$refs).forEach(element => {
        this.$refs[element][0].classList.remove("show");
      });
      _c.classList.add("show");
    }
  },
  computed: {
    ...mapGetters(["check_valid_user", "repos"])
  }
};
</script>

<style lang="scss" scoped></style>
