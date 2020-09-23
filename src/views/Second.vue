<template>
  <div>
    <custom-nav-bar />
    <b-container>
      <b-row>
        <b-col>Second</b-col>
        <b-col>Page</b-col>
        <b-col>Here</b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src
import { BContainer, BRow, BCol } from "bootstrap-vue";
import CustomNavBar from "@/components/CustomNavBar.vue";


export default {
  name: "App",
  components: {
    BContainer,
    BRow,
    BCol,
    CustomNavBar,
  },
};
</script>
