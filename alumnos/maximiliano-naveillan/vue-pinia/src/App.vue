<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <nav>
    <router-link to="/">Tareas</router-link>
    <router-link to="/estadisticas">Estadísticas</router-link>
  </nav>
  <router-view />
</template>

<style scoped></style>
