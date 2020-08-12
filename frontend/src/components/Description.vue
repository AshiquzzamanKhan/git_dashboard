<template>
  <div class="col-md-4">
    <ProfileBlock />
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
    ...mapGetters(["validity", "profile"]),
  },
};
</script>

<style scoped>
.row {
  background-color: #eeeeee;
  border-radius: 5px;
  padding: 10px;
}
img {
  width: 64px;
}
</style>
