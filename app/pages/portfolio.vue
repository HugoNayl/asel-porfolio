<script setup lang="ts">
const { data: portfolio } = await useAsyncData(() => queryCollection('content').path('/').first())

useSeoMeta({
  title: portfolio.value?.title,
  description: portfolio.value?.description
})

const menuOpen = useState('menuOpen')

watch(menuOpen, (open) => {
  document.body.style.overflow = open ? 'hidden' : ''
})


</script>

<template>
  <div class="bg-amber-50 p-30 h-500">
    <ContentRenderer v-if="portfolio" :value="portfolio" />
    <div v-else>portfolio not found</div>
  </div>
</template>

