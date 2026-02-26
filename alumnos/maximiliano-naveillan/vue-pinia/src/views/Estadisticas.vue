<script setup>
import { useTareasStore } from '@/stores/tareas';
const store = useTareasStore();
</script>
<template>
  <div>
    <h2>Estadísticas</h2>
    <p>Total: {{ store.totalTareas }}</p>
    <p>Completadas {{ store.tareasCompletadas }}</p>
  </div>
</template>
