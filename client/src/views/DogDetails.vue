<template>
    <div class="text-light d-flex flex-column">
        <!-- dog name as heading -->
        <div class="">
            <h4>{{dog.dog_name}}'s Details</h4>
        </div>
         
        <!-- dog breed -->
        <div class="d-flex dog-info">
            <p class="p-2 bd-highlight" id="field">Breed:</p>
            <p class="p-2 bd-highlight">{{dog.breed}}</p>
        </div>

        <!-- dog age -->
        <div class="d-flex dog-info">
            <p class="p-2 bd-highlight" id="field">Age:</p>
            <p class="p-2 bd-highlight" v-if="dog.age <= 1">{{dog.age}} year old</p>
            <p class="p-2 bd-highlight" v-if="dog.age > 1">{{dog.age}} years old</p>
        </div>

        <!-- dog gender -->
        <div class="d-flex dog-info">
            <p class="p-2 bd-highlight" id="field">Gender:</p>
            <p class="p-2 bd-highlight">{{dog.gender}}</p>
        </div>

        <!-- notes -->
        <div class="d-flex dog-info" v-if="dog.notes && dog.notes.length > 0">
            <p class="p-2 bd-highlight" id="field">Notes:</p>
            <p class="p-2 bd-highlight">{{dog.notes}}</p>
        </div>

        <!-- instructions -->
        <div class="d-flex dog-info" v-if="dog.instructions && dog.instructions.length > 0">
            <p class="p-2 bd-highlight" id="field">Instructions:</p>
            <p class="p-2 bd-highlight">{{dog.instructions}}</p>
        </div>

        <!-- rating -->
        <div class="d-flex dog-info">
            <p class="p-2 bd-highlight" id="field">Dog rating:</p>
            <p class="p-2 bd-highlight">{{dog.rating}}</p>
        </div>


        <div class="d-flex flex-row bd-highlight mb-3 justify-content-center dog-info">
            <div class="p-2 bd-highlight"><a class="btn btn-primary" href="#" role="button">Report Card</a></div>
            <div class="p-2 bd-highlight"><a class="btn btn-primary" href="#" role="button">Update</a></div>
            <div class="p-2 bd-highlight"><a class="btn btn-primary" href="#" role="button">Delete</a></div>
            <div class="p-2 bd-highlight"><router-link to="/dogs" class="btn btn-primary">Cancel</router-link></div>
        </div>
        

    </div>
</template>

<script>
import axios from 'axios'

export default{
    data() {
        return {
            id: this.$route.params.id,
            dog: []
        }
    },
    created() {
      axios.get("http://localhost:3000/api/dogs/dog/" + this.id)
      .then(res => this.dog = res.data.data)
      .catch(err => {
          console.log(err)
      })
  }

}
</script>

<style>
#field{
    font-weight: bold;
}
.dog-info{
    margin-left: 1rem;
}
</style>