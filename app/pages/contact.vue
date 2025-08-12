<script setup lang="ts">
const menuOpen = useState('menuOpen')

watch(menuOpen, (open) => {
  document.body.style.overflow = open ? 'hidden' : ''
})
</script>

<template>
  <div class="p-30">
    <span>This page will be displayed at the /contact route.</span>
  </div>
</template>