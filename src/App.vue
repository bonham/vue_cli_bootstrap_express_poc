<template>
  <div id="app">
    <custom-nav-bar/>
    <hello-world msg="Welcome to Your Vue.js App"/>
    <nav-bar-scrollable/>
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
import HelloWorld from './components/HelloWorld.vue'
import { BContainer, BRow, BCol } from 'bootstrap-vue'
import CustomNavBar from './components/CustomNavBar.vue'
import NavBarScrollable from './components/NavBarScrollable.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    BContainer,
    BRow,
    BCol,
    CustomNavBar,
    NavBarScrollable
  }
}
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
