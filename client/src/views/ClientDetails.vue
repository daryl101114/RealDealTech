<template>
    <div class="border">
      <!-- Displays first, disappears if deleting -->
      <!-- make page column -->
      <div class="d-flex flex-column" id="details-section" v-if="!showComponent">
        
        <!-- header section -->
        <div class="d-flex client-title">
            <!-- Back button -->
            <a class="h5 page-heading back-button" @click="$router.go(-1)">
                <svg class="bi bi-arrow-left-short" width="1.5em" height="1.5em" viewBox="0 0 16 18" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M7.854 4.646a.5.5 0 010 .708L5.207 8l2.647 2.646a.5.5 0 01-.708.708l-3-3a.5.5 0 010-.708l3-3a.5.5 0 01.708 0z" clip-rule="evenodd"/>
                    <path fill-rule="evenodd" d="M4.5 8a.5.5 0 01.5-.5h6.5a.5.5 0 010 1H5a.5.5 0 01-.5-.5z" clip-rule="evenodd"/>
                </svg>
            </a>
            <!-- Page heading -->
            <h4>{{client.fname}}'s Details</h4>
        </div>

        <!-- contact information -->
        <div class="d-flex flex-column align-items-start" id="client-section">
          <h6 class="font-weight-bold" id="heading">Contact Information</h6>
          <p>Name: {{client.fname}} {{client.lname}}</p>
          <p>Phone: {{client.phone}}</p>
          <p>Email: {{client.email}}</p>
        </div>

        <!-- other client information -->
        <div class="d-flex flex-column align-items-start" id="client-section">
          <h6 class="font-weight-bold" id="heading">Other Information</h6>

          <div class="d-flex flex-row align-items-start" id="dogs-owned"  v-if="dogs.length !== 0">
            <!-- dogs owned -->
            <p>Dog's owned: </p>
            <!-- loop through dogs owned -->
            <ul class="list-group list-group-horizontal" v-for="dog in dogs" :key="dog.id">
              <li id="dog-link">
                <router-link class="text-light" v-bind:to="'/dogdetails/' + dog.id">
                  <p>{{dog.dog_name}}</p>
                </router-link>
              </li>
            </ul>
          </div>
          
          <!-- check to see if there is client notes and display them -->
          <p v-if="client.notes">Client Notes: {{client.notes}}</p>
          <!-- check blacklist status -->
          <p v-if="client.blacklistId == 1">BLACKLISTED: DO NOT DO BUSINESS</p>
        </div>

        <div class="d-flex flex-row bd-highlight mb-3 justify-content-center">
          <!-- update client -->
          <div class="p-2 bd-highlight">
            <router-link class="btn btn-success" href="#" role="button" v-bind:to="'/updateClient/' + id">Update</router-link>
          </div>
          <!-- delete (will show the DeleteVerification component) -->
            <div class="p-2 bd-highlight">
              <button class="btn btn-danger" role="button" style="vertical-align:middle" @click="toggleComponent">Delete</button>
            </div>
        </div>

      </div>
      <!-- shows if tries to delete -->
        <div v-if="showComponent">
            <DeleteVerification/>
            <div class="p-2 bd-highlight">
                <a class="btn btn-danger" href="#" role="button" v-on:click.prevent="deleteClient">Confirm Delete</a>
            </div>
            <div class="p-2 bd-highlight">
                <button class="btn btn-success" role="button" style="vertical-align:middle" @click="toggleComponent">Cancel</button>
            </div>
        </div>
    </div>
</template>

<script>
  import axios from 'axios'
  import DeleteVerification from '@/components/DeleteVerification.vue'


  export default{
    components: {
        DeleteVerification
    },
    data() {
      return {
        client: [],
        dogs: [],
        id: this.$route.params.id,
        showComponent: false 
      }
    },
    created() {
      // get client by ID
      axios.get("http://localhost:3000/api/clients/client/" + this.id)
      .then(res => {
        this.client = res.data.data

        // get client's dogs by ID
        axios.get("http://localhost:3000/api/dogs/dogPerClient/" + this.id)
        .then(res => {
          this.dogs = res.data.data
        })
        .catch(err => console.log(err))
      })
      .catch(err => console.log(err))
    },
    methods: {
      // delete client
      deleteClient: function() {
        axios.delete("http://localhost:3000/api/clients/delete/" + this.id)
        .then(() => {
          this.$router.push('/clients')
         })
         .catch(err => console.log(err))
      },
      toggleComponent () {
        this.showComponent = !this.showComponent;
      }
    }
    
  }
</script>

<style scoped>
/* .border {
background: rgb(115,106,110);
background: radial-gradient(circle, rgba(115,106,110,1) 0%, rgba(84,110,122,1) 98%);
color: aliceblue;
} */

#details-section{
  margin-top: 1rem;
}

ul{
  list-style: none;
}
.client-title{
    margin: auto;
    margin-top: 10px;
    font: large;
}
#dog-link{
  color: white;
  text-decoration: underline;
}
#dog-link:hover{
  color: #888;
}
#client-section{
  margin: .5rem 1rem;
}
#dogs-owned{
  margin-left: 0;
}
#dog-link{
  padding-left: .5rem;
}
.border {
background:#1d2e3d;
color: aliceblue;
}
</style>