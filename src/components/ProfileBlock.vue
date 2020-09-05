<template>
  <v-container>
    <v-card class="mx-auto">
      <v-card-title class="grey lighten-3">Profile</v-card-title>
      <v-list-item three-line>
        <v-list-item-content>
          <div class="overline">Since: TIME</div>
          <v-list-item-title class="headline mb-5">PROFILE_NAME</v-list-item-title>
          <v-list-item-subtitle class="mb-5">LITTLE_DESCRIPTION</v-list-item-subtitle>
          <span>
            <v-icon class="pr-2" color="primary">mdi-account-network</v-icon>Followers:
          </span>
        </v-list-item-content>
        <v-list-item-avatar tile size="80" color="grey"></v-list-item-avatar>
      </v-list-item>
      <v-card-actions class="pb-4">
        <v-btn text block href="#" class="align-right">GO TO Profile</v-btn>
      </v-card-actions>
    </v-card>

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
    </div>
  </v-container>
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
