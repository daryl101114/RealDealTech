<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h3>Since you're here in dev mode, check out my website through the button below</h3>
    <!-- <a href="https://jpsulak.wixsite.com/home" target="_blank" rel="noopener">Click Me!</a>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
    <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p> -->
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
  color: rgb(170, 0, 162);
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
