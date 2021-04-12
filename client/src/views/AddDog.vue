<template>
    <div>
        <!-- heading label -->
        <h5 class="text-light">New Dog</h5>
        <!-- create dog form -->
        <form class="form d-flex flex-column">

            <!-- dog name -->
            <div class="form-row">
                <label for="dogName" class="text-light">Name</label>
                <input type="text" class="form-control" id="dogName" placeholder="Dog name">
            </div>

            <!-- dog breed -->
            <div class="form-row">
                <label for="breed" class="text-light">Breed</label>
                <input type="text" class="form-control" id="phone" placeholder="Breed">
            </div>

            <!-- dog age -->
            <div class="form-row">
                <label for="age" class="text-light">Age</label>
                <input type="number" min="0" max="20" class="form-control" id="age" placeholder="Age">
            </div>

            <!-- dog gender -->
            <div class="form-row">
                <label for="age" class="text-light">Gender</label>
                <select class="form-control" id="gender">
                    <option selected disabled>Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
            </div>

            <!-- dogs' owner first name -->
            <!-- separating first and last name fields in case of multi-part names
                i.e. Ana Maria (fName) De La Paz (lName)... 
                this is commonplace in many cultures -->
            <div class="form-row">
                <label for="ownerFirstName" class="text-light">Owner First Name</label>
                <input type="text" class="form-control" id="ownerFirstName" placeholder="Owner first name">
            </div>

            <!-- dogs' owner's last name -->
            <div class="form-row">
                <label for="ownerLastName" class="text-light">Owner Last Name</label>
                <input type="text" class="form-control" id="ownerLastName" placeholder="Owner last name">
            </div>

             <!-- dogs' owner's phone number-->
             <!-- more than one owner may have the same name (i.e. John Smith), 
                so another form of ID is necessary to tie to the correct owner -->
            <div class="form-row">
                <label for="ownerNumber" class="text-light">Owner Last Name</label>
                <input type="text" class="form-control" id="ownerNumber" placeholder="Owner phone number">
            </div>

            <!-- notes about the dog -->
            <div class="form-row">
                <label for="dogNotes" class="text-light">Dog notes</label>
                <textarea class="form-control" id="dogNotes" rows="3" placeholder="Dog notes..."></textarea>
            </div>

            <!-- instructions for stays-->
            <div class="form-row">
                <label for="dogInstructions" class="text-light">Instructions For Dog</label>
                <textarea class="form-control" id="dogInstructions" rows="3" placeholder="Instructions for dog..."></textarea>
            </div>

            <!-- submit and cancel buttons -->
            <div class="d-flex flex-row">
                <button type="submit" class="btn btn-success form-button p-2">Submit</button>
                <input type="reset" value="Clear" class="btn btn-success form-button p-2">
                <router-link to="/dogs" class="btn btn-success form-button p-2">Cancel</router-link>
            </div>
        </form>

        <footer class="page-footer font-small blue fixed-bottom">
            <div class="d-flex flex-row-reverse bd-highlight foot">
                <!-- button to cancel -->
                <router-link to="/dogs">
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
}
</style>