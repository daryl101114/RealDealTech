<template>
    <div class="d-flex flex-column justify-content-center">
        <!-- Page heading -->
        <div class="d-flex justify-content-center">
            <h5 class="page-heading text-light">Stays</h5>
        </div>

        <!-- Search bar -->
        <div class="d-flex justify-content-center">
            <input type="text" class="form-control input-field" id="search-bar" placeholder="Search stays..." v-model="search"/>
        </div>

        <!-- Stays component -->
        <div class="d-flex justify-content-center" id="staysCard" v-for="stay in filteredStays" :key="stay.stayID" >
            <Stay
            v-bind:key="stay.stayID"
            v-bind:id="stay.stayID"
            v-bind:start_date="stay.start_date"
            v-bind:end_date="stay.end_date"
            v-bind:dog_name="stay.Dog_Information.dog_name"
            v-bind:client_fname="stay.Client_Information.fname"
            v-bind:client_lname="stay.Client_Information.lname"
            v-bind:note="stay.note"
            v-bind:instruction="stay.instructions"
            />
        </div>

        <!-- positions button on bottom of page -->
        <footer class="page-footer font-small blue fixed-bottom">
            <div class="d-flex flex-row-reverse bd-highlight foot">
                <!-- button to create new client -->
                <router-link to="/addStay">
                    <svg xmlns="http://www.w3.org/2000/svg" width="3rem" height="3rem" fill="#5cb85c" class="bi bi-plus-circle" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/>
                    </svg>
                </router-link>
            </div>
        </footer>
    </div>
</template>

<script>
import axios from 'axios'
import Stay from '@/components/Stay.vue'

export default {
  name: 'Stays',
  components: {
      Stay
  },
  data (){
      return{
          stays: [],
          search: ''
      }
  },
  created() {
      axios.get("http://localhost:3000/api/stay")
      .then(res => this.stays = res.data)
      .catch(err => console.log(err))
  },
  computed: {
    //   sort stays in order of most recent
      sortStays: function() {
          return this.stays.sort((a,b) => {
              return a.start_date < b.start_date ? 1 : -1
          })
      },
    //   filter stays when typing in the search bar
      filteredStays(){
            return this.sortStays.filter((stay) => {
                return stay.Client_Information.fname.toLowerCase().match(this.search) 
                || stay.Client_Information.lname.toLowerCase().match(this.search)
                || stay.Dog_Information.dog_name.toLowerCase().match(this.search)
            })
        }
  }
}
</script>

<style scoped>
.foot{
    padding-bottom: 3rem;
    padding-right: 2rem;
    position: fixed; 
    bottom: 0; 
    right: 0;
}
#search-bar{
    width: 90%;
    height: 2rem;
    margin: 0 1rem;
}

#staysCard{
    margin: 1rem; 
}
</style>
