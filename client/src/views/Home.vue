<template>
  <div class="home">
    <HelloStart msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloStart from '@/components/HelloStart.vue'

export default {
  name: 'Home',
  components: {
    HelloStart
  }
}
</script>
