<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="./assets/github.svg"
          transition="scale-transition"
          width="40"
        />Git User Lookup
      </div>
      <v-spacer></v-spacer>
      <v-btn icon @click="changeTheme">
        <v-icon>mdi-theme-light-dark</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <v-container fluid>
        <v-row>
          <Search @is_valid="GET_IS_VALID" />
        </v-row>
        <v-row>
          <v-col cols="8">
            <RatingBlock></RatingBlock>
            <LanguageBlock></LanguageBlock>
          </v-col>
          <v-col cols="4">
            <ProfileBlock></ProfileBlock>
            <RepoBlock></RepoBlock>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Search from "@/components/Search";
import RatingBlock from "@/components/RatingBlock";
import LanguageBlock from "@/components/LanguageBlock";
import ProfileBlock from "@/components/ProfileBlock";
import RepoBlock from "@/components/RepoBlock";
import { mapGetters } from "vuex";
import * as types from "./store/types";

export default {
  name: "App",

  components: {
    Search,
    RatingBlock,
    LanguageBlock,
    ProfileBlock,
    RepoBlock,
  },

  data: () => ({
    //
  }),
  methods: {
    changeTheme() {
      // change the theme
    },
  },
  computed: {
    ...mapGetters([types.GET_IS_VALID]),
  },
};
</script>
