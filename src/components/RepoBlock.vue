<template>
  <v-container>
    <v-card>
      <v-card-title class="grey lighten-3">Latest Repos</v-card-title>
      <v-list-item v-if="is_valid">
        <v-list-item-content>
          <v-expansion-panels focusable>
            <v-expansion-panel v-for="(item,i) in 3" :key="i">
              <v-expansion-panel-header>Item</v-expansion-panel-header>
              <v-expansion-panel-content class="pt-1">
                <v-chip class="m-1">HTML</v-chip>
                <v-chip class="m-1">Vue</v-chip>
                <v-chip class="m-1">Python</v-chip>
                <v-chip class="m-1">HTML</v-chip>
                <v-spacer></v-spacer>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-list-item-content>
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
  name: "RepoBlock",
  props: ["is_valid"],
  methods: {
    expansion(event) {
      const _c = this.$refs[event.target.getAttribute("aria-controls")][0];

      Object.keys(this.$refs).forEach((element) => {
        this.$refs[element][0].classList.remove("show");
      });
      _c.classList.add("show");
    },
  },
  computed: {
    ...mapGetters(["check_valid_user", "repos"]),
  },
};
</script>

<style lang="scss" scoped></style>
