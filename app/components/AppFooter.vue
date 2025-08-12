<script setup lang="ts">

const email = ref<string | null>(null)

const submitEmail = () => {
  console.log(email.value, "submitted!")
}

</script>

<template>
  <footer class="flex flex-col items-center text-orange-500 gap-y-5 p-10">
    <h2 class="font-ultra text-3xl">
      Asel
    </h2>
    <span>Sign up with your email address to receive news and updates.</span>
    <form class="flex items-stretch gap-6" @submit.prevent="submitEmail">
    <label>
      <input 
        v-model="email" 
        type="email" 
        placeholder="Email Address" 
        class="w-full h-14 px-5 border border-gray-300 rounded placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-black" required>
    </label>
    <button 
     type="submit"
     class="h-14 px-8 bg-blue-950 text-white font-semibold tracking-wide rounded-tl-4xl rounded-br-4xl flex items-center justify-center hover:opacity-95 active:opacity-90">
      SIGN UP
    </button>
  </form>
  </footer>
</template>

<style>
h2 {
  font-family: Ultra, sans-serif;
}
</style>

