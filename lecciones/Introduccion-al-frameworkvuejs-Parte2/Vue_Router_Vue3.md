# Guía Completa de Vue Router (Vue 3)

## ¿Qué es Vue Router?

Vue Router es el sistema oficial de enrutamiento para aplicaciones
creadas con Vue 3. Permite construir aplicaciones SPA (Single Page
Applications) con múltiples vistas.

------------------------------------------------------------------------

# 1️⃣ Instalación

Si estás usando Vite:

``` bash
npm install vue-router@4
```

------------------------------------------------------------------------

# 2️⃣ Crear archivo de rutas

Crear un archivo:

    src/router/index.js

Ejemplo:

``` js
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
```

------------------------------------------------------------------------

# 3️⃣ Registrar el Router en main.js

``` js
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

createApp(App)
  .use(router)
  .mount('#app')
```

------------------------------------------------------------------------

# 4️⃣ Usar Router en App.vue

``` vue
<template>
  <nav>
    <router-link to="/">Inicio</router-link>
    <router-link to="/about">About</router-link>
  </nav>

  <router-view />
</template>
```

------------------------------------------------------------------------

# 5️⃣ Conceptos Clave

  Concepto           Descripción
  ------------------ -----------------------------
  createRouter       Crea instancia del router
  createWebHistory   Modo historial (sin #)
  routes             Arreglo de rutas
  router-link        Navegación declarativa
  router-view        Renderiza componente activo

------------------------------------------------------------------------

# 6️⃣ Rutas Dinámicas

``` js
{
  path: '/user/:id',
  name: 'User',
  component: User
}
```

Acceder al parámetro:

``` js
import { useRoute } from 'vue-router'

const route = useRoute()
console.log(route.params.id)
```

------------------------------------------------------------------------

# 7️⃣ Navegación Programática

``` js
import { useRouter } from 'vue-router'

const router = useRouter()

router.push('/about')
router.push({ name: 'Home' })
```

------------------------------------------------------------------------

# 8️⃣ Rutas Anidadas

``` js
{
  path: '/dashboard',
  component: Dashboard,
  children: [
    {
      path: 'stats',
      component: Stats
    }
  ]
}
```

------------------------------------------------------------------------

# 9️⃣ Guards (Protección de Rutas)

``` js
router.beforeEach((to, from, next) => {
  if (!isAuthenticated && to.name !== 'Home') {
    next({ name: 'Home' })
  } else {
    next()
  }
})
```

------------------------------------------------------------------------

# 🔟 Buenas Prácticas

-   Organizar vistas en carpeta /views
-   Usar lazy loading para mejorar performance
-   Nombrar siempre las rutas
-   Centralizar guards en router/index.js

------------------------------------------------------------------------

# Resumen

Vue Router permite:

-   Navegación SPA
-   Rutas dinámicas
-   Protección de rutas
-   Navegación programática
-   Organización modular

Es una pieza fundamental para aplicaciones profesionales con Vue 3.
