import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

//app
const app = createApp(App)

//librerias
app.use(createPinia())
app.use(router)

//compilador
app.mount('#app')
