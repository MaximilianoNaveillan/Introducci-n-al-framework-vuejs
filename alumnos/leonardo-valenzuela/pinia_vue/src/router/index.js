import { createRouter, createWebHashHistory } from "vue-router";
import Estadisticas from "../components/Estadisticas.vue";
import Tareas from "../components/Tareas.vue";

const routes = [
  {
    path: "/",
    component: Tareas,
  },
  {
    path: "/estadisticas",
    component: Estadisticas,
  },

];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;