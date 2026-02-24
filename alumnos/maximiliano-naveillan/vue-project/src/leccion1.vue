<script setup>
import { ref, computed } from 'vue';
const contador = ref(0); // ref es una función que devuelve un objeto reactivo, es decir, un objeto que se actualiza automáticamente cuando se modifica su valor --> ref( valor inicial )

const tareas = ref(['Aprender Vue', 'Practicar componentes', 'Construir proyectos']);

const frameworks = ref(['Vue', 'Rect', 'Angular']);

function incrementar() {
  console.log(contador);
  contador.value++; // para acceder al valor de un ref, se utiliza la propiedad value
}
// Propiedades Computadas: Son funciones que se ejecutan automáticamente cuando se accede a ellas y devuelven un valor calculado en función de otras propiedades reactivas. Se utilizan para realizar cálculos o transformaciones de datos sin necesidad de modificar el estado original.
const totalFrameworks = computed(() => frameworks.value.length);
</script>

<template>
  <button @click="incrementar">Clicks : {{ contador }}</button>
  <ul>
    <li v-for="(tarea, index) in tareas" :key="index">{{ tarea }}</li>
  </ul>
  <ul>
    <li v-for="(framework, index) in frameworks">{{ framework }}</li>
  </ul>
  <p>Total Frameworks: {{ totalFrameworks }}</p>
</template>

<style scoped></style>
