<script setup lang="ts">
const { data: contact } = await useAsyncData(() => queryCollection('content').path('/contact').first())

useSeoMeta({
  title: contact.value?.title,
  description: contact.value?.description
})

const menuOpen = useState('menuOpen')

watch(menuOpen, (open) => {
  document.body.style.overflow = open ? 'hidden' : ''
})
</script>

<template>
  <div class="bg-amber-50 p-30 h-500">
    <ContentRenderer v-if="contact" :value="contact" />
    <div v-else>Content not found</div>
  </div>
</template>