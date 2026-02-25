<script setup>
import { ref } from "vue";

//referencias de reactividad
const message = ref("");
const tareas = ref([]);

//crear tarea
const crearTarea = () => {
  console.log(message.value);
  
  const tarea = {
    id: Date.now(),
    text: message.value
  }
  
  tareas.value.push(tarea);
  message.value = "";
}

//eliminar tarea por id
const eliminarTarea = (id) => {
  tareas.value = tareas.value.filter(tarea => tarea.id !== id)
}
</script>

<template>
  <h1>Mi primera app Con VUE JS , Lista Tareas</h1>
  <!-- v-model donde tomamos el valor del messagfe -->
  <input type="text" v-model="message" placeholder="Message"/>
  <button @click="crearTarea">Crear Tarea :D</button>
  <ul>
    <!-- v-for para recorrer el array de tareas y se les pasa el id para eliminar -->
    <li v-for="tarea in tareas" :key="tarea.id">
      {{tarea.text}}
      <button @click="eliminarTarea(tarea.id)">Eliminar</button>
    </li>
  </ul>
</template>

<style scoped></style>
