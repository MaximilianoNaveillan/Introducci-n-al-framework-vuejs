import { defineStore } from 'pinia';

export const useTareasStore = defineStore('tareas', {
  // STATE (fuente única de vardad)
  state: () => ({
    tareas: [],
  }),
  //GETTERS (computed globales)
  getters: {
    totalTareas: (state) => state.tareas.length,
    tareasCompletadas: (state) => state.tareas.filter((t) => t.completada).length,
  },
  // ACTIONS (modificar el estado)
  actions: {
    agregaerTarea(texto) {
      this.tareas.push({
        id: Date.now(), // Genera un ID único basado en la fecha actual
        texto, // El texto de la tarea
        completada: false, // Por defecto, la tarea no está completada
      });
    },
    eliminarTarea(id) {
      this.tareas = this.tareas.filter((t) => t.id !== id);
    },
    toggleTareas(id) {
      const tarea = this.tareas.find((t) => t.id === id);
      if (tarea) {
        tarea.completada = !tarea.commpletada;
      }
    },
  },
});
