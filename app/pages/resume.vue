<script setup lang="ts">
const { data: resume } = await useAsyncData(() => queryCollection('content').path('/').first())

useSeoMeta({
  title: resume.value?.title,
  description: resume.value?.description
})

const menuOpen = useState('menuOpen')

watch(menuOpen, (open) => {
  document.body.style.overflow = open ? 'hidden' : ''
})


</script>

<template>
  <div class="bg-amber-50 p-30 h-500">
    <ContentRenderer v-if="resume" :value="resume" />
    <div v-else>resume not found</div>
  </div>
</template>


