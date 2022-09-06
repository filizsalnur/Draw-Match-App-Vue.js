<template>
    <nav class="navbar navbar-expand-lg bg-light fixed-top">
      <div class="container">
        <a class="navbar-brand" href="#">
          <img alt="Eldor logo" src="@/photos/logo.png" style="height: 120px" />
          <b>Match & Draw App</b>
        </a>
      </div>
      <div class="container-fluid">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><router-link to="/test">Home</router-link></li>
          <li class="breadcrumb-item active"><router-link to="/Help">Help</router-link></li>
        </ol>
        
        
      </div>
      <div class="container-fluid">
       
      </div>
    </nav>
</template>

<script>
export default ({
  name:'HeaderApp',
  methods: {

  }
})
</script>

<style scoped>

</style>