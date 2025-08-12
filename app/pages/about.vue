<script setup lang="ts">
const { data: about } = await useAsyncData(() => queryCollection('content').path('/').first())

useSeoMeta({
  title: about.value?.title,
  description: about.value?.description
})

const menuOpen = useState('menuOpen')

watch(menuOpen, (open) => {
  document.body.style.overflow = open ? 'hidden' : ''
})
</script>

<template>
  <div class="bg-amber-50 p-30 h-500">
    <ContentRenderer v-if="about" :value="about" />
    <div v-else>Home not found</div>
  </div>
</template>