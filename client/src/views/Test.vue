<template>
  <div class="test">
    <img alt="Vue logo" src="../assets/logo.png">
    <TestComp msg="This is the Test Page"/>
  </div>
</template>

<script>
// @ is an alias to /src
import TestComp from '@/components/TestComp.vue'

export default {
  name: 'Test',
  components: {
    TestComp
  }
}
</script>
