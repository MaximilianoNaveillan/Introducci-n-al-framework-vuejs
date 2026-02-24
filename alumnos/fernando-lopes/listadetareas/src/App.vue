<script setup>
import { ref } from 'vue';

const nuevaTarea = ref(''); // lo que escribe el usuario [web:21]
const tareas = ref([]); // lista de tareas [web:21]
let proximoId = 1;

function agregarTarea(event) {
  // si llamas desde un <form @submit>, puedes usar event.preventDefault()
  if (event) event.preventDefault(); // equivalente a .prevent en la plantilla [web:28]

  const texto = nuevaTarea.value.trim();
  if (!texto) return; // no agregues tareas vacías [web:24]

  tareas.value.push({
    // agregar al array reactivo [web:21]
    id: proximoId++,
    texto,
  });

  nuevaTarea.value = ''; // limpiar el input [web:24]
}
</script>

<template>
  <form @submit="agregarTarea">
    <input type="text" v-model="nuevaTarea" placeholder="Escribe una tarea" />
    <button type="submit">Agregar</button>
  </form>

  <ul>
    <li v-for="tarea in tareas" :key="tarea.id">
      {{ tarea.texto }}
    </li>
  </ul>
</template>
