import { createApp } from 'vue';
import { createPinia } from 'pinia';
import router from './router';
import App from './App.vue';

const app = createApp(App);

app.use(createPinia()); // Activa Pinia en la aplicación

app.use(router); // Activa el router en la aplicación

app.mount('#app');
