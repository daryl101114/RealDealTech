<template>
    <div class="border">
        <div class="text-light d-flex flex-column">
            <!-- dog name as heading -->
            <div class="d-flex dog-title">
                <!-- Back button -->
                <a class="h5 page-heading back-button" @click="$router.go(-1)">
                    <svg class="bi bi-arrow-left-short" width="1.5em" height="1.5em" viewBox="0 0 16 18" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M7.854 4.646a.5.5 0 010 .708L5.207 8l2.647 2.646a.5.5 0 01-.708.708l-3-3a.5.5 0 010-.708l3-3a.5.5 0 01.708 0z" clip-rule="evenodd"/>
                        <path fill-rule="evenodd" d="M4.5 8a.5.5 0 01.5-.5h6.5a.5.5 0 010 1H5a.5.5 0 01-.5-.5z" clip-rule="evenodd"/>
                    </svg>
                </a>
                <!-- Page heading -->
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

            <!-- dog owner -->
            <div class="d-flex dog-info" v-if="dog.Client_Information">
                <p class="p-2 bd-highlight" id="field">Dog owner:</p>
                <router-link class="text-light" v-bind:to="'/clientDetails/' + dog.ClientInformationId">
                    <p class="p-2 bd-highlight"><u>{{dog.Client_Information.fname}} {{dog.Client_Information.lname}}</u></p>
                </router-link>
            </div>

            <!-- dog vaccines -->
             <div class="d-flex flex-column align-items-start dog-info" v-if="vaccines.length !== 0">
                <p class="p-2 bd-highlight" id="field">Vaccinations: </p>
                <!-- loop through vaccines for dog -->
                <ul class="list-group list-group-horizontal" v-for="vaccine in vaccines" :key="vaccine.vaccine_recordID">
                <li id="vacc-link">
                    <a class="text-light" :href="'http://localhost:3000/' + vaccine.vaccine_file">
                        <p id="vaccines">{{vaccine.vaccine_name}}</p>
                    </a>
                </li>
                </ul>
            </div>

            <div class="d-flex flex-row bd-highlight mb-3 justify-content-center">
                <!-- update dog -->
                <div class="p-2 bd-highlight">
                    <router-link class="btn btn-success" href="#" role="button" v-bind:to="'/updateDog/' + id">Update</router-link>
                </div>
                <!-- delete client -->
                <div class="p-2 bd-highlight">
                    <a class="btn btn-success" href="#" role="button" v-on:click.prevent="deleteDog">Delete</a>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default{
    data() {
        return {
            id: this.$route.params.id,
            dog: [],
            vaccines: []
        }
    },
    created() {
    // get dog info
        axios.get("http://localhost:3000/api/dogs/dog/" + this.id)
        .then(res => {
            this.dog = res.data.data
        })
        .catch(err => {
            console.log(err)
        })

    //   get dog vaccines
        axios.get("http://localhost:3000/api/vaccine/vaccinePerDog/" + this.id)
        .then(res => {
            this.vaccines = res.data
            console.log(this.vaccines)
        })
        .catch(err => {
            console.log(err)
        })
  },
  methods: {
    //   delete dog
    deleteDog: function() {
        axios.delete("http://localhost:3000/api/dogs/dogDelete/" + this.id)
        .then((res) => {
          this.$router.push('/dogs')
         })
         .catch(err => console.log(err))
    }

  }

}
</script>

<style>
#field{
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
}
</style>