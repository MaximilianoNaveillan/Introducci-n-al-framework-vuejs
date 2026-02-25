<script setup>
import { defineProps, defineEmits } from 'vue';

// props padre
const props = defineProps({
  message: String,
  contador: Number
})

//evento hijo
const emit = defineEmits(['incrementar'])

function incrementarNumero() {
  emit('incrementar')
}

</script>

<template>
  <div class="hijo">
    <h2>Componente Hijo</h2>
    <p>Mensaje recibido: {{ message }}</p>
    <p>Contador recibido: {{ contador }}</p>

    <button @click="incrementarNumero">
      Incrementar desde el Hijo
    </button>
  </div>
</template>

<style scoped></style>