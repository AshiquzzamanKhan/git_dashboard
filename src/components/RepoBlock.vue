<template>
  <v-container>
    <v-card>
      <v-card-title class="grey lighten-3">Last Few Repos</v-card-title>
      <v-list-item v-if="is_valid">
        <v-list-item-content>
          <v-expansion-panels focusable>
            <v-expansion-panel v-for="(item,i) in repo_arr" :key="i">
              <v-expansion-panel-header>{{item.name}}</v-expansion-panel-header>
              <v-expansion-panel-content class="pt-1">
                <v-chip v-for="(lang, j) in item.languages.nodes" :key="j" class="m-1">{{lang.name}}</v-chip>
                <v-spacer></v-spacer>
                {{item.description}}
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
import { mapGetters } from 'vuex'
export default {
  name: 'RepoBlock',
  props: ['is_valid', 'repo_arr'],
  methods: {
    expansion (event) {
      const _c = this.$refs[event.target.getAttribute('aria-controls')][0]

      Object.keys(this.$refs).forEach((element) => {
        this.$refs[element][0].classList.remove('show')
      })
      _c.classList.add('show')
    }
  },
  computed: {
    ...mapGetters(['check_valid_user', 'repos'])
  }
}
</script>

<style lang="scss" scoped></style>
