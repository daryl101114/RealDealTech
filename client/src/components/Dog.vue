<template>
    <div class="card" id="card-size">
        <div class="card-body">
            <h6 class="card-title">Dog Name: ROCKY</h6>
            <p class="card-text">Owner: John Smith</p>
            <p class="card-text">Breed: Bulldog</p>
            <p class="card-text">Age: 20</p>
        </div>
        <!-- Makes card clickable  -->
        <router-link to="/dogdetails" class="card-link stretched-link"/>
    </div>
</template>

<script>
export default{
    
}
</script>

<style>
#card-size{
    width: 18rem;
}
.card-body{
    padding: 1rem;
}
.card-text{
    margin-bottom: 0;
}
</style>