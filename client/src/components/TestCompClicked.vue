<!-- This page is for rendering on top on the Test.vue page -->
<template>
  <div class="testCompClicked">
    <!-- <h1>{{ msg }}</h1> -->
    <h2>This Page has been CLICKED</h2>
    <p>Also you get to see a picture now since you clicked the button.</p>
    <img id="thumbs" alt="Thumbs Up" src="../assets/thumbsUp.jpeg">
  </div>
</template>

<script>
// export default {
//   name: 'TestCompClicked',
//   props: {
//     msg: String
//   }
// }
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
h2 {
  color: #8342b9;
}
</style>
