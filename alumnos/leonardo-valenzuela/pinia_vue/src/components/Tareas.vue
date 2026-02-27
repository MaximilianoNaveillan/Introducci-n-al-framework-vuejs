<script setup>
import { ref } from "vue";
import { useTareasStores } from "../stores/counter";

const store = useTareasStores();
const nuevaTarea = ref("");

const agregar = () => {
  store.agregarTarea(nuevaTarea.value);
  nuevaTarea.value = "";
};
</script>

<template>
  <p>LISTA DE TAREAS CON PINIA</p>
  <br />
  <form @submit.prevent="agregar">
    <input v-model="nuevaTarea" />
    <button>Agregar</button>
  </form>
  <div>
    <div v-for="tarea in store.tareas" :key="tarea.id">
      <h3>{{ tarea.id }} - {{ tarea.texto }} - {{ tarea.completada }}</h3>
      <button @click="store.completarTarea(tarea.id)">Completar</button>
      <button @click="store.eliminarTarea(tarea.id)">Eliminar</button>
    </div>
  </div>
</template>

<style scoped>

</style>
