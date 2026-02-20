# 📚 Proyecto Integrador ABP -- Módulo 6

## BookList SPA -- Gestor de Libros Interactivo con Vue.js

---

# 🧭 Paso a Paso Estratégico con Ayudas

Este documento amplía la consigna original e incluye una guía
metodológica para desarrollar el proyecto sin entregar la solución
final.

⚠️ Aquí encontrarás orientación técnica, preguntas guía y buenas
prácticas, pero no el código resuelto.

---

# 🏢 Contexto

La Editorial Nova busca modernizar su sistema mediante una SPA
desarrollada con Vue.js que permita gestionar libros de forma
interactiva.

---

# 🎯 Objetivos del Proyecto

- Aplicar fundamentos de Vue.js
- Implementar binding reactivo
- Manejar eventos correctamente
- Configurar Vue Router con rutas dinámicas
- Desarrollar una SPA modular y escalable

---

# 🛠️ Paso 0 -- Preparar el Entorno

## Crear el proyecto

```bash
npm create vue@latest
npm install
npm run dev
```

Seleccionar Vue Router durante la configuración.

### 💡 Ayuda

- Verifica que `main.js` monte correctamente la aplicación.
- Asegúrate de que `<router-view />` esté en App.vue.

---

# 🏗️ Paso 1 -- Diseñar la Arquitectura

Antes de programar, responde:

- ¿Dónde vivirá el estado principal?
- ¿Cómo se comunicarán los componentes?
- ¿Qué datos necesita cada vista?

### Recomendación

Mantener el estado principal en `App.vue` y pasarlo por props.

---

# 📂 Paso 2 -- Crear la Estructura del Proyecto

Estructura sugerida:

    src/
     ├── components/
     │     ├── Libro.vue
     │     └── FormLibro.vue
     ├── views/
     │     ├── InicioView.vue
     │     ├── ListaLibros.vue
     │     └── DetalleLibro.vue
     ├── router/
     │     └── index.js
     ├── App.vue
     └── main.js

### 💡 Ayuda

Un componente debe tener una sola responsabilidad.

---

# 📦 Paso 3 -- Modelar la Entidad Libro

Define cómo será un libro:

```js
{
  id: Number,
  titulo: String,
  autor: String,
  categoria: String,
  descripcion: String
}
```

### Preguntas guía

- ¿Cómo generarás el ID?
- ¿Qué ocurre si el libro no existe?
- ¿Cómo evitar duplicados?

---

# 🔄 Paso 4 -- Aplicar MVVM

Concepto En Vue

---

Model data()
View template
ViewModel methods, computed

### 💡 Clave

No manipular el DOM manualmente.

---

# 📝 Paso 5 -- Crear el Formulario Reactivo

### Objetivo

Agregar libros sin recargar la página.

### Estrategia

1.  Crear objeto `nuevoLibro`
2.  Usar `v-model`
3.  Crear método `agregarLibro()`
4.  Limpiar campos después de enviar

### Ayudas

- Usar `@submit.prevent`
- Validar campos antes de agregar
- Mostrar preview en tiempo real

---

# 🗑️ Paso 6 -- Eliminar Libros

### Estrategia

- Pasar el ID al método eliminar
- Utilizar `filter()` para actualizar la lista

### Reflexión

¿Por qué `filter()` mantiene la reactividad correctamente?

---

# 🔀 Paso 7 -- Implementar Vue Router

Configurar rutas:

- `/`
- `/libros`
- `/libros/:id`

### Conceptos clave

- `<router-link>`
- `<router-view>`
- `route.params.id`

### Ayuda

Usa `props: true` en rutas dinámicas.

---

# 🔎 Paso 8 -- Manejar Casos Bordes

Incluir:

- Validación de campos vacíos
- Manejo de ID inexistente
- Mensaje cuando no existan libros
- Confirmación antes de eliminar (opcional)

---

# 🎨 Paso 9 -- Mejora de Experiencia de Usuario

Opcional pero recomendable:

- Transiciones
- Clases dinámicas
- Navegación activa
- Separar layout principal

---

# 🏁 Checklist Final

✔ Componentes organizados\
✔ Props correctamente implementadas\
✔ Eventos funcionando\
✔ Router operativo\
✔ Rutas dinámicas activas\
✔ Sin errores en consola\
✔ Código limpio

---

# 📦 Entregables

- Carpeta del proyecto
- Código funcional
- Capturas o video demostrativo
- Documento resumen técnico
- ZIP o repositorio GitHub

---

¡Éxito en tu desarrollo! 🚀📚
