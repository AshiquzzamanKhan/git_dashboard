<template>
  <div id="app" class="container">
    <div class="row text-center p-2 mt-3">
      <h4>Get an abstract evaluation of a git user</h4>
      <Search />
      <hr />
    </div>
    <div class="row p-2">
      <Dashboard />
      <Description />
    </div>

    <footer class="fixed-bottom text-center">End credits</footer>
  </div>
</template>
<script>
import Search from "./components/Search";
import Dashboard from "./components/Dashboard";
import Description from "./components/Description";
export default {
  name: "App",
  components: {
    Search,
    Dashboard,
    Description,
  },
  mounted() {},
};
</script>
<style>
</style>
