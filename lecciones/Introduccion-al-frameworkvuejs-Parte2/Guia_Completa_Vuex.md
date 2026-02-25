# 📦 ¿Qué es Vuex?

Vuex es una librería de gestión de estado global para aplicaciones
hechas con Vue 3.

En aplicaciones pequeñas podemos manejar datos dentro de cada
componente. Pero cuando la aplicación crece y varios componentes
necesitan compartir datos, aparece un problema:

❓ ¿Cómo compartimos estado sin pasar props manualmente por muchos
niveles?

Ahí aparece Vuex.

------------------------------------------------------------------------

# 🎯 ¿Para qué sirve Vuex?

Vuex permite:

-   Centralizar el estado (una sola fuente de verdad)
-   Evitar el "prop drilling"
-   Mantener un flujo de datos predecible
-   Separar lógica de negocio de la vista
-   Escalar aplicaciones grandes

------------------------------------------------------------------------

# 🧠 Conceptos Clave de Vuex

Vuex se basa en 4 pilares:

## 1️⃣ State

Es el estado global de la aplicación.

``` js
state: {
  tareas: []
}
```

Es la fuente única de verdad.

------------------------------------------------------------------------

## 2️⃣ Mutations

Son las únicas funciones que pueden modificar el estado.

``` js
mutations: {
  AGREGAR_TAREA(state, tarea) {
    state.tareas.push(tarea);
  }
}
```

Son:

-   Síncronas\
-   Controladas\
-   Predecibles

------------------------------------------------------------------------

## 3️⃣ Actions

Contienen lógica (pueden ser async) y llaman a mutations.

``` js
actions: {
  agregarTarea({ commit }, texto) {
    commit("AGREGAR_TAREA", {
      id: Date.now(),
      texto,
      completada: false
    });
  }
}
```

------------------------------------------------------------------------

## 4️⃣ Getters

Son como propiedades computadas globales.

``` js
getters: {
  totalTareas: state => state.tareas.length
}
```

------------------------------------------------------------------------

# 🏗 ¿Cómo quedará la estructura del proyecto?

Supongamos que el proyecto fue creado con:

``` bash
npm create vue@latest
```

La estructura relevante quedará así:

    src/
    │
    ├── main.js
    ├── App.vue
    │
    ├── store/
    │   └── index.js
    │
    └── views/
        ├── Tareas.vue
        └── Estadisticas.vue

------------------------------------------------------------------------

# 📄 1️⃣ Archivo: src/store/index.js

Este es el corazón de Vuex.

``` js
// src/store/index.js

import { createStore } from "vuex";

export default createStore({

  // 🔹 Estado global
  state: {
    tareas: []
  },

  // 🔹 Mutations (modifican el estado)
  mutations: {

    AGREGAR_TAREA(state, tarea) {
      state.tareas.push(tarea);
    },

    ELIMINAR_TAREA(state, id) {
      state.tareas = state.tareas.filter(t => t.id !== id);
    },

    TOGGLE_TAREA(state, id) {
      const tarea = state.tareas.find(t => t.id === id);
      if (tarea) {
        tarea.completada = !tarea.completada;
      }
    }

  },

  // 🔹 Actions (lógica)
  actions: {

    agregarTarea({ commit }, texto) {

      const nuevaTarea = {
        id: Date.now(),
        texto,
        completada: false
      };

      commit("AGREGAR_TAREA", nuevaTarea);
    }

  },

  // 🔹 Getters (cálculos derivados)
  getters: {

    totalTareas: state => state.tareas.length,

    tareasCompletadas: state =>
      state.tareas.filter(t => t.completada).length

  }

});
```

------------------------------------------------------------------------

# 📄 2️⃣ Archivo: src/main.js

Aquí conectamos Vuex con la aplicación.

``` js
// src/main.js

import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";

createApp(App)
  .use(store) // Inyectamos Vuex
  .mount("#app");
```

✔ Ahora cualquier componente puede acceder al estado global.

------------------------------------------------------------------------

# 📄 3️⃣ Archivo: views/Tareas.vue

Componente que usa el store.

``` vue
<script setup>
import { useStore } from "vuex";
import { ref } from "vue";

const store = useStore();
const nuevaTarea = ref("");

const agregar = () => {
  if (!nuevaTarea.value) return;

  // Ejecuta una action
  store.dispatch("agregarTarea", nuevaTarea.value);

  nuevaTarea.value = "";
};
</script>

<template>
  <div>
    <h2>Tareas</h2>

    <form @submit.prevent="agregar">
      <input v-model="nuevaTarea" />
      <button>Agregar</button>
    </form>

    <ul>
      <li v-for="t in store.state.tareas" :key="t.id">
        {{ t.texto }}

        <button @click="store.commit('TOGGLE_TAREA', t.id)">
          ✔
        </button>

        <button @click="store.commit('ELIMINAR_TAREA', t.id)">
          ❌
        </button>
      </li>
    </ul>
  </div>
</template>
```

------------------------------------------------------------------------

# 📄 4️⃣ Archivo: views/Estadisticas.vue

``` vue
<script setup>
import { useStore } from "vuex";
const store = useStore();
</script>

<template>
  <div>
    <h2>Estadísticas</h2>

    <p>Total: {{ store.getters.totalTareas }}</p>
    <p>Completadas: {{ store.getters.tareasCompletadas }}</p>
  </div>
</template>
```

------------------------------------------------------------------------

# 🔄 Flujo de Vuex en la práctica

1.  El usuario envía el formulario\
2.  El componente hace `dispatch()`\
3.  La action ejecuta `commit()`\
4.  La mutation modifica el state\
5.  Vue re-renderiza automáticamente

------------------------------------------------------------------------

# 🎯 Conclusión

Vuex sirve para:

-   Centralizar estado\
-   Hacer aplicaciones más mantenibles\
-   Evitar desorden cuando el proyecto crece\
-   Controlar el flujo de datos

En proyectos pequeños puede parecer "extra", pero en aplicaciones
medianas/grandes se vuelve una herramienta estructural.
