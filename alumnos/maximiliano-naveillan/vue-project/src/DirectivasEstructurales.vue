<script setup>
import { ref } from 'vue';
const mostrar = ref(false);
const tareas = ref(['Estudiar', 'Practicar', 'construir']);
const activo = ref(true);
</script>

<template>
  <!-- v-if / v-else -->
  <p v-if="mostrar">contenido visible</p>
  <p v-else>contenido oculto</p>
  <p v-show="mostrar">contenido con show</p>
  <button @click="mostrar = !mostrar">show</button>

  <ul>
    <li v-for="(tarea, index) in tareas" :key="index">{{ tarea }}</li>
  </ul>
  <div :style="{ color: activo ? 'green' : 'red' }">Color dinámico</div>
  <p>{{ activo }}</p>
  <button @click="activo = !activo">Cambiar de estado</button>
</template>

<!-- 
=========================================================
DIRECTIVAS MÁS USADAS EN VUE 3
=========================================================

| Directiva | Tipo | Qué hace |
|------------|--------|-----------|
| v-bind / : | Binding | Vincula atributos dinámicamente |
| v-model | Two-way binding | Sincroniza input con estado |
| v-on / @ | Eventos | Escucha eventos del DOM |
| v-if | Render condicional | Crea/destruye del DOM |
| v-else | Condicional | Alternativa a v-if |
| v-show | Visualización | Controla display CSS |
| v-for | Listas | Itera sobre arrays |
| v-slot | Slots | Comunicación en componentes |
| v-pre | Optimización | Salta compilación |
| v-once | Render único | Renderiza una sola vez |

=========================================================

-->
