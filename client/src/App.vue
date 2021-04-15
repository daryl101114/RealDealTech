<template>
  <div id="app">
    
      <!-- <nav id="nav" class="navbar navbar-expand-lg navbar-dark bg-dark">
        <img class="navbar-brand" src="../src/assets/clientLogo.png"></img>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <router-link class="nav-link text" to="/clients">Clients</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link text" to="/dogs">Dogs</router-link> 
            </li>
            <li class="nav-item">
              <router-link class="nav-link text" to="/stays">Stays</router-link>
            </li>
          </ul>
        </div>
      </nav> -->
    <div id="nav">
      <a href="/#/login"><img src="../src/assets/clientLogo.png"></img></a>
      <router-link to="/clients">Clients</router-link>
      <router-link to="/dogs">Dogs</router-link> 
      <router-link to="/stays">Stays</router-link>
    </div>

      
      <!-- <router-link to="/">Home</router-link> -->
      <!-- <router-link to="/dev">Test</router-link> -->
      <!-- <router-link to="/about">About</router-link> | -->
    <router-view/>
  </div>
</template>

<style>

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
#nav img{
  max-height: 3.25rem;
}

#nav {
  overflow: hidden;
  color: aliceblue;
  background:#2c3e50;
  min-height: 3rem;
  /* padding-top: .75rem; */
  margin-bottom: 1.5rem;
}

#nav a {
  text-decoration: none;
  padding: 1rem;
  font-weight: bold;
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
