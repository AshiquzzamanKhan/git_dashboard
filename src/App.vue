<template>
  <v-app>
    <v-app-bar app color="primary">
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

    <!-- Something new -->
    <v-main>
      <v-container fluid>
        <v-row>
          <Search />
        </v-row>
        <v-row>
          <v-col cols="8">
            <RatingBlock
              :is_valid="get_is_valid"
              :profile_obj="get_profile_obj"
            ></RatingBlock>
            <LanguageBlock :is_valid="get_is_valid"></LanguageBlock>
          </v-col>
          <v-col cols="4">
            <ProfileBlock
              :is_valid="get_is_valid"
              :profile_obj="get_profile_obj"
            ></ProfileBlock>
            <RepoBlock
              :is_valid="get_is_valid"
              :repo_arr="get_repos_array"
            ></RepoBlock>
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
import { GET_IS_VALID, GET_PROFILE_OBJ, GET_REPOS_ARRAY } from "@/store/types";

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
      this.$vuetify.theme.dark;
    },
  },
  computed: {
    ...mapGetters([GET_IS_VALID, GET_PROFILE_OBJ, GET_REPOS_ARRAY]),
  },
};
</script>
