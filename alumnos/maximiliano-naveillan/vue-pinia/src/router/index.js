import { createRouter, createWebHistory } from 'vue-router';
import Tareas from '../views/Tareas.vue';
import Estadisticas from '../views/Estadisticas.vue';

const routes = [
  {
    path: '/', // Ruta raíz
    component: Tareas,
  },
  {
    path: '/estadisticas', // Ruta para estadísticas
    component: Estadisticas,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
