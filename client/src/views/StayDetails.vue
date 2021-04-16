<template>
    <div class="border">
      <!-- make page column format -->
      <div class="d-flex flex-column">
        <!-- header section -->
        <div class="d-flex stay-title">
            <!-- Back button -->
            <a class="h5 page-heading back-button" @click="$router.go(-1)">
                <svg class="bi bi-arrow-left-short" width="1.5em" height="1.5em" viewBox="0 0 16 18" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M7.854 4.646a.5.5 0 010 .708L5.207 8l2.647 2.646a.5.5 0 01-.708.708l-3-3a.5.5 0 010-.708l3-3a.5.5 0 01.708 0z" clip-rule="evenodd"/>
                    <path fill-rule="evenodd" d="M4.5 8a.5.5 0 01.5-.5h6.5a.5.5 0 010 1H5a.5.5 0 01-.5-.5z" clip-rule="evenodd"/>
                </svg>
            </a>
            <!-- Page heading -->
            <h4>Stay Details</h4>
        </div>


        <!-- Date information -->
        <div class="d-flex flex-column align-items-start" id="stay-section">
          <h6 class="font-weight-bold" id="heading">Stay Date</h6>
          <p>{{stay.start_date | moment}} - {{stay.end_date | moment}}</p>
        </div>

        <!-- client information -->
        <div class="d-flex flex-column align-items-start" id="stay-section" v-if="stay.Client_Information">
          <h6 class="font-weight-bold" id="heading">Client information</h6>
          <!-- router link to client deatils page -->
          <router-link v-bind:to="'/clientDetails/' + stay.ClientInformationId" class="text-light">
            <p>Name: <u>{{stay.Client_Information.fname}} {{stay.Client_Information.lname}}</u></p>
          </router-link>
          <!-- client phone -->
          <p>Phone: {{stay.Client_Information.phone}}</p>
          <!-- client email -->
          <p>Email: {{stay.Client_Information.email}}</p>
        </div>

        <!-- dog information -->
        <div class="d-flex flex-column align-items-start" id="stay-section" v-if="stay.Dog_Information">
          <h6 class="font-weight-bold" id="heading">Dog information</h6>
          <!-- router link to dog details page -->
          <router-link v-bind:to="'/dogDetails/' + stay.DogInformationId" class="text-light">
            <p>Name: <u>{{stay.Dog_Information.dog_name}}</u></p>            
          </router-link>
          <!-- dog breed -->
          <p>Breed: {{stay.Dog_Information.breed}}</p>
        </div>

        <!-- notes and instructions -->
        <div class="d-flex flex-column align-items-start" id="stay-section" v-if="stay.note || stay.instructions">
          <h5 class="font-weight-bold" id="heading">Stay information</h5>
          <p>Notes: {{stay.note}}</p>
          <p>Instructions: {{stay.instructions}}</p>
        </div>

        <div class="d-flex flex-row bd-highlight mb-3 justify-content-center">
          <!-- Link to Report Card -->
          <div class="p-2 bd-highlight">
           <router-link class="btn btn-success" role="button" :to="'/reportCardPage/' + id" target="_blank">Report Card</router-link>
          </div>
          <!-- update stay -->
          <div class="p-2 bd-highlight">
            <router-link class="btn btn-success" href="#" role="button" v-bind:to="'/updateStay/' + id">Update</router-link>
          </div>
          <!-- delete stay -->
          <div class="p-2 bd-highlight">
            <a class="btn btn-success" href="#" role="button" v-on:click.prevent="deleteStay">Delete</a>
          </div>
        </div>

      </div>
    </div>
</template>

<script>
  import moment from 'moment'
  import axios from 'axios'

  export default{
    data() {
        return {
            id: this.$route.params.id,
            stay: []
        }
    },
    created() {
      // api call to get stay details
      axios.get("http://localhost:3000/api/stay/" + this.id)
      .then(res => {
        this.stay = res.data
      })
      .catch(err => {
          console.log(err)
      })
    },
    methods: {
      //   delete stay
      deleteStay: function() {
          axios.delete("http://localhost:3000/api/stay/delete/" + this.id)
          .then((res) => {
            this.$router.push('/stays')
          })
          .catch(err => console.log(err))
      }
    },
    filters: {
        moment: function (date) {
            return moment(date).format("MMM Do, YYYY");
        }
    }
  }
</script>

<style>
/* .border {
background: rgb(115,106,110);
background: radial-gradient(circle, rgba(115,106,110,1) 0%, rgba(84,110,122,1) 98%);
color: aliceblue;
} */
.stay-title{
  margin: auto;
  margin-top: 10px;
  font: large;
}
#stay-section{
  margin: .5rem 1rem;
}
.border {
background:#1d2e3d;
color: aliceblue;
}
</style>