<template>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="css/custom.css">
    <title>Shop</title>
</head>
  <body>
      <Header/>
      <div id="body" class="blog  m-0 m-auto py-5 w-index body-h justify-content-center --bs-body-bg">
      <div class="row row-md-12 pb-5 ">
        <div class="col-8 pb-5 pe-5 ">
          <div class="productos d-flex flex-wrap">
          <div class="card col-4 " v-for="producto in productos" :key="producto">
            <div class="card-body">
              <div class="card-img">
                <img class="w-100" src="@/assets/subdivision1.png" alt="" />
              </div>
              <div class="">
                <h3 class="fs-h3">{{producto.nombre}}</h3>
                <p class="text-justify">{{producto.descripcion}}</p>
                <p class="text-justify">{{producto.price}}</p>
                <button class="btn btn-primary" @click="addToCart(producto)">Add to cart</button>
              </div>
            </div>
          </div>
        </div>
         
        </div>
        <div class="col-4">
          <div class="shop">
            
            <Carrito/>

          </div>
        </div>
      </div>
    </div>
    <Footer />
  </body>
</html>
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import Carrito from "../components/Carrito.vue";
import {useStore} from 'vuex'
export default {
    name: 'Shop',
    components: { Header, Footer, Carrito },
    
    setup(){
        const store = useStore()
        return {
            productos: store.state.productos,
            carrito: store.state.carrito,
            addToCart: function(producto){
              let productoEnCarrito = this.carrito.find(productoEnCarrito => productoEnCarrito.id === producto.id)
              if(productoEnCarrito){
                productoEnCarrito.cantidad++
              }else{
                producto.cantidad = 1
                this.carrito.push(producto)
              }

            },
    }
            
        }
    }


      

</script>

<style>

</style>