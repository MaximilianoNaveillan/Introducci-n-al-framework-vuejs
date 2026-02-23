# 🚀 Ejercicio Guiado -- Lista de Tareas con Componentes y Reactividad (Vue)

⏱ Tiempo estimado: 45 minutos

------------------------------------------------------------------------

## 🎯 Objetivo

Construir una aplicación en Vue.js donde el usuario pueda:

-   Ingresar tareas en un input
-   Verlas listadas en pantalla
-   Eliminarlas con un botón
-   Utilizar un componente hijo para representar cada tarea
-   Practicar reactividad, props y emisión de eventos

⚠️ Importante: Este documento NO contiene la solución. Sigue las
instrucciones, investiga y construye paso a paso.

------------------------------------------------------------------------

# 🛠 Parte 1 -- Preparar el entorno

Si aún no tienes un proyecto creado:

📘 Documentación oficial: https://vuejs.org/guide/quick-start.html

Preguntas guía: - ¿Qué comando crea un proyecto con Vite? - ¿Qué comando
levanta el servidor de desarrollo? - ¿Dónde vive el componente raíz?

------------------------------------------------------------------------

# 🧠 Parte 2 -- Reactividad básica

## Paso 1: Crear el estado reactivo

Debes definir:

-   Una propiedad reactiva llamada `nuevaTarea`
-   Un array reactivo llamado `tareas`

📘 Investiga:
https://vuejs.org/guide/essentials/reactivity-fundamentals.html

Preguntas guía: - ¿Cómo se crea una variable reactiva en Vue 3 usando
Composition API? - ¿Cuándo se usa `.value`?

------------------------------------------------------------------------

# 📝 Parte 3 -- Capturar datos con formulario

## Paso 2: Crear un formulario

Debes agregar:

-   Un input vinculado a `nuevaTarea`
-   Un botón para agregar la tarea

📘 Investiga: https://vuejs.org/guide/essentials/forms.html

Preguntas guía: - ¿Qué directiva permite el two-way binding? - ¿Cómo
evitar que el formulario recargue la página?

------------------------------------------------------------------------

# ➕ Parte 4 -- Agregar tareas al array

## Paso 3: Crear método agregarTarea

Debes:

-   Crear una función que agregue el contenido de `nuevaTarea` al array
    `tareas`
-   Limpiar el input después de agregar

📘 Investiga: https://vuejs.org/guide/essentials/event-handling.html

Preguntas guía: - ¿Cómo se agregan elementos a un array reactivo? - ¿Qué
pasa si el input está vacío? - ¿Deberías validar antes de agregar?

------------------------------------------------------------------------

# 📋 Parte 5 -- Renderizar lista

## Paso 4: Mostrar tareas en pantalla

Debes usar:

-   `v-for`
-   `:key` obligatorio

📘 Investiga: https://vuejs.org/guide/essentials/list.html

Preguntas guía: - ¿Por qué Vue exige una key? - ¿Qué problema evita?

------------------------------------------------------------------------

# 🧩 Parte 6 -- Crear componente TareaItem

## Paso 5: Separar responsabilidad

Crea un nuevo componente llamado:

    TareaItem.vue

Este componente debe:

-   Recibir el texto de la tarea por `props`
-   Mostrar el texto
-   Tener un botón para eliminar

📘 Investiga: https://vuejs.org/guide/components/props.html

Preguntas guía: - ¿Cómo se definen props en `<script setup>`? - ¿Por qué
no debemos modificar una prop directamente?

------------------------------------------------------------------------

# 📤 Parte 7 -- Emitir evento desde el hijo

## Paso 6: Comunicación hijo → padre

Desde `TareaItem`:

-   Emitir un evento cuando se haga clic en eliminar

📘 Investiga: https://vuejs.org/guide/components/events.html

Preguntas guía: - ¿Cómo se define `defineEmits()`? - ¿Qué datos debes
enviar al padre para eliminar correctamente?

------------------------------------------------------------------------

# 🎧 Parte 8 -- Escuchar el evento en el padre

## Paso 7: Actualizar el array

En el componente padre:

-   Escuchar el evento emitido
-   Eliminar la tarea correspondiente del array

Preguntas guía: - ¿Eliminarás por índice o por id? - ¿Qué método de
array usarás? - ¿Cómo evitar modificar el array incorrectamente?

------------------------------------------------------------------------

# 🧪 Extra Challenge (Opcional)

Si terminas antes:

-   Agrega validación para evitar tareas vacías
-   Agrega contador de tareas
-   Agrega mensaje si no hay tareas
-   Agrega transición simple al eliminar

📘 Transiciones: https://vuejs.org/guide/built-ins/transition.html

------------------------------------------------------------------------

# ✅ Checklist Final

Tu aplicación debería:

☐ Permitir escribir una tarea\
☐ Agregarla al hacer clic\
☐ Renderizarla en una lista\
☐ Usar un componente hijo\
☐ Eliminar tareas mediante evento emitido\
☐ Mantener reactividad

------------------------------------------------------------------------

# 🧠 Conceptos aplicados

-   Reactividad (ref)
-   v-model
-   v-for
-   Props
-   Emisión de eventos
-   Comunicación padre-hijo
-   Separación de componentes

------------------------------------------------------------------------

🚀 ¡Construye paso a paso y consulta la documentación cuando tengas
dudas!
