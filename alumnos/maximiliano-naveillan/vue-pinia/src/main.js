import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';

const app = createApp(App);

app.use(createPinia()); // Activa Pinia en la aplicación

app.mount('#app');
