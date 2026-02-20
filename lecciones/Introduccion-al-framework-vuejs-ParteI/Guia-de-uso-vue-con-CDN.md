# 📘 Guía Paso a Paso: Vue.js con CDN -- Contador Reactivo

---

## 🎯 Objetivo

Aprender a usar **Vue.js mediante CDN** y crear una pequeña aplicación
reactiva (contador).

---

# 🪜 Paso 1: Crear archivo HTML

Crea un archivo llamado:

    index.html

Estructura base:

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <title>Contador con Vue CDN</title>
  </head>
  <body>
    <!-- Aquí irá nuestra app -->
  </body>
</html>
```

---

# 🌐 Paso 2: Agregar Vue mediante CDN

Antes de cerrar la etiqueta

```{=html}
</body>
```

, agrega:

```html
<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
```

Esto permite usar Vue sin instalación con npm.

---

# 🧱 Paso 3: Crear el contenedor de la aplicación

Dentro del

```{=html}
<body>
```

:

```html
<div id="app">
  <h1>Contador: {{ contador }}</h1>
  <button @click="incrementar">➕ Incrementar</button>
  <button @click="decrementar">➖ Decrementar</button>
</div>
```

🔎 Explicación: - `{{ contador }}` → Interpolación reactiva - `@click` →
Evento en Vue

---

# ⚙️ Paso 4: Crear la instancia de Vue

Debajo del CDN:

```html
<script>
  const { createApp } = Vue;

  createApp({
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
    },
  }).mount('#app');
</script>
```

---

# 🔄 ¿Qué está pasando?

## 🧠 Reactividad

    contador cambia → Vue detecta → DOM se actualiza automáticamente

No manipulamos el DOM manualmente.

---

# 🧩 Estructura Completa

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <title>Contador con Vue CDN</title>
  </head>
  <body>
    <div id="app">
      <h1>Contador: {{ contador }}</h1>
      <button @click="incrementar">➕ Incrementar</button>
      <button @click="decrementar">➖ Decrementar</button>
    </div>

    <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>

    <script>
      const { createApp } = Vue;

      createApp({
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
        },
      }).mount('#app');
    </script>
  </body>
</html>
```

---

# 🧪 Resultado Esperado

- El número inicia en 0.
- Al presionar ➕ aumenta.
- Al presionar ➖ disminuye.
- La vista se actualiza automáticamente.

---

# 📚 Conceptos Aplicados

- Vue como CDN
- Instancia con `createApp`
- Reactividad (`data`)
- Métodos
- Eventos (`@click`)
- Interpolación (`{{ }}`)

---

# 🚀 Próximos Pasos

- Agregar botón de reset
- Aplicar estilos con clases dinámicas
- Crear contador con límite mínimo/máximo
- Convertir en componente reutilizable

---

✅ Ahora sabes usar Vue.js sin instalación y crear una mini SPA
reactiva.
