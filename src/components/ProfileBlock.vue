<template>
  <div class="text-left">
    <div class="row" v-if="search_provided">
      <div v-if="check_valid_user" class="row">
        <div class="media d-flex">
          <img :src="profile.avatarUrl" class="align-self-start mr-3" alt />
          <div class="media-body">
            <h5 class="mt-0">{{ profile.name }}</h5>
            <span class="blockquote-footer">
              Since
              <cite title="Source Title">
                {{
                profile.createdAt | dateFormater
                }}
              </cite>
            </span>
            <small>{{ profile.location }}</small>
            <p v-if="profile.bio">{{ profile.bio }}</p>
            <p v-if="profile.company">Working at - {{ profile.company }}</p>
          </div>
        </div>

        <p class="lead">
          <svg
            width="20"
            height="20"
            fill="none"
            stroke="currentColor"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="d-flex-inline mr-1"
          >
            <use xlink:href="../assets/feather-sprite.svg#hash" />
          </svg>
          Followers : {{ profile.followers.totalCount }}
        </p>
        <a class="btn btn-info btn-lg" :href="profile.url" role="button">Go to Profile</a>
      </div>
      <div class="row" v-else>
        <h3 class="display-6">Nothing Found</h3>
      </div>
    </div>

    <div class="row" v-else>
      <h3 class="display-6">No search yet</h3>
    </div>
  </div>
</template>

<script>
export default {
  props: ["search_provided", "check_valid_user", "profile"],
  name: "ProfileBlock",
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
