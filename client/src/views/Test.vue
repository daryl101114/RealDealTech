<template>
  <div class="test">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="This is the Test Page"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Test',
  components: {
    HelloWorld
  }
}
</script>
