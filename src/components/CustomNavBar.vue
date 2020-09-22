<template>
  <div>
    <b-navbar toggleable="sm" type="dark" variant="primary">
      <b-navbar-brand href="#">Proximator</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#">2020</b-nav-item>
          <b-nav-item href="#">2019</b-nav-item>
          <b-nav-item href="#">2018</b-nav-item>
          <b-nav-item href="#">2017</b-nav-item>
          <b-nav-item href="#">2016</b-nav-item>
          <b-nav-item href="#">2015</b-nav-item>
          <b-nav-item href="#">Regio</b-nav-item>
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
  BCollapse
} from "bootstrap-vue";

export default {
  name: "CustomNavBar",
  components: {
    BNavbar,
    BNavbarBrand,
    BNavbarToggle,
    BNavbarNav,
    BNavItem,
    BCollapse
  },
};
</script>

<style>

</style>

