<template>

  <nav class="navbar navbar-expand-lg navbar-light container-fluid bg-header p-0">
    <div class=" pt-0 m-auto pe-3 w-footer d-flex flex-wrap justify-content-between">
      <a id="logo"><img class="float-start p-3" src="@/assets/logo.png" alt="logo"></a>
      <button class="navbar-toggler align-self-center float-end btn-outline-secondary" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="nav collapse navbar-collapse d-lg-flex m-0 p-0 w-25 mx-5" id="navbarNav">
          <div class="d-lg-flex col-3">
            <div class="a-h m-0 p-0 d-flex align-items-center col-12 mx-5">
              <div class="d-flex row">
                <i class="fa-solid fa-truck-fast fa-2x"></i>
                <p class="a-color-header">Envío Gratuito</p>
              </div>
            </div>
            <div class="a-h m-0 p-0 d-flex align-items-center col-12  mx-5">
              <div class="d-flex row">
                <i class="fa-solid fa-arrow-rotate-left fa-2x"></i>
                <p class="a-color-header">Devoluciones</p>
              </div>
            </div>
            <div class="a-h m-0 p-0 d-flex align-items-center col-12  mx-5">
              <div class="d-flex row">
                <i class="fa-solid fa-shield fa-2x"></i>
                <p class="a-color-header">Pago Seguro</p>
              </div>
            </div>
          </div>
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