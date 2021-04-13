<template>
    <div class="card" id="card-size">
        <div class="card-body">
            <h6 class="card-title font-weight-bold">{{dog_name}}</h6>
            <p class="card-text">{{breed}}</p>

            <!-- conditional rendering depending on dog age -->
            <p class="card-text" v-if="age <= 1">{{age}} year old</p>
            <p class="card-text" v-if="age > 1">{{age}} years old</p>

            <p class="card-text">{{gender}}</p>
        </div>
        <!-- Makes card clickable and makes dog :id accessible -->
        <router-link v-bind:to="'/dogdetails/' + id" class="card-link stretched-link"/>
    </div>
</template>

<script>
export default{
    name: 'Dog',
    props: [
        'id',
        'dog_name',
        'age',
        'gender',
        'breed'
    ]
}
</script>

<style>
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