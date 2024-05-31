<script setup lang="ts">
defineProps<{ centered?: boolean }>()
</script>

<template>
  <div v-if="centered" class="text-center">
    <div class="spinner-border" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>
  <div v-else class="spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
</template>
