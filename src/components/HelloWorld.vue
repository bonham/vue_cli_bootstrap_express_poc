<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <h3>Installed CLI Plugins</h3>
    <ul>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">babel</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener">eslint</a></li>
    </ul>
    <h3>Essential Links</h3>
    <ul>
      <li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>
      <li><a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a></li>
    </ul>
    <h3>Ecosystem</h3>
    <ul>
      <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
      <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
      <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a></li>
      <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
    </ul>
    <div class="container">
      <div class="row">
        <div class="col">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam venenatis ut ex sit amet consectetur. Duis id quam leo. Nam non purus semper, rutrum arcu et, venenatis dolor. Vivamus cursus elit vitae neque hendrerit, in volutpat elit consectetur. Proin efficitur quam eu lectus finibus feugiat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id risus pharetra, blandit risus a, hendrerit quam. Proin vulputate nunc augue, et ornare risus tristique quis. Integer aliquam nunc suscipit ipsum sagittis bibendum. Fusce ante urna, malesuada sed ullamcorper sed, rhoncus eget ipsum. Pellentesque sit amet fermentum quam. Donec dapibus imperdiet dui. Sed fermentum, erat nec accumsan ultrices, justo arcu maximus elit, ut malesuada justo erat at odio. Donec in risus ac erat scelerisque auctor. Mauris cursus non nunc quis congue. Quisque volutpat tempor elit, a efficitur arcu iaculis a.
        </div> 
        <div class="col">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam venenatis ut ex sit amet consectetur. Duis id quam leo. Nam non purus semper, rutrum arcu et, venenatis dolor. Vivamus cursus elit vitae neque hendrerit, in volutpat elit consectetur. Proin efficitur quam eu lectus finibus feugiat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id risus pharetra, blandit risus a, hendrerit quam. Proin vulputate nunc augue, et ornare risus tristique quis. Integer aliquam nunc suscipit ipsum sagittis bibendum. Fusce ante urna, malesuada sed ullamcorper sed, rhoncus eget ipsum. Pellentesque sit amet fermentum quam. Donec dapibus imperdiet dui. Sed fermentum, erat nec accumsan ultrices, justo arcu maximus elit, ut malesuada justo erat at odio. Donec in risus ac erat scelerisque auctor. Mauris cursus non nunc quis congue. Quisque volutpat tempor elit, a efficitur arcu iaculis a.
        </div>
        <div class="col">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam venenatis ut ex sit amet consectetur. Duis id quam leo. Nam non purus semper, rutrum arcu et, venenatis dolor. Vivamus cursus elit vitae neque hendrerit, in volutpat elit consectetur. Proin efficitur quam eu lectus finibus feugiat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id risus pharetra, blandit risus a, hendrerit quam. Proin vulputate nunc augue, et ornare risus tristique quis. Integer aliquam nunc suscipit ipsum sagittis bibendum. Fusce ante urna, malesuada sed ullamcorper sed, rhoncus eget ipsum. Pellentesque sit amet fermentum quam. Donec dapibus imperdiet dui. Sed fermentum, erat nec accumsan ultrices, justo arcu maximus elit, ut malesuada justo erat at odio. Donec in risus ac erat scelerisque auctor. Mauris cursus non nunc quis congue. Quisque volutpat tempor elit, a efficitur arcu iaculis a.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
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
