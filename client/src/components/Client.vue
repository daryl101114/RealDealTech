<template>
    <div class="card" id="card-size">
        <div class="card-body">
            <h6 class="card-title">Client Name: SUSAN</h6>
            <p class="card-text">Dogs: RUBY, ROCKY</p>
            <p class="card-text">Phone: 281-330-8004</p>
            <p class="card-text">Email: client@gmail.com</p>
        </div>
        <!-- Makes card clickable  -->
        <router-link to="/clientdetails" class="card-link stretched-link"/>
    </div>
</template>

<script>
export default{
    
}
</script>

<style>
.card{
    box-shadow: -4px 4px 10px 0px rgb(0 0 0 / 20%), 0 0 2px 0 rgb(0 0 0 / 19%);
}
#card-size{
    width: 95%;
}
.card-body{
    padding: 1rem;
}
.card-text{
    margin-bottom: 0;
}
</style>