<template>
  <div>
    <b-navbar type="dark" variant="info">
      <b-navbar-brand href="#">Proximator</b-navbar-brand>
      <div class="navbar-nav-scroll">
        <b-navbar-nav>
          <b-nav-item href="#">2020</b-nav-item>
          <b-nav-item href="#">2019</b-nav-item>
          <b-nav-item href="#">2018</b-nav-item>
          <b-nav-item href="#">2017</b-nav-item>
          <b-nav-item href="#">2016</b-nav-item>
          <b-nav-item href="#">2015</b-nav-item>
          <b-nav-item href="#">Regio</b-nav-item>
        </b-navbar-nav>
      </div>
    </b-navbar>
  </div>
</template>

<script>
import { BNavbar, BNavbarBrand, BNavbarNav, BNavItem } from "bootstrap-vue";

export default {
  name: "NavBarScrollable",
  components: {
    BNavbar,
    BNavbarBrand,
    BNavbarNav,
    BNavItem,
  },
};
</script>

<style>
.navbar-nav-scroll {
    width: 30em;
    overflow-x: auto;
    white-space: nowrap;
}
</style>

