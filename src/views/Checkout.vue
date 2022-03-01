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
    <HeaderCheckout/>

  <div>
    <div>
      <h3>Resumen de tu pedido</h3>
    </div>
  </div>

    <div class="row">
      <div class="col-md-8 order-md-1">
        <h4>Dirección de envío</h4>
        <form class="needs-validation" novalidate="">
          <div class="row">
            <div class="col-md-6 mb-3">
              <label for="firstName">Nombre</label>
              <input type="text" class="form-control" id="firstName" placeholder="" value="" required="">
            </div>
            <div class="col-md-6 mb-3">
              <label for="lastName">Apellido/s</label>
              <input type="text" class="form-control" id="lastName" placeholder="" value="" required="">
            </div>
          </div>

          <div class="mb-3">
            <label for="email">Email</label>
            <input type="email" class="form-control" id="email" placeholder="email@ejemplo.com">
          </div>

          <div class="mb-3">
            <label for="address">Dirección</label>
            <input type="text" class="form-control" id="address" placeholder="Calle Pepito 27, 5ºC" required="">
          </div>

          <div class="row">
            <div class="col-md-4 mb-3">
              <label for="state">Provincia</label>
              <select class="custom-select d-block w-100" id="state" required="">
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
              <input type="text" class="form-control" id="zip" placeholder="" required="">
            </div>
          </div>
          <hr class="mb-4">
          <div class="custom-control custom-checkbox">
            <input type="checkbox" class="custom-control-input" id="save-info">
            <label class="custom-control-label" for="save-info">Guardar información para próximas compras</label>
          </div>
          <hr class="mb-4">

          <h4 class="mb-3">Pago</h4>

          <div class="d-block my-3">
            <div class="custom-control custom-radio">
              <input id="credit" name="paymentMethod" type="radio" class="custom-control-input" checked="" required="">
              <label class="custom-control-label" for="credit">Tarjeta de crédito</label>
            </div>
            <div class="custom-control custom-radio">
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
          <button class="btn btn-primary btn-lg btn-block" type="submit">Realizar pedido</button>
        </form>
      </div>
    </div>

  </body>
  </html>

</template>

<script>
import HeaderCheckout from "@/components/HeaderCheckout";
export default {
  name: 'Checkout',
  components: {HeaderCheckout},
}

</script>

<style scoped>

</style>