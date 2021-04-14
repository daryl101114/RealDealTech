<template>
  <div class="login">
    <img id="logo" alt="Vue logo" src="../assets/ourLogo.png">
    <h1 class="page-heading text-light">Log In</h1>

    <!-- Username -->
        <div class="d-flex justify-content-center">
            <input type="text" class="form-control input-field" id="search-bar" placeholder="Username">
        </div>

    <!-- Password -->
        <div class="d-flex justify-content-center">
            <input type="text" class="form-control input-field" id="search-bar" placeholder="Password">
        </div>    
  </div>
</template>
<script>

export default {
 
}
</script>

<style>
#search-bar {
    display: flex;
    width: 300px;
    margin-bottom: 20px
}
</style>