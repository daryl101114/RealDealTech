<template>
    <div>
        <!-- heading label -->
        <h5 class="text-light">New Stay</h5>
        <!-- create client form -->
        <form class="form d-flex flex-column" v-on:submit.prevent="newStay">
            <!-- client -->
            <div class="form-row" v-if="clients">
                <label class="text-light" for="exampleFormControlSelect1">Client</label>
                <select required class="form-control" name="clientId" v-model="clientId">
                    <option selected disabled>Owner</option>
                    <option v-for="client in filteredClients" :key="client.id" :value="client.id">
                        {{client.fname}} {{client.lname}}
                    </option>
                </select>
            </div>

            <!-- dog -->
            <div class="form-row" v-if="dogs">
                <label class="text-light" for="exampleFormControlSelect1">Dog</label>
                <select required class="form-control" name="dogId" v-model="dogId">
                    <option selected disabled>Owner</option>
                    <option v-for="dog in filteredDogs" :key="dog.id" :value="dog.id">{{dog.dog_name}}</option>
                </select>
            </div>

            <!-- start date -->
            <div class="form-row">
                <label for="datePick" class="text-light">Stay Start Date</label>
                <input required type="datetime-local" class="form-control" id="datePick" name="start_date" v-model="start_date">
            </div>

            <!-- end date -->
            <div class="form-row">
                <label for="datePick" class="text-light">Stay End Date</label>
                <input required type="datetime-local" class="form-control" id="datePick" name="end_date" v-model="end_date">
            </div>

            <!-- notes about the stay -->
            <div class="form-row">
                <label for="note" class="text-light">Stay notes</label>
                <textarea class="form-control" id="stayNotes" rows="3" placeholder="Stay notes..." name="note" v-model="note"></textarea>
            </div>

            <!-- notes about the client -->
            <div class="form-row">
                <label for="instructions" class="text-light">Stay instructions</label>
                <textarea class="form-control" id="stayNotes" rows="3" placeholder="Stay notes..." name="instructions" v-model="instructions"></textarea>
            </div>

            <!-- submit and cancel buttons -->
            <div class="d-flex flex-row">
                <!-- May need input type="submit" instead? -->
                <button type="submit" class="btn btn-success form-button p-2">Submit</button>
                <input type="reset" value="Clear" class="btn btn-success form-button p-2">                
                <!-- <router-link to="/clients" class="btn btn-success form-button p-2">Cancel</router-link> -->
            </div>
        </form>

        <footer class="page-footer font-small blue fixed-bottom">
            <div class="d-flex flex-row-reverse bd-highlight foot">
                <!-- button to cancel -->
                <router-link to="/stays">
                    <svg xmlns="http://www.w3.org/2000/svg" width="3rem" height="3rem" fill="#5cb85c" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
                    </svg>
                </router-link>
            </div>
        </footer>
    </div>
</template>

<script>
import axios from 'axios'
import moment from 'moment'

export default {
    data() {
        return {
            clients: [],
            dogs: [],
            start_date: '',
            end_date: '',
            note: '',
            instructions: '',
            clientId: '',
            dogId: ''
        }
    },
    created() {
    //   call client list from API
        axios.get("http://localhost:3000/api/clients")
        .then(res => {
            this.clients = res.data.data
        })
        .catch(err => console.log(err))

        axios.get("http://localhost:3000/api/dogs")
        .then(res => {
            this.dogs = res.data.data
        })
        .catch(err => console.log(err))
    },
    methods: {
        // create newStay model and pass it into API PUT request to create stay
        newStay() {
            let stay = {
                start:  moment(this.start_date).format('YYYY-MM-DDThh:mm'),
                end: moment(this.end_date).format('YYYY-MM-DDThh:mm'),
                note: this.note,
                instructions: this.instructions,
                clientId: this.clientId,
                dogId: this.dogId
            }
            axios.post("http://localhost:3000/api/stay/newStay/", stay)
            .then(() => {
                this.$router.push('/stays')
            })
            .catch(err => console.log(err))
        }
    },
    computed: {
        filteredClients() {
            return this.clients.filter((client => {
                return client.blacklistId == 3
            }))
        },
        filteredDogs() {
            return this.dogs.filter((dog) => {
                return dog.blacklistId == 3
            })
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

</style>