<template>
  <div class="hello">
    <h1>Hoi {{ msg }}</h1>
    <BootContainer btcontent="here should be rows and columns"/>
  </div>
</template>

<script>
import BootContainer from './BootContainer.vue'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components: {
    BootContainer
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
