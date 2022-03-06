import { createStore } from 'vuex'


export default createStore({
  state: {
    productos: [
      {
        id:1,
        imagen:'@/assets/Silla-e.webp',
        nombre: 'Silla',
        descripcion: 'Silla de madera para exteriores, comoda y resistente al sol.',
        price: 100,
        cantidad: 1,},
        {
        id:2,
        imagen:'/img/mesa-m.34d63e93.webp',
        nombre: 'Mesa',
        descripcion: 'Mesa de madera rustica para comedor o salon de 200 x 90 x 80 cm.',
        price: 200,
        cantidad: 1,},
        {id: 3,
        imagen:'/img/sofa.953d4cf5.webp',
        nombre: 'Sofa',
        descripcion: 'Sofa acolchado',
        price: 300,
        cantidad: 1
      },{
        id: 4,
        imagen:'/img/cama-ind.67b60227.webp',
        nombre: 'Cama',
        descripcion: 'Cama de madera',
        price: 250,
        cantidad: 1
      },{
        id: 5,
        imagen:'/img/cama-king.c2c0b786.webp',
        nombre: 'CamaKing',
        descripcion: 'Cama King Size',
        price: 550,
        cantidad: 1
      }
    ],
    carrito: [],
  },
  
  mutations: {
  },
  actions: {
    
  },
  modules: {
  }
})
