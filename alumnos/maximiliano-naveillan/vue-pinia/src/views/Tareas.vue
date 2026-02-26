<script setup>
import { ref } from 'vue';
import { useTareasStore } from '../stores/tareas';

const store = useTareasStore();
const nuevaTarea = ref('');
const agregar = () => {
  if (!nuevaTarea.value.trim()) return;
  store.agregaerTarea(nuevaTarea.value);
  nuevaTarea.value = '';
};
</script>

<template>
  <div>
    <h2>Tareas</h2>
    <form @submit.prevent="agregar">
      <input v-model="nuevaTarea" placeholder="Nueva Tarea..." />
      <button>Agregar</button>
    </form>
    <ul>
      <li v-for="t in store.tareas" :key="t.id">
        <span>{{ t.texto }}</span>
        <button @click="store.toggleTareas(t.id)">✔</button>
        <button @click="store.eliminarTarea(t.id)">❌</button>
      </li>
    </ul>
  </div>
</template>
