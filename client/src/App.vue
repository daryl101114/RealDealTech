<template>
  <div id="app">
    
    <div id="nav">
      <router-link to="/clients">Clients</router-link> 
      <router-link to="/dogs">Dogs</router-link> 
      <router-link to="/stays">Stays</router-link> 
      
      <!-- <router-link to="/">Home</router-link> -->
      <!-- <router-link to="/dev">Test</router-link> -->
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
#clientLogo {
  max-width: 50px;
  max-height: 50px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: #222;
}

#nav {
  overflow: hidden;
  padding: 30px;
  color: aliceblue;
  background:#2c3e50;
  /* background: darkgreen; */
  padding: 1rem;
  margin-bottom: 1.5rem;
}

/* .sticky {
  position: fixed;
  top: 0;
  width: 100%;
}
.sticky + .content {
  padding-top: 60px;
} */

#nav a {
  text-decoration: none;
  padding: 1rem;
  font-weight: bold;
  /* background:#2b3850; */
  color: aliceblue;
  text-align: center;
}

#nav a:hover{
  background-color:#132e49;
  color: whitesmoke;
}

#nav a.router-link-exact-active {
  color: #42b983;
  background-color:#1f3041;
}

/* @media only screen and (max-width: 600px) {
    #nav a {
        display: flex;
        flex-direction: column;
    }
} */
</style>
