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

            <br>
            <!-- Blacklist dog -->
            <div class="d-flex flex-column justify-content-start">
                <label for="blacklistId" class="d-flex text-light">Blacklist dog:</label>
                <div class="d-flex form-check">
                    <input class="form-check-input" required type="radio" name="blacklistId" v-model="dog.blacklistId" value="1" id="flexRadioDefault1">
                    <label class="form-check-label text-light" for="flexRadioDefault1">
                        Yes (Blacklist Client)
                    </label>
                </div>
                <div class="d-flex form-check">
                    <input class="form-check-input" type="radio" name="blacklistId" v-model="dog.blacklistId" value="3" id="flexRadioDefault2" checked>
                    <label class="form-check-label text-light" for="flexRadioDefault2">
                        No
                    </label>
                </div>
            </div>

            <br>
            <!-- add dog section -->
            <div class="form-column justify-content-start text-light">
                <!-- section heading -->
                <div class="form-row d-flex">
                    <h6 id="add-vaccine">Add Vaccine</h6>
                    <!-- add vaccine PLUS button-->
                    <svg xmlns="http://www.w3.org/2000/svg" v-if="!showVaccine" v-on:click="showVaccine = !showVaccine" width="20" height="20" fill="#28a745" class="bi bi-plus-circle" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                    </svg>
                    <!-- add vaccine MINUS button  -->
                    <svg xmlns="http://www.w3.org/2000/svg" v-if="showVaccine" v-on:click="showVaccine = !showVaccine" width="16" height="16" fill="#28a745" class="bi bi-dash-circle" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                        <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
                    </svg>
                </div>

                <!-- add vaccines -->
                <div class="form-row d-flex flex-column" v-if="showVaccine">
                    <!-- vaccine name -->
                    <div class="d-flex flex-column" id="add-vaccine-field">
                        <label for="vaccine_name" class="d-flex text-light">Vaccine Name</label>
                        <input type="text" name="vaccine_name" id="vaccine_name" v-model="vaccine_name">
                    </div>

                    <!-- input file -->
                    <div class="d-flex field" id="add-vaccine-field">
                        <label for="file" class="text-light">
                        <input type="file" ref="file" @change="handleFileUpload">
                        </label>
                    </div>
               </div>
            </div>

            <!-- show vaccines -->
            <div class="form-row d-flex flex-column align-items-start" v-if="vaccines.length !== 0">
                <h6 class="d-flex text-light font-weight-light" id="field">Vaccinations: </h6>
                <!-- loop through vaccines for dog -->
                <ul class="form-row list-group" id="list-spacing" v-for="(vaccine, i) in vaccines" :key="i">
                    <!-- list item for one vaccine -->
                    <li class="form-row d-flex flex-row">
                        <!-- div for delete button -->
                        <div class="d-flex" id="vaccine-list-item">
                            <svg xmlns="http://www.w3.org/2000/svg"  v-on:click.prevent="deleteVaccine(vaccine.vaccine_recordID, i)" width="16" height="16" fill="#28a745" class="d-flex bi bi-trash" viewBox="0 0 16 16">
                                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                            </svg>
                        </div>
                        <!-- div for vaccine name -->
                        <div class="d-flex" id="vaccine-list-item">
                            <a class="d-flex text-light" :href="'http://localhost:3000/' + vaccine.vaccine_file">
                                <p id="vaccines">{{vaccine.vaccine_name}}</p>
                            </a>
                        </div>
                    </li>
                </ul>
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
            clients: [],
            vaccines: [],
            showVaccine: false,
            file: '',
            vaccine_name: ''
        }
    },
    created() {
    //  call dog information to fill form
        axios.get("http://localhost:3000/api/dogs/dog/" + this.id)
        .then(res => {
            this.dog = res.data.data

            // get dog vaccines
            axios.get("http://localhost:3000/api/vaccine/vaccinePerDog/" + this.id)
            .then(res => {
                this.vaccines = res.data
            })
            .catch(err => {
                console.log(err)
            })
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

            // dog model
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
            
            // set formData variable
            let formData = new FormData()

            // add required fields for vaccine into Formdata
            formData.append('DogInformationId',  this.id)
            formData.append('vaccine_name', this.vaccine_name)
            formData.append('vaccine_file', this.file);

            // update dog
            axios.put("http://localhost:3000/api/dogs/dogUpdate/" + this.id, dog)
            .then(() => {

                // if add vaccine is open
                if(this.showVaccine){
                    // add vaccine
                   axios.post( "http://localhost:3000/api/vaccine/post", formData,
                        {
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        }
                        }
                    ).then(function(){
                        console.log(formData);
                    })
                    .catch(function(){
                        console.log(formData);
                    });
                }
                // take you back one page
                this.$router.push('/dogs')
            })
            .catch(err => console.log(err, dog))
        },
        // handle upload to file input
        handleFileUpload() {
            this.file = this.$refs.file.files[0]
        },
        // delete a vaccine
        deleteVaccine(id, i) {
            axios.delete("http://localhost:3000/api/vaccine/delete/" + id)
            .then(() => {
                this.vaccines.splice(i, 1)
            })
            .catch(err => console.log(err))
        }
    },
    computed: {
        // show or hide add vaccine fields
        addVaccine: function() {
            return this.showVaccine
        }
    }
    
}
</script>

<style scoped>
.form{
    margin: 0 1.5rem 2rem;
}
.form-row{
    padding-top: .5rem;
    padding-bottom: .5rem;
    margin-left: 0;
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
#add-vaccine{
    padding-right: 1rem;
}
#add-vaccine-field{
    padding-bottom: 1rem;
}
#vaccine-list-item{
    padding-right: .5rem;
}
#list-spacing{
    padding-left: .5rem;
    height: 5vh;
}
.foot{
    position: fixed; 
    bottom: 0; 
    right: 0;

}
</style>