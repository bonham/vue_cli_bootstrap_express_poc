<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">
        Home
      </router-link> |
      <router-link to="/about">
        About
      </router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">

// Import custom SASS variable overrides, or alternatively
// define your variable overrides here instead
@import "assets/custom-vars.scss";

// Import Bootstrap and BootstrapVue source SCSS files
@import "~bootstrap/scss/bootstrap.scss";
@import "~bootstrap-vue/src/index.scss";
</style>
