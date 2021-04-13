<template>
    <div class="border">
      <div class="d-inline-flex p-2 bd-highlight">
        <h5>{{stay.Dog_Information.dog_name}}'s Stay Details</h5>
      </div>
      
      <div class="d-flex flex-row bd-highlight mb-3">
        <div class="p-2 bd-highlight">Client Name:</div>
        <div class="p-2 bd-highlight">Susan</div>
      </div>

      <div class="d-flex flex-row bd-highlight mb-3">
        <div class="p-2 bd-highlight">Client Informaiton:</div>
        <div class="p-2 bd-highlight">Susan@blablalba.com</div>
      </div>

      <div class="d-flex flex-row bd-highlight mb-3">
        <div class="p-2 bd-highlight">Stay Date</div>
        <div class="p-2 bd-highlight">{{stay.start_date | moment}} - {{stay.end_date | moment}}</div>
      </div>

      <div class="d-flex flex-row bd-highlight mb-3" v-if="stay.note">
        <div class="p-2 bd-highlight">Notes:</div>
        <div class="p-2 bd-highlight">{{stay.note}}</div>
      </div>

      <div class="d-flex flex-row bd-highlight mb-3">
        <div class="p-2 bd-highlight">Black Listed:</div>
        <div class="p-2 bd-highlight">No</div>
      </div>

      <div class="d-flex flex-row bd-highlight mb-3 justify-content-center">
        <div class="p-2 bd-highlight"><a class="btn btn-primary" href="#" role="button">Update</a></div>
        <div class="p-2 bd-highlight"><a class="btn btn-primary" href="#" role="button">Delete</a></div>
        <div class="p-2 bd-highlight"><router-link to="/stays" class="btn btn-primary">Cancel</router-link></div>
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


</style>