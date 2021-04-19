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
        <div>
          <br>
          <h2>Thank you for choosing Nikki's Kennels!</h2>
          <br>
          <a href="/#/"><img src="../assets/clientLogo.png" id="logo"/></a>
          <br><br>
          <h1>{{stay.Dog_Information.dog_name}} got:</h1>
          <h1 id="stars">{{stay.Dog_Information.rating}}/5 ⭐</h1>
        </div>
      
        <br><br>
        <h3>Hope to see you again soon!
          <br>
          -Nikki ♥
        </h3>
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
            stay: [],
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

<style scoped>
#app {
    max-width: 600px;
    max-height: 800px;
}
div{
  color:black;
}
.border{
  min-height: 750px;
  max-height: 750px;
  min-width: 550px;
  max-width: 550px;
  /* background:#1d2e3d;   */
  background:#5594ca;
  color: aliceblue;
}
.stay-title{
  margin: auto;
  margin-top: 10px;
  font: large;
}
h2{
  font-size: 25px;
}
#stay-section{
  margin: .5rem 1rem;
}
#printbtn{
  display: none;
  text-align: right;
  margin: 5px;
}
#stars{
  font-size: 60px;
}
#logo {
  max-height: 200px;
}

</style>