<template>
    <div class="d-flex flex-column justify-content-center">
        <!-- Page heading -->
        <div class="d-flex justify-content-center">
            <h5 class="page-heading text-light">Customer Stays</h5>
        </div>

        <!-- Search bar -->
        <div class="d-flex justify-content-center">
            <input type="text" class="form-control input-field" id="search-bar" placeholder="Search stays..." v-model="search"/>
        </div>

        <!-- Stays component -->
        <div class="d-flex justify-content-center" id="staysCard">
            <Stay/>
        </div>
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
