<template>
  <div class="testComp">
    <h1>{{ msg }}</h1>
    <h5>Click button to view more more.</h5>
  </div>
</template>

<script>
export default {
  name: 'TestComp',
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
h1 {
  color: #b94279;
}
</style>
