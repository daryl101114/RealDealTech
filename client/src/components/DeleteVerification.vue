<template>
    <div class="d-flex dog-title">
        <!-- <h4>Are you sure you want to delete {{dog.dog_name}} from the database?</h4> -->
        <h4>Are you sure you want to delete?</h4>
    </div>
</template>

<script>
// import axios from 'axios'

// export default{
//     data() {
//         return {
//             id: this.$route.params.id,
//             dog: []
//         }
//     },
//     created() {
//       axios.get("http://localhost:3000/api/dogs/dog/" )
//       .then(res => this.dog = res.data.data)
//       .catch(err => {
//           console.log(err)
//       })
//   }
// }
</script>

<style scoped>
#field{
    font-weight: bold;
}
h4 {
    margin: auto;
    margin-top: 10px;
    font: large;
}

</style>