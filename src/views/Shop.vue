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
                <img class="w-100 card-img" :src="require('@/assets/' + producto.imagen)" alt="imagen del producto" />
              </div>
              <div class="">
                <h3 class="fs-h3">{{producto.nombre}}</h3>
                <p class="pb-5">{{producto.descripcion}}</p>
                <div class="my-3">
                <button class="btn btn-blue position-absolute bottom-0 mb-3" @click="addToCart(producto)">Añadir</button>
                <p class="text-end position-absolute bottom-0 end-0 me-3 mb-4 text-dark">{{producto.price}}€</p>
                </div>
              </div>
            </div>
          </div>
        </div>
         
        </div>
        <div class="col-4">
          <div class="shop" v-if="showCart">
            
            <Carrito/>
            <div class="d-flex justify-content-center mt-2">
              <router-link to="/checkout"><button class="btn btn-blue btn-lg btn-block">Realizar pedido</button></router-link>
            </div>
          </div>
          <h3 class="text-center h5" v-else>No hay productos en el carrito</h3>
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
            
        },
        computed:{
          showCart(){
            if(this.carrito.length > 0){
              return true
            }else{
              return false
            }

          }
        }
    }


      

</script>

<style>

</style>