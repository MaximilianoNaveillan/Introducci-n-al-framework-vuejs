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
      :message="mensaje"
      :contador="contador"
      @incrementar="incrementar"
    />
  </div>
</template>