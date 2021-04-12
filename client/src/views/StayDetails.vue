<template>
    <div class="border">
      <div class="d-inline-flex p-2 bd-highlight"><h1>Stay Details</h1></div>
      
      <div class="d-flex flex-row bd-highlight mb-3">
        <div class="p-2 bd-highlight">Client Name:</div>
        <div class="p-2 bd-highlight">Susan</div>
      </div>

      <div class="d-flex flex-row bd-highlight mb-3">
        <div class="p-2 bd-highlight">Client Email:</div>
        <div class="p-2 bd-highlight">Susan@blablalba.com</div>
      </div>

      <div class="d-flex flex-row bd-highlight mb-3">
        <div class="p-2 bd-highlight">Dog Name:</div>
        <div class="p-2 bd-highlight">Ruby</div>
      </div>


      <div class="d-flex flex-row bd-highlight mb-3">
        <div class="p-2 bd-highlight">Stay Date</div>
        <div class="p-2 bd-highlight">March 20, 2021</div>
      </div>

      <div class="d-flex flex-row bd-highlight mb-3">
        <div class="p-2 bd-highlight">Notes:</div>
        <div class="p-2 bd-highlight">Ruby is s great dog.</div>
      </div>

      <div class="d-flex flex-row bd-highlight mb-3">
        <div class="p-2 bd-highlight">Black Listed:</div>
        <div class="p-2 bd-highlight">No</div>
      </div>

      <div class="d-flex flex-row bd-highlight mb-3 justify-content-center">
        <div class="p-2 bd-highlight"><a class="btn btn-primary" href="#" role="button">Update</a></div>
        <div class="p-2 bd-highlight"><a class="btn btn-primary" href="#" role="button">Delete</a></div>
        <div class="p-2 bd-highlight"><router-link to="/stays" class="btn btn-primary">Cancel</router-link></div>
      </div>
    </div>
</template>

<script>
  export default{

  }
</script>

<style>
.border {
background: rgb(115,106,110);
background: radial-gradient(circle, rgba(115,106,110,1) 0%, rgba(84,110,122,1) 98%);
color: aliceblue;
/* background-color: aliceblue; */
}


</style>