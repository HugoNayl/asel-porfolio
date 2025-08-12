<script setup lang="ts">
const menuOpen = useState('menuOpen', () => false)

const tooggleMenu = () => menuOpen.value = !menuOpen.value

</script>

<template>
  <header class="absolute w-full text-orange-500 z-50 bg-transparent text-sm">
    <div class="relative flex items-center justify-between gap-x-10 p-10">
      <NuxtLink to="/" class="text-lg font-semibold">
        <Icon name="uil:cloud-showers-alt" class="bg-orange-500" size="2em" />
      </NuxtLink>
      <nav class="hidden absolute left-1/2 -translate-x-1/2 sm:flex flex-wrap px-25 justify-center gap-x-4 gap-y-2 [&_a]:underline-offset-4 [&_a]:decoration-1.5 [&_a:hover]:underline font-semibold">
        <NuxtLink to="/">Home</NuxtLink>
        <NuxtLink to="/about" >About</NuxtLink>
        <NuxtLink to="/blog" >Blog</NuxtLink>
        <NuxtLink to="/portfolio" >Portfolio</NuxtLink>
        <NuxtLink to="/resume" >Resume</NuxtLink>
        <NuxtLink to="/contact" >Contact</NuxtLink>
      </nav>
      <div class="hidden sm:flex flex-row gap-x-4">
        <Icon name="uil:twitter-alt" class="bg-orange-500" size="2em"/>
        <Icon name="uil:instagram" class="bg-orange-500" size="2em"/>
        <Icon name="uil:linkedin-alt" class="bg-orange-500" size="2em"/>
        <Icon name="uil:link-h" class="bg-orange-500" size="2em" />
      </div>
      <div class="sm:hidden" @click="tooggleMenu">
        <Icon v-if= "!menuOpen" name="uil:bars"  class="bg-orange-500" size="2em"/>
        <Icon v-else name="uil:multiply" class="bg-orange-500" size="2em" />
      </div>
    </div>
  </header>
  <teleport v-if="menuOpen" to="#teleports">
    <AppMenu @close="menuOpen=false"/>
  </teleport>
</template>