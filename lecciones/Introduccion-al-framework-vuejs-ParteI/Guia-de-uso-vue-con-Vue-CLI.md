# 📘 Guía Paso a Paso: Vue CLI (Instalación Local) -- Contador Reactivo

---

## 🎯 Objetivo

Aprender a crear un proyecto Vue de forma local utilizando Vue CLI y
desarrollar un contador reactivo.

---

# 🪜 Paso 1: Instalar Node.js

Verifica que tengas Node instalado:

    node -v
    npm -v

Si no lo tienes, descárgalo desde: https://nodejs.org/

---

# 🪜 Paso 2: Instalar Vue CLI

Instala Vue CLI globalmente:

    npm install -g @vue/cli

Verifica instalación:

    vue --version

---

# 🪜 Paso 3: Crear un Proyecto Vue

Ejecuta:

    vue create contador-vue

Selecciona:

- Default (Vue 3) o
- Manually select features (si quieres personalizar)

Luego entra al proyecto:

    cd contador-vue

---

# 🪜 Paso 4: Ejecutar el Servidor de Desarrollo

    npm run serve

Abre en el navegador:

    http://localhost:8080

---

# 🧱 Paso 5: Limpiar el Proyecto

Abre:

    src/App.vue

Reemplaza el contenido por:

```vue
<template>
  <div class="container">
    <h1>Contador: {{ contador }}</h1>

    <button @click="incrementar">➕ Incrementar</button>
    <button @click="decrementar">➖ Decrementar</button>
    <button @click="reset">🔄 Reset</button>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      contador: 0,
    };
  },
  methods: {
    incrementar() {
      this.contador++;
    },
    decrementar() {
      this.contador--;
    },
    reset() {
      this.contador = 0;
    },
  },
};
</script>

<style>
.container {
  text-align: center;
  margin-top: 40px;
}

button {
  margin: 5px;
  padding: 8px 12px;
  font-size: 16px;
}
</style>
```

---

# 🔄 ¿Qué está pasando?

## 🧠 Reactividad

    data() → estado reactivo
    methods → modifican estado
    Vue → actualiza automáticamente el DOM

No usamos document.querySelector ni manipulamos el DOM manualmente.

---

# 📂 Estructura del Proyecto

    contador-vue/
     ├── node_modules/
     ├── public/
     ├── src/
     │    ├── assets/
     │    ├── components/
     │    └── App.vue
     ├── package.json
     └── vue.config.js

---

# 🧪 Resultado Esperado

- El contador inicia en 0.
- Incrementa y decrementa correctamente.
- Botón reset vuelve a 0.
- Recarga automática gracias a Hot Reload.

---

# 📚 Conceptos Aplicados

- Vue CLI
- Proyecto local
- Single File Components (.vue)
- Reactividad (data)
- Métodos
- Eventos (@click)
- Template + Script + Style

---

# 🚀 Próximos Pasos

- Separar el contador en un componente
- Aplicar clases dinámicas
- Usar computed properties
- Agregar Vue Router
- Implementar Vuex o Pinia

---

✅ Ahora sabes crear un proyecto Vue profesional en entorno local y
desarrollar una aplicación reactiva básica.
