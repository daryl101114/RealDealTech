<template>
  <div>
        <!-- heading label -->
        <h5 class="text-light">Update Client</h5>
        <!-- create client form -->
        <form class="form d-flex flex-column needs-validation"  v-on:submit.prevent="updateClient">

            <!-- client name -->
            <div class="form-row">
                <label for="clientName" class="text-light">First Name</label>
                <input type="text" required class="form-control" id="clientName" name="fname" v-model="client.fname" placeholder="First name">
            </div>

            <!-- client name -->
            <div class="form-row">
                <label for="clientName" class="text-light">Last Name</label>
                <input type="text" required class="form-control" id="clientName" name="lname" v-model="client.lname" placeholder="Last name">
            </div>

            <!-- client phone -->
            <div class="form-row">
                <label for="phone" class="text-light">Phone</label>
                <input type="phone" required class="form-control" id="phone" name="phone" v-model="client.phone" @input="acceptNumber" placeholder="Phone">
            </div>

            <!-- client email -->
            <div class="form-row">
                <label for="email" class="text-light">Email</label>
                <input type="email" required class="form-control" id="email" name="email" v-model="client.email" placeholder="Email">
            </div>

            <!-- notes about the client -->
            <div class="form-row">
                <label for="clientNotes" class="text-light">Client notes</label>
                <textarea class="form-control" id="clientNotes" rows="3" name="notes" v-model="client.notes" placeholder="Client notes..."></textarea>
            </div>

            <!-- blacklist the client -->
            <div class="form-row justify-content-start">
                <label for="clientNotes" class="text-light">Blacklist client:</label>
                <div class="form-check">
                    <input class="form-check-input" required type="radio" name="blacklistId" v-model="client.blacklistId" value="1" id="flexRadioDefault1">
                    <label class="form-check-label text-light" for="flexRadioDefault1">
                        Yes (Blacklist Client)
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="blacklistId" v-model="client.blacklistId" value="3" id="flexRadioDefault2" checked>
                    <label class="form-check-label text-light" for="flexRadioDefault2">
                        No
                    </label>
                </div>
            </div>

            <!-- submit and cancel buttons -->
            <div class="d-flex flex-row">
                <!-- May need input type="submit" instead? -->
                <button type="submit" class="btn btn-success form-button p-2">Submit</button>
            </div>
        </form>

        <footer class="page-footer font-small blue fixed-bottom">
            <div class="d-flex flex-row-reverse bd-highlight foot">
                <!-- button to cancel -->
                <router-link v-bind:to="'/clientdetails/' + this.id">
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

export default {
    data() {
        return {
            id: this.$route.params.id,
            client: []
        }
    },
    created(){
        // get client by ID
        axios.get("http://localhost:3000/api/clients/client/" + this.id)
        .then(res => {
            this.client = res.data.data
        })
        .catch(err => console.log(err))
    },
    methods: {
        // format phone numbers
        acceptNumber() {
            var x = this.phone.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
            this.phone = !x[2] ? x[1] : x[1] + '-' + x[2] + (x[3] ? '-' + x[3] : '');
        },
        // create newClient model and pass it into API PUT request to create client
        updateClient() {
            let updateclient = {
                fname:  this.client.fname,
                lname: this.client.lname,
                phone: this.client.phone,
                email: this.client.email,
                notes: this.client.notes,
                blacklistId: this.client.blacklistId
            }
            axios.put("http://localhost:3000/api/clients/updateClient/" + this.id, updateclient)
            .then(() => {
                this.$router.go(-1)
                })
            .catch(err => console.log(err))
        }
    }

}
</script>

<style>

</style>