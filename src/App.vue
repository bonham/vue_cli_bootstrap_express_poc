<template>
  <div id="app">
    <custom-nav-bar />
    <hello-world msg="Welcome to Your Vue.js App" />
    <nav-bar-scrollable />
    <b-container>
      <b-row>
        <b-col>Hallo</b-col>
        <b-col>Hallo</b-col>
        <b-col>Hallo</b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import { BContainer, BRow, BCol } from "bootstrap-vue";
import CustomNavBar from "./components/CustomNavBar.vue";
import NavBarScrollable from "./components/NavBarScrollable.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    BContainer,
    BRow,
    BCol,
    CustomNavBar,
    NavBarScrollable,
  },
};
</script>

<style lang="scss">

// Import custom SASS variable overrides, or alternatively
// define your variable overrides here instead
@import "assets/custom-vars.scss";

// Import Bootstrap and BootstrapVue source SCSS files
@import "~bootstrap/scss/bootstrap.scss";
@import "~bootstrap-vue/src/index.scss";
</style>
