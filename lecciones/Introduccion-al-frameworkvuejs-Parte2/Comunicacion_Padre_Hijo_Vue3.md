# Comunicación Padre-Hijo en Vue 3

## Introducción

En Vue 3, la comunicación entre componentes sigue un flujo
unidireccional:

-   Padre → Hijo mediante **props**
-   Hijo → Padre mediante **emits**

------------------------------------------------------------------------

## Estructura del proyecto

    src/
     ├── App.vue        (Padre)
     └── components/
          └── Hijo.vue  (Hijo)

------------------------------------------------------------------------

# Componente Hijo (Hijo.vue)

``` vue
<script setup>
import { defineProps, defineEmits } from 'vue'

// Props recibidas del padre
const props = defineProps({
  mensaje: String,
  contador: Number
})

// Eventos que el hijo puede emitir
const emit = defineEmits(['incrementar'])

function enviarIncremento() {
  emit('incrementar')
}
</script>

<template>
  <div class="hijo">
    <h2>Componente Hijo</h2>
    <p>Mensaje recibido: {{ mensaje }}</p>
    <p>Contador recibido: {{ contador }}</p>

    <button @click="enviarIncremento">
      Incrementar desde el Hijo
    </button>
  </div>
</template>
```

------------------------------------------------------------------------

# Componente Padre (App.vue)

``` vue
<script setup>
import { ref } from 'vue'
import Hijo from './components/Hijo.vue'

const mensaje = ref('Hola desde el Padre')
const contador = ref(0)

function incrementar() {
  contador.value++
}
</script>

<template>
  <div>
    <h1>Componente Padre</h1>

    <p>Contador en el padre: {{ contador }}</p>

    <Hijo
      :mensaje="mensaje"
      :contador="contador"
      @incrementar="incrementar"
    />
  </div>
</template>
```

------------------------------------------------------------------------

# Tabla Explicativa

  ---------------------------------------------------------------------------
  Dirección         Mecanismo         Sintaxis           Descripción
  ----------------- ----------------- ------------------ --------------------
  Padre → Hijo      Props             :prop="valor"      Envía datos al hijo

  Hijo → Padre      Emits             emit('evento')     Notifica al padre

  Padre escucha     v-on / @          @evento="metodo"   Ejecuta función en
                                                         el padre
  ---------------------------------------------------------------------------

------------------------------------------------------------------------

## Conceptos Clave

-   El flujo de datos en Vue es unidireccional.
-   Las props son de solo lectura.
-   El hijo no debe modificar directamente una prop.
-   El estado normalmente vive en el componente padre.
-   Vue actualiza automáticamente la interfaz cuando cambia el estado
    reactivo.

------------------------------------------------------------------------

## Resumen

1.  El padre define el estado.
2.  El padre pasa datos al hijo mediante props.
3.  El hijo emite eventos.
4.  El padre escucha esos eventos y actualiza el estado.
5.  Vue re-renderiza automáticamente.

------------------------------------------------------------------------

Este ejemplo muestra la base fundamental de comunicación entre
componentes en Vue 3.
