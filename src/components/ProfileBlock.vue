<template>
  <v-container>
    <v-card class="mx-auto">
      <v-card-title class="grey lighten-3">Profile</v-card-title>
      <v-list-item three-line v-if="is_valid">
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
      <v-card-actions class="pb-4" v-if="is_valid">
        <v-btn text block href="#" class="align-right">GO TO Profile</v-btn>
      </v-card-actions>
      <v-list-item class="text-center" v-else>
        <v-list-item-content>
          <div class="headline mb-4">...</div>
        </v-list-item-content>
      </v-list-item>
    </v-card>
  </v-container>
</template>

<script>
export default {
  props: ["is_valid"],
  name: "ProfileBlock",
};
</script>

<style lang="css" scoped>
</style>
