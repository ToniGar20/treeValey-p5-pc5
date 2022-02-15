<template>
  <nav class="navbar navbar-expand-lg navbar-light container-fluid bg-header p-0 ">
    <div class=" pt-0 m-auto pe-3 w-footer d-flex flex-wrap justify-content-between align-self-center">
      <a href="index.html" id="logo"><img class="float-start p-3" src="image/logo.png" alt="logo"></a>
      <button class="navbar-toggler align-self-center float-end btn-outline-secondary" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="nav collapse navbar-collapse d-lg-flex justify-content-end m-0 p-0 w-25" id="navbarNav">
        <ul class="d-lg-flex">
          <li class="navbar-brand f-arial a-h m-0 p-0 nav-link bg-nav">
            <a class="a-color-header nav-link" href="index.html">Home</a>
          </li>
          <li class="navbar-brand f-arial a-h m-0 p-0 nav-link ">
            <a class="a-color-header nav-link" href="subdivisions.html">Subdivisions</a>
          </li>
          <li class="navbar-brand f-arial a-h m-0 p-0 nav-link ">
            <a class="a-color-header nav-link" href="blog.html">Blog</a>
          </li>
          <li class="navbar-brand f-arial a-h m-0 p-0 nav-link ">
            <a class="a-color-header nav-link" href="about.html">About</a>
          </li>
          <li class="navbar-brand f-arial a-h m-0 p-0 nav-link">
            <a class="a-color-header nav-link" href="contact.html">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar.vue"
}
</script>

<style scoped>

</style>