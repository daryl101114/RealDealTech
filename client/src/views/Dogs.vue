<template>
  <div class="d-flex flex-column justify-content-center">
        <!-- Page heading -->
        <div class="d-flex justify-content-center">
            <h5 class="page-heading text-light">Dogs</h5>
            <h6 class="text-light"></h6>
        </div>

        <!-- Search bar -->
        <div class="d-flex justify-content-center">
            <input type="text" class="form-control input-field" id="search-bar" placeholder="Search dogs..." v-model="search"/>
        </div>

        <!-- Dog component / loop to create list of all dogs in DB -->
        <div class="d-flex justify-content-center" id="dogCard" v-for="dog in filteredDogs" :key="dog.id">
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
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/>
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
          dogs: [],
          search: ''
      }
  },
  created() {
      axios.get("http://localhost:3000/api/dogs")
      .then(res => this.dogs = res.data.data)
      .catch(err => {
          console.log(err)
      })
  },
  computed: {
      sortedDogs: function() {
          return this.dogs.sort((a,b) => {
              return a.dog_name > b.dog_name ? 1 : -1
          }
        )
      },
      filteredDogs(){
            return this.sortedDogs.filter((dog) => {
                return dog.dog_name.toLowerCase().match(this.search) || dog.breed.toLowerCase().match(this.search) || String(dog.age).toLowerCase().match(this.search)
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

#dogCard{
    margin: 1rem; 
}
</style>