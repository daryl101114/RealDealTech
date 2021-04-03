<template>
  <div class="test">
    <img id="logo" alt="Vue logo" src="../assets/ourLogo.png">
    <!-- The TestComp page is always showing at the top of the Test.vue. -->
    <TestComp msg="This is the Test Page"/>
    <!-- "v-if" will allow the TestCompClicked component to be 
    loaded when button is true, and unloaded when button is false -->
    <button @click="toggleComponent">Button to View!</button>
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
button {
  font-size: 25px;
  font-weight: bold;
  width: 200px;
  height: 40px;
}
</style>
