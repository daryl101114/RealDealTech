<template>
  <div id="nav">
      <a href="/#/"><img src="../assets/clientLogo.png"/></a>
      <router-link to="/clients">Clients</router-link>
      <router-link to="/dogs">Dogs</router-link> 
      <router-link to="/stays">Stays</router-link>
    </div>
</template>

<script>
export default {

}
</script>

<style>
#nav img{
  max-height: 3.2rem;
}
#nav {
  overflow: hidden;
  color: aliceblue;
  background:#2c3e50;
  min-height: 3rem;
  max-height: 3.28rem;
  /* padding-bottom: .75rem; */
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
@media only screen and (max-width: 600px) {
    #nav a {
        display: flex;
        flex-direction: column;
    }
}
</style>