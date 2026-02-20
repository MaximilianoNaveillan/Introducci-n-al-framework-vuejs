📚 Proyecto Integrador ABP -- Módulo 6
BookList SPA -- Gestor de Libros Interactivo con Vue.js
📍 Evaluación del Módulo 6
Desarrollo de Interfaces Interactivas con Framework Vue

🏢 Contexto del Proyecto
La Editorial Nova desea modernizar su plataforma de gestión de libros, actualmente limitada a formularios estáticos en HTML sin navegación entre pantallas.

Tu misión será desarrollar una SPA (Single Page Application) llamada BookList, utilizando Vue.js, que permita:

Registrar libros
Visualizar catálogo
Filtrar por autor o categoría
Editar y eliminar entradas
Navegar entre vistas dinámicamente
⚠️ Este README contiene consignas, pistas y ayudas, pero NO incluye la solución.

🎯 Objetivos de Aprendizaje
Al finalizar el proyecto deberás demostrar que puedes:

Comprender y aplicar fundamentos de Vue.js.
Implementar binding reactivo con v-model.
Utilizar directivas como v-if, v-for, v-show.
Manejar eventos con @click y modificadores.
Configurar navegación con Vue Router.
Aplicar el patrón MVVM correctamente.
📋 Requerimientos Generales
El sistema debe:

Permitir añadir libros con:
Título
Autor
Categoría
Mostrar lista reactiva de libros
Permitir eliminar libros
Tener mínimo 3 vistas:
Inicio
Lista de libros
Detalle del libro
Implementar rutas dinámicas /libros/:id
Tener estructura modular y reutilizable
👣 Desarrollo por Etapas
Este proyecto se divide en 5 lecciones progresivas.

🟢 Lección 1 -- Introducción a Vue
📌 Objetivo
Comprender la estructura básica de un componente Vue.

📍 Tareas
Crear App.vue con estructura:
<template>

<script>
<style>
Implementar un contador reactivo.
Mostrar nombre del usuario utilizando datos reactivos.
💡 Pistas
Usa data() para definir estado.
Los métodos se definen dentro de methods.
El patrón MVVM implica que la vista depende del modelo reactivo.
🟢 Lección 2 -- Templates y Rendering
📌 Objetivo
Utilizar templates y directivas.

📍 Tareas
Crear Libro.vue.
Mostrar datos con v-bind.
Usar:
v-if
v-show
v-for
Mostrar mensaje cuando no existan libros.
💡 Pistas
v-for necesita una key única.
Usa condicionales para estados vacíos.
Diferencia entre v-if (renderiza condicionalmente) y v-show (oculta visualmente).
🟢 Lección 3 -- Binding de Formularios
📌 Objetivo
Implementar formularios reactivos.

📍 Tareas
Crear formulario con:
input
select
textarea
Usar v-model.
Mostrar preview en tiempo real.
💡 Pistas
v-model crea binding bidireccional.
Puedes usar un objeto nuevoLibro para agrupar datos.
Evita mutar estado sin método intermedio.
🟢 Lección 4 -- Manejo de Eventos
📌 Objetivo
Modificar el estado con eventos.

📍 Tareas
Usar @click para:
Agregar libros
Eliminar libros
Usar modificadores:
.prevent
.once
Agregar evento teclado Enter para enviar formulario.
💡 Pistas
Usa @submit.prevent en formularios.
El evento Enter puede capturarse con @keyup.enter.
Mantén separación entre lógica y template.
🟢 Lección 5 -- Manejo de Rutas
📌 Objetivo
Implementar Vue Router.

📍 Tareas
Configurar rutas:
/
/libros
/libros/:id
Crear vistas:
InicioView.vue
ListaLibros.vue
DetalleLibro.vue
Usar props en rutas dinámicas.
💡 Pistas
Configura el router en /router/index.js.
Usa createRouter y createWebHistory.
Accede al parámetro dinámico con route.params.id.
Considera usar props: true en la definición de ruta.
🔍 ¿Qué se evaluará?
Correcta estructura de componentes.
Uso adecuado de v-model.
Implementación correcta de directivas.
Manejo de eventos y modificadores.
Configuración funcional de Vue Router.
Modularidad del código.
Buen uso del patrón MVVM.
Navegación fluida.
📦 Entregables
Debes entregar:

Carpeta del proyecto con:
Componentes
Router
Vistas
Código funcional
Capturas o video demostrativo
Documento resumen explicando decisiones técnicas
ZIP o repositorio en GitHub
💼 Recomendación para Portafolio
Este proyecto puede presentarse como:

SPA real de gestión de datos
Ejemplo de uso de Vue Router
Aplicación con formularios dinámicos
Proyecto modular escalable
Destaca:

Arquitectura
Reutilización de componentes
Organización del estado
Experiencia de usuario
🚀 Consejos Finales
Avanza por etapas.
No intentes resolver todo de una vez.
Refactoriza a medida que creces.
Prioriza claridad sobre complejidad.
Prueba cada funcionalidad antes de continuar.
¡Éxito en el desarrollo de tu BookList SPA! 📚✨
