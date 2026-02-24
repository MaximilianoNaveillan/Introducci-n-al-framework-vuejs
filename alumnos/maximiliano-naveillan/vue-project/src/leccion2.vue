<script setup>
import { ref, computed } from 'vue';

/* =========================
   1️ Data Binding --> conexión entre los datos (JavaScript) y la vista (HTML).
========================= */
const mensaje = ref('Hola Vue 👋');

/* =========================
   2️ Eventos (contador)
========================= */
const contador = ref(0);

function incrementar() {
  contador.value++;
}

/* =========================
   3️ Lista de tareas
========================= */
const nuevaTarea = ref('');
const tareas = ref(['Aprender Vue', 'Practicar componentes', 'Construir proyectos']);

function agregarTarea() {
  if (nuevaTarea.value.trim() === '') return;

  tareas.value.push(nuevaTarea.value);
  nuevaTarea.value = '';
}

function eliminarTarea(index) {
  tareas.value.splice(index, 1);
}

/* =========================
   4️ Computed
========================= */
const totalTareas = computed(() => tareas.value.length);
const hayTareas = computed(() => tareas.value.length > 0);
</script>

<template>
  <div style="max-width: 600px; margin: auto; font-family: sans-serif">
    <!-- Data Binding -->
    <h1>{{ mensaje }}</h1>
    <input v-model="mensaje" />

    <hr />

    <!-- Eventos -->
    <button @click="incrementar">Clicks: {{ contador }}</button>

    <hr />

    <!-- Agregar tareas -->
    <h2>Lista de Tareas</h2>

    <input v-model="nuevaTarea" placeholder="Escribe una nueva tarea" @keyup.enter="agregarTarea" />
    <!-- Two-way binding (Bidireccional v-model.)  -->
    <button @click="agregarTarea">Agregar</button>

    <!--  Renderizado condicional -->
    <p v-if="!hayTareas">No hay tareas pendientes 🚀</p>

    <ul v-else>
      <li v-for="(tarea, index) in tareas" :key="index">
        {{ tarea }}
        <!-- Interpolación (One-way binding) -->
        <button @click="eliminarTarea(index)">❌</button>
        <!-- Binding de atributos v-bind o :-->
      </li>
    </ul>

    <!--  Computed -->
    <p>Total tareas: {{ totalTareas }}</p>
  </div>
</template>

<style scoped>
button {
  margin-left: 8px;
  cursor: pointer;
}

input {
  margin: 8px 0;
  padding: 4px;
}
</style>

<!-- =========================================================
1️⃣ DATA BINDING EN VUE – TABLA EXPLICATIVA
=========================================================
https://vue3-spanish-docs.netlify.app/guide/essentials/forms.html

| Tipo de Binding        | Sintaxis                | Dirección        | ¿Qué hace?                                  | Ejemplo |
|------------------------|------------------------|------------------|----------------------------------------------|---------|
| Interpolación          | {{ variable }}         | JS → HTML        | Muestra datos en pantalla                   | <h1>{{ mensaje }}</h1> |
| Binding de atributo    | :atributo="variable"   | JS → HTML        | Conecta variables a atributos HTML          | <img :src="url"> |
| Two-Way Binding        | v-model="variable"     | JS ↔ HTML        | Sincroniza input y estado automáticamente   | <input v-model="nombre"> |
| Event Binding          | @evento="metodo"       | HTML → JS        | Ejecuta funciones al ocurrir eventos        | <button @click="sumar"> |

---------------------------------------------------------

Resumen mental:

Interpolación → Solo muestra datos.
v-bind (:) → Enlaza atributos dinámicos.
v-model → Sincronización automática bidireccional.
@event → Conecta eventos con lógica.

En Vue, el estado controla la vista.
Si el estado cambia, la interfaz cambia automáticamente.
 -->

<!-- 
/*
====================================================================
2️⃣ DIRECTIVA DE RENDERIZADO BASADA EN CSS – v-show
====================================================================
https://vue3-spanish-docs.netlify.app/api/built-in-directives.html#v-show


| Directiva | Tipo | ¿Modifica el DOM? | ¿Usa CSS? | ¿Destruye el nodo? | Caso ideal |
|------------|------|------------------|-----------|--------------------|------------|
| v-show     | Visualización | ❌ No | ✅ Sí (display) | ❌ No | Mostrar/ocultar frecuentemente |

--------------------------------------------------------------------

¿Qué hace realmente?

v-show NO elimina el elemento.
Solo cambia su propiedad CSS:

Si la condición es true:
  display: original

Si la condición es false:
  display: none

--------------------------------------------------------------------

Ejemplo conceptual:

<div v-show="visible">Contenido</div>

Equivale aproximadamente a:

<div style="display: none;">Contenido</div>

--------------------------------------------------------------------

|Comparación rápida con v-if

| Característica | v-if | v-show |
|---------------|-------|---------|
| Elimina del DOM | ✅ | ❌ |
| Cambia display CSS | ❌ | ✅ |
| Bueno para toggles frecuentes | ❌ | ✅ |
| Bueno para render pesado inicial | ✅ | ❌ |

--------------------------------------------------------------------

Conclusión:

v-show = Controla VISIBILIDAD (CSS)
v-if   = Controla EXISTENCIA (DOM)

====================================================================
*/ 
-->

<!-- 
 /*
=====================================================================
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

Ejemplos rápidos:

v-if:
<p v-if="activo">Visible</p>

v-else:
<p v-else>No visible</p>

v-for:
<li v-for="item in items" :key="item.id">{{ item }}</li>

---------------------------------------------------------------------

Conclusión corta:

Data Binding → Muestra o sincroniza datos
Directivas estructurales → Construyen o destruyen el DOM

=====================================================================
*/ -->
