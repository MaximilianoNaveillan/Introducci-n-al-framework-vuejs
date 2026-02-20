# 📘 Introducción al Framework Vue.js

------------------------------------------------------------------------

## 🎯 Objetivos de Aprendizaje

-   Definir qué es un framework progresivo.
-   Identificar la estructura básica de un componente en Vue.
-   Comprender cómo funciona la reactividad en Vue.js.
-   Explicar qué es una SPA y cómo se implementa con Vue Router.
-   Comparar Vue con React y Angular.

------------------------------------------------------------------------

# 🚀 Introducción a Vue.js

Vue.js es un framework de JavaScript de código abierto para construir
interfaces interactivas y SPAs.

🔹 Es **progresivo** → puede adoptarse gradualmente.\
🔹 Basado en **componentes reutilizables**.\
🔹 Fácil de integrar en proyectos nuevos o existentes.

------------------------------------------------------------------------

## 🧩 ¿Qué es un Framework Progresivo?

Un framework progresivo permite:

-   Integración parcial mediante `<script>`.
-   Escalabilidad hacia SPA completa.
-   Adopción gradual según necesidad.

### 📌 Vue como framework progresivo

1.  Integración básica
2.  Componentes individuales
3.  Aplicación completa (Vue Router, Vuex)

------------------------------------------------------------------------

# 🧱 Componentes en Vue

Un componente es una unidad que contiene:

    Componente Vue
     ├── Template (HTML)
     ├── Script (JavaScript)
     └── Style (CSS)

### Comunicación entre Componentes

-   **Props** → Padre → Hijo\
-   **Eventos** → Hijo → Padre\
-   **Slots** → Contenido dinámico

------------------------------------------------------------------------

# 🔄 Reactividad en Vue

La reactividad permite que la vista se actualice automáticamente cuando
cambian los datos.

### Flujo Reactivo

    Dato cambia → Vue detecta → Actualiza DOM → Vista reflejada

### Proceso

1.  Observación\
2.  Modificación\
3.  Notificación\
4.  Actualización automática

------------------------------------------------------------------------

# 🌐 ¿Qué es una SPA?

SPA (Single Page Application):

-   Una sola página HTML.
-   No recarga completa.
-   Actualización dinámica del DOM.

### Vue Router

-   Define rutas internas.
-   Mantiene estado.
-   Transiciones rápidas.

------------------------------------------------------------------------

# 📊 Comparación entre Frameworks

  Característica   React      Angular       Vue
  ---------------- ---------- ------------- ------------
  Lenguaje base    JS (JSX)   TypeScript    JavaScript
  Curva            Media      Alta          Baja
  Enrutamiento     Externo    Integrado     Integrado
  Estado           Externo    Integrado     Integrado
  Sintaxis         JSX        Decoradores   HTML + JS

------------------------------------------------------------------------

# 🏗 Patrón MVVM en Vue

    Modelo (data)
         ↓
    ViewModel (Vue Instance)
         ↓
    Vista (template)

-   **Modelo** → Estado
-   **Vista** → HTML
-   **ViewModel** → Conecta ambos

Sincronización bidireccional con `{{ }}` y `v-model`.

------------------------------------------------------------------------

# 🏢 Empresas que Usan Vue

-   Alibaba\
-   Xiaomi\
-   GitLab\
-   Nintendo

------------------------------------------------------------------------

# 🔍 Alternativas

-   **React** → Flexible, más configuración.
-   **Angular** → Robusto y estructurado.
-   **Svelte** → Sin runtime, compilado.
-   **Vue** → Balance entre simplicidad y estructura.

------------------------------------------------------------------------

# ✅ Beneficios de Vue

-   Reutilización de componentes
-   Separación de responsabilidades
-   Desarrollo ágil
-   Ecosistema integrado (CLI, Router, Vuex)
-   Buen rendimiento

------------------------------------------------------------------------

# 🧪 Ejemplo Práctico

Contador reactivo:

-   Definir `contador` en `data`
-   Crear botón que incremente
-   Vue actualiza automáticamente el DOM

------------------------------------------------------------------------

# 🎓 Conclusión

Vue.js combina:

✔ Simplicidad\
✔ Reactividad\
✔ Arquitectura basada en componentes\
✔ Escalabilidad progresiva

Ideal para desarrolladores que buscan una experiencia moderna y
estructurada sin alta complejidad inicial.
