<template>
  <div class="col-md-4">
    <ProfileBlock
      :search_provided="search_provided"
      :check_valid_user="check_valid_user"
      :profile="profile"
    />
    <RepoBlock />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ProfileBlock from "./ProfileBlock";
import RepoBlock from "./RepoBlock";

export default {
  name: "Description",
  components: {
    ProfileBlock,
    RepoBlock,
  },
  computed: {
    ...mapGetters(["search_provided", "check_valid_user", "profile"]),
  },
};
</script>
