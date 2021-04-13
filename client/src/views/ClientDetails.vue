<template>
    <div class="border">
      <!-- Client name -->
      <div class="d-inline-flex p-2 bd-highlight"><h5>{{client.fname}} {{client.lname}}</h5></div>
      
      <div class="d-flex flex-column bd-highlight mb-3">
        <div class="p-2 bd-highlight">Contact Information</div>
        <div class="p-2 bd-highlight">Phone: {{client.phone}}</div>
        <div class="p-2 bd-highlight">Email: {{client.email}}</div>
      </div>

      <div class="d-flex flex-row bd-highlight mb-3">
          <div class="p-2 bd-highligh">Dogs owned:</div>
          <div class="p-2 bd-highlight" v-for="dog in dogs" :key="dog.id">
            <router-link v-bind:to="'/dogdetails/' + dog.id"  id="dog-link">
              <h6>{{dog.dog_name}}</h6>
            </router-link>
          </div>
      </div>

      <div class="d-flex flex-row bd-highlight mb-3" v-if="client.notes">
        <div class="p-2 bd-highlight">Notes:</div>
        <div class="p-2 bd-highlight">{{client.notes}}</div>
      </div>

      <div class="d-flex flex-row bd-highlight mb-3">
        <div class="p-2 bd-highlight">Black Listed:</div>
        <div class="p-2 bd-highlight">{{client.blacklist.blacklist_desc}}</div>
      </div>

      <div class="d-flex flex-row bd-highlight mb-3 justify-content-center">
        <div class="p-2 bd-highlight"><a class="btn btn-primary" href="#" role="button">Update</a></div>
        <div class="p-2 bd-highlight"><a class="btn btn-primary" href="#" role="button">Delete</a></div>
        <div class="p-2 bd-highlight"><router-link to="/clients" class="btn btn-primary">Cancel</router-link></div>
      </div>
    </div>
</template>

<script>
  import axios from 'axios'

  export default{
    data() {
      return {
        client: [],
        dogs: [],
        id: this.$route.params.id
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
        .catch(console.log(err))
      })
      .catch(err => console.log(err))
    }
    
  }
</script>

<style>
.border {
background: rgb(115,106,110);
background: radial-gradient(circle, rgba(115,106,110,1) 0%, rgba(84,110,122,1) 98%);
color: aliceblue;
/* background-color: aliceblue; */
}

#dog-link{
  color: white;
  text-decoration: underline;
}
#dog-link:hover{
  color: #888;
}
</style>