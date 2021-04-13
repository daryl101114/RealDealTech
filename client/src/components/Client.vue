<template>
    <div class="card" id="card-size">
        <div class="card-body">
            <h6 class="card-title font-weight-bold">{{fname}} {{lname}}</h6>
            <p class="card-text">Phone: {{phone}}</p>
            <p class="card-text">Email: {{email}}</p>
        </div>
        <!-- Makes card clickable  -->
        <router-link v-bind:to="'/clientdetails/' + id" class="card-link stretched-link"/>
    </div>
</template>

<script>
export default{
    props: [
        'id',
        'fname',
        'lname',
        'phone',
        'email'
    ]
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