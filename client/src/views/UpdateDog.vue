<template>
    <div>
        <!-- heading label -->
        <h5 class="text-light">Update Dog</h5>
        <!-- create dog form -->
        <form class="form d-flex flex-column" v-on:submit.prevent="updateDog">

            <!-- dog name -->
            <div class="form-row">
                <label for="dog_name" class="text-light">Name</label>
                <input require type="text" class="form-control" name="dog_name" v-model="dog.dog_name" placeholder="Dog name">
            </div>

            <!-- dog age -->
            <div class="form-row">
                <label for="age" class="text-light">Age</label>
                <input require type="number" min="0" max="20" class="form-control" name="age" v-model="dog.age" placeholder="Age">
            </div>

            <!-- dog breed -->
            <div class="form-row">
                <label for="breed" class="text-light">Breed</label>
                <input require type="text" class="form-control" name="breed" v-model="dog.breed" placeholder="Breed">
            </div>

            <!-- dog gender -->
            <div class="form-row">
                <label for="gender" class="text-light">Gender</label>
                <select require class="form-control" name="gender" v-model="dog.gender">
                    <option selected disabled>Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>
            </div>

            <!-- dog owner -->
            <div class="form-row" v-if="clients">
                <label class="text-light" for="exampleFormControlSelect1">Dog Owner</label>
                <select class="form-control" name="ClientInformationId" v-model="dog.ClientInformationId">
                    <option selected disabled>Owner</option>
                    <option v-for="client in clients" :key="client.id" :value="client.id">{{client.fname}} {{client.lname}}</option>
                </select>
            </div>

            <!-- notes about the dog -->
            <div class="form-row">
                <label for="notes" class="text-light">Dog notes</label>
                <textarea class="form-control" name="notes" rows="3" placeholder="Dog notes..." v-model="dog.notes"></textarea>
            </div>

            <!-- instructions for stays-->
            <div class="form-row">
                <label for="instructions" class="text-light">Instructions For Dog</label>
                <textarea class="form-control" name="instructions" rows="3" placeholder="Instructions for dog..." v-model="dog.instructions"></textarea>
            </div>

            <!-- dog rating-->
            <div class="form-row">
                <label for="rating" class="text-light">Dog rating</label>
                <select require class="form-control" name="rating" v-model="dog.rating">
                    <option selected disabled>Rating</option>
                    <option value="1">1 (Worst)</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5 (Best)</option>
                </select>
            </div>

            <!-- Blacklist dog -->
            <div class="form-row justify-content-start">
                <label for="blacklistId" class="text-light">Blacklist dog:</label>
                <div class="form-check">
                    <input class="form-check-input" required type="radio" name="blacklistId" v-model="dog.blacklistId" value="1" id="flexRadioDefault1">
                    <label class="form-check-label text-light" for="flexRadioDefault1">
                        Yes (Blacklist Client)
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="blacklistId" v-model="dog.blacklistId" value="3" id="flexRadioDefault2" checked>
                    <label class="form-check-label text-light" for="flexRadioDefault2">
                        No
                    </label>
                </div>
            </div>

            <!-- submit and cancel buttons -->
            <div class="d-flex flex-row">
                <button type="submit" class="btn btn-success form-button p-2">Submit</button>
            </div>
        </form>

        <footer class="page-footer font-small blue fixed-bottom">
            <div class="d-flex flex-row-reverse bd-highlight foot">
                <!-- button to cancel -->
                <router-link v-bind:to="'/dogdetails/' + this.id">
                    <svg xmlns="http://www.w3.org/2000/svg" width="3rem" height="3rem" fill="#5cb85c" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
                        <!-- <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/> -->
                        <!-- <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/> -->
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
                    </svg>
                </router-link>
            </div>
        </footer>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            id: this.$route.params.id,
            dog: [],
            clients: []
        }
    },
    created() {
    //  call dog information to fill form
        axios.get("http://localhost:3000/api/dogs/dog/" + this.id)
        .then(res => {
            this.dog = res.data.data
        })
        .catch(err => {
            console.log(err)
        })

    //   call client list from API
        axios.get("http://localhost:3000/api/clients")
        .then(res => {
                this.clients = res.data.data
        })
        .catch(err => console.log(err))
    },
    methods: {
        // create newClient model and pass it into API PUT request to create client
        updateDog() {
            let dog = {
                dog_name: this.dog.dog_name,
                age: this.dog.age,
                gender: this.dog.gender,
                breed: this.dog.breed,
                notes: this.dog.notes,
                instructions: this.dog.instructions,
                rating: this.dog.rating,
                blacklistID: this.dog.blacklistId,
                ClientInformationId: this.dog.ClientInformationId
            }
            axios.put("http://localhost:3000/api/dogs/dogUpdate/" + this.id, dog)
            .then(() => {
                this.$router.go(-1)
                })
            .catch(err => console.log(err, dog))
        }
    }
    
}
</script>

<style>
.form{
    margin: 0 1.5rem 2rem;
}
.form-row{
    padding-top: .5rem;
    padding-bottom: .5rem;
}
.form-button{
    padding-top: .5rem;
}
.p-2{
    margin: .5rem 1rem 0 0;
}
/* To right-justify button content on the page */
.flex-row{
    margin-left: auto;
    margin-right: 3.5rem;
    margin-bottom: 1rem;
}
.foot{
    position: fixed; 
    bottom: 0; 
    right: 0;

}
</style>