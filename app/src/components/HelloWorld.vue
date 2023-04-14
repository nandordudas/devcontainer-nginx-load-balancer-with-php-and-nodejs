<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)

const response = await fetch('http://localhost:8000')
const data = await response.text()
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
  </div>
  {{ data }}
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
