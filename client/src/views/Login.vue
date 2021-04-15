<template>
  <div class="login">
    <img id="logo" alt="Vue logo" src="../assets/ourLogo.png">
    <h1 class="page-heading text-light">Login</h1>

    <form v-on:submit="login">
      <!-- Username -->
      <div class="d-flex justify-content-center">
          <input type="text" class="form-control input-field" id="search-bar" placeholder="Enter Username" v-model="username">
      </div>

      <!-- Password -->
      <div class="d-flex justify-content-center">
          <input type="password" class="form-control input-field" id="search-bar" placeholder="Enter Password" v-model="password">
      </div>

      <!-- Login Button -->
      <input type="submit" class="btn btn-success" value="Login">
    </form>
</div>
 
</template>

  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Login',
  data() {
    return {
      username: null,
      password: null,
    }
  },
  methods: {
    login(e) {
      e.preventDefault();

      axios.post("http://localhost:3000/api/users/login", {
        username: this.username,
        password: this.password,
      })
      .then(res => {
        this.$router.push('/clients')
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<style>
#search-bar {
    display: flex;
    width: 300px;
    margin-bottom: 20px
}
</style>