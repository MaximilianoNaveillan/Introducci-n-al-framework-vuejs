<script setup>
import { useTareasStore } from '@/stores/tareas';
const store = useTareasStore();
</script>
<template>
  <div class="my-class">
    <h2>Estadísticas</h2>
    <p>Total: {{ store.totalTareas }}</p>
    <p>Completadas {{ store.tareasCompletadas }}</p>
  </div>
</template>

<style scoped>
.my-class {
  padding: 20px;
  background-color: #f0f8ff;
}
</style>
