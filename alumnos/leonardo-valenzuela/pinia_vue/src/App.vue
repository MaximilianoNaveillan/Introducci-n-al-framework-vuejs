<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div class="container">
    <nav class="nav">
      <router-link to="/" class="lik">Inicio</router-link>
      <router-link to="/estadisticas" class="lik">Estadisticas</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style scoped>
.container {
  background-color: lightcoral;
  min-height: 100vh;
}

.nav {
  background-color: red;
  padding: 10px;
  display: flex;
  gap: 10px;
}

.lik {
  color: white;
  text-decoration: none;
}

.router-link-active {
  color: black;
  border-bottom: 1px solid black;
}
</style>