<template>
  <div class="col-md-8">
    <!-- rating -->
    <RatingBlock />
    <!-- language -->
    <LanguageBlock />
  </div>
</template>

<script>
import RatingBlock from "./RatingBlock";
import LanguageBlock from "./LanguageBlock";
export default {
  name: "Dashboard",
  components: {
    RatingBlock,
    LanguageBlock,
  },
};
</script>

<style lang="scss" scoped>
</style>