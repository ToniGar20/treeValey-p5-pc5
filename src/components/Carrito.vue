/* eslint-disable vue/no-deprecated-filter */
<template>
  <div class="carrito">
  </div>
  
  <div class="dropdown">
    <div class="d-flex justify-content-center">
    <button class="btn btn-secondary justify-content-end mb-2" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
      <i class="fa-solid fa-cart-shopping"></i>
      <span class="badge badge-pill badge-secondary">{{cant}}</span>
    </button>
    </div>
    <div class="collapse show" id="collapseExample">
      <div class="card">
      <h3 class="text-center">Productos</h3>
      <div class="list-group list-group-flush" v-for="producto in carrito" :key="producto">
      <li class="list-group-item">
          <div class=" d-flex justify-content-between">
          <span class="badge bg-success align-self-center">{{producto.cantidad}}</span> 
          <div class="align-self-center">{{producto.nombre}} </div>
          <span class="align-self-center">${{producto.price * producto.cantidad}}</span>
          <div class="btn-group-vertical" role="group" aria-label="Vertical button group">
          <button v-on:click="addFromCart(producto)" class="btn"> + </button>
          <button v-on:click="removeFromCart(producto)" class="btn"> - </button>
          </div> 
          
        </div>
      </li>      
        </div>
        <div class="text-center fw-bold">Total:{{precioTotal}}</div>
        </div>

    </div>
  </div>
 
  
</template>

<script>
import {useStore} from 'vuex'
export default {
setup(){
  const store = useStore()
  return {
    carrito: store.state.carrito,
    removeFromCart: function(producto){
      let productoEnCarrito = this.carrito.find(productoEnCarrito => productoEnCarrito.id === producto.id)
              if(productoEnCarrito.cantidad > 1){
                productoEnCarrito.cantidad--
              }else{
                this.carrito.splice(this.carrito.indexOf(productoEnCarrito), 1)
              }
            },
    addFromCart: function(producto){          
      producto.cantidad++
            },
  }
  },
    computed:{
      cant(){
        return this.carrito.reduce((total, producto) => total + producto.cantidad, 0)
      },
      precioTotal(){
        return this.carrito.reduce((total, producto) => total + producto.price * producto.cantidad, 0)
      }
    }
  
}


</script>

<style>

</style>