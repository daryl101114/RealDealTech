<template>
  <div class="test">
    <img id="logo" alt="Vue logo" src="../assets/ourLogo.png">
    <TestComp msg="This is the Test Page"/>
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
  TestCompClicked
},
data() {
  return {
    showComponent: false
  };
},
methods: {
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
