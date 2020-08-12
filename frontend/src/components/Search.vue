<template>
    <div class="row">
        <div class="input-group mb-3">
            <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon3">https://github.com/</span>
            </div>
            <input
                type="text"
                class="form-control"
                id="basic-url"
                aria-describedby="basic-addon3"
                placeholder="Enter Git User Profile Name"
                @blur="username">
        </div>
    </div>
</template>

<script>
import * as types from '../store/types'

export default {
  name: 'Search',
  methods: {
    username () {
      if (!event.target.value) return                               // input validation
      else this.$store.dispatch("fetch_user", event.target.value)   // dispacth aync actions to fetch user
    }
  },
}
</script>

<style lang="scss" scoped>

</style>
