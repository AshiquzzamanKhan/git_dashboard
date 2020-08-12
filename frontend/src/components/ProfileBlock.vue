<template>
  <div class="crow text-left">
    <div v-if="check_valid_user" class="row">
      <div class="media d-flex">
        <img :src="profile.avatarUrl" class="align-self-start mr-3" alt />
        <div class="media-body">
          <h5 class="mt-0">{{profile.name}}</h5>
          <span class="blockquote-footer">
            Since
            <cite title="Source Title">{{profile.createdAt | dateFormater}}</cite>
          </span>
          <small>{{profile.location}}</small>
          <p v-if="profile.bio">{{profile.bio}}</p>
          <p v-if="profile.company">Working at - {{profile.company}}</p>
        </div>
      </div>
      <p class="lead">Followers : {{profile.followers.totalCount}}</p>
      <a class="btn btn-info btn-lg" :href="profile.url" role="button">Go to Profile</a>
    </div>
    <div class="row" v-else>
      <h1 class="display-4">No Data to show</h1>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "ProfileBlock",
  computed: {
    ...mapGetters(["check_valid_user", "profile"]),
  },
};
</script>

<style lang="css" scoped>
.row {
  background-color: #eeeeee;
  border-radius: 5px;
  padding: 10px;
}
img {
  width: 64px;
}
</style>