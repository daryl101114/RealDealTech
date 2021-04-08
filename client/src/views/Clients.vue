<template>
    <div class="d-flex flex-column justify-content-center">
        <div class="d-flex justify-content-center">
            <h6 class="page-heading">My Clients</h6>
        </div>
        <div class="d-flex justify-content-center">
            <input type="text" class="form-control input-field" id="search-bar" placeholder="Search client..." v-model="search"/>
        </div>
        <div class="d-flex justify-content-center" id="clientCard">
            <Client/>
        </div>
    </div>
</template>

<script>
import Client from '@/components/Client.vue'

export default {
  name: 'Clients',
  components: {
      Client
  }
}
</script>

<style>
#search-bar{
    width: 18rem;
    height: 2rem;
}

#clientCard{
    margin: 1rem; 
}
</style>
