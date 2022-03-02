import { createStore } from 'vuex'


export default createStore({
  state: {
    productos: [
      {
        id:1,
        nombre: 'Silla',
        descripcion: 'Silla de madera',
        price: 100,
        cantidad: 1,},
        {
        id:2,
        nombre: 'Mesa',
        descripcion: 'Mesa de madera',
        price: 200,
        cantidad: 1,},
        {id: 3,
        nombre: 'Sofa',
        descripcion: 'Sofa acolchado',
        price: 300,
        cantidad: 1
      },{
        id: 4,
        nombre: 'Cama',
        descripcion: 'Cama de madera',
        price: 250,
        cantidad: 1
      },{
        id: 5,
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
