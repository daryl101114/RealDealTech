<template>
    <div class="d-flex flex-column justify-content-center">
        <!-- Page heading -->
        <div class="d-flex justify-content-center">
            <h5 class="page-heading text-light">My Clients</h5>
        </div>

        <!-- Search bar -->
        <div class="d-flex justify-content-center">
            <input type="text" class="form-control input-field" id="search-bar" placeholder="Search clients..."/>
        </div>

        <!-- Client component -->
        <div class="d-flex justify-content-center" id="clientCard">
            <Client/>
        </div>

        <!-- positions button on bottom of page -->
        <footer class="page-footer font-small blue fixed-bottom">
            <div class="d-flex flex-row-reverse bd-highlight foot">
                <!-- button to create new client -->
                <router-link to="/addClient">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" fill="#5cb85c" class="bi bi-plus-circle" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                    </svg>
                </router-link>
            </div>
        </footer>
    </div>
</template>

<script>
import Client from '@/components/Client.vue'
import axios from 'axios'

export default {
  name: 'Clients',
  components: {
      Client
  },
  data() {
      return {
          id: this.$route.params.id,
          client: []
      }
  }
}
</script>

<style>
.foot{
    padding-bottom: 3rem;
    padding-right: 2rem;
}
#search-bar{
    width: 90%;
    height: 2rem;
    margin: 0 1rem;
}

#clientCard{
    margin: 1rem; 
}
</style>
