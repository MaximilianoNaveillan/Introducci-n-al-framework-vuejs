<script setup>
import { ref } from "vue";
const saludar = ref("hola Leo");
const contador = ref(0);
const incrementar = () => {
  contador.value++;
};

const tareas = ref([
  "aprender vue",
  "aprender react",
  "aprender angular",
  "aprender node",
])

</script>

<template>
  <h1>Mi primera app Con VUE JS {{ saludar }}</h1>
  <h2>Contador: {{ contador }}</h2>
  <button @click="incrementar"> Incrementar +</button>
  <ul>
    <li v-for="(tarea, index) in tareas" :key="index">{{ index + 1}} - {{ tarea }}</li>
  </ul>

</template>

<style scoped>

</style>
