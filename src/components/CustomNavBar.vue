<template>
  <div>
    <b-navbar
      toggleable="sm"
      type="dark"
      variant="primary"
    >
      <b-navbar-brand to="/">
        Proximator
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse" />
      <b-collapse
        id="nav-collapse"
        is-nav
      >
        <b-navbar-nav>
          <b-nav-item to="/second">
            Second
          </b-nav-item>
          <b-nav-item to="/about">
            About
          </b-nav-item>
          <b-nav-item href="#">
            2017
          </b-nav-item>
          <b-nav-item href="#">
            2016
          </b-nav-item>
          <b-nav-item href="#">
            2015
          </b-nav-item>
          <b-nav-item href="#">
            Regio
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import {
  BNavbar,
  BNavbarBrand,
  BNavbarToggle,
  BNavbarNav,
  BNavItem,
  BCollapse,
} from "bootstrap-vue";

export default {
  name: "CustomNavBar",
  components: {
    BNavbar,
    BNavbarBrand,
    BNavbarToggle,
    BNavbarNav,
    BNavItem,
    BCollapse,
  },
};
</script>

<style>
</style>

