# 🚀 Live Coding - Introducción a Vue 3 con Vite

## 🎯 Objetivo

Crear una pequeña aplicación interactiva usando Vue 3 donde: - Mostremos
un mensaje dinámico - Utilicemos data binding - Implementemos eventos -
Rendericemos listas - Usemos propiedades computadas

---

## 🛠 Paso 1: Crear el proyecto con Vite

```bash
npm create vite@latest vue-project
```

Seleccionar: - Framework: Vue - Variant: JavaScript

Luego:

```bash
cd vue-project
npm install
npm run dev
```

Abrir en el navegador la URL que indique la terminal.

---

## 📁 Paso 2: Limpiar el proyecto

Ir a `src/App.vue` y reemplazar todo el contenido por una estructura
básica:

```vue
<script setup></script>

<template>
  <h1>Mi Primer Live Coding con Vue 🚀</h1>
</template>

<style></style>
```

---

## 🔤 Paso 3: Data Binding

Agregar una variable reactiva:

```vue
<script setup>
import { ref } from 'vue';

const mensaje = ref('Hola Vue 👋');
</script>

<template>
  <h1>{{ mensaje }}</h1>
</template>
```

👉 Explicar: - `ref()` crea estado reactivo - `{{ }}` permite
interpolación

---

## 🖊 Paso 4: Two-Way Binding

Agregar un input:

```vue
<input v-model="mensaje" />
```

👉 Explicar: - `v-model` conecta input con estado

---

## 🎯 Paso 5: Eventos

Agregar un botón contador:

```vue
<script setup>
import { ref } from 'vue';

const contador = ref(0);

function incrementar() {
  contador.value++;
}
</script>

<template>
  <button @click="incrementar">Clicks: {{ contador }}</button>
</template>
```

👉 Explicar: - `@click` es shorthand de `v-on:click` - `.value` es
necesario en JS con ref

---

## 📋 Paso 6: Renderizado de listas

```vue
<script setup>
import { ref } from 'vue';

const tareas = ref(['Aprender Vue', 'Practicar componentes', 'Construir proyectos']);
</script>

<template>
  <ul>
    <li v-for="(tarea, index) in tareas" :key="index">
      {{ tarea }}
    </li>
  </ul>
</template>
```

👉 Explicar: - `v-for` - `:key` obligatorio

---

## 🧠 Paso 7: Propiedades Computadas

```vue
<script setup>
import { ref, computed } from 'vue';

const tareas = ref(['Vue', 'React', 'Angular']);

const totalTareas = computed(() => tareas.value.length);
</script>

<template>
  <p>Total tareas: {{ totalTareas }}</p>
</template>
```

👉 Explicar: - `computed()` recalcula automáticamente cuando cambia la
dependencia

---

## 🏁 Desafío Final

Agregar: - Un input para agregar nuevas tareas - Un botón para eliminar
tareas - Mostrar mensaje si no hay tareas

---

## 💡 Conceptos aprendidos

- ref()
- Interpolación
- v-model
- v-on / @click
- v-for
- computed
- Reactividad en Vue 3

---

## 🚀 Resultado esperado

Una pequeña SPA interactiva lista para seguir creciendo.

---

¡Listo para tu Live Coding! 🎉
