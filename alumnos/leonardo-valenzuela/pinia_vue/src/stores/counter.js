import { defineStore } from "pinia";

export const useTareasStores = defineStore("tareas", {
  //estado inicial state
  state: () => ({
    tareas: [],
  }),
  //GETTERS
  getters: {
    totalTareas: (state) => state.tareas.length,
    tareasCompletadas: (state) => state.tareas.filter((t) => t.completada).length,
  },
  //ACCIONES
  actions: {
    agregarTarea(texto) {
      this.tareas.push({
        id: Date.now(),
        texto,
        completada: false,
      });
    },
    eliminarTarea(id){
      this.tareas = this.tareas.filter(t => t.id !== id);
    },
    completarTarea(id){
      this.tareas = this.tareas.map(t => {
        if(t.id === id){
          t.completada = !t.completada;
        }
        return t;
      })
    }
  },
});
