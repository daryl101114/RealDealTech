<template>
  <div class="home">
    <img id="logo" alt="Vue logo" src="../assets/ourLogo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <button class="button" style="vertical-align:middle" onclick=" window.open('https://jpsulak.wixsite.com/home','_blank')"><span>Click Me! </span></button>
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
.button {
  background-color: chocolate;
  font-weight: bold;
  width: 200px;
  height: 70px;
  display: inline-block;
  border-radius: 4px;
  border: none;
  color: aliceblue;
  text-align: center;
  font-size: 28px;
  padding: 20px;
  transition: all 0.5s;
  cursor: pointer;
  margin: 5px;
}
.button span {
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.5s;
}
.button span:after {
  content: '\00bb';
  position: absolute;
  opacity: 0;
  top: 0;
  right: -20px;
  transition: 0.5s;
}
.button:hover span {
  padding-right: 25px;
}
.button:hover span:after {
  opacity: 1;
  right: 0;
}
</style>