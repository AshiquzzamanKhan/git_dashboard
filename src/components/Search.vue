<template>
  <v-container>
    <v-text-field
      label="Enter git profile name here"
      dense
      filled
      solo
      @keypress.enter="doSearch"
      v-model="username"
    >
      <span text-secondary slot="prepend-inner" class="pt-1 text-block">
        <v-icon>mdi-github</v-icon>https://github.com/
      </span>
      <v-btn slot="append" icon @click="doSearch" :loading="get_is_loading">
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </v-text-field>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
import {
  GET_IS_LOADING,
  SET_IS_LOADING,
  CLEAR_ALL_DATA,
  ASYNC_FETCH_USER,
} from "@/store/types";

export default {
  name: "Search",
  data() {
    return {
      username: "",
    };
  },
  methods: {
    doSearch() {
      if (!this.username) return;
      // input validation
      else {
        this.$store.commit(SET_IS_LOADING, true); // set loading to true
        this.$store.dispatch(CLEAR_ALL_DATA); // clear all previous data if exist
        this.$store.dispatch(ASYNC_FETCH_USER, this.username); // call octokit to fetch user
      }
    },
  },
  computed: {
    ...mapGetters([GET_IS_LOADING]),
  },
};
</script>

<style lang="css" scoped>
.text-block {
  background-color: rgba(86, 61, 124, 0.15);
  border: 1px solid rgba(86, 61, 124, 0.15);
  border-radius: 5px;
}
</style>
