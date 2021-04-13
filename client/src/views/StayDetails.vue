<template>
    <div class="border">
      <!-- make page column format -->
      <div class="d-flex flex-column">
        <!-- page heading -->
        <h5 class="font-weight-bold">Stay Details</h5>

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

        <div class="d-flex flex-column align-items-start" id="stay-section" v-if="stay.note || stay.instructions">
          <h5 class="font-weight-bold" id="heading">Stay information</h5>
          <p>Notes: {{stay.note}}</p>
          <p>Instructions: {{stay.instructions}}</p>
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
    filters: {
        moment: function (date) {
            return moment(date).format("MMM Do, YYYY");
        }
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

#stay-section{
  margin: .5rem 1rem;
}
</style>