<template>
    <div>
        <!-- heading label -->
        <h5 class="text-light">New Stay</h5>
        <!-- create client form -->
        <form class="form d-flex flex-column">

            <!-- client name -->
            <div class="form-row">
                <label for="clientName" class="text-light">Name</label>
                <input type="text" class="form-control" id="clientName" placeholder="Client name">
            </div>

            <!-- client email -->
            <div class="form-row">
                <label for="email" class="text-light">Email</label>
                <input type="email" class="form-control" id="email" placeholder="Email">
            </div>

            <!-- dogs -->
            <div class="form-row">
                <label for="dogName" class="text-light">Dogs owned</label>
                <input type="text" class="form-control" id="dogName" placeholder="Dogs names">
            </div>

            <!-- date -->
            <div class="form-row">
                <label for="datePick" class="text-light">Date of Stay</label>
                <input type="date" class="form-control" id="datePick">
            </div>

            <!-- notes about the client -->
            <div class="form-row">
                <label for="stayNotes" class="text-light">Stay notes</label>
                <textarea class="form-control" id="stayNotes" rows="3" placeholder="Stay notes..."></textarea>
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
export default {
    
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