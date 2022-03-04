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
    <h1 class="display-3">¡Muchas gracias por tu pedido!</h1>
    <br>
    <p class="lead"> Pedido número <strong> {{ orderID }}</strong></p>

    <div class="container d-flex justify-content-center mt-4 my-4" v-for="producto in carrito" :key="producto">
      <div class="card" style="width: 500px;">
        <div class="row no-gutters">
          <div class="col-sm-5">
            <img class="card-img" src="@/assets/subdivision1.png" alt="">
          </div>
          <div class="col-sm-7">
            <div class="card-body">
              <h5 class="card-title">{{ producto.nombre }}</h5>
              <p class="card-text">{{ producto.descripcion }}</p>
              <p class="card-text"><strong>x {{ producto.cantidad }}</strong></p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <p>Te hemos enviado a tu <strong>email</strong> los detalles de tu compra.</p>
    <hr>
    <p>
      ¿Necesitas ayuda? <router-link to="/contact"><a>Contáctanos</a></router-link>
    </p>
    <p class="lead mt-5">
      <router-link to="/"><button class="btn btn-primary btn-lg btn-block">Volver a la homepage</button></router-link>
    </p>
  </div>

  </body>
  </html>

</template>

<script>
import Header from "@/components/Header";
import {useStore} from 'vuex'

export default {
  setup() {
    const store = useStore()
    return {
      carrito: store.state.carrito
    }
  },
  name: "Purchase",
  components: {Header},
  orderID: 0,
  methods: {
    randomOrderNumber () {
      this.orderID = Math.ceil(Math.random()*1000000);
    }
  },
  beforeMount() {
    this.randomOrderNumber();
  }
}
</script>

<style scoped>

</style>