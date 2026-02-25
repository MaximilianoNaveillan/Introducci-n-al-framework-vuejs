<script setup>
import { ref } from 'vue';
const contador = ref(0); // ref es una función que devuelve un objeto reactivo, es decir, un objeto que se actualiza automáticamente cuando se modifica su valor --> ref( valor inicial )

function incrementar() {
  console.log(contador);
  contador.value++; // para acceder al valor de un ref, se utiliza la propiedad value
  // Propiedades Computadas: Son funciones que se ejecutan automáticamente cuando se accede a ellas y devuelven un valor calculado en función de otras propiedades reactivas. Se utilizan para realizar cálculos o transformaciones de datos sin necesidad de modificar el estado original.
}
</script>

<template>
  <button @click="incrementar">Clicks : {{ contador }}</button>
</template>

<style scoped></style>
