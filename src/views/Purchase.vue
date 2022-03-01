<template>

  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="@/css/custom.css">
    <title>Contact</title>
  </head>
  <body>

  <Header/>

  <div class="jumbotron text-center mt-5">
    <h1 class="display-3">¡Muchas Gracias!</h1>
    <br>
    <p class="lead"><strong>Por favor, revisa tu email</strong> para tener todos los detalles del pedido</p>
    <hr>
    <p>
      ¿Necesitas ayuda? <a href="">Contáctanos</a>
    </p>
    <p class="lead">
      <a class="btn btn-primary btn-sm" href="/" role="button">Volver a la homepage</a>
    </p>
  </div>

  </body>
  </html>


</template>

<script>
import Header from "@/components/Header";
export default {
  name: "Purchase",
  components: {Header}
}
</script>

<style scoped>

</style>