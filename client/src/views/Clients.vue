<template>
    <div class="d-flex flex-column justify-content-center">
        <!-- Page heading -->
        <div class="d-flex justify-content-center">
            <h5 class="page-heading text-light">My Clients</h5>
        </div>

        <!-- Search bar -->
        <div class="d-flex justify-content-center">
            <input type="text" class="form-control input-field" id="search-bar" placeholder="Search clients..." v-model="search"/>
        </div>

        <!-- Client component -->
        <div class="d-flex justify-content-center" id="clientCard" v-for="client in filteredClients" :key="client.id">
            <Client
            v-bind:fname="client.fname"
            v-bind:lname="client.lname"
            v-bind:phone="client.phone"
            v-bind:email="client.email"
            v-bind:id="client.id"
            />
        </div>

        <!-- positions button on bottom of page -->
        <footer class="page-footer font-small blue fixed-bottom">
            <div class="d-flex flex-row-reverse bd-highlight foot">
                <!-- button to create new client -->
                <router-link to="/addClient">
                    <svg xmlns="http://www.w3.org/2000/svg" width="3rem" height="3rem" fill="#5cb85c" class="bi bi-plus-circle" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/>
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
          clients: [],
          dogs: [],
          search: ''
      }
  },
  created() {
    //   call client list from API
      axios.get("http://localhost:3000/api/clients")
      .then(res => {
            this.clients = res.data.data

            // get client's dogs by ID
            axios.get("http://localhost:3000/api/dogs/dogPerClient/" + this.clients)
            .then(res => {
            this.dogs = res.data.data
            })
            .catch(console.log(err))
        })
      .catch(err => {
            console.log(err)
      })
  },
  computed: {
    //   sort clients A-Z by first name
      sortedClients: function() {
          return this.clients.sort((a,b) => {
              return a.fname > b.fname ? 1 : -1
          }
        )
      },
    //   filter clients to match search bar
      filteredClients(){
            return this.sortedClients.filter((client) => {
                return client.fname.toLowerCase().match(this.search) || client.lname.toLowerCase().match(this.search) || client.email.toLowerCase().match(this.search)
            })
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
.foot{
    position: fixed; 
    bottom: 0; 
    right: 0;

}
</style>
