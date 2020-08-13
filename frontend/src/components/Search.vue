<template>
  <div class="row">
    <div class="input-group mb-3">
      <div class="input-group-prepend">
        <span class="input-group-text" id="inputGroup-sizing-default">
          <svg
            width="16"
            height="16"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="mr-2"
          >
            <use xlink:href="../assets/feather-sprite.svg#github" />
          </svg>
          https://github.com/
        </span>
      </div>
      <input
        type="text"
        class="form-control"
        id="basic-url"
        aria-label="Sizing example input"
        aria-describedby="inputGroup-sizing-default"
        placeholder="Enter git user profile name here"
        @blur="username"
        @keypress.enter="doSearch"
      />
      <button class="input-group-text" @click="doSearch">Search</button>
    </div>
  </div>
</template>

<script>
import * as types from "../store/types";

export default {
  name: "Search",
  methods: {
    username() {
      if (!event.target.value) return;
      // input validation
      else {
        this.$store.commit("clear_data");
        this.$store.dispatch("fetch_user", event.target.value);
      } // dispacth aync actions to fetch user
    },
    doSearch() {
      if (!event.target.value) return;
      // input validation
      else {
        this.$store.commit("clear_data");
        this.$store.dispatch("fetch_user", event.target.value);
      } // dispacth aync actions to fetch user
    }
  }
};
</script>

<style lang="scss" scoped></style>
