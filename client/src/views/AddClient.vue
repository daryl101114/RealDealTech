<template>
    <div>
        <!-- heading label -->
        <h5 class="text-light">New Client</h5>
        <!-- create client form -->
        <form class="form d-flex flex-column">

            <!-- client name -->
            <div class="form-row">
                <label for="clientName" class="text-light">Name</label>
                <input type="text" class="form-control" id="clientName" placeholder="Client name">
            </div>

            <!-- client phone -->
            <div class="form-row">
                <label for="phone" class="text-light">Phone</label>
                <input type="phone" class="form-control" id="phone" placeholder="Phone">
            </div>

            <!-- client email -->
            <div class="form-row">
                <label for="email" class="text-light">Email</label>
                <input type="email" class="form-control" id="email" placeholder="Email">
            </div>

            <!-- clients' dogs -->
            <div class="form-row">
                <label for="dogsOwned" class="text-light">Dogs owned</label>
                <input type="text" class="form-control" id="dowsOwned" placeholder="Dogs names">
            </div>

            <!-- notes about the client -->
            <div class="form-row">
                <label for="clientNotes" class="text-light">Client notes</label>
                <textarea class="form-control" id="clientNotes" rows="3" placeholder="Client notes..."></textarea>
            </div>

            <!-- submit and cancel buttons -->
            <div class="d-flex flex-row">
                <button type="submit" class="btn btn-success form-button p-2">Submit</button>
                <router-link to="/clients" class="btn btn-success form-button p-2">Cancel</router-link>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    
}
</script>

<style>
.form{
    margin: 0 1.5rem;
}
.form-row{
    padding-top: .5rem;
    padding-bottom: .5rem;
}
.form-botton{
    padding-top: .5rem;
}
.p-2{
    margin: .5rem 1rem 0 0;
}
</style>