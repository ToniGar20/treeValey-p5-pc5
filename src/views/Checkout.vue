<template>

  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="@/css/custom.css">
    <title>Checkout | treeValey</title>
  </head>
  <body>
    <HeaderCheckout/>

    <div class="container mt-3">
    <div class="d-flex">
      <div class="col-8">
        <h4>Dirección de envío</h4>
        <form>
          <div class="row">

            <div class="col-md-6 mb-3">
              <label for="firstName">Nombre</label>
              <input type="text" class="form-control" id="firstName" placeholder="" value="" required>
            </div>
            <div class="col-md-6 mb-3">
              <label for="lastName">Apellido/s</label>
              <input type="text" class="form-control" id="lastName" placeholder="" value="" required>
            </div>
          </div>

          <div class="mb-3">
            <label for="email">Email</label>
            <input type="email" class="form-control" id="email" placeholder="email@ejemplo.com">
          </div>

          <div class="mb-3">
            <label for="address">Dirección</label>
            <input type="text" class="form-control" id="address" required>
          </div>

          <div class="row">
            <div class="col-md-4 mb-3">
              <label for="province">Provincia</label>
              <select class="custom-select d-block w-100" id="province" required>
                <option value="">Seleccionar</option>
                <option>Barcelona</option>
                <option>Illes Balears</option>
                <option>Madrid</option>
                <option>Sevilla</option>
                <option>Valencia</option>
              </select>
              <div class="invalid-feedback">
                Please provide a valid state.
              </div>
            </div>
            <div class="col-md-3 mb-3">
              <label for="zip">Código Postal</label>
              <input type="text" class="form-control" id="zip" placeholder="" required>
            </div>
          </div>
          <hr class="mb-4">
          <div class="custom-control custom-checkbox">
            <input type="checkbox" class="custom-control-input" id="save-info">
            <label class="custom-control-label mx-2" for="save-info">Guardar información para próximas compras</label>
          </div>
          <hr class="mb-4">

          <h4 class="mb-3">Pago</h4>

          <div class="row my-3">
              <div class="custom-control custom-radio col-3">
                <input id="credit" name="paymentMethod" type="radio" class="custom-control-input" checked="" required="">
                <label class="custom-control-label" for="credit">Tarjeta de crédito</label>
              </div>
              <div class="custom-control custom-radio col-3">
                <input id="debit" name="paymentMethod" type="radio" class="custom-control-input" required="">
                <label class="custom-control-label" for="debit">Tarjeta de débito</label>
              </div>
          </div>
          <div class="row">
            <div class="col-md-6 mb-3">
              <label for="cc-name">Nombre de la tarjeta</label>
              <input type="text" class="form-control" id="cc-name" placeholder="" required="">
            </div>
            <div class="col-md-6 mb-3">
              <label for="cc-number">Número de la tarjeta</label>
              <input type="text" class="form-control" id="cc-number" placeholder="XXXX-XXXX-XXXX-XXXX" required="">
            </div>
          </div>
          <div class="row">
            <div class="col-md-3 mb-3">
              <label for="cc-expiration">Fecha de caducidad</label>
              <input type="text" class="form-control" id="cc-expiration" placeholder="" required="">
            </div>
            <div class="col-md-3 mb-3">
              <label for="cc-cvv">CVV</label>
              <input type="text" class="form-control" id="cc-cvv" placeholder="" required="">
            </div>
          </div>
          <hr class="mb-4">
          <router-link to="/purchase"><button class="btn btn-info btn-lg btn-block">Realizar pedido</button></router-link>

        </form>
      </div>

      <div class="col-4 mx-5">
        <Carrito/>
      </div>

    </div>
    </div>
  </body>
  </html>

</template>

<script>
import HeaderCheckout from "@/components/HeaderCheckout";
import Carrito from "@/components/Carrito";

export default {
  name: 'Checkout',
  components: {HeaderCheckout, Carrito},
}

</script>

<style scoped>

</style>