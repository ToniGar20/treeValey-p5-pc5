<template>

  <nav class="navbar navbar-expand-lg navbar-light container-fluid bg-header p-0 ">
    <div class=" pt-0 m-auto pe-3 w-footer d-flex flex-wrap justify-content-between align-self-center">
      <a id="logo"><img class="float-start p-3" src="@/assets/logo.png" alt="logo"></a>
      <button class="navbar-toggler align-self-center float-end btn-outline-secondary" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="nav collapse navbar-collapse d-lg-flex justify-content-end m-0 p-0 w-25" id="navbarNav">
        <ul class="d-lg-flex">
          <li class="navbar-brand a-h m-0 p-0 nav-link">
            <div>
              <i class="fa-solid fa-truck-fast"></i>
              <p>Envío Gratuito</p>
            </div>
          </li>
          <li class="navbar-brand a-h m-0 p-0 nav-link ">
            <div>
              <i class="fa-solid fa-arrow-rotate-left"></i>
              <p>Devolución tras 30 días</p>
            </div>
          </li>
          <li class="navbar-brand a-h m-0 p-0 nav-link ">
            <div>
              <i class="fa-solid fa-shield"></i>
              <p>Pago Seguro</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>

</template>

<script>
export default {
  name: "HeaderCheckout"
}
</script>

<style scoped>

</style>