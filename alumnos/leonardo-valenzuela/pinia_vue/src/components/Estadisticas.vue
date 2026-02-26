<script setup>
import { useTareasStores } from '../stores/counter';

const store = useTareasStores();

</script>
<template>
  <h2>Estadisticas</h2>
  <h4>Total: {{ store.totalTareas }}</h4>
  <h4>Completadas: {{ store.tareasCompletadas }}</h4>
</template>
<style>


</style>