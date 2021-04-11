<template>
  <div id="app">
    <div id="nav">
      <router-link to="/clients">Clients</router-link> |
      <router-link to="/dogs">Dogs</router-link> |
      <router-link to="/stays">Stays</router-link> |
      <router-link to="/">Home</router-link> |
      <router-link to="/test">Test</router-link>
      <!-- <router-link to="/about">About</router-link> | -->
    </div>
    <router-view/>
  </div>
</template>

<style>
/* template {
  background: rgb(115,106,110);
  background: radial-gradient(circle, rgba(115,106,110,1) 0%, rgba(84,110,122,1) 98%);
} */

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  color: white;
}

#nav a {
  font-weight: bold;
  color: white;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
