# 🧩 Aplicación de Tareas con Gestión Global y Navegación

## (Vue 3 + Vue Router + Pinia o Vuex usando `npm create vue@latest`)

## 🎯 Objetivo

Construir una SPA (Single Page Application) con:

- 📌 Ruta 1: Gestión de tareas (agregar, listar, eliminar, completar).
- 📊 Ruta 2: Estadísticas (total de tareas y tareas completadas).
- 🗂 Gestión global del estado.
- 🧭 Navegación con Vue Router.

⏱ Tiempo estimado: 45 minutos

---

# 🚀 Paso 1: Crear el proyecto

Crear el proyecto usando el generador oficial moderno de Vue:

```bash
npm create vue@latest
```

💡 Pistas: - Elegí nombre del proyecto. - Activá **Vue Router** cuando
lo pregunte. - Activá **Pinia** (recomendado) o luego instalá Vuex
manualmente. - Activá TypeScript solo si te sentís cómodo.

Luego:

```bash
cd nombre-del-proyecto
npm install
npm run dev
```

📚 Documentación oficial: - Vue 3: https://vuejs.org/ - Crear proyecto:
https://vuejs.org/guide/quick-start.html - Vue Router:
https://router.vuejs.org/ - Pinia: https://pinia.vuejs.org/

---

# 🗂 Paso 2: Analizar la Estructura Generada

Observá las carpetas creadas automáticamente.

Preguntas guía: - ¿Dónde están definidas las rutas? - ¿Dónde se
inicializa el store? - ¿Qué archivo monta la app?

Reflexioná antes de modificar.

---

# 🧠 Paso 3: Crear el Store Global

Definí un store para manejar tareas.

💡 Pistas: - Usá `defineStore` si trabajás con Pinia. - Definí un
`state` que contenga un array `tareas`. - Cada tarea debería tener: -
id - texto - completada (boolean)

Preguntas clave: - ¿Cómo generarás IDs únicos? - ¿El estado se define
como función o como objeto?

📚 Documentación: https://pinia.vuejs.org/core-concepts/

---

# 🔁 Paso 4: Definir Acciones

Tu store debe permitir:

- Agregar tarea
- Eliminar tarea
- Marcar como completada

💡 Pista: En Pinia las acciones viven dentro del store y pueden
modificar el estado directamente.

Reflexioná: ¿Qué diferencia hay entre actions y getters?

---

# 📝 Paso 5: Crear Vista `Tareas.vue`

Debe incluir:

- Formulario con `v-model`
- Renderizado dinámico con `v-for`
- Botón para completar
- Botón para eliminar

💡 Pistas: - Usá `@submit.prevent` - Importá el store dentro del
`<script setup>` - Recordá la reactividad

📚 Documentación: https://vuejs.org/guide/essentials/forms.html

---

# 📊 Paso 6: Crear Vista `Estadisticas.vue`

Debe mostrar:

- Total de tareas
- Cantidad completadas

💡 Pista: Usá **getters** dentro del store.

Preguntas guía: - ¿Cómo contarías tareas completadas? - ¿Dónde debería
vivir esa lógica?

---

# 🧭 Paso 7: Configurar las Rutas

Definí al menos:

- `/` → Tareas
- `/estadisticas` → Estadísticas

💡 Pistas: - Usá `<RouterLink>` - Colocá `<RouterView>` en `App.vue` -
Revisá el archivo `router/index.js`

📚 Documentación: https://router.vuejs.org/guide/

---

# 🧪 Paso 8: Verificación

Checklist:

✅ Agrega tareas correctamente\
✅ Se pueden eliminar\
✅ Se pueden marcar como completadas\
✅ Estadísticas actualizan en tiempo real\
✅ Navegación no recarga la página

---

# 🔎 Paso 9: Devtools

Instalá Vue Devtools y verificá:

- Estado del store
- Reacciones en tiempo real
- Flujo de datos

---

# 🧠 Desafío Extra

Si terminás antes:

- Persistencia con LocalStorage
- Filtro (todas / completadas / pendientes)
- Animaciones con `<transition>`
- Contador visual en el navbar

---

# 🎯 Reflexión Final

- ¿Por qué usar estado global?
- ¿Qué problema resuelve?
- ¿Cómo escalarías esto a múltiples módulos?

---

🔥 Construí, probá, rompé y volvé a construir.
