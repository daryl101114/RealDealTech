<template>
  <div class="d-flex flex-column justify-content-center">
        <!-- Page heading -->
        <div class="d-flex justify-content-center">
            <h5 class="page-heading text-light">Dogs</h5>
            <h6 class="text-light"></h6>
        </div>

        <!-- Search bar -->
        <div class="d-flex justify-content-center">
            <input type="text" class="form-control input-field" id="search-bar" placeholder="Search dogs..."/>
        </div>

        <!-- Dog component / loop to create list of all dogs in DB -->
        <div class="d-flex justify-content-center" id="dogCard" v-for="dog in dogs" :key="dog.id">
            <!-- Uses component and binds props to send to dog component -->
            <Dog 
            v-bind:key="dog.id"
            v-bind:id="dog.id"
            v-bind:dog_name="dog.dog_name"
            v-bind:age="dog.age"
            v-bind:gender="dog.gender"
            v-bind:breed="dog.breed"
            />
        </div>

        <!-- positions button on bottom of page -->
        <footer class="page-footer font-small blue fixed-bottom">
            <div class="d-flex flex-row-reverse bd-highlight foot">
                <!-- button to create new client -->
                <router-link to="/addDog">
                    <svg xmlns="http://www.w3.org/2000/svg" width="3rem" height="3rem" fill="#5cb85c" class="bi bi-plus-circle" viewBox="0 0 16 16">
                        <!-- <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/> -->
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/>
                    <!--  -->
                    </svg>
                </router-link>
            </div>
        </footer>
    </div>
</template>

<script>
import Dog from '@/components/Dog.vue'
import axios from 'axios'

export default {
  name: 'Dogs',
  components: {
      Dog
  },
  data() {
      return {
          dogs: []
      }
  },
  created() {
      axios.get("http://localhost:3000/api/dogs")
      .then(res => this.dogs = res.data.data)
      .catch(err => {
          console.log(err)
      })
  }
}
</script>

<style>
#search-bar{
    width: 90%;
    height: 2rem;
    margin: 0 1rem;
}

#dogCard{
    margin: 1rem; 
}
</style>