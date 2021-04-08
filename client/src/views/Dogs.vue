<template>
  <div class="d-flex flex-column justify-content-center">
        <!-- Page heading -->
        <div class="d-flex justify-content-center">
            <h6 class="page-heading">Dogs</h6>
        </div>

        <!-- Search bar -->
        <div class="d-flex justify-content-center">
            <input type="text" class="form-control input-field" id="search-bar" placeholder="Search dogs..." v-model="search"/>
        </div>

        <!-- Dog component -->
        <div class="d-flex justify-content-center" id="dogCard">
            <Dog/>
        </div>
    </div>
</template>

<script>
import Dog from '@/components/Dog.vue'

export default {
  name: 'Dogs',
  components: {
      Dog
  }
}
</script>

<style>
#search-bar{
    width: 18rem;
    height: 2rem;
}

#dogCard{
    margin: 1rem; 
}
</style>