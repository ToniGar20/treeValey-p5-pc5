import { createStore } from 'vuex'


export default createStore({
  state: {
    productos: [
      {
        id:1,
        imagen:'Silla-e.jpg',
        nombre: 'Silla',
        descripcion: 'Silla de madera para exteriores, comoda y resistente al sol.',
        price: 100,
        cantidad: 1,},
        {
        id:2,
        imagen:'mesa-m.webp',
        nombre: 'Mesa',
        descripcion: 'Mesa de madera rustica para comedor o salon de 200 x 90 x 80 cm.',
        price: 200,
        cantidad: 1,},
        {id: 3,
        imagen:'sofa.webp',
        nombre: 'Sofa',
        descripcion: 'Sofa acolchado en tela de algodón natural de 300 x 175 cm de ancho.',
        price: 300,
        cantidad: 1
      },{
        id: 4,
        imagen:'cama-ind.webp',
        nombre: 'Cama',
        descripcion: 'Cama con estructura de madera 160x80 con cabecero.',
        price: 250,
        cantidad: 1
      },{
        id: 5,
        imagen:'cama-king.webp',
        nombre: 'CamaKing',
        descripcion: 'Cama King con cabecero grande y color gris. Juego de sábanas incluído.',
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
