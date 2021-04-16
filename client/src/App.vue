<template>
  <div id="app">
    <div id="nav" v-if="isLogin&&isReportCardPage" >
      <NavBar/>
    </div>
    <router-view/>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
export default {
  components: {
    NavBar
  },
  computed: {
    isLogin() {
      return this.$route.name != 'Login'
      
    },
    isReportCardPage() {
      return this.$route.name != 'ReportCardPage'
    }
  }
}
</script>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: #222;
}


</style>
