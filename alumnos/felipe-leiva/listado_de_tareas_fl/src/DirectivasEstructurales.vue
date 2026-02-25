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
====================================================================
3️⃣ DIRECTIVAS v-if, v-else, v-for – TABLA COMENTADA (VUE)
=====================================================================
https://vue3-spanish-docs.netlify.app/api/built-in-directives.html#v-if

| Directiva | Tipo                    | ¿Es Data Binding? | ¿Qué controla?              | ¿Qué hace realmente? |
|-----------|-------------------------|-------------------|-----------------------------|----------------------|
| v-if     | Directiva estructural   | ❌ No             | Renderizado condicional     | Crea o destruye el nodo del DOM según una condición |
| v-else   | Directiva estructural   | ❌ No             | Renderizado alternativo     | Renderiza un bloque cuando v-if es falso |
| v-for    | Directiva estructural   | ❌ No             | Renderizado de listas       | Repite un elemento según un array o rango |

---------------------------------------------------------------------

Comentarios importantes:

• Estas directivas NO sincronizan datos con la vista.
• No conectan variables a atributos HTML.
• Modifican directamente la estructura del DOM.
• Dependen de datos reactivos, pero no son binding.

Ejemplo mental:

JS decide →
  ¿Se muestra?
  ¿Cuántas veces se muestra?
  ¿Qué bloque se renderiza?

Eso es control estructural del DOM.

---------------------------------------------------------------------
-->