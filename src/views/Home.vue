<template>
  <div>
    <custom-nav-bar />
    <b-container>
      <b-row>
        <b-col>Col1</b-col>
        <b-col>Col2</b-col>
        <b-col>Col3</b-col>
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
