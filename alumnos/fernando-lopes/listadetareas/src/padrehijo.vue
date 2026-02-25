<script setup>
import { defineProps, defineEmits } from 'vue';

// Props recibidas del padre
const props = defineProps({
  mensaje: String,
  contador: Number,
});

// Eventos que el hijo puede emitir
const emit = defineEmits(['incrementar']);

function enviarIncremento() {
  emit('incrementar');
}
</script>

<template>
  <div class="hijo">
    <h2>Componente Hijo</h2>
    <p>Mensaje recibido: {{ mensaje }}</p>
    <p>Contador recibido: {{ contador }}</p>

    <button @click="enviarIncremento">Incrementar desde el Hijo</button>
  </div>
</template>
``` ------------------------------------------------------------------------ # Componente Padre
(App.vue) ``` vue
<script setup>
import { ref } from 'vue';
import Hijo from './components/Hijo.vue';

const mensaje = ref('Hola desde el Padre');
const contador = ref(0);

function incrementar() {
  contador.value++;
}
</script>

<template>
  <div>
    <h1>Componente Padre</h1>

    <p>Contador en el padre: {{ contador }}</p>

    <Hijo :mensaje="mensaje" :contador="contador" @incrementar="incrementar" />
  </div>
</template>
