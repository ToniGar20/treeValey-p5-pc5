import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './css/custom.css'

//Importacion de Bootstrap
//CSS
import 'bootstrap/dist/css/bootstrap.min.css'
//JS
import 'bootstrap'

//Fontawesome icons import
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'


createApp(App).use(store).use(router).mount('#app')
