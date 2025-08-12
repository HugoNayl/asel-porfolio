<script setup lang="ts">
const { data: blog } = await useAsyncData(() => queryCollection('content').path('/').first())

useSeoMeta({
  title: blog.value?.title,
  description: blog.value?.description
})

const menuOpen = useState('menuOpen')

watch(menuOpen, (open) => {
  document.body.style.overflow = open ? 'hidden' : ''
})
</script>

<template>
  <div class="bg-amber-50 p-30 h-500">
    <ContentRenderer v-if="blog" :value="blog" />
    <div v-else>Home not found</div>
  </div>
</template>