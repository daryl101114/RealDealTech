<template>
  <div class="test">
    <div class="moreNav">
      <button style="background-color: black"><a href="/#/home">Original Home Page</a></button>
      <button style="background-color: black"><a href="/#/dev">Development Test Page</a></button>
    </div>
    <img id="logo" alt="Vue logo" src="../assets/ourLogo.png">
    <!-- The TestComp page is always showing at the top of the Test.vue. -->
    <TestComp msg="This is the Test Page"/>
    <!-- "v-if" will allow the TestCompClicked component to be 
    loaded when button is true, and unloaded when button is false -->
    <button class="button" style="vertical-align:middle" @click="toggleComponent"><span>View! </span></button>
    <TestCompClicked
      v-if="showComponent"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import TestComp from '@/components/TestComp.vue'
import TestCompClicked from '@/components/TestCompClicked.vue'

export default {
name: 'Test',
components: {
  TestComp,
  TestCompClicked //This componant is not displayed by default
},
data() {
  //setting this return function to false means component will not disyplay on page
  return {
    showComponent: false 
  };
},
methods: {
  //this method is called when button is clicked.
  //method swaps added page content between visible and invisible
  toggleComponent () {
    this.showComponent = !this.showComponent;
  }
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
  height: auto;
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
.moreNav{
  margin: 1rem;
}
.moreNav a{
  text-decoration: none;
  color: aliceblue;
  margin: 1rem;
}
</style>
