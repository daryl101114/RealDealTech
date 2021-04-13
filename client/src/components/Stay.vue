<template>
    <div class="card" id="card-size">
        <div class="card-body">
            <h6 class="card-title font-weight-bold">{{dog_name}}'s Stay</h6>

            <!-- conditional rendering for dates -->
            <p v-if="!start_date && !end_date"></p>
            <p class="card-text" v-if="start_date">{{start_date | moment}} - {{end_date | moment}}</p>
            <p class="card-text">Client name: {{client_fname}} {{client_lname}}</p>
            <p class="card-text">Dog name: {{dog_name}}</p>

            <!-- conditional rending to check if there is notes or not -->
            <p class="card-text" v-if="note.length <= 1"></p>
            <p class="card-text" v-if="note.length > 1">Notes: {{note}}</p>

            <!-- conditionala rendering to check if there is instructions or not -->
            <p class="card-text" v-if="instruction.length <= 1"></p>
            <p class="card-text" v-if="instruction.length > 1">Instructions: {{instruction}}</p>
        </div>
        <!-- Routes card to stay details and passes id  -->
        <router-link v-bind:to="'/stayDetails/' + id" class="card-link stretched-link"/>
    </div>
</template>

<script>
import moment from 'moment'

export default{
    name: 'Stay',
    props: [
        'id',
        'start_date',
        'end_date',
        'dog_name',
        'client_fname',
        'client_lname',
        'note',
        'instruction'
    ],
    filters: {
        moment: function (date) {
            return moment(date).format("MMM Do, YYYY");
        }
    }
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