<script setup lang="ts">
const menuOpen = useState('menuOpen')

watch(menuOpen, (open) => {
  document.body.style.overflow = open ? 'hidden' : ''
})

</script>

<template>
    <div class="fixed sm:hidden z-40 w-screen h-screen flex flex-col text-4xl font-bold justify-center items-center bg-amber-50 text-orange-500 gap-y-10" @click="menuOpen = false">
        <NuxtLink to="/" >home</NuxtLink>
        <NuxtLink to="/about">about</NuxtLink>
        <NuxtLink to="/blog">blog</NuxtLink>
        <NuxtLink to="/portfolio" >portfolio</NuxtLink>
        <NuxtLink to="/resume" >resume</NuxtLink>
        <NuxtLink to="/contact" >contact</NuxtLink>
        <div class="flex flex-row gap-x-4">
          <Icon name="uil:twitter-alt" class="bg-orange-500" />
            <Icon name="uil:instagram" class="bg-orange-500" />
            <Icon name="uil:linkedin-alt" class="bg-orange-500" />
            <Icon name="uil:link-h" class="bg-orange-500" />
        </div>
    </div>
</template>