<template>
    <div class="border">
      <!-- make page column format -->
      <div class="d-flex flex-column">
        <!-- header section -->
        <div class="d-flex stay-title">
            <h4>{{stay.Dog_Information.dog_name}}'s Report Card</h4>
        </div>

        <!-- Date information -->
        <div class="d-flex flex-column align-items-start" id="stay-section">
          <h6 class="font-weight-bold" id="heading">Stay Date</h6>
          <p>{{stay.start_date | moment}} - {{stay.end_date | moment}}</p>
        </div>

        <!-- client information -->
        <!-- <div class="d-flex flex-column align-items-start" id="stay-section" v-if="stay.Client_Information">
          <h6 class="font-weight-bold" id="heading">Client information</h6>
            <p>Name: {{stay.Client_Information.fname}} {{stay.Client_Information.lname}}</p>
          <p>Phone: {{stay.Client_Information.phone}}</p>
          <p>Email: {{stay.Client_Information.email}}</p>
        </div> -->

        <!-- dog information -->
        <!-- <div class="d-flex flex-column align-items-start" id="stay-section" v-if="stay.Dog_Information">
          <h6 class="font-weight-bold" id="heading">Dog information</h6>
            <p>Name: {{stay.Dog_Information.dog_name}}</p>            
            <p>Breed: {{stay.Dog_Information.breed}}</p>
        </div> -->

        <!-- notes and instructions -->
        <!-- <div class="d-flex flex-column align-items-start" id="stay-section" v-if="stay.note || stay.instructions">
          <h5 class="font-weight-bold" id="heading">Stay information</h5>
          <p>Notes: {{stay.note}}</p>
          <p>Instructions: {{stay.instructions}}</p>
        </div> -->

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

<style scoped>
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

/* #field{
    font-weight: bold;
}
.back-button{
    color: white;
    margin: auto;
}
.dog-info{
    margin-left: 1rem;
}
.dog-title{
    margin: auto;
    margin-top: 10px;
    font: large;
}
.border {
background:#1d2e3d;
color: aliceblue;
}
#vacc-link{
  color: white;
  text-decoration: underline;
}
#vaccines{
    padding-left: .5rem;
} */
</style>