<template>
  <v-container>
    <v-text-field
      label="Enter git user profile name here"
      dense
      filled
      solo
      @keypress.enter="doSearch"
    >
      <span text-secondary slot="prepend-inner" class="pt-1 text-block">
        <v-icon>mdi-github</v-icon>https://github.com/
      </span>
      <v-btn slot="append" icon @click="doSearch">
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </v-text-field>
  </v-container>
</template>

<script>
export default {
  name: "Search",
  methods: {
    doSearch() {
      if (!event.target.value) return;
      // input validation
      else {
        this.$store.commit("clear_data");
        this.$store.dispatch("fetch_user", event.target.value);
      } // dispacth aync actions to fetch user
    },
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
