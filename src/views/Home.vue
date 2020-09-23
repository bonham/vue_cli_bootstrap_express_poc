<template>
  <div>
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
// @ is an alias to /src
import { BContainer, BRow, BCol } from "bootstrap-vue";
import CustomNavBar from "@/components/CustomNavBar.vue";
import NavBarScrollable from "@/components/NavBarScrollable.vue";
import HelloWorld from "@/components/HelloWorld.vue";


export default {
  name: "App",
  components: {
    BContainer,
    BRow,
    BCol,
    CustomNavBar,
    NavBarScrollable,
    HelloWorld,
  },
};
</script>
