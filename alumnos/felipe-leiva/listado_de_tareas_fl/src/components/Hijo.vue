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