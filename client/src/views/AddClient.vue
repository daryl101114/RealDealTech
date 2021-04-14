<template>
    <div>
        <!-- heading label -->
        <h5 class="text-light">New Client</h5>
        <!-- create client form -->
        <form class="form d-flex flex-column">

            <!-- client name -->
            <div class="form-row">
                <label for="clientName" class="text-light">First Name</label>
                <input type="text" class="form-control" id="clientName" name="fname" v-model="fname" placeholder="First name">
            </div>

            <!-- client name -->
            <div class="form-row">
                <label for="clientName" class="text-light">Last Name</label>
                <input type="text" class="form-control" id="clientName" name="lname" v-model="lname" placeholder="Last name">
            </div>

            <!-- client phone -->
            <div class="form-row">
                <label for="phone" class="text-light">Phone</label>
                <input type="phone" class="form-control" id="phone" name="phone" v-model="phone" @input="acceptNumber" placeholder="Phone">
            </div>

            <!-- client email -->
            <div class="form-row">
                <label for="email" class="text-light">Email</label>
                <input type="email" class="form-control" id="email" name="email" v-model="email" placeholder="Email">
            </div>

            <!-- notes about the client -->
            <div class="form-row">
                <label for="clientNotes" class="text-light">Client notes</label>
                <textarea class="form-control" id="clientNotes" rows="3" name="notes" v-model="notes" placeholder="Client notes..."></textarea>
            </div>

            <!-- blacklist the client -->
            <div class="form-row justify-content-start">
                <label for="clientNotes" class="text-light">Blacklist client:</label>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="blacklistId" v-model="blacklistId" value="1" id="flexRadioDefault1">
                    <label class="form-check-label text-light" for="flexRadioDefault1">
                        Yes (Blacklist Client)
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="blacklistId" v-model="blacklistId" value="3" id="flexRadioDefault2" checked>
                    <label class="form-check-label text-light" for="flexRadioDefault2">
                        No
                    </label>
                </div>
            </div>

            <!-- submit and cancel buttons -->
            <div class="d-flex flex-row">
                <!-- May need input type="submit" instead? -->
                <button type="submit" v-on:click="newClient" class="btn btn-success form-button p-2">Submit</button>
                <input type="reset" value="Clear" class="btn btn-success form-button p-2">                
                <!-- <router-link to="/clients" class="btn btn-success form-button p-2">Cancel</router-link> -->
            </div>
        </form>

        <footer class="page-footer font-small blue fixed-bottom">
            <div class="d-flex flex-row-reverse bd-highlight foot">
                <!-- button to cancel -->
                <router-link to="/clients">
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
            fname: '',
            lname: '',
            phone: '',
            email: '',
            notes: '',
            blacklistId: ''
        }
    },
    methods: {
        // format phone numbers
        acceptNumber() {
            var x = this.phone.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
            this.phone = !x[2] ? x[1] : x[1] + '-' + x[2] + (x[3] ? '-' + x[3] : '');
        },
        // create newClient model and pass it into API PUT request to create client
        newClient() {
            let newclient = {
                fname:  this.fname,
                lname: this.lname,
                phone: this.phone,
                email: this.email,
                notes: this.notes,
                blacklistId: this.blacklistId
            }
            axios.post("http://localhost:3000/api/clients/create/", newclient)
            .then(res => console.log(res))
            .catch(err => console.log(err))
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