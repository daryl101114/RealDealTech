<template>
    <div class="d-flex flex-column justify-content-center">
        <!-- Page heading -->
        <div class="d-flex justify-content-center">
            <h5 class="page-heading text-light">Customer Stays</h5>
        </div>

        <!-- Search bar -->
        <div class="d-flex justify-content-center">
            <input type="text" class="form-control input-field" id="search-bar" placeholder="Search stays..."/>
        </div>

        <!-- Stays component -->
        <div class="d-flex justify-content-center" id="staysCard">
            <Stay/>
        </div>

        <!-- positions button on bottom of page -->
        <footer class="page-footer font-small blue fixed-bottom">
            <div class="d-flex flex-row-reverse bd-highlight foot">
                <!-- button to create new client -->
                <router-link to="/addStay">
                    <svg xmlns="http://www.w3.org/2000/svg" width="3rem" height="3rem" fill="#5cb85c" class="bi bi-plus-circle" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/>
                    </svg>
                </router-link>
            </div>
        </footer>
    </div>
</template>

<script>
import Stay from '@/components/Stay.vue'

export default {
  name: 'Stays',
  components: {
      Stay
  }
}
</script>

<style>
#search-bar{
    width: 90%;
    height: 2rem;
    margin: 0 1rem;
}

#staysCard{
    margin: 1rem; 
}
</style>
