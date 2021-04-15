<template>
    <div class="d-flex dog-title">
        <h4>Are you sure you want to delete {{dog.dog_name}} from the database?</h4>
    </div>
</template>

<script>
import axios from 'axios'

export default{
    data() {
        return {
            id: this.$route.params.id,
            dog: []
        }
    },
    created() {
      axios.get("http://localhost:3000/api/dogs/dog/" + this.id)
      .then(res => this.dog = res.data.data)
      .catch(err => {
          console.log(err)
      })
  }
}
</script>

<style>
#field{
    font-weight: bold;
}
.dog-info{
    margin-left: 1rem;
}
.dog-title{
    margin: auto;
    margin-top: 10px;
    font: large;
}
.border {
background: rgb(115,106,110);
background: radial-gradient(circle, rgba(115,106,110,1) 0%, rgba(84,110,122,1) 98%);
color: aliceblue;
}
</style>