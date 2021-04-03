<template>
  <div class="home">
    <img id="logo" alt="Vue logo" src="../assets/ourLogo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <button class="popup-trigger" onclick="myFunction()">Button</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
<style>
#logo {
  max-width: 125px;
  max-height: 125px;
}
button {
  font-size: 25px;
  font-weight: bold;
  width: 200px;
  height: 40px;
}
</style>