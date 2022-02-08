import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//Importacion de Bootstrap
//CSS
import 'bootstrap/dist/css/bootstrap.min.css'
//JS
import 'bootstrap'

createApp(App).use(store).use(router).mount('#app')
